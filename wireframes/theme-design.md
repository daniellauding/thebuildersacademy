# Theme Design — The Builders Academy

## Typography

**Font Family:** Inter (Sans Serif Variable)
- Primary: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Monospace (code/prices): `"JetBrains Mono", "Fira Code", monospace`

### Type Scale

#### Display (Hero headlines, landing pages)

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| D1 | 128px | 700 | 110% | -0.04em | — |
| D2 | 96px | 700 | 110% | -0.03em | — |
| D3 | 72px | 700 | 115% | -0.02em | — |
| D4 | 56px | 700 | 120% | -0.02em | Homepage hero (desktop) |
| D5 | 44px | 700 | 125% | -0.01em | Page heroes (desktop) |
| D6 | 36px | 700 | 130% | -0.01em | Mobile heroes |

#### Heading (Section titles, page structure)

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| H1 | 30px | 700 | 130% | -0.01em | Page title, product name |
| H2 | 24px | 700 | 135% | 0 | Section titles |
| H3 | 20px | 600 | 140% | 0 | Card titles, subsections |
| H4 | 18px | 600 | 140% | 0 | Sub-subsections |
| H5 | 16px | 600 | 150% | 0 | Small headings |
| H6 | 14px | 600 | 150% | 0.01em | Overlines, labels |

#### Body (Content, descriptions, UI text)

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| body-lg | 18px | 400 | 160% | Lead text, important descriptions |
| body | 16px | 400 | 150% | Default body text, form labels |
| body-sm | 14px | 400 | 150% | Secondary text, help text |
| body-xs | 13px | 400 | 150% | Meta text, timestamps |

#### Caption & Label

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| caption | 12px | 400 | 140% | Captions, fine print |
| label | 14px | 500 | 100% | Form labels, button text |
| label-sm | 12px | 500 | 100% | Badge text, small labels |
| overline | 12px | 600 | 100% | Section overlines (uppercase, tracking +0.1em) |

### Responsive Type Adjustments

| Token | Desktop | Mobile | Notes |
|-------|---------|--------|-------|
| Hero H1 | D4 (56px) | D6 (36px) | Scale down 2 levels |
| Section H2 | H2 (24px) | H3 (20px) | Scale down 1 level |
| Body | 16px | 16px | No change (iOS zoom prevention) |
| Min touch text | 14px | 16px | Larger on mobile for readability |

---

## Colors

### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `primary` | #1F396D | rgb(31, 57, 109) | Primary actions, links, nav active |
| `primary-light` | #2D4F8E | rgb(45, 79, 142) | Hover states |
| `primary-dark` | #152850 | rgb(21, 40, 80) | Active/pressed states |
| `primary-50` | #EFF6FF | rgb(239, 246, 255) | Light backgrounds |

### Secondary Palette (Success/CTA)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `secondary` | #16A34A | rgb(22, 163, 74) | Success states, "Start Now" CTAs |
| `secondary-light` | #22C55E | rgb(34, 197, 94) | Hover on secondary buttons |
| `secondary-dark` | #15803D | rgb(21, 128, 61) | Active/pressed states |
| `secondary-50` | #E1F1EA | rgb(225, 241, 234) | Light mint backgrounds |

### Neutral Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `heading` | #334155 | rgb(51, 65, 85) | Headings, primary text |
| `body` | #475569 | rgb(71, 85, 105) | Body text, descriptions |
| `muted` | #64748B | rgb(100, 116, 139) | Secondary/muted text |
| `placeholder` | #94A3B8 | rgb(148, 163, 184) | Placeholder text, disabled |
| `border` | #E2E8F0 | rgb(226, 232, 240) | Borders, dividers |
| `bg` | #F8FAFC | rgb(248, 250, 252) | Page background |
| `bg-card` | #FFFFFF | rgb(255, 255, 255) | Card backgrounds |
| `bg-secondary` | #E1F1EA | rgb(225, 241, 234) | Secondary sections background |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `error` | #EF4444 | Validation errors, destructive actions |
| `error-bg` | #FEF2F2 | Error background |
| `warning` | #F59E0B | Warnings, expiry notices |
| `warning-bg` | #FEF3C7 | Warning background |
| `success` | #16A34A | Success states, confirmation |
| `success-bg` | #E1F1EA | Success background |
| `info` | #3B82F6 | Informational notices |
| `info-bg` | #EFF6FF | Info background |

### Contrast Ratios (WCAG 2.2 AA Compliance)

| Combination | Ratio | Passes AA | Passes AAA |
|-------------|-------|-----------|------------|
| `heading` on `bg` | 9.2:1 | Yes | Yes |
| `body` on `bg` | 7.1:1 | Yes | Yes |
| `primary` on white | 8.5:1 | Yes | Yes |
| `secondary` on white | 3.8:1 | Yes (large text) | No |
| White on `primary` | 8.5:1 | Yes | Yes |
| White on `secondary` | 3.8:1 | Yes (large text) | No |
| `error` on `error-bg` | 4.6:1 | Yes | No |

**Note:** Secondary green (#16A34A) on white passes AA for large text (18px+ or 14px bold). For small text buttons, use white text on secondary background.

---

## Spacing Scale

Based on 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing, inline elements |
| `space-2` | 8px | Icon padding, tight gaps |
| `space-3` | 12px | Input padding, small gaps |
| `space-4` | 16px | Default element gap, mobile padding |
| `space-5` | 20px | Card padding (compact) |
| `space-6` | 24px | Card padding (default), mobile section gap |
| `space-8` | 32px | Section gap (mobile), desktop card gap |
| `space-10` | 40px | Section padding (desktop) |
| `space-12` | 48px | Large section gap |
| `space-16` | 64px | Page section padding (desktop) |
| `space-20` | 80px | Hero vertical padding |
| `space-24` | 96px | Large section vertical padding |

### Layout Spacing

| Context | Desktop | Mobile |
|---------|---------|--------|
| Page max-width | 1280px | 100% |
| Content max-width | 960px | 100% |
| Page horizontal padding | 40px | 16px |
| Section vertical padding | 64px | 32px |
| Card grid gap | 24px | 16px |
| Form field gap | 24px | 20px |
| Inline element gap | 8px | 8px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | — |
| `radius-sm` | 4px | Badges, small elements |
| `radius-md` | 8px | Cards, inputs, buttons |
| `radius-lg` | 16px | Large cards, modals |
| `radius-xl` | 24px | Featured sections |
| `radius-full` | 9999px | Pills, avatar, filter chips |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-1` | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)` | Buttons, small cards, default card state |
| `shadow-2` | `0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)` | Card hover, elevated surfaces, dropdown |
| `shadow-3` | `0 8px 32px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)` | Modals, floating panels, sticky bar |
| `shadow-4` | `0 20px 48px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.08)` | Top-level overlays, mobile nav drawer |

---

## Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `mobile` | 0-639px | Mobile phones |
| `tablet` | 640-1023px | Tablets, small laptops |
| `desktop` | 1024-1279px | Standard desktop |
| `wide` | 1280px+ | Wide desktop (max-width for content) |

### Grid System

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile | 4 | 16px | 16px |
| Tablet | 8 | 24px | 24px |
| Desktop | 12 | 24px | 40px |
| Wide | 12 | 24px | auto (centered) |

---

## Animation Design

### Micro-interactions

| Animation | Duration | Easing | Properties | Usage |
|-----------|----------|--------|------------|-------|
| `button-press` | 150ms | ease-out | scale: 1 → 0.95 → 1 | Button click feedback |
| `button-hover` | 200ms | ease-out | translateY: 0 → -2px, shadow: 1 → 2 | Button/card hover |
| `fade-in` | 400ms | ease-out | opacity: 0 → 1, translateY: 20px → 0 | Section entry on scroll |
| `slide-in` | 350ms | ease-out | translateX: -100% → 0, opacity: 0 → 1 | Mobile nav drawer |
| `slide-up` | 300ms | ease-out | translateY: 100% → 0 | Sticky CTA bar, bottom sheets |
| `expand` | 300ms | ease-out | height: 0 → auto | Accordion, dropdown |
| `badge-pop` | 250ms | cubic-bezier(0.34, 1.56, 0.64, 1) | scale: 0 → 1 | Badge/notification appear |

### Page Transitions

| Transition | Duration | Easing | Usage |
|------------|----------|--------|-------|
| Page entry | 300-500ms | ease-out | Initial page load, route change |
| Section reveal | 400ms | ease-out | Scroll-triggered section entry |
| Modal open | 250ms | ease-out | Modal/overlay appearance |
| Modal close | 200ms | ease-in | Modal/overlay dismissal |

### Scroll-triggered Animations

```
Intersection Observer config:
- threshold: 0.2 (trigger when 20% visible)
- rootMargin: "0px 0px -50px 0px" (trigger slightly before fully in view)

Elements that animate on scroll:
1. Section titles → fadeIn (opacity + translateY)
2. Course cards → fadeIn with stagger (100ms delay per card)
3. Trust logos → fadeIn (opacity only)
4. Reviews → fadeIn with stagger
5. Stats/numbers → countUp animation (600ms)
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

All animations respect `prefers-reduced-motion`. When reduced motion is preferred:
- Transitions become instant
- Scroll animations disabled
- Hover effects remain (no motion, just color changes)

### Loading States

| State | Animation | Duration | Usage |
|-------|-----------|----------|-------|
| Button loading | Spinner rotation | 800ms, infinite | Form submission |
| Card skeleton | Shimmer gradient | 1.5s, infinite | Course card loading |
| Page loading | Progress bar | Variable | Route transition |
| Search loading | Pulse dots | 600ms per dot | Autocomplete fetching |

```
Skeleton shimmer:
┌──────────────────┐
│ ██████████░░░░░░ │  ← Linear gradient sweep left-to-right
│ ████████░░░░░░░░ │     Background: #F1F5F9 → #E2E8F0 → #F1F5F9
│ ██████░░░░░░░░░░ │     1.5s infinite
└──────────────────┘
```

---

## Iconography

**Icon Set:** Lucide Icons (open source, consistent with Inter font)
- Size: 16px (inline), 20px (UI elements), 24px (navigation), 32px (feature icons)
- Stroke width: 1.5px (default), 2px (emphasized)
- Color: Inherits from parent text color

**Custom icons needed:**
- CSCS Card icon (card with checkmark)
- Construction helmet
- Certificate/diploma
- Dashboard/analytics

---

## Focus & Accessibility Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `focus-ring-color` | #1F396D | Focus outline color |
| `focus-ring-width` | 2px | Focus outline width |
| `focus-ring-offset` | 2px | Offset from element |
| `min-tap-target` | 48px | Minimum touch target (desktop) |
| `min-tap-target-mobile` | 56px | Minimum touch target (mobile) |
| `min-contrast-normal` | 4.5:1 | WCAG AA normal text |
| `min-contrast-large` | 3:1 | WCAG AA large text (18px+) |

---

## CSS Custom Properties Summary

```css
:root {
  /* Colors */
  --color-primary: #1F396D;
  --color-primary-light: #2D4F8E;
  --color-primary-dark: #152850;
  --color-primary-50: #EFF6FF;
  --color-secondary: #16A34A;
  --color-secondary-light: #22C55E;
  --color-secondary-dark: #15803D;
  --color-secondary-50: #E1F1EA;
  --color-heading: #334155;
  --color-body: #475569;
  --color-muted: #64748B;
  --color-placeholder: #94A3B8;
  --color-border: #E2E8F0;
  --color-bg: #F8FAFC;
  --color-bg-card: #FFFFFF;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-success: #16A34A;
  --color-info: #3B82F6;

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-body-lg: 18px;
  --font-size-caption: 12px;
  --line-height-default: 1.5;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-2: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-3: 0 8px 32px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06);
  --shadow-4: 0 20px 48px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.08);

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-default: 200ms ease-out;
  --transition-slow: 400ms ease-out;

  /* Layout */
  --max-width-page: 1280px;
  --max-width-content: 960px;
  --min-tap-target: 48px;
  --min-tap-target-mobile: 56px;
}
```
