# Component Specifications — The Builders Academy

## Blocks

Blocks are high-level page sections composed of multiple components.

---

### Hero Block

Full-width section at the top of key pages (homepage, employer, category).

```
Structure:
┌───────────────────────────────────────────┐
│  Headline (H1)                            │
│  Subheadline (body-lg)                    │
│                                           │
│  [SearchBar component]                    │
│                                           │
│  [TrustSignals component]                 │
│  [Badge] [Badge] [Badge]                  │
└───────────────────────────────────────────┘
```

**Variants:**
- `homepage` — Search-centric with trust signals
- `category` — Category title + description + in-category search
- `employer` — Value props checklist + dual CTA (quote + phone)
- `product` — Product details + price + CTA (no search)

**Slots:**
- `headline` — H1 text content
- `subheadline` — Supporting text
- `action` — Primary action area (SearchBar, CTA buttons, or price box)
- `trust` — Trust signals area (badges, Trustpilot, logos)

**Responsive:**
- Desktop: Centered, max-width 960px, 64px vertical padding
- Mobile: Left-aligned, 24px horizontal padding, 32px vertical padding

---

### How It Works Block

3-step visual process explainer for low-literacy users.

```
Structure:
┌──────────┐     ┌──────────┐     ┌──────────┐
│    ①     │ →   │    ②     │ →   │    ③     │
│  Step 1  │     │  Step 2  │     │  Step 3  │
│  Text    │     │  Text    │     │  Text    │
└──────────┘     └──────────┘     └──────────┘
```

**Props:**
- `steps`: Array of { number, title, description, icon? }
- `variant`: "horizontal" (desktop) | "vertical" (mobile)

**Responsive:**
- Desktop: 3-column horizontal with arrow connectors
- Mobile: Vertical list with step numbers

---

### Category Cards Block

3-column entry point cards on homepage.

```
Structure:
┌────────────┐  ┌────────────┐  ┌────────────┐
│  [Icon]    │  │  [Icon]    │  │  [Icon]    │
│  Title     │  │  Title     │  │  Title     │
│  Subtitle  │  │  Subtitle  │  │  Subtitle  │
│  from £XX  │  │  from £XX  │  │  Price     │
│  [CTA]     │  │  [CTA]     │  │  [CTA]     │
└────────────┘  └────────────┘  └────────────┘
```

**Props:**
- `cards`: Array of { icon, title, subtitle, price?, cta }
- `columns`: 2 | 3 (default: 3 desktop, 1 mobile)

**Responsive:**
- Desktop: 3-column grid, 24px gap
- Mobile: Full-width stacked cards, 16px gap

---

### Product Cards Block

Grid of course/product cards used on homepage, category, and cross-sell sections.

```
Structure:
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [Image]      │  │ [Image]      │  │ [Image]      │
│ Title        │  │ Title        │  │ Title        │
│ £XX.XX       │  │ £XX.XX       │  │ £XX.XX       │
│ ⭐ X.X (XXX) │  │ ⭐ X.X (XXX) │  │ ⭐ X.X (XXX) │
│ Duration     │  │ Duration     │  │ Duration     │
│ [CTA]        │  │ [CTA]        │  │ [CTA]        │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Props:**
- `courses`: Array of CourseCard data
- `columns`: 2 | 3 (default: 3 desktop, 1 mobile)
- `variant`: "default" | "compact" | "cross-sell"
- `showImage`: boolean (default: true on desktop, false on mobile)

**Responsive:**
- Desktop: 2-3 column grid with images
- Mobile: Full-width list cards without images

---

### Trust Section Block

Employer logos + optional testimonial quotes.

```
Structure:
┌───────────────────────────────────────────┐
│  TRUSTED BY                               │
│  [Logo] [Logo] [Logo] [Logo] [Logo]       │
│                                           │
│  "Quote text..." — Name, Company          │
└───────────────────────────────────────────┘
```

**Props:**
- `logos`: Array of { src, alt, url? }
- `testimonials?`: Array of { quote, name, role, company, logo? }
- `variant`: "logos-only" | "logos-with-quotes" | "full-testimonials"

**Responsive:**
- Desktop: Logos in row, quotes side-by-side
- Mobile: Logos wrap to 2 rows, quotes in swipeable carousel

---

### Reviews Block

Customer review cards with Trustpilot integration.

```
Structure:
┌───────────────────────────────────────────┐
│  WHAT LEARNERS SAY                        │
│  ⭐⭐⭐⭐⭐ X.X/5 from X,XXX reviews        │
│                                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ Review  │  │ Review  │  │ Review  │   │
│  └─────────┘  └─────────┘  └─────────┘   │
│                                           │
│  [READ ALL REVIEWS →]                     │
└───────────────────────────────────────────┘
```

**Props:**
- `rating`: number (e.g., 4.8)
- `reviewCount`: number
- `reviews`: Array of { stars, text, name, role }
- `showAllLink?`: boolean

**Responsive:**
- Desktop: 3 review cards in row
- Mobile: Swipeable carousel with dot indicators

---

### Footer Block

Site-wide footer with links, support info, and trust badges.

```
Structure:
Desktop:
┌───────────────────────────────────────────────────┐
│  COURSES    SUPPORT      LEGAL        ACCREDITATIONS │
│  Link       Phone        Terms        [Badge]        │
│  Link       Live Chat    Privacy      [Badge]        │
│  Link       Email        Cookies      [Badge]        │
│  Link       FAQ          Refund       [Trustpilot]   │
│                                                       │
│  © 2024 The Builders Academy                         │
└───────────────────────────────────────────────────┘

Mobile:
┌─────────────────────────┐
│  📞 Phone | 💬 Chat     │
│  [Badges]               │
│  Courses | Support      │
│  Legal                  │
│  © 2024                 │
└─────────────────────────┘
```

**Props:**
- `columns`: Array of { title, links[] }
- `support`: { phone, chatEnabled, email, hours }
- `badges`: Array of BadgeComponent
- `copyright`: string

---

## Components

Individual UI components used across blocks.

---

### Button

```
Variants:
┌────────────────────┐
│  [PRIMARY BUTTON]  │  ← Filled, Primary color (#1F396D)
└────────────────────┘
┌────────────────────┐
│  [SECONDARY BTN]   │  ← Outlined, Primary color border
└────────────────────┘
┌────────────────────┐
│  [GHOST BUTTON]    │  ← Text-only, no background
└────────────────────┘

Sizes:
sm:  32px height, 14px text, 12px 16px padding
md:  40px height, 14px text, 12px 20px padding
lg:  48px height, 16px text, 14px 24px padding
xl:  56px height, 16px text, 16px 28px padding  ← Mobile CTA default
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Button size |
| `icon` | `"left" \| "right" \| "only"` | `undefined` | Icon position |
| `disabled` | `boolean` | `false` | Disabled state |
| `fullWidth` | `boolean` | `false` | Full container width |
| `loading` | `boolean` | `false` | Loading spinner state |

**States:**
- Default: Base styling
- Hover: Y-2px translate, shadow increase (200ms ease)
- Focus: 2px outline offset, Primary color ring
- Active: Scale 0.98 (150ms)
- Disabled: 50% opacity, no pointer events

**Slots:**
- Default: Button label text
- `icon`: Optional icon element (left, right, or icon-only)

**Accessibility:**
- Min contrast: 4.5:1 (WCAG AA)
- Focus visible ring for keyboard navigation
- `aria-label` required for icon-only variant
- `aria-busy="true"` when loading

---

### Card

```
Variants:

Product Card:
┌──────────────────┐
│ [Image]          │  ← Optional, 16:9 ratio
│ Title (H3)       │  ← 16px, bold, #334155
│ Subtitle         │  ← 14px, #475569
│ £XX.XX           │  ← 20px, bold, #1F396D
│ ⭐ X.X (XXX)     │  ← 13px, #475569
│ Duration | Format│  ← 13px, #475569
│ [Badge] [Badge]  │  ← Accreditation badges
│ [CTA Button]     │  ← Primary button, md or lg
└──────────────────┘

Category Card:
┌──────────────────┐
│ [Icon]           │  ← 32px icon
│ Title (H3)       │
│ Subtitle         │
│ from £XX         │
│ [CTA Button]     │
└──────────────────┘

Employer Package Card:
┌──────────────────────────────┐
│ Title (H3)        [Badge]   │
│ Description                  │
│ • Course 1                   │
│ • Course 2                   │
│ • Course 3                   │
│ From £XX/person   Save XX%   │
│ [CTA Button]                 │
└──────────────────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"product" \| "category" \| "employer"` | `"product"` | Card type |
| `title` | `string` | — | Card title |
| `subtitle` | `string` | `undefined` | Supporting text |
| `description` | `string` | `undefined` | Full description |
| `price` | `string` | `undefined` | Price display |
| `rating` | `number` | `undefined` | Star rating (0-5) |
| `reviewCount` | `number` | `undefined` | Number of reviews |
| `duration` | `string` | `undefined` | Course duration |
| `format` | `string` | `undefined` | "Online", "Classroom" etc |
| `image` | `string` | `undefined` | Image URL |
| `badges` | `Badge[]` | `[]` | Accreditation badges |
| `ctaText` | `string` | `"View Course"` | CTA button label |
| `ctaUrl` | `string` | — | CTA link destination |
| `featured` | `boolean` | `false` | "Most Popular" badge |

**Sizes:**
- Compact: No image, reduced padding (mobile list view)
- Default: With image, standard padding
- Large: Larger image, more padding (featured position)

**Styling:**
- Border radius: 8px (Medium)
- Shadow: Level 1 (default), Level 2 (hover)
- Border: 1px solid #E2E8F0
- Hover: translateY(-2px), shadow upgrade, 200ms ease

---

### Input

```
States:
Default:
┌──────────────────────────────┐
│  Placeholder text            │  ← #94A3B8
└──────────────────────────────┘
   Label above, 14px, #334155

Focus:
┌══════════════════════════════┐
│  User input text             │  ← #334155
└══════════════════════════════┘
   2px border: #1F396D

Error:
┌──────────────────────────────┐
│  Invalid input               │  ← #334155
└──────────────────────────────┘
   2px border: #EF4444
   ⚠ Error message below, 13px, #EF4444

Disabled:
┌──────────────────────────────┐
│  Disabled text               │  ← #94A3B8
└──────────────────────────────┘
   Background: #F1F5F9, no interaction
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"text" \| "email" \| "phone" \| "search"` | `"text"` | Input type |
| `label` | `string` | — | Label text above input |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `helpText` | `string` | `undefined` | Helper text below input |
| `errorMessage` | `string` | `undefined` | Error text (shown in error state) |
| `required` | `boolean` | `false` | Required field indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `value` | `string` | `""` | Input value |

**Sizing:**
- Height: 48px (mobile), 40px (desktop)
- Padding: 12px 16px
- Font: 16px (prevents iOS zoom on focus)
- Label: 14px, semi-bold, 4px margin-bottom

**Accessibility:**
- `aria-required` for required fields
- `aria-invalid` + `aria-describedby` for error state
- Visible label (no placeholder-only inputs)
- Error messages associated via `aria-describedby`

---

### Badge

```
Variants:
┌─────────────────┐
│ CPD Accredited  │  ← Background: #E1F1EA, Text: #16A34A
└─────────────────┘
┌─────────────────┐
│ CITB Approved   │  ← Background: #DBEAFE, Text: #1F396D
└─────────────────┘
┌─────────────────┐
│ ⭐ Trustpilot    │  ← Background: #00B67A (Trustpilot green)
└─────────────────┘
┌─────────────────┐
│ 🔒 Secure       │  ← Background: #F1F5F9, Text: #475569
└─────────────────┘
┌─────────────────┐
│ ★ MOST POPULAR  │  ← Background: #FEF3C7, Text: #92400E
└─────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"cpd" \| "citb" \| "iosh" \| "trustpilot" \| "security" \| "featured"` | — | Badge type |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Badge size |
| `showIcon` | `boolean` | `true` | Show icon/logo |

**Sizing:**
- sm: 20px height, 11px text, 2px 6px padding
- md: 24px height, 12px text, 4px 8px padding
- lg: 28px height, 13px text, 4px 12px padding
- Border radius: Full (9999px)

---

### SearchBar

```
Variants:

Hero (large, prominent):
┌────────────────────────────────────────────────────┐
│  🔍  Search courses, e.g. "CSCS Green Card"       │  [Find Course]
└────────────────────────────────────────────────────┘
Autocomplete dropdown:
┌────────────────────────────────────────────────────┐
│  CSCS Green Card Test                      £35    │
│  CSCS Red Card (Managers) Test             £55    │
│  Working at Height                         £25    │
│  First Aid at Work                         £40    │
└────────────────────────────────────────────────────┘

Header (compact, in navigation):
┌───────────────────────────┐
│  🔍  Search courses...    │
└───────────────────────────┘

Category (in-page, category-scoped):
┌────────────────────────────────────────┐
│  🔍  Search within Health & Safety...  │
└────────────────────────────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"hero" \| "header" \| "category"` | `"header"` | SearchBar size/style |
| `placeholder` | `string` | `"Search courses..."` | Placeholder text |
| `showAutocomplete` | `boolean` | `true` | Enable autocomplete dropdown |
| `categoryScope` | `string` | `undefined` | Limit search to category |
| `showSubmitButton` | `boolean` | `true` | Show "Find Course" button |

**Autocomplete behavior:**
- Triggers after 2 characters
- Shows course name + price
- Max 5 suggestions
- Keyboard navigable (up/down arrows, Enter to select)
- Supports informal terms ("green card" → "CSCS Green Card Test")

**Sizing:**
- Hero: 56px height, 18px text
- Header: 40px height, 14px text
- Category: 48px height, 16px text

---

### NavItem

```
Variants:

Desktop:
┌────────────────┐
│  Categories ▼  │  ← Dropdown trigger
└────────────────┘
┌────────────────┐
│  For Employers │  ← Direct link, highlighted
└────────────────┘

Mobile (in overlay):
┌─────────────────────────┐
│  CSCS Cards          →  │  ← Full-width, 56px height
└─────────────────────────┘

Dropdown item:
┌─────────────────────────┐
│  Health & Safety        │  ← In dropdown menu
└─────────────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"desktop" \| "mobile" \| "dropdown"` | `"desktop"` | Display variant |
| `label` | `string` | — | Navigation label |
| `href` | `string` | — | Link URL |
| `icon` | `string` | `undefined` | Optional icon |
| `badge` | `string` | `undefined` | Optional badge (e.g., "NEW") |
| `hasDropdown` | `boolean` | `false` | Shows dropdown indicator |
| `isActive` | `boolean` | `false` | Current page indicator |

**States:**
- Default: #475569 text
- Hover: #1F396D text, underline
- Active: #1F396D text, bold, bottom border (2px)
- Mobile hover: #F8FAFC background

---

### ProgressIndicator

```
States:
●───────────────○───────────────○     Step 1 active
✓───────────────●───────────────○     Step 2 active
✓───────────────✓───────────────●     Step 3 active
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Array<{ label: string }>` | — | Step labels |
| `currentStep` | `number` | `1` | Current active step (1-indexed) |
| `variant` | `"dots" \| "numbered"` | `"dots"` | Visual style |

**Styling:**
- Active dot: 12px, #1F396D fill
- Completed dot: 12px, #16A34A fill with checkmark
- Pending dot: 12px, #E2E8F0 fill
- Connector line: 2px, #E2E8F0 (pending) or #16A34A (completed)
- Labels: 13px, #475569 (pending) or #334155 (active/completed)

---

### StarRating

```
Display:
⭐⭐⭐⭐⭐ 4.9/5 (1,240 reviews)

Variants:
compact:  ⭐ 4.9 (1,240)
full:     ⭐⭐⭐⭐⭐ 4.9/5 (1,240 reviews)
minimal:  ⭐ 4.9
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rating` | `number` | — | Rating value (0-5) |
| `reviewCount` | `number` | `undefined` | Number of reviews |
| `variant` | `"compact" \| "full" \| "minimal"` | `"compact"` | Display variant |
| `showLink` | `boolean` | `false` | Link to reviews section |

---

### StickyBar

Mobile-only component that fixes to bottom of viewport.

```
┌─────────────────────────────┐
│  £35.00      [BUY NOW →]   │  ← 56px height
│  🔒 Secure                  │
└─────────────────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `price` | `string` | — | Price display |
| `ctaText` | `string` | `"Buy Now"` | CTA button text |
| `ctaAction` | `function` | — | CTA click handler |
| `trustText` | `string` | `"Secure checkout"` | Trust micro-copy |
| `showWhen` | `"always" \| "on-scroll"` | `"on-scroll"` | Visibility trigger |

**Behavior:**
- Appears when original CTA scrolls out of viewport
- slideUp animation: 300ms ease-out
- Z-index: 50 (above content, below modals)
- Background: white with top shadow (Level 2)

---

### FilterChip

Used in mobile filter/sort interfaces.

```
Inactive:            Active:
┌──────────┐        ┌══════════┐
│  <£25    │        │  <£25 ✕  │
└──────────┘        └══════════┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Chip label |
| `isActive` | `boolean` | `false` | Selected state |
| `onToggle` | `function` | — | Toggle handler |
| `onRemove` | `function` | `undefined` | Remove handler (when active) |

**Styling:**
- Inactive: border #E2E8F0, text #475569, bg white
- Active: border #1F396D, text #1F396D, bg #EFF6FF
- Height: 36px, border-radius: Full (9999px)
- Padding: 8px 16px

---

### Accordion

Used for FAQ sections on product pages.

```
Closed:
┌────────────────────────────────────────┐
│  ▸ Is this course accredited?          │
└────────────────────────────────────────┘

Open:
┌────────────────────────────────────────┐
│  ▾ Is this course accredited?          │
│                                        │
│  Yes, this course is CPD and CITB      │
│  accredited. Your certificate will...  │
│                                        │
└────────────────────────────────────────┘
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{ question, answer }>` | — | FAQ items |
| `allowMultiple` | `boolean` | `false` | Multiple sections open |
| `defaultOpen` | `number` | `undefined` | Initially open item index |

**Animation:**
- Expand/collapse: 300ms ease-out, height transition
- Chevron rotation: 180deg, 200ms

**Accessibility:**
- `aria-expanded` on trigger button
- `aria-controls` linking trigger to content
- Keyboard: Enter/Space to toggle, Arrow keys to navigate
