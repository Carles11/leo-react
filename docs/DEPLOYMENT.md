# Deployment — leo-react

> ⚠️ Some of this is **unverified** — it was reconstructed from the code, not from the Render
> dashboard. Fields marked **`VERIFY`** need one pass by a human with dashboard access.
> Correct them and delete the marker.

## Where it runs

| | |
|---|---|
| Host | **Render.com** |
| Type | Static site (serves the CRA `build/` output) — **`VERIFY`**: static site vs. web service |
| Live URL | https://www.leo-leo-hessen.com |
| Deploys from | **`VERIFY`** — which branch? GitHub shows 39 deployments with Production and Preview environments |
| Build command | `yarn build` (→ `react-app-rewired build`) — **`VERIFY`** |
| Publish directory | `build` — **`VERIFY`** |
| Node version | package.json declares `>=18`. Pin it in Render (or add `.nvmrc`) so a Render default bump can't break a build mid-season |

The root `server.js` is **not** used. It is dead code that would crash on start (Express 3 APIs).
See task M-7.

## Environment variables

Set in the Render dashboard, baked in **at build time** (CRA inlines `REACT_APP_*`).
Changing one requires a redeploy.

| Variable | Purpose |
|---|---|
| `REACT_APP_API_URL` | Base URL for `/api/leo/` endpoints |
| `REACT_APP_AUTH_URL` | Base URL for `/auth/` endpoints |
| `REACT_APP_TOKEN_KEY` | localStorage key the JWT is stored under |

Read by `src/config/production.js`. Development falls back to `http://localhost:4000/...` — see
`src/config/development.js`.

⚠️ **These are public.** Anything inlined into a CRA build ships to the browser. Never put a
secret in a `REACT_APP_*` variable.

## Release procedure

1. Work on `development`.
2. `npx eslint src && yarn build` locally.
3. Open a PR. Wait for CI (once task S-6 lands).
4. Merge to the release branch.
5. Watch the Render deploy go green.
6. **Hard-refresh** the live site and click through: reading texts, bases, impresos, the
   registration form, `/colegios-inscritos`, `/admin`. The old service worker caches aggressively
   (task S-9) — a normal refresh can show you a stale bundle and hide a broken deploy.

**Do not deploy on a Friday, and do not deploy in the week of a registration or semifinal
deadline.** During October–April there is no margin.

## Rollback

Render keeps previous deploys — redeploy the last known-good one from the dashboard.
**`VERIFY`** the exact steps and write them here; nobody wants to discover this during an outage.

## Related

- API deployment: see the `api` repo's `docs/DEPLOYMENT.md` (DigitalOcean + PM2)
- Database: MongoDB Atlas, org `CriX`, project `api_production`, cluster `api`, db `api`
