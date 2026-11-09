# bbs007.github.io — Pokédex

Pokédex en français (898 Pokémon), servi en statique par GitHub Pages sur <https://bbs007.github.io/>.

HTML, CSS et JavaScript natifs : **aucune dépendance, aucun build, aucun npm**. Modifier un fichier puis pousser sur `master` suffit pour mettre le site à jour.

## Structure

| Chemin | Contenu |
| --- | --- |
| `index.html` | Page unique : structure de l'appareil (écran, liste, fiche). |
| `css/style.css` | Style de l'appareil, responsive (deux volets sur desktop, un volet à la fois sous 860 px). |
| `js/app.js` | Application (module ES) : chargement des données, liste, recherche, fiche, navigation. |
| `data/pokedex-full.json` | Données sources complètes (898 entrées). |
| `data/index.json` | Liste légère générée (id, nom FR, nom EN, types), environ 13 Ko gzip. |
| `data/pokedex.json` | Fiches détaillées générées (évolutions corrigées, méthodes traduites), environ 100 Ko gzip. |
| `img/thumb/NNN.png` | Miniatures 100×100 px, utilisées dans la liste et les évolutions. |
| `img/hires/NNN.png` | Images 400×400 px, utilisées dans la fiche. |
| `tools/build-data.py` | Génère `data/index.json` et `data/pokedex.json` depuis `data/pokedex-full.json`. |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` | Icônes du site (SVG source, ICO 32 px et PNG 180 px générés depuis le SVG). |
| `.nojekyll` | Désactive le traitement Jekyll de GitHub Pages (site servi tel quel). |

## Fonctionnement

- **Chargement pensé pour les connexions lentes** :
  1. `data/index.json` (petit) est chargé en premier, la liste s'affiche aussitôt.
  2. Les miniatures de la liste se chargent à la demande (`loading="lazy"`).
  3. `data/pokedex.json` se charge ensuite en arrière-plan.
  4. Dans la fiche, la miniature (déjà en cache) s'affiche immédiatement, floutée ; l'image haute résolution la remplace en fondu dès qu'elle est arrivée.
- **Navigation par hash** : `#/25` ouvre Pikachu. Les liens directs et le bouton retour du navigateur fonctionnent sans configuration serveur.
- **Recherche** : par nom français ou anglais (accents ignorés) ou par numéro (`25`, `#025`), avec filtre par type.
- **Clavier** : `/` pour la recherche, `Entrée` ouvre le premier résultat, `↑` / `↓` (ou `←` / `→`) pour passer au Pokémon précédent / suivant, `Échap` pour revenir à la liste.
- **Évolutions** : en tête de fiche, avec un résumé (« Évolue de… », « Évolue en… » et la méthode), puis l'arbre complet, la méthode écrite sur chaque flèche (gère les branches comme Évoli). Le petit écran vert sous l'écran principal affiche la prochaine évolution.
- **Méthodes d'évolution en français** : traduites par `tools/build-data.py` avec les noms officiels des objets et capacités (Pierre Foudre, Roche Royale, Pouvoir Antique…). Le script corrige aussi les erreurs de la source : conditions tronquées (n°840, 848, 852, 854, 868, 872), liens faux (n°269, 792, auto-évolution du n°849), noms en majuscules (n°670, 702).

## Sécurité

- Aucun script ni ressource externe.
- CSP stricte dans `index.html` : tout est limité à `'self'`, sans style ni script inline.
- Le texte issu des données est inséré via `textContent`, jamais via `innerHTML`.

## Modifier les données

1. Éditer `data/pokedex-full.json`.
2. Régénérer les fichiers légers (le script s'arrête et liste les conditions d'évolution sans traduction, à ajouter dans le script) :

   ```sh
   python3 tools/build-data.py
   ```

3. Pour un nouveau Pokémon, ajouter `img/thumb/NNN.png` (100 px) et `img/hires/NNN.png` (400 px).

## Tester en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

Ouvrir `index.html` directement en `file://` ne marche pas : `fetch` y est bloqué.

## Sources

- Données et images : [Purukitto/pokemon-data.json](https://github.com/Purukitto/pokemon-data.json). Les types sont en français ; espèce, description et talents sont en anglais.
- Images n°810 à 898 : dossier `images/pokedex/thumbnails` de ce même dépôt (PNG transparents 475 px), redimensionnées en 400 px et 100 px. Son dossier `hires` ne contient pour ces numéros que des JPEG sur fond blanc, et le n°877 y est absent.

## Limites connues

- Pokémon n°810 à 898 : pas de statistiques de base, et tailles souvent arrondies ou à `0 m` dans la source (affichées « — »).
- Descriptions et noms d'espèces en anglais (pas de source française dans les données).
