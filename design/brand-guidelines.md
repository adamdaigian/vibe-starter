# Brand Guidelines

> Visual identity and brand standards for [Project Name].

## Brand Essence

**Tagline:** [Your tagline]

**Voice:** [How we communicate — e.g., "Professional but approachable, confident but not arrogant"]

**Personality Traits:**
- [Trait 1]
- [Trait 2]
- [Trait 3]

---

## Logo

### Primary Logo
[Description or link to logo file]

### Usage Rules
- ✅ Use on light and dark backgrounds with appropriate contrast
- ✅ Maintain minimum clear space (equal to height of logo mark)
- ❌ Don't stretch, rotate, or distort
- ❌ Don't change the colors outside approved palette
- ❌ Don't add effects (shadows, gradients, outlines)

### Logo Versions
| Version | Use Case | File |
|---------|----------|------|
| Primary | Default usage | `/design/assets/logo.svg` |
| Monochrome | Single-color contexts | `/design/assets/logo-mono.svg` |
| Icon Only | Favicon, small spaces | `/design/assets/icon.svg` |

---

## Color Palette

### Primary Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Primary | `#0A0B0B` | `180 5% 4%` | Text, primary actions |
| Background | `#FFFFFF` | `0 0% 100%` | Page backgrounds |
| Accent | `#3B82F6` | `217 91% 60%` | CTAs, links, highlights |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Muted | `#F4F4F5` | Secondary backgrounds |
| Border | `#E4E4E7` | Dividers, borders |
| Muted Text | `#71717A` | Secondary text |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success | `#22C55E` | Confirmations, success states |
| Warning | `#F59E0B` | Warnings, caution states |
| Error | `#EF4444` | Errors, destructive actions |
| Info | `#3B82F6` | Informational messages |

---

## Typography

### Font Stack

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

### Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Display | 48px | 700 | 1.1 | Hero headlines |
| H1 | 36px | 700 | 1.2 | Page titles |
| H2 | 24px | 600 | 1.3 | Section headers |
| H3 | 20px | 600 | 1.4 | Subsection headers |
| Body | 16px | 400 | 1.5 | Paragraph text |
| Small | 14px | 400 | 1.5 | Captions, labels |
| Tiny | 12px | 500 | 1.4 | Badges, metadata |

---

## Spacing

Use a consistent 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Related elements |
| `space-3` | 12px | Component padding |
| `space-4` | 16px | Standard spacing |
| `space-6` | 24px | Section spacing |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Page sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Subtle rounding |
| `rounded-md` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Cards, modals |
| `rounded-xl` | 12px | Large cards |
| `rounded-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, dropdowns |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |

---

## Imagery

### Photography Style
- [Description of photo style — e.g., "Natural lighting, candid moments, diverse representation"]

### Illustrations
- [Description of illustration style — e.g., "Flat design, limited color palette, geometric shapes"]

### Icons
- Use [Icon library — e.g., "Lucide React"]
- Default size: 20px
- Stroke width: 1.5px

---

## Writing Style

### Do
- ✅ Be clear and concise
- ✅ Use active voice
- ✅ Speak directly to the user ("you")
- ✅ Use sentence case for UI text

### Don't
- ❌ Use jargon or buzzwords
- ❌ Be overly formal or stiff
- ❌ Use ALL CAPS (except for acronyms)
- ❌ Use exclamation points excessively!

---

*Last updated: [Date]*
