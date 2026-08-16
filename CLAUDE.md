# CLAUDE.md

@AGENTS.md

---

## Claude Code specific notes

- The canonical guide is `AGENTS.md` (imported above). It is shared with other agent tools —
  keep instructions there, not here, so both stay in sync.
- Start every non-trivial session by reading `docs/TASKS.md` and picking **one** task.
- **Check today's date against the seasonal freeze table in `AGENTS.md` before proposing changes.**
  October–April is a hard freeze on anything but content and security fixes.
- Prefer `npx eslint src` over `yarn test` for a quick check — `yarn test` runs `jest --watch`
  and will hang.
- There is no staging environment yet (task S-6). Until there is, treat every merge to the
  release branch as a production deploy and say so.
