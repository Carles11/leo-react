# Architecture

## System

```
  Teachers / public                          Celia & Alicia (admins)
        │                                              │
        ▼                                              ▼
  ┌─────────────────────────────────────────────────────────┐
  │  leo-react  (Render.com, static build)                  │
  │  React 16 SPA · CRA 5 · react-router 4                  │
  └─────────────────────────────────────────────────────────┘
        │  fetch, JWT in localStorage header `access-token`
        ▼
  ┌─────────────────────────────────────────────────────────┐
  │  api  (DigitalOcean, PM2)   Express 4 · Mongoose 7       │
  │  /api/leo/{users,schools,images,documents}  /auth/*      │
  │  (abluelemon, devPunk, blog, terapias = dormant)         │
  └─────────────────────────────────────────────────────────┘
        │
        ▼
  ┌─────────────────────────────────────────────────────────┐
  │  MongoDB Atlas · cluster `api` · db `api`                │
  │  leo_schools · leo_documents · leo_images · leo_users    │
  └─────────────────────────────────────────────────────────┘
```

## Content lives in three different places

This is the thing to understand before any content update. There is no CMS; yearly content is
split across three stores and updating an edition touches all three.

| Content | Where it lives | How to change it |
|---|---|---|
| Reading texts + audio links | **MongoDB** `leo_documents` | Add a document in Atlas, **then** edit the year filter in `Lectura.jsx` |
| Photo gallery | **MongoDB** `leo_images` | Insert rows (`src`, `width`, `height`, `year`); images hosted on Cloudinary |
| Contest rules, dates, all Spanish copy | **`src/utils/dictionary.js`** | Edit + rebuild + redeploy |
| Downloadable forms, German PDF, logos | **`src/assets/docus/`** | Replace file + update the `import` + rebuild |
| Registration open/closed | **`FORM_INPUTS_DISABLED` constant** in `Register.jsx` | Edit + rebuild + redeploy |

Consequence: **the client cannot change anything without a developer and a deploy.** Reducing this
is the main product goal in Roadmap Phase 4.

## Frontend patterns

- **Routing:** `Routes.jsx` maps every path to `RoutesAsync`, a class component that awaits an
  `import()` promise and swaps in the component. This is a hand-built `React.lazy` from before
  `React.lazy` existed. It works; it will be deleted in Phase 3.
- **Auth:** `withAuth` HOC wraps `App`, checks only whether a token string exists in
  `localStorage`. The real check is server-side on each request. Admin routes are *not*
  route-guarded — `Admin.jsx` renders `<SignIn>` or redirects based on the HOC's `auth` prop.
- **API access:** `utils/API.js` — a thin `fetch` wrapper. Base URLs come from
  `src/config/{development,production}.js`, which read `REACT_APP_*` env vars at build time.
- **State:** component state only. There is no store, and it does not need one.
- **Errors:** `utils/errorHandler.js` does DOM-based form validation (querySelector on
  `#{name}Error` nodes). It is fragile and tightly coupled to the markup in
  `components/form/SingleInput.jsx` — change them together.

## Known structural quirks

- `src/registerServiceWorker.js` is the CRA v1 cache-first service worker. It is almost certainly
  why the API had to add a `Cache-Control: no-store` middleware. See task S-9.
- The `documents` and `images` Mongoose schemas in the API **do not declare the `year` field**
  (nor `items[].audio`), yet the data has them and the frontend filters on them. This works only
  because Mongoose's strict mode applies to writes, not reads. Fragile — see the API repo's
  task list.
- `server.js` at the repo root is dead code that would crash if run.
