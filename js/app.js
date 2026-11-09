// Pokédex — application sans dépendance ni build.
// Données : data/index.json (liste, chargée en premier) puis data/pokedex.json (fiches, en arrière-plan).
// Navigation par hash (#/25) : GitHub Pages n'a pas de réécriture d'URL, le hash marche partout.
// Tout le texte issu des données est inséré via textContent (jamais innerHTML).

const $ = (id) => document.getElementById(id);

const TYPE_LABELS = { Electrique: "Électrique", "Ténèbre": "Ténèbres" };
const STAT_LABELS = {
  HP: "PV",
  Attack: "Attaque",
  Defense: "Défense",
  "Sp. Attack": "Att. Spé.",
  "Sp. Defense": "Déf. Spé.",
  Speed: "Vitesse",
};

const state = {
  pokemons: [],          // [{ id, fr, en, types, key, li, link }]
  byId: new Map(),
  details: null,         // { "25": {...} } une fois chargé
  parentOf: new Map(),   // id -> { id, cond }
  childrenOf: new Map(), // id -> [{ id, cond }]
  visible: [],           // ids correspondant au filtre courant, dans l'ordre
  current: null,
  listScroll: 0,
};

// ---------- Utilitaires ----------

const pad = (id) => String(id).padStart(3, "0");
const thumbSrc = (id) => `img/thumb/${pad(id)}.png`;
const hiresSrc = (id) => `img/hires/${pad(id)}.png`;
const typeLabel = (t) => TYPE_LABELS[t] ?? t;
const normalize = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "text") node.textContent = v;
    else if (k === "class") node.className = v;
    else if (k.startsWith("data-") || k.startsWith("aria-")) node.setAttribute(k, v);
    else node[k] = v;
  }
  node.append(...children.filter(Boolean));
  return node;
}

function typeBadge(t) {
  return el("span", { class: "type", "data-type": t, text: typeLabel(t) });
}

const isMobile = () => window.matchMedia("(max-width: 860px)").matches;

// ---------- Formatage des données ----------

function formatMeasure(v) {
  return !v || /^0(\.0+)? (m|kg)$/.test(v) ? "—" : v.replace(".", ",");
}

function formatGender(g) {
  if (!g || g === "Genderless") return "Asexué";
  const [m, f] = g.split(":").map(Number);
  const fmt = (n) => `${String(+n.toFixed(1)).replace(".", ",")} %`;
  const parts = [];
  if (m > 0) parts.push(`♂ ${fmt(m)}`);
  if (f > 0) parts.push(`♀ ${fmt(f)}`);
  return parts.join(" · ") || "Asexué";
}

function formatCondition(c) {
  if (!c) return "";
  return c
    .replace(/^level (\d+)/i, "Niveau $1")
    .replace(/^level up/i, "Montée de niveau")
    .replace(/^high friendship/i, "Bonheur élevé")
    .replace(/^trade/i, "Échange")
    .replace(/^use /i, "Objet : ")
    .replace(/Daytime/g, "le jour")
    .replace(/Nighttime/g, "la nuit");
}

// ---------- Chargement ----------

async function loadJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} : HTTP ${res.status}`);
  return res.json();
}

async function init() {
  bindEvents();
  try {
    const index = await loadJSON("data/index.json");
    state.pokemons = index.map(([id, fr, en, types]) => ({
      id, fr, en, types, key: `${normalize(fr)} ${normalize(en)}`,
    }));
    for (const p of state.pokemons) state.byId.set(p.id, p);
    buildTypeFilter();
    buildList();
    applyFilter();
    route();
  } catch (err) {
    console.error(err);
    $("count").textContent = "Impossible de charger le Pokédex. Vérifie ta connexion puis recharge la page.";
    return;
  }

  try {
    state.details = await loadJSON("data/pokedex.json");
    buildEvolutionLinks();
    if (state.current) renderDetail(state.current);
  } catch (err) {
    console.error(err);
    $("mini-screen").textContent = "Fiches indisponibles (erreur réseau).";
  }
}

// ---------- Liste ----------

function buildTypeFilter() {
  const types = [...new Set(state.pokemons.flatMap((p) => p.types))]
    .sort((a, b) => typeLabel(a).localeCompare(typeLabel(b), "fr"));
  const select = $("type-filter");
  for (const t of types) select.append(el("option", { value: t, text: typeLabel(t) }));
}

function buildList() {
  const frag = document.createDocumentFragment();
  for (const p of state.pokemons) {
    const types = el("span", { class: "entry__types", "aria-hidden": "true" },
      ...p.types.map((t) => el("span", { "data-type": t })));
    const link = el("a", { class: "entry", href: `#/${p.id}` },
      el("img", { src: thumbSrc(p.id), alt: "", width: 52, height: 52, loading: "lazy", decoding: "async" }),
      el("span", { class: "entry__text" },
        el("span", { class: "entry__num", text: `#${pad(p.id)}` }),
        el("span", { class: "entry__name", text: p.fr }),
        types));
    link.title = `${p.fr} — ${p.types.map(typeLabel).join(" / ")}`;
    p.link = link;
    p.li = el("li", {}, link);
    frag.append(p.li);
  }
  frag.append(el("li", { class: "list__empty", id: "list-empty", hidden: true, text: "Aucun Pokémon ne correspond." }));
  $("list").replaceChildren(frag);
}

function applyFilter() {
  const raw = $("search").value;
  const q = normalize(raw.replace(/^#/, ""));
  const type = $("type-filter").value;
  const num = /^\d+$/.test(q) ? String(Number(q)) : null;

  state.visible = [];
  for (const p of state.pokemons) {
    const matchText = !q || (num ? String(p.id).startsWith(num) : p.key.includes(q));
    const match = matchText && (!type || p.types.includes(type));
    p.li.hidden = !match;
    if (match) state.visible.push(p.id);
  }
  const n = state.visible.length;
  $("list-empty").hidden = n > 0;
  $("count").textContent = n === state.pokemons.length
    ? `${n} Pokémon`
    : `${n} résultat${n > 1 ? "s" : ""} sur ${state.pokemons.length}`;
  updateNav();
}

// ---------- Évolutions ----------

function buildEvolutionLinks() {
  const addChild = (parent, child, cond) => {
    if (!state.byId.has(parent) || !state.byId.has(child)) return;
    const list = state.childrenOf.get(parent) ?? [];
    if (!list.some((c) => c.id === child)) list.push({ id: child, cond });
    state.childrenOf.set(parent, list);
    if (!state.parentOf.has(child)) state.parentOf.set(child, { id: parent, cond });
  };
  const entries = Object.entries(state.details).map(([key, d]) => [Number(key), d.evolution ?? {}]);
  // Les liens "next" font foi ; "prev" ne sert qu'à compléter un parent manquant
  // (la source contient des "prev" erronés, ex. n°269).
  for (const [id, evo] of entries) {
    for (const [next, cond] of evo.next ?? []) addChild(id, Number(next), cond);
  }
  for (const [id, evo] of entries) {
    if (evo.prev && !state.parentOf.has(id)) addChild(Number(evo.prev[0]), id, evo.prev[1]);
  }
}

function evolutionRoot(id) {
  let root = id;
  const seen = new Set([root]);
  while (state.parentOf.has(root)) {
    const parent = state.parentOf.get(root).id;
    if (seen.has(parent)) break;
    seen.add(parent);
    root = parent;
  }
  return root;
}

// Arbre d'évolution : chaque nœud suivi de ses évolutions (gère les branches, ex. Évoli, Chenipotte).
function evolutionNode(m, current, seen) {
  seen.add(m.id);
  const p = state.byId.get(m.id);
  const item = el("a", { class: "evo__item", href: `#/${m.id}` },
    el("img", { src: thumbSrc(m.id), alt: "", width: 44, height: 44, loading: "lazy" }),
    el("span", {}, document.createTextNode(p.fr),
      m.cond ? el("small", { text: formatCondition(m.cond) }) : null));
  if (m.id === current) item.setAttribute("aria-current", "true");

  const children = (state.childrenOf.get(m.id) ?? []).filter((c) => !seen.has(c.id));
  if (!children.length) return item;
  return el("div", { class: "evo__branch" },
    item,
    el("span", { class: "evo__arrow", "aria-hidden": "true", text: "›" }),
    el("div", { class: "evo__stage" }, ...children.map((c) => evolutionNode(c, current, seen))));
}

function renderEvolutions(id) {
  const box = $("d-evo");
  const root = evolutionRoot(id);
  if (!state.childrenOf.has(root)) {
    box.replaceChildren(el("p", { class: "evo__none", text: "Ce Pokémon n'évolue pas." }));
    return;
  }
  box.replaceChildren(evolutionNode({ id: root, cond: "" }, id, new Set()));
}

// ---------- Fiche ----------

function renderStats(base) {
  const box = $("d-stats");
  if (!base) {
    box.replaceChildren(el("p", { class: "stats__none", text: "Statistiques non disponibles pour ce Pokémon." }));
    return;
  }
  const row = (label, value, extra = "") => {
    const bar = el("span");
    bar.style.setProperty("--v", Math.min(value, 255));
    return el("div", { class: `stat ${extra}` },
      el("span", { text: label }),
      el("span", { class: "stat__value", text: String(value) }),
      extra ? el("span") : el("span", { class: "stat__bar", "aria-hidden": "true" }, bar));
  };
  const rows = Object.entries(STAT_LABELS).map(([k, label]) => row(label, base[k] ?? 0));
  const total = Object.keys(STAT_LABELS).reduce((s, k) => s + (base[k] ?? 0), 0);
  rows.push(row("Total", total, "stat--total"));
  box.replaceChildren(...rows);
}

function renderArt(id, name) {
  const art = $("art");
  const thumb = $("art-thumb");
  const hires = $("art-hires");
  art.classList.remove("is-loaded");
  thumb.src = thumbSrc(id);
  hires.alt = name;
  hires.onload = () => { if (state.current === id) art.classList.add("is-loaded"); };
  hires.src = hiresSrc(id);
  if (hires.complete && hires.naturalWidth) art.classList.add("is-loaded");
}

function renderDetail(id) {
  const p = state.byId.get(id);
  const d = state.details?.[id];

  $("screen-empty").hidden = true;
  $("art").hidden = false;
  $("caption").hidden = false;
  $("info-empty").hidden = true;
  $("info").hidden = false;

  renderArt(id, p.fr);
  $("d-num").textContent = `N° ${pad(id)}`;
  const sub = [p.en !== p.fr ? p.en : null, d?.ja].filter(Boolean).join(" · ");
  $("d-name").replaceChildren(document.createTextNode(p.fr), sub ? el("small", { text: sub }) : null);
  $("d-types").replaceChildren(...p.types.map(typeBadge));
  document.title = `${p.fr} — Pokédex`;

  if (!d) {
    $("mini-screen").textContent = state.details ? "" : "Chargement de la fiche…";
    for (const k of ["d-species", "d-desc", "d-height", "d-weight", "d-gender", "d-abilities"]) $(k).textContent = "…";
    $("d-stats").replaceChildren();
    $("d-evo").replaceChildren();
    return;
  }

  $("mini-screen").textContent = `${pad(id)} · ${p.types.map(typeLabel).join(" / ")} · ${d.species}`;
  $("d-species").textContent = d.species;
  $("d-desc").textContent = d.description;
  $("d-height").textContent = formatMeasure(d.profile?.height);
  $("d-weight").textContent = formatMeasure(d.profile?.weight);
  $("d-gender").textContent = formatGender(d.profile?.gender);
  $("d-abilities").replaceChildren(...(d.profile?.ability ?? []).flatMap(([name, hidden], i) => [
    i ? el("br") : null,
    hidden === "true" ? el("span", { class: "hidden-ability", text: `${name} (caché)` }) : document.createTextNode(name),
  ]).filter(Boolean));
  renderStats(d.base);
  renderEvolutions(id);
}

function renderEmpty() {
  $("screen-empty").hidden = false;
  $("art").hidden = true;
  $("caption").hidden = true;
  $("info").hidden = true;
  $("info-empty").hidden = false;
  $("mini-screen").textContent = "Prêt.";
  document.title = "Pokédex";
}

// ---------- Navigation ----------

function neighbours() {
  const order = state.visible.includes(state.current) ? state.visible : state.pokemons.map((p) => p.id);
  const i = order.indexOf(state.current);
  return i < 0 ? [null, null] : [order[i - 1] ?? null, order[i + 1] ?? null];
}

function updateNav() {
  const [prev, next] = state.current ? neighbours() : [null, state.visible[0] ?? null];
  for (const [elId, target] of [["prev", prev], ["next", next]]) {
    const a = $(elId);
    a.href = target ? `#/${target}` : "#/";
    a.setAttribute("aria-disabled", String(!target));
  }
}

function route() {
  const m = location.hash.match(/^#\/(\d+)$/);
  const id = m ? Number(m[1]) : null;
  const valid = id !== null && state.byId.has(id);
  const wasDetail = document.body.classList.contains("view-detail");

  if (state.current) state.byId.get(state.current)?.link.removeAttribute("aria-current");
  state.current = valid ? id : null;

  if (valid && isMobile() && !wasDetail) state.listScroll = window.scrollY;
  document.body.classList.toggle("view-detail", valid);
  document.body.classList.toggle("view-list", !valid);

  if (valid) {
    const p = state.byId.get(id);
    p.link.setAttribute("aria-current", "true");
    renderDetail(id);
    if (isMobile()) window.scrollTo(0, 0);
    else {
      if (!p.li.hidden) p.link.scrollIntoView({ block: "nearest" });
      $("info").scrollTop = 0;
    }
  } else {
    renderEmpty();
    if (isMobile() && wasDetail) requestAnimationFrame(() => window.scrollTo(0, state.listScroll));
  }
  updateNav();
}

function go(id) {
  if (id) location.hash = `#/${id}`;
}

function bindEvents() {
  window.addEventListener("hashchange", route);
  $("search").addEventListener("input", applyFilter);
  $("type-filter").addEventListener("change", applyFilter);

  $("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      go(state.visible[0]);
    } else if (e.key === "Escape") {
      e.target.value = "";
      applyFilter();
      e.target.blur();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    const [prev, next] = state.current ? neighbours() : [null, state.visible[0]];
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); go(prev); }
    else if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); go(next); }
    else if (e.key === "/") { e.preventDefault(); $("search").focus(); }
    else if (e.key === "Escape" && state.current) { location.hash = "#/"; }
  });
}

init();
