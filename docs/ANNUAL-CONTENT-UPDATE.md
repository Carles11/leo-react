# Annual content update runbook

**Run this every September**, when Celia sends the new edition's texts, audios, bases and dates.
Budget half a day. Do it on `development`, verify locally, then release.

There is no single place to change the year. It is hardcoded in **six** files plus the database.
Work through this list in order — the order matters, because the DB entry must exist before the
frontend can show it.

> Replace `NEW` with the edition year (e.g. `2027`) and `OLD` with the one it replaces
> (e.g. `2026`) throughout.

---

## 0 · Before you start

- [ ] Confirm the edition year. **The site labels an edition by the year the final happens**, and
      registration opens the previous October. `getNextEditionYear()` in `src/utils/helpers.js`
      encodes this: after May, it returns `currentYear + 1`.
- [ ] Collect from the client: reading texts (PDF), audio files, the German
      *Teilnahmebedingungen* PDF, updated forms, and **all the dates** (see step 4).
- [ ] Confirm we are before October. If registration has already opened, treat this as a
      hotfix and be correspondingly careful.

---

## 1 · Upload the assets

Reading texts and audios are served from URLs stored in MongoDB, not from the repo.

- [ ] Upload each text (PDF) and audio (mp3) to Cloudinary — *verify the account/folder
      convention against last year's URLs in `leo_documents`.*
- [ ] Keep the exact URLs; you need them in the next step.

## 2 · Add the new edition to MongoDB

Atlas → cluster `api` → db `api` → collection **`leo_documents`** → Insert Document.

Copy last year's document as a template. Shape:

```jsonc
{
  "title": "Descargue aquí los textos y los audios de la edición de NEW.",
  "year": NEW,
  "projects": [
    {
      "title": "A1",
      "items": [
        { "title": "Nombre del texto", "url": "https://…/texto.pdf", "audio": "https://…/audio.mp3" }
      ]
    },
    { "title": "A2", "items": [ /* … */ ] },
    { "title": "B1", "items": [ /* … */ ] },
    { "title": "B2", "items": [ /* … */ ] }
  ]
}
```

- [ ] Document inserted with the correct `year` (as a **number**, not a string).
- [ ] `audio` is optional per item — the download button only renders when it is present.
- [ ] Verify at `https://<api-host>/api/leo/documents` that the new entry comes back **with its
      `year` field**. If `year` is missing from the response, the API's Mongoose schema is
      stripping it — stop and fix the API schema first (API task A-6).

## 3 · Point the reading-texts page at the new year

`src/views/Lectura.jsx` — this is the one that silently breaks. The page filters on a
**hardcoded year**; if you skip this, the new texts simply do not appear and nobody gets an error.

- [ ] Line ~109: `{d.year === OLD && d.projects.map(...)}` → change `OLD` to `NEW`.
- [ ] Line ~79: the `d.year === 2024` block renders a hardcoded list of audio narrators
      ("Textos A1-B1 leídos por Sara Casado…"). Update the year and the names if the client
      supplied new ones, or delete the block if it no longer applies.

## 4 · Update the dates and copy

`src/utils/dictionary.js` — **edit only the string values, never reformat the file.**

Keys that carry a date or an edition number:

- [ ] `CONCURSO_BASES_TITLE` — the ordinal ("decimoquinta edición" → next ordinal)
- [ ] `CONCURSO_BASES_PARAGRAPH_2` — also names the ordinal year
- [ ] `CONCURSO_EDICION_FINAL_INSCRIPTION_DUE` — registration deadline
- [ ] `CONCURSO_EDICION_FINAL_NEXT_DATE` — the final
- [ ] `CONCURSO_EDICION_SF_INTERNAL_SELECTION_LIMIT` — internal school selection deadline
- [ ] `CONCURSO_EDICION_SF_MUST_BE_DONE_BY` — semifinals completed by
- [ ] `CONCURSO_EDICION_SF_LATINOAMERICA_INSCRIPTION_DUE`
- [ ] `CONCURSO_EDICION_SF_LATINOAMERICA_NEXT_DATE`
- [ ] `CONCURSO_EDICION_ENVIO_AUDIOS` — audio submission window
- [ ] `CONCURSO_EDICION_TXT` / `CONCURSO_EDICION_TXT_CONT`
- [ ] `FORM_WARNING` — the banner above the registration form
- [ ] `FORM_CANCELLATION` — the "plazo terminado" message (currently commented out in
      `Register.jsx`; swap which of the two `<h4>` lines is active as the season turns)
- [ ] Sponsor list in `CONCURSO_BASES_PARAGRAPH_2` and `CONCURSO_PATROCINA_TXT` — ask the client
      whether sponsors changed; logos live in `src/assets/imgs/` and are rendered in `Footer.jsx`

Search the whole file for the old year as a final sweep: `grep -n "OLD" src/utils/dictionary.js`.

## 5 · Swap the static documents

- [ ] German rules PDF: drop the new file into `src/assets/docus/bases_aleman/` and update the
      import at the top of `src/views/Bases.jsx`
      (currently `Vorlesewettbewerb_Spanisch_Teilnahmebedingungen_2025_26.pdf`).
      **Delete the old file** — every PDF in `src/assets` is bundled and shipped.
- [ ] Printable forms in `src/assets/docus/impresos/` (Cuadro de ganadores, Impreso de puntos
      para el jurado, Lista de control, certificate template) — replace if the client sent new
      versions; the imports at the top of `src/views/Impresos.jsx` keep the same names if the
      filenames do.
- [ ] Data-protection form `Datenschuetzerklaerung_SCHULEN_edit_signature.pdf` — imported by both
      `Impresos.jsx` and `Register.jsx`.

## 6 · Roll the year defaults

- [ ] `src/components/AdminList.jsx` line ~17: `year: 2026 || 2025` — **this is a bug**, the `||`
      always yields the first value. Set it to the new edition year (or, better, derive it from
      `getNextEditionYear()` and delete the constant — see task Q-1).
- [ ] `src/components/ImageGallery.jsx` line ~17: `year: 2025` — set to the most recent year that
      actually has photos in `leo_images`, not the upcoming edition (photos are taken *after* the
      final).
- [ ] `src/views/Bases.jsx` — check for any inline year in the body copy.

## 7 · Open registration

- [ ] `src/components/Register.jsx`, near the top: `const FORM_INPUTS_DISABLED = true;` → `false`.
- [ ] In the same file's `render()`, swap the active `<h4>`: `DIC.FORM_WARNING` while open,
      `DIC.FORM_CANCELLATION` once closed.
- [ ] Remove the `console.log({ FORM_INPUTS_DISABLED })` while you are in there.

*(Once task Q-4 is done this becomes an env var and step 7 stops needing a code change.)*

## 8 · Verify locally

```bash
yarn start
```

- [ ] `/textos-de-lectura` shows the **new** texts, and every download button works — both the
      document and the audio, on desktop **and on iOS Safari** (there is history here: commit
      `a0962ec "fixed audios download for ios"`).
- [ ] `/bases-del-concurso` shows the new dates and the German PDF downloads.
- [ ] `/impresos` — every download works.
- [ ] Home page registration form: submits, validates, shows the success message, and the school
      appears in `leo_schools` with `year: NEW`.
- [ ] `/colegios-inscritos` lists it.
- [ ] `/admin` → log in → the list defaults to the new year, Excel export and print both work.
- [ ] `npx eslint src && yarn build`

## 9 · Release

- [ ] Merge `development` → release branch, confirm the Render deploy went green.
- [ ] **Hard-refresh the live site** and check `/textos-de-lectura` again. The old CRA service
      worker caches aggressively; if you see stale content, that is task S-9 biting.
- [ ] Tell the client it is live, and ask them to check on their own device.

---

## Things that will bite you

- Forgetting step 3. The site will look fine and show *nothing* under reading texts.
- Editing `dictionary.js` with a formatter on. Turn off format-on-save for that file.
- Adding the new `leo_documents` entry with `year` as a string `"2027"` — the filter uses `===`.
- Assuming the old PDFs were deleted. They are still in the bundle and still shipping.
