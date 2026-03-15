# Phase 4 — Iteration 1: Setup + Design Tokens

## Setup Log

### Project Initialization
- **Framework:** Next.js 16.1.6 (App Router, React Server Components)
- **React:** 19.2.3
- **TypeScript:** Strict mode enabled
- **Location:** `builders-academy-design-system/`

### Dependencies Installed
- `next`, `react`, `react-dom` — Core framework
- `tailwindcss@4`, `@tailwindcss/postcss` — Styling
- `shadcn/ui` (via `npx shadcn@latest init`) — Component library
- `class-variance-authority` — Component variants
- `tailwind-merge`, `clsx` — Class utilities
- `lucide-react` — Icon library
- `radix-ui` — Accessible headless components

### Design Tokens Configured

All tokens from `wireframes/theme-design.md` implemented in `src/app/globals.css` using Tailwind CSS v4's `@theme` directive.

#### Colors (CSS Custom Properties)
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#1F396D` | Brand navy — primary actions, links, active nav |
| `--primary-foreground` | `#FFFFFF` | Text on primary backgrounds |
| `--secondary` | `#16A34A` | Construction green — "Start Now" CTAs, success |
| `--secondary-foreground` | `#FFFFFF` | Text on secondary backgrounds |
| `--background` | `#FFFFFF` | Default page background |
| `--foreground` | `#334155` | Heading/body text |
| `--muted` | `#F8FAFC` | Light gray backgrounds |
| `--muted-foreground` | `#475569` | Body text, subtitles |
| `--accent` | `#E1F1EA` | Light mint backgrounds |
| `--border` | `#E2E8F0` | Border color |
| `--destructive` | `#DC2626` | Error states |

#### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#16A34A` | Success states, trust badges |
| `--color-warning` | `#F59E0B` | Warning states, star ratings |
| `--color-error` | `#DC2626` | Error states, form validation |
| `--color-info` | `#3B82F6` | Info states, IOSH badges |

#### Typography
- **Font Family:** Inter (sans-serif) for UI, JetBrains Mono for prices/code
- **Display Scale:** D1 (128px) → D6 (36px) via `--text-d{n}` tokens
- **Heading Scale:** H1 (30px) → H6 (14px) via `--text-h{n}` tokens

#### Shadows (4-Level Elevation System)
| Level | Value | Usage |
|-------|-------|-------|
| `level-1` | `0 1px 3px rgba(0,0,0,0.08)` | Buttons, small cards |
| `level-2` | `0 4px 16px rgba(0,0,0,0.08)` | Hover states, dropdowns |
| `level-3` | `0 8px 32px rgba(0,0,0,0.12)` | Modals, floating panels |
| `level-4` | `0 20px 48px rgba(0,0,0,0.16)` | Top-level overlays |

#### Animations
- `fade-in` — 400ms ease-out, scroll-triggered sections
- `slide-up` — 350ms ease-out, mobile sticky bar
- `slide-in` — 350ms ease-out, mobile nav
- All respect `prefers-reduced-motion`

### Accessibility Baseline
- Focus ring: 3px ring with ring/50 opacity, 2px offset
- Color contrast: All combinations meet WCAG AA (4.5:1 minimum)
- `prefers-reduced-motion` respected globally

### Build Verification
```
✓ Compiled successfully
✓ TypeScript strict mode — no errors
✓ 5 static routes generated: /, /product, /category, /checkout, /employers
```
