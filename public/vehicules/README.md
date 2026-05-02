# Photos véhicules

Ce dossier contient les photos des 3 gammes de véhicules. Le site les détecte
automatiquement à la build : si un fichier existe, l'image remplace
l'illustration SVG par défaut. Si le fichier manque, le site retombe
gracieusement sur l'illustration vectorielle.

## Noms de fichiers attendus

| Gamme              | Fichier (un seul des 4 formats)               | Photo idéale                         |
| ------------------ | --------------------------------------------- | ------------------------------------ |
| Berline Affaires   | `eco.jpg` / `.jpeg` / `.png` / `.webp`        | Mercedes Classe E noire — 3/4 face   |
| Berline Première   | `suv.jpg` / `.jpeg` / `.png` / `.webp`        | Mercedes GLA / GLE noire — 3/4 face  |
| Van Premium        | `van.jpg` / `.jpeg` / `.png` / `.webp`        | Mercedes Classe V noire — 3/4 face   |

## Recommandations techniques

- **Dimensions** : 1600 × 1200 px (ratio 4/3) ou plus.
- **Format** : `.webp` recommandé (poids ~50% inférieur à .jpg à qualité égale).
  Sinon `.jpg` qualité 80–85, max 500 Ko par fichier.
- **Fond** : uni clair ou sombre (showroom, parking, rue) — pas de paysage chargé
  qui distrairait du véhicule.
- **Cadrage** : véhicule occupe ~80% de la largeur, marge en haut/bas.

## Comment remplacer

Glisse simplement les fichiers dans ce dossier — le serveur de dev (`npm run dev`)
détecte automatiquement et recharge la page. Pour la prod, un `npm run build`
suffit.
