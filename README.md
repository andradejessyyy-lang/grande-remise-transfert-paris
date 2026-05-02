# Grande Remise Transfert Paris

Site mockup pour une agence de chauffeur privé (VTC) haut de gamme à Paris —
template revendable, conçu pour être hébergé en statique sur n'importe
quel serveur (Hostinger, Netlify, GitHub Pages, S3, etc.).

## Stack

- **Next.js 14** App Router · TypeScript
- **Tailwind CSS** — design tokens stricts (blanc / noir / or)
- **next/font** — Playfair Display (titres) + Inter (corps)
- **lucide-react** — iconographie SVG
- **framer-motion** — animations subtiles
- **Export statique** (`output: 'export'`) — déploiement sur tout host statique

## Architecture

```
src/
├── app/
│   ├── layout.tsx              · Nav + Footer + PhoneFab
│   ├── page.tsx                · Home (hero + services + flotte + tarifs + simulateur + CTA)
│   ├── services/page.tsx       · 3 services détaillés
│   ├── vehicules/page.tsx      · 3 gammes Mercedes
│   ├── tarifs/page.tsx         · Grille forfaitaire complète
│   └── contact/page.tsx        · Formulaire de réservation interactif
├── components/
│   ├── ui/                     · Button, Container, Check, VehicleIllustration
│   ├── site/                   · Nav, Footer, PhoneFab
│   └── booking/                · BookingForm, QuickEstimator (client components)
└── lib/
    ├── contact.ts              · Téléphone / email (single source of truth)
    ├── services.ts             · Données des 3 services
    ├── vehicles.ts             · Flotte + grille tarifaire
    ├── images.ts               · Catalogue d'images (Wikimedia / Unsplash + locales)
    └── vehicleAssets.ts        · Détection runtime des photos locales

public/
├── paris/                      · Photos Paris (Wikimedia Commons, validées)
├── services/                   · Photos contextuelles services
└── vehicules/                  · Photos détourées des véhicules (Mercedes C/GLA/V)
```

## Développement local

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Build statique (pour déploiement Hostinger ou autre host statique)

```bash
npm run build
```

Cela génère le dossier `out/` (~6 Mo, ~65 fichiers). C'est ce dossier qu'il
faut uploader sur Hostinger.

## Déployer sur Hostinger

### 1. Build local

```bash
npm install
npm run build
```

### 2. Upload du dossier `out/`

**Via le File Manager Hostinger (le plus simple) :**

1. Connecte-toi à `hpanel.hostinger.com`
2. Sélectionne ton domaine → **File Manager**
3. Va dans `public_html/` (le dossier racine du site)
4. Supprime les fichiers existants si présents (sauvegarde-les si besoin)
5. **Uploade tout le contenu de `out/`** (pas le dossier lui-même, mais ce
   qui est dedans : `index.html`, `_next/`, `paris/`, `services/`, etc.)

**Via FTP (pour gros uploads ou updates fréquents) :**

```bash
# Avec lftp installé
lftp -u USER,PASSWORD ftp.tondomaine.com -e "mirror -R out/ public_html/; quit"
```

### 3. Configurer Hostinger

- **HTTPS** : active SSL gratuit (Let's Encrypt) depuis le panel
- **Index** : Hostinger sert `index.html` par défaut, donc rien à régler
- **Trailing slash** : déjà configuré dans `next.config.mjs` pour les bonnes URLs

### 4. Mises à jour ultérieures

```bash
# 1. Modifier le code
# 2. Rebuild
npm run build
# 3. Re-uploader le contenu de out/ sur Hostinger
```

## Brancher le formulaire de réservation à un vrai backend

Le `BookingForm` a un `TODO(server)` à brancher quand tu sors de la phase
mockup. Options simples sans serveur dédié :

- **Formspree** (50 envois/mois gratuits) : remplace le `handleSubmit` par un
  `fetch('https://formspree.io/f/XXX', { method: 'POST', body: ... })`
- **Resend** + Edge Function : si tu passes sur Vercel ou Cloudflare Pages
- **EmailJS** : envoi côté client uniquement, plus simple mais clé visible

## Configuration centralisée

Pour personnaliser pour un autre client (revente du template) :

| Fichier | Quoi modifier |
|---|---|
| `src/lib/contact.ts` | Numéros de téléphone, WhatsApp, email |
| `src/lib/services.ts` | Contenu des 3 services |
| `src/lib/vehicles.ts` | Flotte et grille tarifaire |
| `public/vehicules/` | Photos des véhicules (`eco.png`, `suv.png`, `van.png`) |
| `src/app/layout.tsx` | Nom de l'agence (metadata) |
| `tailwind.config.ts` | Couleurs (palette luxe actuelle : noir / or / blanc) |

## Licences images

- `public/paris/` : photos issues de Wikimedia Commons (royalty-free)
- `public/vehicules/` : photos détourées par rembg (sources fournies par l'agence)
- `public/services/` : mix Unsplash + sources locales

Pour la prod, recommandé de remplacer par un shoot photo dédié à l'agence.
