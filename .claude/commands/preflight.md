---
description: Pre-merge check before releasing to the live site
---

Pre-merge check before this goes to the live site.

Run:

```bash
npx eslint src
yarn build
git diff --stat master...HEAD
git diff master...HEAD
```

Then report:

1. **Seasonal check.** Today's date vs. the freeze table in `AGENTS.md`. If we are in the frozen
   window (October–April/May) and this change is not content or security, say so plainly and
   recommend deferring it.
2. **Secrets and PII.** Anything in the diff that looks like a credential, a token, an email
   address, or a phone number.
3. **Blast radius.** Which pages a user could reach that this change affects. Call out the
   registration form, the admin panel, and anything touching `utils/API.js` specifically.
4. **API contract.** Whether this depends on any change in the sibling `api` repo. If so, that
   one deploys first.
5. **What you could not verify.** Be specific. There is no staging environment, so anything
   needing a real browser or real data is on me.

Do not merge anything. Just report.
