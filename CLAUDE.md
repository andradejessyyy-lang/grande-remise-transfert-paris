# Règles projet — préférences utilisateur

## Déploiement

**Toujours passer par GitHub.** Ne jamais proposer un workflow "build local + upload manuel" en première intention.

Ordre de préférence pour les futurs déploiements :

1. **Vercel** (gratuit, auto-deploy GitHub, fait pour Next.js) — recommandation par défaut
2. **Hostinger Git Version Control** si l'utilisateur a déjà payé Hostinger
3. **Manual upload** uniquement en dernier recours, et seulement si l'utilisateur le demande explicitement

Workflow attendu :
- Commit → push GitHub → l'host pull et build automatiquement.

## Identité GitHub

- Username: `andradejessyyy-lang`
- Email: `andradejessyyy@gmail.com`
- Token disponible dans le keychain via :
  `security find-generic-password -s "GitHub - https://api.github.com" -w`

## Hébergement actuel

- Plan : Hostinger Cloud Startup
- Domaine : `grandremiseparis.chauffeurvtc.pro`
- Le site est sur le repo GitHub : `andradejessyyy-lang/grande-remise-transfert-paris`
