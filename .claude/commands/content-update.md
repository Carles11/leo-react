---
description: Run the annual edition content update (texts, bases, dates, registration toggle)
---

Run the annual content update for the **$ARGUMENTS** edition.

1. Read `docs/ANNUAL-CONTENT-UPDATE.md` in full before changing anything.
2. Read `AGENTS.md` and confirm we are in a window where this is safe.
3. Work through the runbook **in order**. The database entry must exist before the frontend
   change in step 3 will do anything.
4. Do not reformat `src/utils/dictionary.js` — change only the specific string values listed.
5. Stop and ask me if:
   - the new `leo_documents` entry is not yet in MongoDB
   - a date, ordinal, or sponsor in the runbook's step 4 is missing from what I gave you
   - a PDF referenced by the runbook is not in `src/assets/docus/`

When you are done, give me the step-8 verification checklist as a list I can click through
myself, and tell me explicitly which items you could not verify.
