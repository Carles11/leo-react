# Task queue — leo-react

One task = one branch = one PR. Work top to bottom. Check the seasonal freeze in `AGENTS.md`
before starting anything tagged 🟢 off-season only.

Legend: **S** security/infra · **Q** quality/bugfix · **M** modernisation
Most of the Phase 0 security work lives in the **`api` repo** — see its `docs/TASKS.md`.

---

## Now — before October

### S-8 · Protect the `master` branch 🔵 5 min, GitHub UI
GitHub currently warns: *"Your master branch isn't protected."*

- Settings → Rules → New ruleset → target `master`
- Require a pull request before merging (1 approval, or 0 if you are solo — the point is the
  status check)
- Block force pushes and deletion
- Once CI exists (S-6), add "require status checks to pass"

**Done when:** a direct push to `master` is rejected.

---

### S-9 · Decide the service worker's fate 🟢 off-season only
`src/registerServiceWorker.js` is the Create React App **v1** service worker — cache-first, and
almost certainly the reason the API grew a `Cache-Control: no-store` middleware
(commits `b95296e "fixed cache storing"`, `33b0d80 "updated clear cache for every request"`).

The site is labelled a PWA but offers no real offline value: everything meaningful is a fetch or
a download.

- Remove the `registerServiceWorker()` call from `src/index.js`
- Ship an unregister shim so already-installed workers on teachers' devices get cleared, rather
  than serving a stale bundle forever
- Keep `manifest.json` and the icons (installability is harmless)

**Done when:** a returning visitor with the old worker installed gets the new build on first load.
**Verify by:** loading the current production site, then the new build, in the same browser profile.

---

### Q-1 · Fix the year default in `AdminList.jsx` 🔵 15 min
`src/components/AdminList.jsx` line ~17:

```js
year: 2026 || 2025,   // always evaluates to 2026 — the `||` does nothing
```

Replace with `getNextEditionYear()` from `src/utils/helpers.js`.

**Careful:** the admin list should default to the edition currently accepting registrations, which
is what `getNextEditionYear()` returns. Confirm against real data before merging — if the list
comes back empty for the admins, that is a worse bug than the one being fixed.

**Done when:** the admin panel opens on the current edition with no hardcoded year in the file.

---

### Q-2 · Make `Lectura.jsx` data-driven 🟢 off-season only
`src/views/Lectura.jsx` renders only documents where `d.year === 2025` (a hardcoded literal), plus
a separate hardcoded block for `d.year === 2024`. Every year this silently hides the new texts
until someone edits the source — see `docs/ANNUAL-CONTENT-UPDATE.md` step 3.

Render the **most recent year present in the API response** instead:

```js
const latest = Math.max(...data.map(d => d.year))
```

- Keep the narrator-credits block, but drive it from the document (add a `credits` field in Mongo)
  or drop it and let the client put that text in the document `title`
- Handle the empty-response case explicitly — today `data.length > 0 &&` renders nothing at all
  with no message

**Done when:** adding a new year to `leo_documents` makes it appear on the site with **no code
change**. This is the single biggest reduction in yearly manual work.

---

### Q-3 · Remove production `console.log`s 🔵 20 min
`grep -rn "console.log" src/`. Notable ones: `Register.jsx` render, `AdminList.jsx handleEdit`,
`errorHandler.js showCheckboxError`.

Leave `console.error` where it reports a real failure. Do not add a logging library.

---

### Q-4 · Registration toggle out of source 🟢 off-season only
`Register.jsx`: `const FORM_INPUTS_DISABLED = true;` — opening and closing registration each year
currently requires a code change and a redeploy.

- Read from `process.env.REACT_APP_REGISTRATION_OPEN` (or `import.meta.env` post-Vite)
- Set it in the Render dashboard; flipping the season becomes a redeploy with no diff
- Do the same for the `FORM_WARNING` / `FORM_CANCELLATION` `<h4>` swap in `render()`
- Note in the PR that a Render env change still triggers a rebuild — this is a convenience win,
  not a live toggle. A live toggle would mean putting the flag in Mongo (Phase 4).

---

### Q-5 · Hide or finish the school-edit modal 🔵 30 min
`AdminList.jsx handleEdit` opens a `<Modal>` whose entire body is the literal string
`MODAL CONTENT UPDATE SCHOOL`. The API call is commented out. This is visible to the admins today.

Cheapest correct fix: remove the edit button and the modal. The `PUT /schools/:id` endpoint exists
and works, so finishing it is also viable — but that is a feature, not a fix, and it needs the
client to say what should be editable.

**Ask the client which** before implementing.

---

### S-6 · CI on GitHub Actions 🔵 half a day
Blocked by: the test script.

```json
"test": "eslint src && react-app-rewired test --watch --env=jsdom --coverage"
```

`--watch` never exits, so this can never run in CI.

- Split into `"lint": "eslint src"`, `"test": "react-app-rewired test --env=jsdom --watchAll=false"`,
  keep `"test:watch"` for local use
- Workflow on PR to `development` and `master`: install → lint → build. **Add tests to CI only
  once they pass** — if the Enzyme snapshots are already failing, get the build gate in first and
  fix tests in Phase 2.

**Done when:** a PR shows a green check, and a PR with a lint error shows a red one.

---

### S-7 · Staging environment 🔵 half a day
- Render: enable preview environments for PRs, or a second service tracking `development`
- Point it at the **staging API** and a **copy of the database** — never at production Mongo
- Document the URLs in `docs/DEPLOYMENT.md`

**Done when:** you can register a fake school on staging without it appearing in the real
`leo_schools`.

---

### S-10 · Sentry 🔵 2 hours
Free tier, both apps. Today a failed registration is invisible to everyone.

- `@sentry/react` in `src/index.js`, DSN from an env var
- Set `environment` so staging noise is separable
- Scrub PII: schools' emails and phone numbers must not end up in Sentry breadcrumbs. Set
  `sendDefaultPii: false` and add a `beforeSend` that strips form values.

---

### S-11 · Replace the README 🔵 1 hour
`README.md` is 2,469 lines of CRA boilerplate. Replace with: what this is, who the client is, how
to run it, how to deploy, where env vars live, the seasonal calendar, and links into `docs/`.

---

## Next off-season (May onwards) — 🟢 all of these

### M-1 · Migrate CRA → Vite
The big one. See `docs/ROADMAP.md` Phase 2. Do it first in that window; everything else depends on it.

### M-2 · Enzyme → React Testing Library, delete the snapshots
Prerequisite for M-4. Target ~6 behaviour tests, not coverage percentage.

### M-3 · Replace `react-export-excel`
Drags in `xlsx@0.8.20` (known CVEs, unmaintained). Move to SheetJS directly or `exceljs`. Removes
the crypto/stream/vm polyfills in `config-overrides.js`.

### M-4 · Replace `react-images` + `react-photo-gallery`
Both abandoned and React-16-only — the actual blocker to upgrading React. Suggested replacement:
`yet-another-react-lightbox`.

### M-5 · React 16 → 19
Only after M-2 and M-4. `ReactDOM.render` → `createRoot`.

### M-6 · react-router 4 → 7/8
Delete `RoutesAsync.jsx` in favour of `React.lazy` + `Suspense`.

### M-7 · Delete dead code
`server.js` (broken, would crash), `styled-components` (installed, unused), `debug.log`,
`build/` if it is committed, the `browser: { fs: false }` package.json field once Vite lands.
