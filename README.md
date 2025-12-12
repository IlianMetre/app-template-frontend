# App Template

Production-grade Next.js starter with authentication, Postgres, Prisma, and shadcn/ui.

## Stack
- Next.js (App Router) + TypeScript + pnpm
- Tailwind CSS + shadcn/ui components
- Auth.js (NextAuth) Credentials provider + Prisma Adapter
- Postgres + Prisma (Route Handlers for API)
- Docker Compose for Postgres

## Quickstart
1. Copy envs: `cp .env.example .env` (or `copy .env.example .env` on PowerShell)
2. Install deps: `pnpm i`
3. Start database: `docker compose up -d db`
4. Run migrations: `pnpm db:migrate`
5. Seed default user: `pnpm db:seed`  
   - Admin user: `admin@local.dev` / `admin123!`
6. Dev server: `pnpm dev` (http://localhost:3000)

## Scripts
- `pnpm dev` – run Next.js locally
- `pnpm lint` – ESLint
- `pnpm typecheck` – `tsc --noEmit`
- `pnpm db:generate` – `prisma generate`
- `pnpm db:migrate` – `prisma migrate dev --name init`
- `pnpm db:seed` – `prisma db seed` (creates admin user)
- `pnpm db:studio` – Prisma Studio

## API
- `GET /api/health` → `{ ok: true }`
- `GET /api/me` → current user (requires auth)
- `POST /api/auth/[...nextauth]` → NextAuth handlers (Credentials)

## Auth & Pages
- Protected routes are server-side guarded; unauthenticated users redirect to `/login`.
- Visiting `/login` while authenticated redirects to `/`.
- Header shows signed-in email and includes logout.

## Database & Prisma
- Schema lives in `prisma/schema.prisma`; initial migration in `prisma/migrations/0001_init`.
- Seed script sets up the default admin user.

## Project Structure
- `app/(auth)/login` – login page + server action
- `app/(app)/` – protected app shell and home page
- `app/api/*` – route handlers (`health`, `me`, NextAuth)
- `components/app-shell` – header + sidebar nav
- `components/ui` – shadcn/ui primitives
- `lib` – auth/db/session/password utilities
- `prisma` – schema, migration, seed

## Notes
- Set `NEXTAUTH_SECRET` in `.env` before running in production.
- `DATABASE_URL` should point to your Postgres instance (matches docker-compose defaults).
