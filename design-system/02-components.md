# Phase 4 — Iteration 2: Core Components

## shadcn/ui Components Installed (18)

### Base Components
| Component | File | Variants | Notes |
|-----------|------|----------|-------|
| Button | `ui/button.tsx` | 6 variants, 8 sizes | Rounded-full, hover animations |
| Card | `ui/card.tsx` | Header, Content, Footer, Title, Description, Action | Flexible composition |
| Input | `ui/input.tsx` | Default with focus/error states | 48px height for mobile |
| Badge | `ui/badge.tsx` | 6 variants | Rounded-full |
| Label | `ui/label.tsx` | Default | For form fields |
| Textarea | `ui/textarea.tsx` | Default | Quote request form |

### Interactive Components
| Component | File | Notes |
|-----------|------|-------|
| Dropdown Menu | `ui/dropdown-menu.tsx` | Navigation dropdowns |
| Checkbox | `ui/checkbox.tsx` | Filters, newsletter opt-in |
| Radio Group | `ui/radio-group.tsx` | Guest/account checkout toggle |
| Toggle | `ui/toggle.tsx` | Filter toggles |
| Select | `ui/select.tsx` | Sort, team size dropdown |
| Accordion | `ui/accordion.tsx` | Product FAQ section |
| Tabs | `ui/tabs.tsx` | Content sections |
| Sheet | `ui/sheet.tsx` | Mobile nav, mobile filters |
| Dialog | `ui/dialog.tsx` | Modals |
| Separator | `ui/separator.tsx` | Visual dividers |

### Layout Components
| Component | File | Notes |
|-----------|------|-------|
| Avatar | `ui/avatar.tsx` | User avatars |
| Skeleton | `ui/skeleton.tsx` | Loading states |

## Button Customization

### Variants
- **default** — `bg-primary`, hover: -2px translate + shadow level-2, active: scale 0.98
- **secondary** — `bg-secondary` (green), same hover/active animations
- **destructive** — Red, for dangerous actions
- **outline** — 2px primary border, fills on hover
- **ghost** — Transparent, hover: muted background
- **link** — Text with underline on hover

### Sizes
- **xs** — 28px height, tiny actions
- **sm** — 32px height, compact UI
- **default** — 40px height, standard
- **lg** — 48px height, prominent CTAs
- **xl** — 56px height, mobile CTAs (meets 48px+ tap target)
- **icon** variants — Square buttons for icons

All buttons use `rounded-full` per the design spec.
