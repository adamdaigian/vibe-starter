# AGENTS.md

> Instructions for AI assistants working on this codebase.

## Before You Start

1. **Read `MASTERPLAN.md`** — Understand what we're building and why
2. **Check `IMPLEMENTATION-PLAN.md`** — See what's currently in progress
3. **Review the relevant spec** in `/docs/specs/` for any feature work

## Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/
│   │   ├── ui/           # shadcn/ui primitives (don't modify)
│   │   └── [feature]/    # Feature-specific components
│   └── lib/              # Utilities, helpers, types
│
├── /research             # Research docs, competitive analysis
├── /docs
│   ├── /specs            # Feature specifications
│   └── /decisions        # Architecture Decision Records
├── /design               # Brand guidelines, design system
│
├── MASTERPLAN.md         # Vision and goals
├── IMPLEMENTATION-PLAN.md # Current sprint focus
└── AGENTS.md             # You are here
```

## Code Patterns

### Components
- Use shadcn/ui components from `@/components/ui/*`
- Create feature components in `@/components/[feature]/`
- Prefer Server Components; use `"use client"` only when needed

### Styling
- Use Tailwind classes directly
- Use CSS variables for theming (defined in `globals.css`)
- Follow the design system in `/design/design-system.md`

### Data Fetching
- Server Components: Fetch directly in the component
- Client Components: Use React Query or SWR
- API Routes: `/src/app/api/[route]/route.ts`

### Types
- Define shared types in `/src/lib/types.ts`
- Use Zod for runtime validation
- Prefer inference over manual typing

## Commit Messages

Format: `type(scope): description`

Types:
- `feat` — New feature
- `fix` — Bug fix
- `docs` — Documentation
- `style` — Formatting (no code change)
- `refactor` — Code restructure (no behavior change)
- `test` — Tests
- `chore` — Maintenance

Examples:
- `feat(auth): add Google OAuth login`
- `fix(dashboard): correct chart rendering on mobile`
- `docs(readme): update installation instructions`

## Don't

- ❌ Modify files in `/components/ui/` (shadcn primitives)
- ❌ Add dependencies without noting in PR/commit
- ❌ Leave `console.log` in production code
- ❌ Skip the spec for non-trivial features
- ❌ Make changes outside the current sprint focus without asking

## Do

- ✅ Ask clarifying questions before implementing
- ✅ Post your implementation plan before coding (for complex tasks)
- ✅ Update `IMPLEMENTATION-PLAN.md` when completing tasks
- ✅ Add types for all function parameters and returns
- ✅ Write self-documenting code; comments explain *why*, not *what*

## Getting Help

If you're stuck or unsure:
1. Check if there's a relevant spec in `/docs/specs/`
2. Look for similar patterns in the existing codebase
3. Ask for clarification — don't guess on requirements

---

*These guidelines help maintain consistency and make AI-assisted development more effective.*
