# WhatsApp Bot Prototype (Baileys)

Prototype gratuit qui se connecte via WhatsApp Web (QR) en utilisant Baileys.

Fonctionnalités incluses :
- Auth via QR code (sauvegarde de session)
- Gestion modulaire de commandes
- Exemples de commandes : ping, help, echo, uptime, status, me, parrain (parrainage), toujours en ligne, auto-typing, auto-recording, antivoince, sticker\n- Génération massive : utiliser `npm run generate-commands` pour créer 300 squelettes de commandes (dans `src/commands/generated`).\n\nCommandes de gestion de groupes incluses : `tagall`, `hidetag`, `tagadmin`, `promote`, `demote`, `kick`, `ban`, `unban`, `warn`, `warnings`, `antilink`, `setgname`, `setgdesc`, `resetlink`, `welcome`, `goodbye`, `pair`, `pairaccept`, `download`, `clearsession`, `antidelete`.
\nVoir `src/commands/` pour la liste complète et exemples d'utilisation.

Nouvelles commandes administrateur : `!menu` (affiche les commandes par répertoire et leur usage), `!owner` (gestion des propriétaires/SUDO), `!sessions` (liste/kill des sessions sauvegardées), `!setcmdimg` / `!clearcmdimg` (gérer images de commandes). Le nom du bot par défaut est **OkiGuard** — tu peux le changer via `!owner setname <nom>`.

Nouvelles fonctions et commandes : `!antibadword` (gérer mots interdits), `!mute` (silence groupe), `!cleartmp` (owner), `!mode` (public|private). Le bot vérifie automatiquement antilink, mots interdits et mute selon la configuration du groupe.

Images d'en-tête : le bot peut envoyer un header image (SVG/PNG) pour la commande exécutée. Les images par défaut sont stockées dans `src/assets/headers/` (ex : `menu.svg`, `command.svg`, `dandadan.svg`). Tu peux remplacer ces fichiers par tes propres images (assure-toi d'avoir les droits). Tu peux aussi définir une image pour une commande spécifique en répondant à une image et en envoyant `!setcmdimg <command>` (propriétaire uniquement). Pour supprimer : `!clearcmdimg <command>`.

Important : si tu veux des images issues d'œuvres protégées (ex. captures officielles d'anime), évite de committer des contenus soumis au droit d'auteur sans permission — privilégie images libres (CC0), créations originales, ou images générées.

Important : Ce prototype utilise **Baileys** (non officiel). Pour un usage en production ou public à grande échelle, privilégiez **WhatsApp Cloud API** (officiel) pour respecter les ToS. Evitez spam et envoi massif.

Pour publier : suivez `RELEASE.md` (préparer dist, tag et créer release). N'oublie pas d'ajouter des secrets dans GitHub si tu veux automatiser des builds, et configure la persistance des sessions sur Render.

---

## Prérequis ⚙️
- Node.js >= **18.x** et npm installés
- Git installé (pour push/tags/releases)
- Docker (optionnel, recommandé pour déploiement par image)
- Un service d'envoi SMS (Twilio) si vous voulez activer l'option OTP (optionnel)

## Vérifications locales (sanity checks)
1. Installer dépendances : `npm ci`
2. Vérifier l'environnement : `npm run check` (contrôle Node, npm et presence de `sessions/`)
3. Lancer les tests : `npm test`
4. Préparer les artefacts : `npm run prepare-dist`

Installation
```
npm install
npm start
```

---

## Checklist rapide pour le déploiement ✅
- Ajouter les variables d'environnement recommandées : `ADMIN_TOKEN` (recommandé), `PORT` (facultatif), `TWILIO_*` (optionnel)
- Sur Render : utiliser Docker (ou Node) et monter un volume persistant pour `sessions/`
- Configurer Health check sur `/health`
- Scanner le QR depuis les logs ou `qr.png` plusieurs fois si nécessaire pour activer la session. Le mini‑site d'administration (`/admin`) affiche aussi le QR directement (ou téléchargeable via le bouton "Télécharger le QR") pour une connexion plus simple.
- Après le déploiement, vérifier `/admin/status` avec `x-admin-token` ou `?token=` si `ADMIN_TOKEN` est configuré



Quand vous démarrez, scannez le QR dans la console (ou `qr.png` si présent).

Déploiement sur Render :
- Utiliser Docker ou le service Node.js
- Monter un volume pour `sessions/` ou utiliser Redis pour persister l'auth

Premiers pas après le déploiement (checklist rapide) :
1. Déployer sur Render / Docker et vérifier `/health`.
2. Démarrer le bot, scanner le QR depuis les logs (`qr.png` ou output console) pour connecter le compte WhatsApp.
3. Accéder à l'interface d'administration (ex: `https://<service-url>/admin`) pour voir l'état et les owners.
4. Définir un `admin token` (recommandé) pour protéger l'interface d'administration : utilise `!owner settoken <token>` dans WhatsApp (propriétaire uniquement). Pour utiliser les endpoints, envoyez l'en-tête HTTP `x-admin-token: <token>` ou ajoutez `?token=<token>`.
5. Ajouter ton numéro comme owner si nécessaire : `!owner add +243982730192` (ou les numéros déjà pré-remplis).
6. Configurer les dossiers persistants (`sessions/`) et protéger l'accès aux endpoints d'admin (par IP ou token). Voir `SECURITY.md`.
6. Si tu veux automatiser la CI/CD, ajoute tes secrets GitHub (pour builds) et configure Render.

---

## Statut du projet

Le prototype est **prêt pour un déploiement** : la majeure partie des fonctionnalités est implémentée et documentée. L'interface d'administration a été enrichie (design Tailwind, arborescence/collapsible des commandes, indicateur QR, téléchargement du QR).

---

## Feu vert pour le déploiement ✅

Avant de cliquer sur "Deploy" dans Render, vérifiez rapidement :
- `ADMIN_TOKEN` est défini dans les variables d'environnement (ou configurez-le via `!owner settoken` après le scan du QR).
- Un disque persistant est monté pour `/app/sessions` (ou configurez Redis si vous migrez la persistence).
- Health check sur `/health` (doit répondre JSON `{ ok: true }`).
- Dockerfile à la racine et `render.yaml` fournis (disque, variables d'env, startCommand).
- Après le déploiement, consultez les logs pour retrouver `qr.png` et ouvrez `/admin` pour scanner le QR depuis le navigateur (ou téléchargez l'image).

Si vous voulez, je peux créer la Release (tag + artefacts) et préparer un bundle `dist/` pour attacher à la Release — dites simplement **"Release"** et je m'en occupe.

Licence: MIT
