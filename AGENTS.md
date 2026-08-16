# leo-react — agent guide

Read this before touching anything. Then read `docs/` for the task at hand.

## What this is

Public website for **"Leo, leo… ¿Qué lees?"**, the Spanish-language reading contest run by
Hessenwaldschule Weiterstadt (Hessen, Germany). It is a **live production site with real
users** — teachers at German schools registering their pupils.

- **Live:** https://www.leo-leo-hessen.com
- **Hosting:** Render.com (static build from this repo)
- **Backend:** separate repo `Carles11/api`, deployed on DigitalOcean. Only the `/api/leo/*`
  slice is in use.
- **Database:** MongoDB Atlas, cluster `api`, db `api`, collections `leo_schools`,
  `leo_documents`, `leo_images`, `leo_users`.
- **Repo is PUBLIC on GitHub.** Never commit secrets, credentials, or personal data.

## The one rule that matters: the seasonal calendar

This project has a hard annual rhythm. **Check the date before proposing any change.**

| Window | Status | What is allowed |
|---|---|---|
| **May – September** | 🟢 **OFF-SEASON** | Breaking changes, dependency upgrades, framework migrations, refactors |
| **October – April/May** | 🔴 **FROZEN** | Content/copy only, and security hotfixes. No dependency bumps. No refactors. No framework changes. |

Registration opens in **October** and the final is in **late May**. During the frozen window a
broken deploy means schools cannot register, and there is no staging environment to catch it.

If you are asked to do something risky during the frozen window, say so and propose deferring
it to the next off-season. Do not just do it.

## Stack

| | |
|---|---|
| React | 16.14 — **class components throughout**, no hooks, no state library |
| Router | react-router-dom 4.3 (`Switch`, `component=`, `Redirect`) |
| Build | Create React App 5 + `react-app-rewired` (`config-overrides.js` polyfills crypto/stream/vm) |
| Tests | Jest + **Enzyme** (adapter for React 16), mostly giant snapshots |
| Styling | Plain CSS files under `src/css/`. `styled-components` is installed but **unused** |
| Lint | ESLint 9 flat config + Prettier |
| Node | ≥18 (local dev is on 22) |

## Commands

```bash
yarn start          # dev server (react-app-rewired)
yarn build          # production build -> ./build
yarn test           # NOTE: runs eslint then jest --watch — the watch flag hangs CI
npx eslint src      # lint only
```

`server.js` in the repo root is **dead and broken** (uses `express.cookieParser()` / `express.session()`,
removed in Express 4, plus an undefined `expressJwt`). Render serves the static `build/` directory.
Do not "fix" it — see `docs/TASKS.md`.

## Git conventions

- Work on **`development`**. Merge to `master` to release. Render deploys from — *verify which branch*
  (see `docs/DEPLOYMENT.md`).
- This repo is a **fork of `txiverke/leo`**. GitHub will offer to "Sync fork" — **never click it.**
  We are 375 commits ahead and the upstream is unrelated now.
- `master` is currently **unprotected**. See `docs/TASKS.md` task S-8.
- One task = one branch = one PR. Keep PRs small enough to review in ten minutes.

## Hard rules

1. **Never commit** `.env`, credentials, API keys, or any school's contact details.
2. **Never reformat `src/utils/dictionary.js`.** It is eslint-ignored on purpose; whitespace diffs
   on it are unreviewable. Edit only the specific string values you were asked to change.
3. **Never delete or regenerate the snapshot files** in `__tests__/__snapshots__/` as a way of
   making tests pass. If a snapshot fails, either the change is wrong or the snapshot is being
   retired deliberately — say which.
4. **Do not upgrade React, react-router, or react-scripts** outside the off-season window, and not
   before `docs/ROADMAP.md` Phase 2 is complete.
5. **Do not add new dependencies** without saying why in the PR description. This project's whole
   problem is unmaintained dependencies.
6. **Do not introduce hooks/function components in a file you are not otherwise rewriting.** Mixed
   paradigms in one file are worse than old paradigms consistently applied.
7. Content and dates change every year. When you see a hardcoded year, **flag it** — do not silently
   "fix" it to `new Date().getFullYear()` unless the task says to. The edition year logic is
   deliberately offset (see `getNextEditionYear()` in `src/utils/helpers.js`).

## Where things live

```
src/
  Routes.jsx            all routes; hand-rolled code splitting via RoutesAsync
  RoutesAsync.jsx       wraps import() — will be replaced by React.lazy in Phase 3
  utils/
    dictionary.js       ALL user-facing Spanish copy + contest dates. DO NOT REFORMAT.
    API.js              fetch wrapper; token from localStorage
    helpers.js          getNextEditionYear() — the edition-year rule
    constants.js        footer links, nav paragraphs
  config/               per-NODE_ENV API URLs, read from REACT_APP_* env vars
  components/
    Register.jsx        the registration form. FORM_INPUTS_DISABLED constant gates the season.
    AdminList.jsx       admin table: filter by year, export Excel, print, delete
    HOC/withAuth.jsx    client-side "is there a token" check only
  views/
    Bases.jsx           contest rules + German Teilnahmebedingungen PDF
    Lectura.jsx         reading texts, fetched from API, FILTERED BY HARDCODED YEAR
    Impresos.jsx        downloadable forms, imported as static assets
    Colegios.jsx        public list of registered schools
  assets/docus/         PDFs and DOCX shipped in the bundle, organised by year
```

## Working with coding agents

Learned the hard way, 16 Aug 2026. These are not optional.

1. **Never run `yarn install`, `yarn add`, or any package install command.** OpenCode runs in
   Linux; this repo is developed on Windows. A Linux install rewrites `node_modules/.bin` with
   POSIX symlinks (no `.cmd` shims) and installs Linux binaries for native modules like `bcrypt`,
   which then fail with *"is not a valid Win32 application"*. If a dependency must change, edit
   `package.json` only and say so — the human runs the install on Windows.

2. **Commit your work.** Create the branch, make the edits, `git add`, `git commit`. Reporting a
   task as done while leaving changes uncommitted in the working tree has caused three separate
   tangles. A task is not finished until `git status --short` is empty and `git log -1` shows
   your commit.

3. **Apply the change — do not stop at a plan** unless explicitly asked to plan. If asked to plan
   first, say so clearly and wait.

4. **Report the branch name you are actually on**, verified with `git branch --show-current`, not
   the one you intended to create.

### For the human, before switching branches

Run `git status --short`. Empty means safe to check out. Anything listed means the agent left work
uncommitted — commit it on the current branch first.

## Definition of done

Before you say a task is finished:

- [ ] `npx eslint src` passes
- [ ] `yarn build` completes without new warnings
- [ ] You have described what you changed and, explicitly, **what you did not test**
- [ ] No secrets, no PII, no `console.log` left in the diff
- [ ] If it touches the registration form, the admin panel, or the API contract: say plainly that
      it needs manual verification against a real browser before merge

## Related docs

- `docs/ANNUAL-CONTENT-UPDATE.md` — the yearly texts/bases/dates runbook ← **use this in September**
- `docs/TASKS.md` — the prioritised work queue. Start here.
- `docs/ROADMAP.md` — phased plan and the reasoning behind the sequencing
- `docs/ARCHITECTURE.md` — how the pieces fit
- `docs/DEPLOYMENT.md` — Render config and env vars
