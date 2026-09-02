# Annual Update Roadmap

**What this doc solves:** the yearly *content refresh* for the reading contest — texts,
documents, gallery photos, registration season and sponsors. It is the **master index** that
ties every workstream together and points to the per-repo runbook for each.

**What it is NOT:** `docs/ROADMAP.md` in this repo is the separate phased *technical* roadmap
(migration/security, Phase 0–3). Keep the two distinct. This one is about the calendar-cadence
content update; that one is about codebase health.

> Run this **every September**, in the 🟢 off-season window, before registration opens in
> October. During the 🔴 frozen window (Oct–Apr/May) only content/security hotfixes are allowed.

---

## The four workstreams at a glance

| # | Workstream | Which repo | Runbook | When |
|---|---|---|---|---|
| **A** | Reading texts & document pack (`leo_documents` + static PDFs/DOCX + dates/copy) | leo-react + api | `docs/ANNUAL-CONTENT-UPDATE.md` (leo-react) + `docs/LEO-DOCUMENTS-YEAR-ROLLOVER.md` (api) | Sep |
| **B** | Gallery photos (`leo_images` from Google Drive + gallery client) | api (script) + leo-react (gallery) | `docs/IMPORT-IMAGES.md` (api) | Sep–Oct |
| **C** | Registration season (open/close + dates/copy) | leo-react | `docs/ANNUAL-CONTENT-UPDATE.md` | Oct |
| **D** | Sponsors & static content (logos, `Footer.jsx`, sponsor copy) | leo-react | `docs/ANNUAL-CONTENT-UPDATE.md` | Sep (or as needed) |

Each runbook above is authoritative for its workstream. **Read the linked runbook for the step
you are on** — this page is the navigation layer, not the detailed steps.

---

## Sequencing for a normal year

1. **September** — confirm the edition year.
   `getNextEditionYear()` in `src/utils/helpers.js` encodes the rule: after May it returns
   `currentYear + 1`. The Mongo `year` on `leo_documents` is the **label on the client's doc
   pack** (e.g. pack labelled "2026" → `year: 2026`), which is *not* always the contest year.

2. **Workstream A — texts & documents.**
   - Ask the client whether the reading texts changed. If **unchanged**, just duplicate the
     newest `leo_documents` row with a new year (see the documents rollover runbook in the api
     repo). If **new**, upload texts/audios and insert a fresh document.
   - Swap static PDFs/DOCX in `src/assets/docus/` and update imports in `Bases.jsx`/`Impresos.jsx`.
   - Update dates and Spanish copy in `src/utils/dictionary.js` (edit string values only — the
     file is eslint-ignored on purpose).

3. **Workstream B — gallery photos.** Import the photos from the public Google Drive folder
   into `leo_images` with the year-`<N>` flag (api script). Then set the **gallery default year**
   in `src/components/ImageGallery.jsx` (`year:` ~line 17) to the year of the newest photos.

4. **Workstream C — registration.** In October, flip `FORM_INPUTS_DISABLED = false` in
   `Register.jsx` and swap the warning/cancellation copy. See the runbook step 6.

5. **Workstream D — sponsors/static.** Update sponsor list + logos in `Footer.jsx`/`dictionary.js`
   if the client changed them.

6. **Verify against staging, then release** (see the runbook steps 7–8).

---

## The Google-Drive image gotcha (recorded from 2026)

**Symptom:** every year's gallery images render blank in local/dev, but all render in
production. The blank set even changes between page refreshes.

**Root cause (confirmed via DevTools + curl):** the gallery serves Drive images via
`https://lh3.googleusercontent.com/d/{FILE_ID}`. Google rate-limits this endpoint with
**HTTP 429 (text/html)** when the request carries a non-production `Referer` — e.g.
`http://localhost:3000`. Production works because it sends the live-domain referer
(`https://www.leo-leo-hessen.com`). The `<img>` element and the `leo_images` data are correct;
only the cross-origin request is throttled in dev.

**Fix (applied, client-side, durable):** send **no referer** so Google serves the images
regardless of origin:
- `public/index.html` sets `<meta name="referrer" content="no-referrer" />` — site-wide, covers
  the grid *and* the lightbox and any future image component.
- `ImageGallery.jsx` also tags each photo with `referrerpolicy="no-referrer"` (explicit,
  redundant belt-and-suspenders).

**Why no migration:** the `lh3` URLs themselves are correct for production. No `leo_images` row
needs editing, no URL-scheme change, no re-import. Old years broken only in dev are acceptable
(prod is canonical); fix them the same way if a dev pass ever needs them.

**Verification:** hard-refresh the local gallery, DevTools → Network → filter `img`: the failing
`429` requests are gone, all return `200 image/jpeg`.

---

## Cross-repo navigation

- **leo-react `docs/ANNUAL-CONTENT-UPDATE.md`** — detailed step-by-step for texts, dates, static
  docs, registration, verify and release.
- **api `docs/LEO-DOCUMENTS-YEAR-ROLLOVER.md`** — Mongo rollover of `leo_documents`, all in one
  command (`$merge`, new `_id`, verify by year distribution).
- **api `docs/IMPORT-IMAGES.md`** — importing a Drive folder into `leo_images` via
  `scripts/import-drive-images.js` (auto width/height, dedupe, staging-first).
