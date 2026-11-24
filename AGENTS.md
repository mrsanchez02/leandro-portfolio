<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Agent Instructions

Read these files before implementing features:

- docs/project-brief.md
- docs/design-system.md

## Development Rules

1. Follow the approved design system.
2. Do not introduce unnecessary dependencies.
3. Use TypeScript with strict typing.
4. Prefer React Server Components.
5. Use Client Components only when necessary.
6. Keep content separate from UI components.
7. Implement accessible, semantic HTML.
8. Use Tailwind CSS v4 conventions.
9. Do not add databases, authentication, or APIs.
10. Preserve compatibility with static export.
11. Avoid premature abstractions.
12. Never invent professional information.

## Workflow

Before implementing a major feature:
- Inspect the existing project.
- Explain the proposed changes.
- Identify files to create or modify.
- Wait for approval when requested.

After implementation:
- Run lint.
- Run type checking.
- Run production build.
- Report errors and warnings.
- Summarize changed files.

Do not implement unrelated features.
