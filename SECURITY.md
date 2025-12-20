Signalement de vulnérabilité

Si tu trouves une faille de sécurité, merci de me contacter en privé avant de la divulguer publiquement.
- Ne publie pas de sessions d'authentification (`sessions/auth_info.json`).
- Sanitize logs et données avant de les partager.

Mesures recommandées pour déployer en production :
- Utiliser HTTPS et un reverse proxy (ex: Cloudflare, Traefik)
- Ne pas mettre `sessions/` dans un repo public
- Restreindre l'accès à l'interface d'administration (/admin) par IP ou auth
