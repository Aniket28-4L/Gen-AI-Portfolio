# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

Current primary artifact is a frontend-only React/Vite portfolio website for Aniket Pandey, built as a premium single-page personal brand site focused on GenAI systems, AI product building, projects, experience, technical proof, and contact conversion.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Portfolio frontend**: React + Vite + Tailwind CSS + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/aniket-portfolio run dev` — run the Aniket portfolio web app locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
