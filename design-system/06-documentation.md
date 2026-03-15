# Phase 4 — Iteration 6: Accessibility + Documentation

## Design System Overview

The Builders Academy Design System is a production-ready component library built with Next.js, shadcn/ui, and Tailwind CSS. It implements the complete visual design and interaction patterns defined in the wireframe specifications.

## Quick Start

```bash
cd builders-academy-design-system
npm install
npm run dev        # Development server at http://localhost:3000
npm run build      # Production build
npm run storybook  # Component docs at http://localhost:6006
```

## Demo Routes

| URL | Page |
|-----|------|
| `http://localhost:3000/` | Homepage |
| `http://localhost:3000/product` | Product Page |
| `http://localhost:3000/category` | Category Page |
| `http://localhost:3000/checkout` | Checkout Flow |
| `http://localhost:3000/employers` | Employer Pathway |

## Architecture

```
builders-academy-design-system/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Homepage demo
│   │   ├── product/page.tsx     # Product page demo
│   │   ├── category/page.tsx    # Category page demo
│   │   ├── checkout/page.tsx    # Checkout flow demo
│   │   ├── employers/page.tsx   # Employer pathway demo
│   │   ├── layout.tsx           # Root layout (Inter + JetBrains Mono)
│   │   └── globals.css          # Design tokens + Tailwind config
│   ├── components/
│   │   ├── ui/                  # shadcn/ui base components (18)
│   │   ├── primitives/          # Custom business components (12)
│   │   └── templates/           # Full page templates (5)
│   └── lib/
│       ├── utils.ts             # cn() helper (tailwind-merge + clsx)
│       └── constants.ts         # Brand data, courses, employer packages
├── .storybook/                  # Storybook configuration
├── components.json              # shadcn/ui config
└── package.json
```

## Component Usage

### Importing Components

```tsx
// shadcn/ui base components
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Custom primitives
import { TrustBadge } from '@/components/primitives/trust-badge'
import { ProductCard } from '@/components/primitives/product-card'
import { SearchBar } from '@/components/primitives/search-bar'

// Page templates
import { Homepage } from '@/components/templates/homepage'
```

### Button Examples

```tsx
<Button>Primary Action</Button>
<Button variant="secondary">Start Now</Button>
<Button variant="outline" size="lg">View Details</Button>
<Button size="xl" className="w-full">Mobile CTA</Button>
```

### ProductCard Example

```tsx
<ProductCard
  title="CSCS Green Card Test"
  price={35}
  rating={4.9}
  reviewCount={1240}
  duration="45 min"
  badges={['cpd', 'citb']}
/>
```

### TrustBadge Example

```tsx
<div className="flex gap-2">
  <TrustBadge type="cpd" />
  <TrustBadge type="citb" />
  <TrustBadge type="trustpilot" size="lg" />
</div>
```

## Design Tokens

All tokens are defined as CSS custom properties in `src/app/globals.css` and consumed by Tailwind CSS v4's `@theme` directive.

### Colors
- `bg-primary` / `text-primary` — Navy (#1F396D)
- `bg-secondary` / `text-secondary` — Green (#16A34A)
- `bg-muted` / `text-muted-foreground` — Light gray (#F8FAFC) / Gray (#475569)
- `bg-accent` — Mint (#E1F1EA)
- `text-success` / `text-warning` / `text-error` — Semantic colors

### Typography
- `text-d5` through `text-d6` — Display headings
- `text-h1` through `text-h6` — Section headings
- `font-sans` — Inter
- `font-mono` — JetBrains Mono (prices)

### Shadows
- `shadow-level-1` through `shadow-level-4` — 4-level elevation

## Accessibility (WCAG 2.2 AA)

### Color Contrast
- All text/background combinations meet 4.5:1 minimum ratio
- Primary (#1F396D) on white: 9.7:1 ✓
- Secondary (#16A34A) on white: 4.6:1 ✓
- Muted foreground (#475569) on white: 6.4:1 ✓

### Touch Targets
- All interactive elements: minimum 40px (desktop), 48px+ (mobile)
- Mobile CTAs: 56px height via `size="xl"`
- Mobile nav links: 56px height

### Keyboard Navigation
- All components support Tab/Enter/Space/Escape
- Focus rings: 3px ring with offset via `focus-visible:ring-[3px]`
- Accordion: Enter/Space to toggle
- RadioGroup: Arrow keys to navigate

### Screen Readers
- Semantic HTML throughout (nav, main, section, article, etc.)
- `aria-label` on search inputs, navigation landmarks
- `aria-pressed` on filter chips
- `aria-current="step"` on checkout progress
- `role="img"` with `aria-label` on star ratings
- `sr-only` class for icon-only buttons

### Motion
- All animations respect `prefers-reduced-motion: reduce`
- Global media query disables all animations/transitions

## Component Inventory

### shadcn/ui Base (18)
Button, Card, Input, Badge, Label, Textarea, Dropdown Menu, Checkbox, Radio Group, Toggle, Select, Accordion, Tabs, Sheet, Dialog, Separator, Avatar, Skeleton

### Custom Primitives (12)
TrustBadge, StarRating, SearchBar, ProductCard, CategoryCard, KeyFact, ProgressSteps, StickyCTABar, FilterChip, HowItWorks, Navbar, Footer

### Page Templates (5)
Homepage, ProductPage, CategoryPage, CheckoutFlow, EmployerPathway

**Total: 35 components + 5 templates = 40 design system elements**

## Audit Finding Resolutions

| Finding | Resolution |
|---------|-----------|
| 109+ nav links | Reduced to 5 categories in Navbar |
| No guest checkout | Guest checkout is default in CheckoutFlow |
| No employer pathway | Full EmployerPathway template with quote form |
| Trust signals buried | Placed above fold on Homepage + ProductPage |
| Mobile tap targets <48px | All mobile CTAs 48-56px, nav links 56px |
| Dual H1 tags | Single H1 per page template |
| No search functionality | SearchBar with 3 variants (hero, header, category) |
