#!/usr/bin/env python3
"""Génère les fichiers de données légers utilisés par l'app à partir de data/pokedex-full.json.

- data/index.json   : liste minimale (id, nom FR, nom EN, types) pour afficher la liste au plus vite.
- data/pokedex.json : fiches complètes, sans les champs inutilisés (URL d'images externes, nom chinois).

À relancer uniquement après une modification de data/pokedex-full.json :
    python3 tools/build-data.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "pokedex-full.json"

def dump(path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{path.relative_to(ROOT)}: {path.stat().st_size // 1024} Ko")

def main():
    src = json.loads(SRC.read_text(encoding="utf-8"))
    src.sort(key=lambda p: p["id"])

    index = [[p["id"], p["name"]["french"], p["name"]["english"], p["type"]] for p in src]

    details = {}
    for p in src:
        entry = {
            "ja": p["name"].get("japanese", ""),
            "species": p.get("species", ""),
            "description": p.get("description", ""),
            "profile": p.get("profile", {}),
            "evolution": p.get("evolution", {}),
        }
        if "base" in p:
            entry["base"] = p["base"]
        details[str(p["id"])] = entry

    dump(ROOT / "data" / "index.json", index)
    dump(ROOT / "data" / "pokedex.json", details)

if __name__ == "__main__":
    main()
