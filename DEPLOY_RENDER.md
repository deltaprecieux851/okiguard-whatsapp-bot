Guide de déploiement sur Render

Option 1 — Docker (recommandé)
1. Crée un repo public sur GitHub et pousse ton projet.
2. Dans Render, create a new "Web Service" and connect to the repo.
3. Select Docker as the environment (Render will build the Dockerfile).
4. Add environment variables (if needed): `PORT`, `REDIS_URL` (optional), `NODE_ENV=production`, and **`ADMIN_TOKEN`** (recommandé pour sécuriser `/admin`).
5. Configure a persistent disk for the `sessions/` folder, or use a managed Redis to store auth state.
6. Set health check to `https://<service-url>/health` and make sure the service responds with JSON `{ ok: true }`.
7. Deploy and scan QR via Logs (qr.png will be written when a QR is generated). If you prefer the manual pairing fallback, use the `pair`/`pairaccept` flow documented in the README.

---

Checklist de validation avant déploiement :
- Exécutez `npm run check` puis `npm test` en local.
- Lancez `npm run prepare-dist` et vérifiez que `dist/` contient README, Dockerfile et le bundle.
- Vérifiez que `sessions/` est monté en tant que disque persistant dans Render.
- Configurez `ADMIN_TOKEN` (ou utilisez `!owner settoken <token>` depuis WhatsApp après avoir scanné le QR).
- Vérifiez `/health` et `/admin/status` (avec `x-admin-token`).
- En cas d'utilisation d'OTP SMS, configurez `TWILIO_SID`, `TWILIO_TOKEN`, `TWILIO_FROM`.


Local Docker testing (optional):
- Run `docker compose up --build` to start the bot and an optional Redis instance. Sessions will be stored locally in `./sessions`.
- Verify the health endpoint at `http://localhost:3000/health`.

Notes about persistence:
- Mount `./sessions` to the container's `/app/sessions` or use Render persistent disk to keep the session between deploys.
- If you prefer Redis for other metadata, point `REDIS_URL` env var to your Redis instance. (This repo currently persists Baileys auth to filesystem.)

Option 2 — Node service
1. Use the Node environment (Render will run `npm start`).
2. Ensure `sessions/` persists by mounting a disk to the service.

Notes
- Sessions must be persisted to keep the bot logged in between deploys.
- Avoid storing private sessions in public repos.
- For production-scale usage, migrate to WhatsApp Cloud API to avoid blocking and comply with ToS.
