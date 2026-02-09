# ✨ Vibe Starter

A Next.js starter template optimized for **AI-assisted development**. The documentation structure matters as much as the code.

## Why This Exists

When building with AI coding assistants (Cursor, Claude, Copilot, etc.), having well-structured documentation dramatically improves results. This starter gives you:

- **MASTERPLAN.md** — Vision, goals, and success criteria
- **AGENTS.md** — Instructions for AI assistants
- **.cursorrules** — Cursor-specific coding patterns
- **Structured specs** — Templates for features, research, decisions
- **Design system** — shadcn/ui components with documented patterns

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — Accessible component library
- [Supabase](https://supabase.com/) — Auth + Database (optional)
- [Drizzle ORM](https://orm.drizzle.team/) — Type-safe database queries (optional)

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/vibe-starter.git my-app
cd my-app
npm install
```

### 2. Optional: Set Up Supabase (Auth + DB)

This starter runs in **zero-config mode** (no `.env.local`) for static/UI pages.

If you want auth + database features (e.g. `/login`, `/signup`, `/dashboard`, Drizzle migrations):

1. Create a project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your Supabase credentials (Settings → API + Database)

### 3. Optional: Set Up Database (Drizzle)

```bash
# Generate migrations from schema
npm run db:generate

# Push schema to your database (requires DATABASE_URL)
npm run db:push

# Or open Drizzle Studio to view data
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth)/       # Auth pages (login, signup)
│   │   ├── dashboard/    # Protected pages
│   │   ├── design-system/
│   │   └── brand/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   └── lib/
│       ├── supabase/     # Supabase client setup
│       └── db/           # Drizzle schema & client
│
├── /research             # Research docs
├── /docs
│   ├── /specs            # Feature specifications
│   └── /decisions        # Architecture Decision Records
├── /design               # Brand guidelines
│
├── MASTERPLAN.md         # Vision and goals
├── IMPLEMENTATION-PLAN.md # Current sprint
├── AGENTS.md             # AI assistant instructions
├── .cursorrules          # Cursor-specific rules
└── .env.example          # Environment template
```

## Features

### Authentication
- Email/password signup and login
- Protected routes (middleware-based)
- Session management with Supabase Auth

### Database
- Drizzle ORM with type-safe queries
- Example schema (profiles, items)
- Migration commands ready

### UI Components
Pre-installed shadcn/ui components:
- Button, Card, Badge, Tabs
- Input, Label, Form
- Dialog, Sonner (toasts)

Add more with: `npx shadcn@latest add [component]`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |

## Documentation

| File | Purpose |
|------|---------|
| `MASTERPLAN.md` | What you're building and why |
| `IMPLEMENTATION-PLAN.md` | Current sprint focus |
| `AGENTS.md` | Instructions for AI assistants |
| `.cursorrules` | Cursor-specific coding patterns |
| `design/brand-guidelines.md` | Visual identity |
| `design/design-system.md` | Component patterns |

## For AI Assistants

If you're an AI working on this codebase:

1. **Read first:** `MASTERPLAN.md` → `IMPLEMENTATION-PLAN.md` → `AGENTS.md`
2. **Follow patterns** in `.cursorrules`
3. **Check specs** in `/docs/specs/` before implementing features
4. **Update** `IMPLEMENTATION-PLAN.md` when completing tasks

## Customization

1. Update `MASTERPLAN.md` with your product vision
2. Customize colors in `src/app/globals.css`
3. Modify Drizzle schema in `src/lib/db/schema.ts`
4. Add your logo and update brand guidelines
5. Create feature specs in `/docs/specs/`

## License

MIT
