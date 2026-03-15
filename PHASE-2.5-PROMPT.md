# Phase 2.5: ASCII Wireframes & Layout Design — The Builders Academy

## Context
You are using the **superdesign skill** to create ASCII wireframes for The Builders Academy redesign.

**Phase 1-2 Insights:**
- `research/business-goals.md` — 9 goals, 12 KPIs, 5 strategic pillars
- `research/personas.md` — 4 user personas (Dave, Sarah, Marcus, Terry)
- `research/conversion-journeys.md` — 23 friction points
- `research/strategic-direction.md` — Trust First, Simplicity, Mobile-First, Employer Growth, Smart Discovery
- `audit/` — 9 audit reports (when available)

## Objective
Create **ASCII wireframes** for key pages (mobile + desktop) following superdesign workflow:
1. Layout Design → ASCII wireframes
2. Theme Design → Color palette, typography, spacing
3. Animation Design → Micro-interactions plan
4. Implementation → Component structure

## Deliverables

### 1. Homepage Wireframes
**Desktop (1280px):**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   Categories ▼  For Employers  Search  [LOGIN] [CTA] │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│              FIND YOUR CONSTRUCTION TRAINING                   │
│         Get CSCS Certified Online – Same-Day Results          │
│                                                                │
│         [SEARCH: "Search courses..."]  [Find Course]          │
│                                                                │
│    ⭐⭐⭐⭐⭐  Trustpilot 4.8/5 from 2,340 reviews               │
│    [CPD Badge] [CITB Badge] [Accredited Badge]                │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│    I NEED A...          I NEED SAFETY...     FOR MY BUSINESS  │
│   ┌────────────┐       ┌────────────┐       ┌────────────┐   │
│   │  CSCS Card │       │  Working   │       │ Bulk       │   │
│   │  Green/Red │       │  at Height │       │ Training   │   │
│   │  from £30  │       │  from £25  │       │ Request    │   │
│   └────────────┘       └────────────┘       │ Quote      │   │
│                                              └────────────┘   │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│              POPULAR COURSES                                   │
│                                                                │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│   │ CSCS Green   │  │ Working at   │  │ First Aid    │       │
│   │ Card Test    │  │ Height       │  │ at Work      │       │
│   │ £35          │  │ £25          │  │ £40          │       │
│   │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │       │
│   │ [START NOW]  │  │ [START NOW]  │  │ [START NOW]  │       │
│   └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│     TRUSTED BY                                                 │
│   [Skanska] [Kier] [G4S] [BBC Studios] [Balfour Beatty]      │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│  FOOTER: Links | Support: 0800 XXX XXXX | Trust badges       │
└───────────────────────────────────────────────────────────────┘
```

**Mobile (375px):**
```
┌─────────────────────────┐
│ ☰  [LOGO]      🔍  👤  │
├─────────────────────────┤
│                         │
│   FIND YOUR CSCS CARD   │
│    TRAINING ONLINE      │
│                         │
│ [SEARCH: "CSCS..."]     │
│ [Find Course →]         │
│                         │
│ ⭐⭐⭐⭐⭐ 4.8/5          │
│ [CPD] [CITB] [✓]       │
│                         │
├─────────────────────────┤
│                         │
│  I NEED A...            │
│ ┌─────────────────────┐ │
│ │  CSCS Green Card    │ │
│ │  from £30           │ │
│ │  [START NOW]        │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │  Working at Height  │ │
│ │  from £25           │ │
│ │  [START NOW]        │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │  For Employers      │ │
│ │  Bulk Training      │ │
│ │  [REQUEST QUOTE]    │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ TRUSTED BY              │
│ [Skanska] [Kier] [G4S]  │
├─────────────────────────┤
│ FOOTER (minimal)        │
└─────────────────────────┘
```

**Layout Principles (from audit):**
- Trust signals ABOVE FOLD (Trustpilot, accreditation badges)
- Simplified navigation (5-7 categories max)
- Clear entry points ("I need a CSCS card" / "I need safety training")
- Search with autocomplete (prominent)
- Mobile-first, large tap targets (48px+)
- Employer pathway visible

---

### 2. Product Page Wireframes

**Desktop:**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   Categories ▼  For Employers  Search  [LOGIN] [CTA] │
├───────────────────────────────────────────────────────────────┤
│  Home > Health & Safety > CSCS Green Card                     │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐    CSCS Green Card Test                     │
│  │              │    Labourer & Construction Operatives       │
│  │  [PRODUCT    │                                             │
│  │   IMAGE]     │    £35.00                                   │
│  │              │    ⭐⭐⭐⭐⭐ 4.9/5 (1,240 reviews)            │
│  └──────────────┘                                             │
│                     [ADD TO CART] [BUY NOW]                   │
│                     [CPD Badge] [CITB Badge]                  │
│                                                                │
│  ─────────────────────────────────────────────────────────────│
│                                                                │
│  KEY FACTS                                                     │
│  • Duration: 45 minutes                                        │
│  • Certificate: Instant download                              │
│  • Accreditation: CPD + CITB approved                         │
│  • Format: Online, self-paced                                 │
│                                                                │
│  WHAT YOU'LL LEARN                                             │
│  ✓ Health & Safety awareness                                  │
│  ✓ Site hazards and controls                                  │
│  ✓ CSCS Green Card test preparation                           │
│                                                                │
│  WHO IS THIS FOR?                                              │
│  Labourers, construction operatives, and site workers needing │
│  a CSCS Green Card for site access.                           │
│                                                                │
│  ─────────────────────────────────────────────────────────────│
│                                                                │
│  RELATED COURSES                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ CSCS Red │  │ Working  │  │ First    │                    │
│  │ Card     │  │ at Height│  │ Aid      │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└───────────────────────────────────────────────────────────────┘
```

**Mobile (sticky CTA bar):**
```
┌─────────────────────────┐
│ ☰  [LOGO]      🔍  👤  │
├─────────────────────────┤
│  Home > ... > CSCS      │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │   [PRODUCT IMG]   │  │
│  └───────────────────┘  │
│                         │
│  CSCS Green Card Test   │
│  Labourer & Operatives  │
│                         │
│  £35.00                 │
│  ⭐⭐⭐⭐⭐ 4.9/5         │
│  [CPD] [CITB]           │
│                         │
│  KEY FACTS              │
│  • 45 min               │
│  • Instant cert         │
│  • CPD + CITB           │
│                         │
│  WHAT YOU'LL LEARN      │
│  ✓ Health & Safety      │
│  ✓ Site hazards         │
│  ✓ Test prep            │
│                         │
│  RELATED COURSES        │
│  [Cards...]             │
│                         │
├─────────────────────────┤
│ £35 | [ADD TO CART] →  │ ← STICKY BAR
└─────────────────────────┘
```

**Layout Principles:**
- Price + reviews ABOVE FOLD
- Trust signals (badges) next to CTA
- 4 key facts (Duration, Certificate, Accreditation, Format)
- Simplified description (scannable bullets)
- Related courses (upsell)
- Sticky CTA bar on mobile

---

### 3. Category Page Wireframes

**Desktop:**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   Categories ▼  For Employers  Search  [LOGIN] [CTA] │
├───────────────────────────────────────────────────────────────┤
│  Home > Health & Safety Training                              │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  HEALTH & SAFETY TRAINING COURSES                              │
│  Accredited construction safety courses for site workers       │
│                                                                │
│  [SEARCH: "Find a course..."]                                 │
│                                                                │
│  FILTERS                                                       │
│  Price: [All] [£0-£25] [£25-£50] [£50+]                      │
│  Duration: [All] [<1h] [1-2h] [2h+]                           │
│  Accreditation: [All] [CPD] [CITB] [IOSH]                    │
│  Job Role: [All] [Labourer] [Supervisor] [Manager]           │
│                                                                │
│  SORT: [Most Popular ▼]  [Price] [Rating]                    │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │ CSCS Green   │  │ Working at   │  │ First Aid    │        │
│  │ Card Test    │  │ Height       │  │ at Work      │        │
│  │ £35          │  │ £25          │  │ £40          │        │
│  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │        │
│  │ [VIEW]       │  │ [VIEW]       │  │ [VIEW]       │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  [Load More]                                                   │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└───────────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌─────────────────────────┐
│ ☰  [LOGO]      🔍  👤  │
├─────────────────────────┤
│ Home > Health & Safety  │
├─────────────────────────┤
│                         │
│ HEALTH & SAFETY         │
│ TRAINING COURSES        │
│                         │
│ [SEARCH: "Find..."]     │
│                         │
│ [FILTERS ▼] [SORT ▼]   │
│                         │
│ ┌─────────────────────┐ │
│ │ CSCS Green Card     │ │
│ │ £35 | ⭐⭐⭐⭐⭐      │ │
│ │ [VIEW →]            │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Working at Height   │ │
│ │ £25 | ⭐⭐⭐⭐⭐      │ │
│ │ [VIEW →]            │ │
│ └─────────────────────┘ │
│                         │
│ [Load More]             │
│                         │
├─────────────────────────┤
│ FOOTER                  │
└─────────────────────────┘
```

**Layout Principles:**
- Search with autocomplete (prominent)
- Filters (price, duration, accreditation, job role)
- Sort options (popularity, price, rating)
- Course cards (grid layout)
- Mobile: simplified filters (collapsible)

---

### 4. Checkout Flow Wireframes (3 screens max)

**Screen 1: Cart + Guest/Account Choice**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   CHECKOUT                                            │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  YOUR CART                                                     │
│                                                                │
│  CSCS Green Card Test                   £35.00                │
│  [Remove]                                                      │
│                                                                │
│  Subtotal:                              £35.00                │
│  VAT (0%):                              £0.00                 │
│  Total:                                 £35.00                │
│                                                                │
│  ─────────────────────────────────────────────────────────────│
│                                                                │
│  CHECKOUT AS:                                                  │
│  ○ Guest (faster checkout)                                    │
│  ○ Create account (save progress)                             │
│                                                                │
│  [CONTINUE TO DETAILS →]                                      │
│                                                                │
│  🔒 Secure checkout | 30-day money-back guarantee            │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

**Screen 2: Billing Details**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   CHECKOUT   [1. Cart] → [2. Details] → [3. Payment] │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  BILLING DETAILS                                               │
│                                                                │
│  Email:         [________________]                            │
│  Full Name:     [________________]                            │
│  Phone:         [________________]                            │
│  Company (opt): [________________]                            │
│                                                                │
│  [← BACK]                                   [CONTINUE →]      │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

**Screen 3: Payment**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   CHECKOUT   [1. Cart] → [2. Details] → [3. Payment] │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  PAYMENT METHOD                                                │
│                                                                │
│  ○ Card                                                        │
│     Card Number:  [____-____-____-____]                       │
│     Expiry: [MM/YY]  CVV: [___]                               │
│                                                                │
│  ○ Apple Pay   [Pay with Apple Pay]                           │
│  ○ Google Pay  [Pay with Google Pay]                          │
│                                                                │
│  🔒 Your payment is secure and encrypted                      │
│  [Visa] [Mastercard] [Secure Checkout Badge]                 │
│                                                                │
│  Total: £35.00                                                │
│                                                                │
│  [← BACK]                      [COMPLETE PURCHASE →]          │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

**Layout Principles:**
- 3 steps max (Cart, Details, Payment)
- Guest checkout enabled (no forced account)
- Apple Pay + Google Pay options
- Security badges near payment
- Progress indicator
- Mobile: large tap targets (48px+), minimal typing

---

### 5. Employer Pathway Wireframes

**Desktop:**
```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]   Categories  [FOR EMPLOYERS]  Search  [LOGIN] [CTA] │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│              TRAIN YOUR TEAM                                   │
│         Bulk Training for Construction Companies              │
│                                                                │
│  ✓ Manage team progress      ✓ Invoice payment               │
│  ✓ Bulk pricing               ✓ Training records             │
│                                                                │
│           [REQUEST A QUOTE]   [CALL: 0800 XXX XXXX]           │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  POPULAR TRAINING PACKAGES                                     │
│                                                                │
│  ┌──────────────────────────────┐                             │
│  │ SITE WORKER ESSENTIALS       │                             │
│  │ CSCS + Working at Height     │                             │
│  │ + First Aid                  │                             │
│  │ From £90/person (5+ staff)   │                             │
│  │ [REQUEST QUOTE]              │                             │
│  └──────────────────────────────┘                             │
│                                                                │
│  TRAINING BY ROLE                                              │
│  [Labourer] [Supervisor] [Manager] [All Roles]               │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  TRUSTED BY EMPLOYERS                                          │
│  "We trained 120 staff in 3 months" – [Skanska logo]         │
│  "Great dashboard for tracking progress" – [Kier logo]        │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

**Layout Principles:**
- "For Employers" pathway from homepage
- Bulk pricing + Request a Quote CTA
- Training matrix by role
- Employer testimonials
- Dashboard preview (concept)

---

## Component Documentation

For each wireframe, document:

### Blocks
- Hero (headline + subheadline + CTA + trust signals)
- Category cards (icon + title + price + CTA)
- Product cards (image + title + price + rating + CTA)
- Trust section (employer logos + reviews)
- Footer (links + support phone + trust badges)

### Components
**Button:**
- Variants: Primary, Secondary, Ghost
- Sizes: Small (32px), Medium (40px), Large (48px), XL (56px mobile)
- Props: label (text), icon (left/right/only), disabled (boolean)

**Card:**
- Variants: Product, Category, Employer
- Props: title, subtitle, description, price, rating, image (optional), CTA text
- Sizes: Compact, Default, Large

**Input:**
- Variants: Text, Email, Phone, Search
- States: Default, Focus, Error, Disabled
- Props: placeholder, label, helpText, errorMessage

**Badge:**
- Variants: CPD, CITB, Trustpilot, Security
- Sizes: Small, Medium, Large

**SearchBar:**
- Variants: Header, Hero, Category
- Props: placeholder, showAutocomplete (boolean)

**NavItem:**
- Variants: Desktop, Mobile, Dropdown
- States: Default, Active, Hover
- Props: label, icon, badge (optional)

### Props/Slots
For each component:
```markdown
## Button Component

**Variants:** Primary, Secondary, Ghost
**Sizes:** Small (32px), Medium (40px), Large (48px), XL (56px mobile)
**States:** Default, Hover, Focus, Active, Disabled
**Props:**
- variant: "primary" | "secondary" | "ghost"
- size: "sm" | "md" | "lg" | "xl"
- icon?: "left" | "right" | "only"
- disabled?: boolean

**Slots:**
- Default (button text)
- Icon (optional)
```

---

## Theme Design (from client PDF)

**Typography (Inter Sans Serif Variable):**
- Display: D1 (128px) → D6 (36px)
- Heading: H1 (30px) → H6 (14px)
- Body: 16px (large), 14px (default), 13px (small)
- Caption: 12px
- Line height: 1.5 (150%)

**Colors (from client):**
- Primary: #1F396D (Dark Blue)
- Secondary: #16A34A (Green)
- BG: #F8FAFC (Light Gray)
- BG Secondary: #E1F1EA (Light Mint)
- Heading: #334155 (Slate)
- Body: #475569 (Muted Slate)

**Spacing Scale:**
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

**Border Radius:**
- None (0), Small (4px), Medium (8px), Large (16px), XL (24px), Full (9999px)

**Shadows:**
- Level 1: 1px 3px (buttons, small cards)
- Level 2: 4px 16px (cards, elevated surfaces)
- Level 3: 8px 32px (modals, floating panels)
- Level 4: 20px 48px (top-level overlays)

---

## Animation Design Plan

**Micro-interactions:**
```
button: 150ms [S1→0.95→1] press
hover: 200ms [Y0→-2, shadow↗]
fadeIn: 400ms ease-out [Y+20→0, α0→1]
slideIn: 350ms ease-out [X-100→0, α0→1]
```

**Page transitions:**
- Entry: 300-500ms, ease-out
- Hover states: 150-200ms
- Button press: 100-150ms

---

## Output Files

Create markdown files in `wireframes/` directory:
1. `homepage.md` — Desktop + mobile wireframes
2. `product-page.md` — Desktop + mobile wireframes
3. `category-page.md` — Desktop + mobile wireframes
4. `checkout-flow.md` — 3 screens, mobile-optimized
5. `employer-pathway.md` — Desktop wireframe
6. `component-specs.md` — Complete component documentation (blocks, components, props/slots)
7. `theme-design.md` — Typography, colors, spacing, shadows, animations

---

## Success Criteria

✅ **5 page wireframes** (homepage, product, category, checkout, employer) in ASCII format  
✅ **Desktop + mobile** versions for each page  
✅ **Component documentation** (blocks, components, props/slots)  
✅ **Theme design** documented (typography, colors, spacing, shadows)  
✅ **Animation plan** (micro-interactions, transitions)  
✅ **Layout principles** tied to Phase 1-2 audit findings  
✅ **All outputs** saved to `wireframes/` directory in markdown format  

---

**Duration Estimate:** ~10-15 min  
**Next Phase:** Phase 3 — Figma Design System (use wireframes as foundation)
