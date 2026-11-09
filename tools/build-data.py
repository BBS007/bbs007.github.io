#!/usr/bin/env python3
"""Génère les fichiers de données légers utilisés par l'app à partir de data/pokedex-full.json.

- data/index.json   : liste minimale (id, nom FR, nom EN, types) pour afficher la liste au plus vite.
- data/pokedex.json : fiches complètes, sans les champs inutilisés (URL d'images externes, nom chinois),
                      avec les évolutions corrigées et leurs conditions traduites en français.

À relancer uniquement après une modification de data/pokedex-full.json :
    python3 tools/build-data.py

Le script échoue si une condition d'évolution n'a pas de traduction : l'ajouter dans CONDITIONS.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "pokedex-full.json"

# Conditions corrigées à la main : la source contient des textes tronqués ou faux.
# Clé : (id de départ, id d'arrivée).
OVERRIDES = {
    (790, 792): "Niveau 53, dans Pokémon Lune ou Ultra-Lune",
    (840, 841): "Utiliser une Pomme Acidulée",
    (840, 842): "Utiliser une Pomme Sucrée",
    (848, 849): "Niveau 30 (forme Aigüe ou Grave selon la nature)",
    (852, 853): "Montée de niveau en connaissant Provoc",
    (854, 855): "Utiliser une Théière Fêlée ou une Théière Ébréchée",
    (868, 869): "Faire tourner le personnage en tenant une Sucrerie",
    (872, 873): "Bonheur élevé, la nuit",
    (264, 862): "Niveau 35, la nuit (forme de Galar)",
    (554, 555): "Utiliser une Pierre Glace (forme de Galar)",
    (562, 867): "Forme de Galar : subir au moins 49 PV de dégâts sans être K.O., puis passer sous l'arche de pierre de la Zone Sauvage",
}

# Noms français erronés dans la source.
NAME_FIXES = {670: "Floette", 702: "Dedenne"}

# Liens d'évolution erronés dans la source, à ignorer.
DROP_LINKS = {(849, 849)}

# Objets (avec article) et capacités : noms officiels français.
ITEMS = {
    "Dawn Stone": "une Pierre Aube",
    "Dusk Stone": "une Pierre Nuit",
    "Fire Stone": "une Pierre Feu",
    "Ice Stone": "une Pierre Glace",
    "Leaf Stone": "une Pierre Plante",
    "Moon Stone": "une Pierre Lune",
    "Shiny Stone": "une Pierre Éclat",
    "Sun Stone": "une Pierre Soleil",
    "Thunder Stone": "une Pierre Foudre",
    "Water Stone": "une Pierre Eau",
    "Oval Stone": "une Pierre Ovale",
    "Razor Claw": "une Griffe Rasoir",
    "Razor Fang": "un Croc Rasoir",
    "Deep Sea Scale": "une Écaille Océan",
    "Deep Sea Tooth": "une Dent Océan",
    "Dragon Scale": "une Écaille Draco",
    "Dubious Disc": "un CD Douteux",
    "Electirizer": "un Électriseur",
    "Kings Rock": "une Roche Royale",
    "Magmarizer": "un Magmariseur",
    "Metal Coat": "une Peau Métal",
    "Prism Scale": "une Bel'Écaille",
    "Protector": "un Protecteur",
    "Reaper Cloth": "un Tissu Fauche",
    "Sachet": "un Sachet Senteur",
    "Upgrade": "un Améliorator",
    "Whipped Dream": "un Chantibonbon",
}

MOVES = {
    "Ancient Power": "Pouvoir Antique",
    "Double Hit": "Coup Double",
    "Dragon Pulse": "Dracochoc",
    "Mimic": "Copie",
    "Rollout": "Roulade",
    "Stomp": "Écrasement",
}

# Conditions complètes (hors "Level N", "use <objet>", "trade holding <objet>", "after <capacité> learned").
CONDITIONS = {
    "Trade": "Échange",
    "Trade with Karrablast": "Échange contre un Carabing",
    "Trade with Shelmet": "Échange contre un Escargaume",
    "high Friendship": "Bonheur élevé",
    "high Friendship, Daytime": "Bonheur élevé, le jour",
    "high Friendship, Nighttime": "Bonheur élevé, la nuit",
    "High Affection and knowing Fairy move": "Affection élevée en connaissant une capacité de type Fée",
    "High Affection, knowing Fairy move": "Affection élevée en connaissant une capacité de type Fée",
    "level up in a Magnetic Field area": "Montée de niveau dans un champ magnétique spécial (Pierre Foudre depuis Épée et Bouclier)",
    "Level up in a Magnetic Field area": "Montée de niveau dans un champ magnétique spécial (Pierre Foudre depuis Épée et Bouclier)",
    "use Thunder Stone, in Gen 8, or level up in a Magnetic Field area": "Montée de niveau dans un champ magnétique spécial (Pierre Foudre depuis Épée et Bouclier)",
    "level up near a Mossy Rock": "Montée de niveau près d'un Rocher Moussu (Pierre Plante depuis Légendes Arceus)",
    "level up near an Icy Rock": "Montée de niveau près d'un Rocher Glacé (Pierre Glace depuis Légendes Arceus)",
    "at Mount Lanakila": "Montée de niveau au Mont Lanakila (Pierre Glace depuis Épée et Bouclier)",
    "with Remoraid in party": "Montée de niveau avec un Rémoraid dans l'équipe",
    "hold Oval Stone, Daytime": "Montée de niveau en tenant une Pierre Ovale, le jour",
    "hold Razor Claw, Nighttime": "Montée de niveau en tenant une Griffe Rasoir, la nuit",
    "hold Razor Fang, Nighttime": "Montée de niveau en tenant un Croc Rasoir, la nuit",
    "trade holding Prism Scale, or level up with max Beauty": "Échange en tenant une Bel'Écaille, ou montée de niveau avec la Beauté au maximum",
    "use Dawn Stone, Female": "Utiliser une Pierre Aube (femelle uniquement)",
    "use Dawn Stone, Male": "Utiliser une Pierre Aube (mâle uniquement)",
    "Pokémon GO only, 400 Meltan Candies": "Uniquement dans Pokémon GO, avec 400 Bonbons Meltan",
    "Scroll of Darkness": "Rouleau des Ténèbres (Style Poing Final)",
    "Scroll of Waters": "Rouleau de l'Eau (Style Mille Poings)",
    "achieve 3 critical hits in one battle": "Réussir 3 coups critiques en un seul combat (forme de Galar)",
}

# Suffixes après "Level N, ...".
LEVEL_SUFFIXES = {
    "Attack > Defense": "si Attaque > Défense",
    "Attack < Defense": "si Attaque < Défense",
    "Attack = Defense": "si Attaque = Défense",
    "Daytime": "le jour",
    "Nighttime": "la nuit",
    "Female": "femelle uniquement",
    "Male": "mâle uniquement",
    "empty spot in party, Pokéball in bag": "avec une place libre dans l'équipe et une Poké Ball dans le Sac",
    "holding console upside down": "en tenant la console à l'envers",
    "Dark type Pokémon in party": "avec un Pokémon de type Ténèbres dans l'équipe",
    "during rain": "sous la pluie",
    "in Pokémon Sun or Ultra Sun": "dans Pokémon Soleil ou Ultra-Soleil",
    "in Pokémon Moon or Ultra Moon": "dans Pokémon Lune ou Ultra-Lune",
    "random based on personality": "au hasard (selon la personnalité)",
}


def translate(cond):
    cond = cond.strip()
    if cond in CONDITIONS:
        return CONDITIONS[cond]
    m = re.fullmatch(r"Level (\d+)(?:, (.+))?", cond)
    if m:
        level, suffix = m.groups()
        if not suffix:
            return f"Niveau {level}"
        if suffix in LEVEL_SUFFIXES:
            return f"Niveau {level}, {LEVEL_SUFFIXES[suffix]}"
    m = re.fullmatch(r"use (.+)", cond)
    if m and m.group(1) in ITEMS:
        return f"Utiliser {ITEMS[m.group(1)]}"
    m = re.fullmatch(r"trade holding (.+)", cond)
    if m and m.group(1) in ITEMS:
        return f"Échange en tenant {ITEMS[m.group(1)]}"
    m = re.fullmatch(r"after (.+) learned", cond)
    if m and m.group(1) in MOVES:
        return f"Montée de niveau en connaissant {MOVES[m.group(1)]}"
    return None


def build_evolutions(src):
    """Retourne {id: [[id_suivant, condition_fr], ...]}.

    Les liens "next" font foi ; un "prev" ne sert qu'à compléter un parent manquant
    (la source contient des "prev" erronés, ex. n°269).
    """
    ids = {p["id"] for p in src}
    links = {}      # (de, vers) -> [conditions EN]
    has_parent = set()

    def add(a, b, cond):
        if a not in ids or b not in ids or a == b or (a, b) in DROP_LINKS:
            return
        links.setdefault((a, b), [])
        if cond not in links[(a, b)]:
            links[(a, b)].append(cond)
        has_parent.add(b)

    for p in src:
        for nxt, cond in p.get("evolution", {}).get("next", []):
            add(p["id"], int(nxt), cond)
    for p in src:
        prev = p.get("evolution", {}).get("prev")
        if prev and p["id"] not in has_parent:
            add(int(prev[0]), p["id"], prev[1])

    missing = []
    result = {}
    for (a, b), conds in links.items():
        if (a, b) in OVERRIDES:
            text = OVERRIDES[(a, b)]
        else:
            parts = [translate(c) for c in conds]
            missing += [c for c, t in zip(conds, parts) if t is None]
            text = " ou ".join(t for t in parts if t)
        result.setdefault(a, []).append([b, text])

    if missing:
        sys.exit("Conditions sans traduction (à ajouter dans tools/build-data.py) :\n  "
                 + "\n  ".join(sorted(set(map(repr, missing)))))
    for a in result:
        result[a].sort(key=lambda e: e[0])
    return result


def dump(path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{path.relative_to(ROOT)}: {path.stat().st_size // 1024} Ko")


def main():
    src = json.loads(SRC.read_text(encoding="utf-8"))
    src.sort(key=lambda p: p["id"])
    evolutions = build_evolutions(src)

    index = [[p["id"], NAME_FIXES.get(p["id"], p["name"]["french"]), p["name"]["english"], p["type"]] for p in src]

    details = {}
    for p in src:
        entry = {
            "ja": p["name"].get("japanese", ""),
            "species": p.get("species", ""),
            "description": p.get("description", ""),
            "profile": p.get("profile", {}),
            "next": evolutions.get(p["id"], []),
        }
        if "base" in p:
            entry["base"] = p["base"]
        details[str(p["id"])] = entry

    dump(ROOT / "data" / "index.json", index)
    dump(ROOT / "data" / "pokedex.json", details)


if __name__ == "__main__":
    main()
