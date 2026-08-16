# Roadmap

**Goal, in the owner's words:** keep this alive and working. It must not break because some
obsolete part of it gives out. Not a rewrite.

## The calendar is the plan

| Window | Status | Work |
|---|---|---|
| **Now → end of September** | 🟢 last of the off-season | Phase 0 + Phase 1 + the annual content update |
| **October → April/May** | 🔴 frozen | Content and security hotfixes only |
| **May → September (next year)** | 🟢 off-season | Phase 2, then Phase 3 |

The important correction to make up front: **the off-season is happening now.** Registration runs
October to April/May, so the safe window for risky work is May–September — and we are in August.
There are roughly **six weeks left**, and then the door closes for nine months. Anything that
needs a "we can fix it if it breaks" margin has to happen before October or wait until May.

Given the stated goal, the right call for this window is **Phase 0 + Phase 1 only**, plus the
content update. Phase 2 (the Vite migration) is deliberately *not* squeezed in — it is the right
move, but starting it in September and finishing it in October is the one way to actually break
the site during registration.

---

## Phase 0 — Security · 1–2 days · **do this first**

Non-negotiable, and none of it touches the UI. Details and acceptance criteria in `docs/TASKS.md`
(frontend) and the API repo's `docs/TASKS.md` (most of it lives there).

- Revoke the leaked Google OAuth credentials
- Close the public PII endpoint (`GET /schools` returns teachers' names, emails, phones today)
- Fix the `express-jwt` auth bypass (CVE-2020-15084)
- Auth on the image write endpoints
- Fix the CORS ordering so the allowlist actually applies
- Stop logging bearer tokens
- Rate-limit login and registration
- Protect the `master` branch

## Phase 1 — Safety net · 3–5 days

You cannot safely do Phase 2 or 3 without this, and it also makes the *frozen* season less scary.

- **Staging environment** (Render preview + a DigitalOcean staging app + a copy of the DB).
  Right now every change is tested in production.
- **CI on GitHub Actions**: lint + build on every PR. Requires removing `--watch` from the test
  script first.
- **Sentry** on both apps. Currently there is zero visibility into runtime errors — if a teacher's
  registration fails, nobody finds out.
- **Verify the Atlas backup** exists and can be restored. Test it once.
- **Real READMEs.** The frontend one is still 2,469 lines of Create React App boilerplate.

## Phase 1.5 — Annual content update · half a day · September

Follow `docs/ANNUAL-CONTENT-UPDATE.md`. Do it *after* Phase 1 so there is CI to catch a bad build,
and *before* October.

## 🔴 October → April/May — FREEZE

Allowed: copy fixes, date corrections, security patches, adding photos to the gallery.
Not allowed: dependency upgrades, refactors, framework changes, "while I'm in here" cleanups.

If something must change during the freeze, it goes through staging first, and it ships on a
Tuesday morning — not on a Friday, and not the week a deadline falls.

## Phase 2 — Build & test modernisation · 1–2 weeks · **next off-season (May+)**

This is what actually retires the obsolete parts.

1. **CRA → Vite.** Create React App was [sunset in February 2025](https://react.dev/blog/2025/02/14/sunsetting-create-react-app);
   `react-scripts` gets no more security patches. Migrating deletes `react-app-rewired`,
   `config-overrides.js`, and most of the vulnerable transitive tree in one move. Code changes are
   small: `process.env.REACT_APP_*` → `import.meta.env.VITE_*`, `index.html` moves to the root.
2. **Enzyme → React Testing Library**, and delete the snapshot files. A 453 KB snapshot tests
   nothing and blocks every refactor. Replace with maybe six behaviour tests: registration submit,
   admin login, school list, year filter, Excel export, reading-texts render.
3. **`react-export-excel` → SheetJS or `exceljs`.** The current one was last published in 2019 and
   drags in `xlsx@0.8.20` with known CVEs. Removing it also removes the crypto/stream/vm polyfills.
4. Delete `server.js`, `styled-components` (unused), and the CRA v1 service worker.

## Phase 3 — React upgrade · 1–2 weeks · after Phase 2 is green

1. Replace `react-images` + `react-photo-gallery` (both abandoned, both React-16-only) with
   `yet-another-react-lightbox`. **This is the actual blocker** — not our code.
2. React 16 → 19. `ReactDOM.render` → `createRoot`.
3. react-router 4 → 7/8: `Switch`→`Routes`, `component=`→`element=`, `Redirect`→`Navigate`.
   `RoutesAsync.jsx` gets deleted in favour of `React.lazy` + `Suspense` — a net loss of code.
4. Class → function components **opportunistically**, file by file as you touch them. Not a
   big-bang conversion.

## Phase 4 — Stop needing a developer · ongoing

The things that reduce the yearly workload:

- Registration open/close as an env var or DB flag, not a source constant (task Q-4)
- The year filter in `Lectura.jsx` driven by data, not a hardcoded literal (task Q-2)
- Move `dictionary.js` out of the bundle so copy changes don't need a rebuild
- Finish or remove the half-built school-edit modal in `AdminList.jsx`
- Split `leo` out of the shared `api` repo, or at least comment out the dormant products
- TypeScript, incrementally, only if this project keeps getting investment

## Explicitly not doing

- **Next.js.** It is a brochure site with one admin table. SSR buys nothing and costs a lot.
- **Redux / Zustand.** Component state is genuinely enough here.
- **Syncing the GitHub fork.** We are 375 commits ahead of `txiverke/leo` and the upstream is
  unrelated. Never click "Sync fork".
- **React 19 before tests and staging exist.** That is the one path that breaks a live client site.
