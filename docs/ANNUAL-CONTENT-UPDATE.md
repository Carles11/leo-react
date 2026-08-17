# Annual content update runbook

**Run this every September**, when Celia sends the new edition's texts, audios, bases and dates.
Budget half a day. Work on `development`, verify against **staging**, then release.

**Last revised:** 17 Aug 2026 — simplified after tasks Q-2, A-9 and A-12. Two former steps are gone.

> `year` on a `leo_documents` entry means the **edition year** — the year schools compete and
> download the texts. Not the year the texts were written.

---

## 0 · Before you start

- [ ] **Take a backup.** `cd api && yarn backup` — four collections dumped to `backups/<timestamp>/`.
      Do this first, every time.
- [ ] Confirm the edition year. The site labels an edition by the year the **final** happens, and
      registration opens the previous October. `getNextEditionYear()` in `src/utils/helpers.js`
      encodes this: after May it returns `currentYear + 1`.
- [ ] Collect from the client: reading texts and audios (**if they changed** — often they don't),
      the German *Teilnahmebedingungen* PDF, updated printable forms, and **all the dates**
      (see step 3).
- [ ] Confirm we are before October. If registration has already opened, treat this as a hotfix.

---

## 1 · Reading texts — did they change this year?

**Ask the client explicitly.** The texts frequently carry over between editions.

### If the texts are UNCHANGED

- [ ] Upload nothing.
- [ ] In Atlas → `api_production` → `api` → **`leo_documents`**, **duplicate the most recent
      document** and change only its `year` to the new edition year.

      Yes, even though the content is identical. `year` means the edition year, so every edition
      gets an entry. It costs ~30 KB and keeps the data honest — otherwise the newest entry drifts
      out of step with the edition actually running.

### If the texts are NEW

- [ ] Upload each text (PDF) and audio (mp3) to Cloudinary — *check last year's URLs in
      `leo_documents` for the folder convention.*
- [ ] Insert a new document, using the previous one as a template:

```jsonc
{
  "title": "Descargue aquí los textos y los audios de la edición de NEW.",
  "year": NEW,                        // number, not string
  "projects": [
    {
      "title": "Textos de lectura de la categoría A1",
      "items": [
        { "title": "Nombre del texto", "url": "https://…/texto.pdf", "audio": "https://…/audio.mp3" }
      ]
    },
    { "title": "…A2" }, { "title": "…B1" }, { "title": "…B2" }
  ]
}
```

`audio` is optional per item — the headphones button only renders when it is present.

### Either way

- [ ] Verify at `https://www.api-crix.com/api/leo/documents` that the new entry comes back **with
      its `year` field**. If `year` is missing, the API's Mongoose schema is stripping it — stop and
      fix that first (api task A-19/A-8).

> **No code change is needed for this step.** Since task Q-2, `Lectura.jsx` renders whichever
> edition has the highest `year`. Adding the entry is enough.

---

## 2 · ~~Point the reading-texts page at the new year~~ — REMOVED

This step no longer exists. `src/views/Lectura.jsx` used to filter on a hardcoded year, which meant
forgetting this step made the page render **empty with no error** — the single most likely way for
this whole process to fail quietly.

Task Q-2 made it data-driven. The page now shows the newest edition automatically, has a loading
state, and shows *"Los textos de lectura se publicarán aquí en breve."* if there is nothing to show.

---

## 3 · Update the dates and copy

`src/utils/dictionary.js` — **edit only the string values, never reformat the file.** It is
eslint-ignored deliberately; whitespace diffs on it are unreviewable.

- [ ] `CONCURSO_BASES_TITLE` — the ordinal ("decimoquinta edición" → next ordinal)
- [ ] `CONCURSO_BASES_PARAGRAPH_2` — also names the ordinal, plus the sponsor list
- [ ] `CONCURSO_EDICION_FINAL_INSCRIPTION_DUE` — registration deadline
- [ ] `CONCURSO_EDICION_FINAL_NEXT_DATE` — the final
- [ ] `CONCURSO_EDICION_SF_INTERNAL_SELECTION_LIMIT` — internal school selection deadline
- [ ] `CONCURSO_EDICION_SF_MUST_BE_DONE_BY` — semifinals completed by
- [ ] `CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE`
- [ ] `CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE`
- [ ] `CONCURSO_EDICION_ENVIO_AUDIOS` — audio submission window
- [ ] `CONCURSO_EDICION_TXT` / `CONCURSO_EDICION_TXT_CONT`
- [ ] `FORM_WARNING` — banner above the registration form
- [ ] `FORM_CANCELLATION` — the "plazo terminado" message
- [ ] Sponsors — ask whether any changed; logos live in `src/assets/imgs/` and render in `Footer.jsx`

Final sweep: `grep -n "OLD_YEAR" src/utils/dictionary.js`

---

## 4 · Swap the static documents

- [ ] German rules PDF → `src/assets/docus/bases_aleman/`, update the import at the top of
      `src/views/Bases.jsx`. **Delete the old file** — everything in `src/assets` ships in the bundle.
- [ ] Printable forms in `src/assets/docus/impresos/` — replace if the client sent new versions.
      Imports at the top of `src/views/Impresos.jsx` stay the same if the filenames do.
- [ ] Data-protection form `Datenschuetzerklaerung_SCHULEN_edit_signature.pdf` — imported by both
      `Impresos.jsx` and `Register.jsx`.

---

## 5 · Roll the year defaults

- [ ] `src/components/AdminList.jsx` (~line 17): `year: 2026 || 2025` — **this is a bug**, the `||`
      always yields the first value. Set it to the new edition year, or fix it properly (task Q-1).
- [ ] `src/components/ImageGallery.jsx` (~line 17): `year: 2025` — set to the most recent year that
      actually has photos in `leo_images`, **not** the upcoming edition. Photos are taken after the
      final.
- [ ] `src/views/Bases.jsx` — check for any inline year in the body copy.

---

## 6 · Open registration

- [ ] `src/components/Register.jsx`, near the top: `const FORM_INPUTS_DISABLED = true;` → `false`
- [ ] In the same file's `render()`, swap the active `<h4>`: `DIC.FORM_WARNING` while open,
      `DIC.FORM_CANCELLATION` once closed
- [ ] Remove the `console.log({ FORM_INPUTS_DISABLED })` while you are there

*(Task Q-4 would move this to an env var and remove the code change entirely.)*

---

## 7 · Verify against STAGING first

Since task A-20, local development runs against the `api-staging` cluster, so you can exercise the
whole thing without touching live data.

**Terminal 1:**
```bash
cd api && yarn dev:start        # must print: connected via MONGODB_DEV
```
**Terminal 2:**
```bash
cd leo-react && yarn start
```

If you added a `leo_documents` entry, add the same one to **staging** (`api_development`) so you can
see it render.

At `http://localhost:3000`:

- [ ] `/textos-de-lectura` shows the **new edition**, and every download works — document *and*
      audio, on desktop **and iOS Safari** (there is history here: commit `a0962ec`)
- [ ] `/bases-del-concurso` shows the new dates and the German PDF downloads
- [ ] `/impresos` — every download works
- [ ] Home page: the registration form submits, validates, shows the success message
- [ ] `/colegios-inscritos` lists the new school
- [ ] `/admin` → log in → list defaults to the new year, Excel export and print both work

Delete any test school from staging afterwards.

---

## 8 · Release

- [ ] `npx eslint src && yarn build` locally
- [ ] Merge to `development`, push
- [ ] **Wait for the green tick** in GitHub Actions. That is the gate.
- [ ] Merge `development` → `master`, push. **This deploys** — Render autodeploys from `master`.
- [ ] Hard-refresh the live site and click through the same list as step 7.
- [ ] Tell the client it is live, and ask them to check on their own device.

> Since task S-9, returning visitors get the new build automatically. Before that fix, a stale
> service worker pinned them to whatever version they first loaded — which meant content updates
> did not reach the organisers until they manually cleared their cache.

---

## Things that will still bite you

- Editing `dictionary.js` with a formatter on. Turn off format-on-save for that file.
- Adding a `leo_documents` entry with `year` as a string `"2027"` — the comparison expects a number.
- Assuming the old PDFs were deleted. They are still in the bundle and still shipping.
- Forgetting step 6, so registration stays closed when the season opens.
- Forgetting to add the entry to **staging** as well, then wondering why local testing shows the old
  edition.
