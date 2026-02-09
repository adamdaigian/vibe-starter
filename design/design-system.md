# Design System

> Component patterns and UI standards for [Project Name].

## Foundations

This design system is built on:
- **Tailwind CSS v4** — Utility-first styling
- **shadcn/ui** — Accessible component primitives
- **Radix UI** — Headless component behaviors

See `/design/brand-guidelines.md` for colors, typography, and spacing.

---

## Component Inventory

### Primitives (shadcn/ui)

These are our building blocks. Don't modify files in `/components/ui/`.

| Component | Import | Notes |
|-----------|--------|-------|
| Button | `@/components/ui/button` | Primary actions |
| Card | `@/components/ui/card` | Content containers |
| Badge | `@/components/ui/badge` | Status indicators |
| Tabs | `@/components/ui/tabs` | Content organization |
| Separator | `@/components/ui/separator` | Visual dividers |

To add more: `npx shadcn@latest add [component]`

Full list: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

---

## Button Patterns

### Variants

```tsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Tertiary Action</Button>
<Button variant="ghost">Subtle Action</Button>
<Button variant="destructive">Danger Action</Button>
<Button variant="link">Link Style</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

### With Icons

```tsx
import { ArrowRight, Loader2 } from "lucide-react"

<Button>
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</Button>

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

---

## Card Patterns

### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Interactive Card

```tsx
<Card className="cursor-pointer transition-shadow hover:shadow-md">
  {/* ... */}
</Card>
```

---

## Layout Patterns

### Page Container

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Page content */}
</div>
```

### Section Spacing

```tsx
<section className="py-12 md:py-16 lg:py-24">
  {/* Section content */}
</section>
```

### Grid Layouts

```tsx
// Two columns
<div className="grid gap-6 md:grid-cols-2">

// Three columns  
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

// Responsive sidebar
<div className="grid gap-6 lg:grid-cols-[300px_1fr]">
```

---

## Typography Patterns

### Headings

```tsx
<h1 className="text-4xl font-bold tracking-tight">Page Title</h1>
<h2 className="text-2xl font-semibold">Section Title</h2>
<h3 className="text-xl font-semibold">Subsection Title</h3>
```

### Body Text

```tsx
<p className="text-base text-foreground">Primary text</p>
<p className="text-sm text-muted-foreground">Secondary text</p>
<p className="text-xs text-muted-foreground">Caption text</p>
```

### Prose (Long-form Content)

```tsx
<article className="prose prose-neutral dark:prose-invert max-w-none">
  {/* Markdown/rich content */}
</article>
```

---

## Form Patterns

### Input with Label

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Form Section

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label>Field 1</Label>
    <Input />
  </div>
  <div className="space-y-2">
    <Label>Field 2</Label>
    <Input />
  </div>
  <Button type="submit">Submit</Button>
</div>
```

---

## State Patterns

### Loading

```tsx
import { Loader2 } from "lucide-react"

// Spinner
<Loader2 className="h-6 w-6 animate-spin" />

// Skeleton
<div className="h-4 w-32 animate-pulse rounded bg-muted" />
```

### Empty State

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <IconComponent className="h-12 w-12 text-muted-foreground/50" />
  <h3 className="mt-4 text-lg font-semibold">No items yet</h3>
  <p className="mt-2 text-sm text-muted-foreground">
    Get started by creating your first item.
  </p>
  <Button className="mt-4">Create Item</Button>
</div>
```

### Error State

```tsx
<div className="rounded-md border border-destructive/50 bg-destructive/10 p-4">
  <p className="text-sm text-destructive">
    Something went wrong. Please try again.
  </p>
</div>
```

---

## Dark Mode

The design system supports light and dark modes via CSS variables.

### Forcing a Mode

```tsx
<div className="dark">
  {/* Always dark */}
</div>

<div className="light">
  {/* Always light */}
</div>
```

### Mode-Specific Styles

```tsx
<div className="bg-white dark:bg-zinc-900">
  {/* Different backgrounds per mode */}
</div>
```

---

## Accessibility Checklist

For every component:

- [ ] Keyboard navigable (Tab, Enter, Escape, Arrow keys)
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Screen reader compatible (proper ARIA labels)
- [ ] Motion respects `prefers-reduced-motion`

---

## Adding New Components

1. Check if shadcn/ui has it: `npx shadcn@latest add [name]`
2. If not, create in `/components/[feature]/`
3. Follow existing patterns for props, styling, accessibility
4. Document usage in this file

---

*Last updated: [Date]*
