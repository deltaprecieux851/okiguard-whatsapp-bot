Release checklist

- [ ] Bump version in `package.json` (semver)
- [ ] Run `npm run test` and ensure CI passes
- [ ] Run `npm run prepare-dist` and verify `dist/` content
- [ ] Ensure `sessions/` and `tmp/` are not included in release
- [ ] Commit changes and tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
- [ ] Push: `git push origin main --tags`
- [ ] Create GitHub Release and add notes (changelog, usage)
- [ ] Optionally publish docker image to registry (build via Dockerfile, tag with version)
- [ ] On Render: connect repo and set persistent disk for `sessions/`, set health check

Security notes
- Do NOT commit private session files (`sessions/auth_info.json`) to public repos.
- If using images from anime/commercial works, ensure you have rights.
