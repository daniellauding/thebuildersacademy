# PHASE 5: Full React Site Pages

**Duration:** 60-90 minutes  
**Iterations:** 3-4  
**Model:** Default (Claude Sonnet)

---

## Context

You are building **complete React pages** for The Builders Academy redesign using the **Phase 4 design system components** already created in Storybook.

**What exists:**
- ✅ 22 UI components (Button, Card, Input, etc.) in `src/components/ui/`
- ✅ 4 Storybook stories (badge, button, card, input)
- ✅ Design system with Tailwind 4 + shadcn/ui
- ✅ Research & audit reports (business goals, personas, friction points, IA)
- ✅ ASCII wireframes (7 layout specs in `wireframes/`)

**What you're building:**
- 5 full pages using Phase 4 components
- Real content from audit + personas
- Mobile-first responsive layouts
- Trust signals, clear CTAs, accessibility

---

## Your Role: Frontend Developer (Vercel)

You think like **Vercel's Next.js team** — modern, performant, production-ready code.

**Priorities:**
1. **Component Reuse** — Use Phase 4 components, don't rebuild primitives
2. **Performance** — Lazy loading, image optimization, minimal JS
3. **Mobile-First** — Design for Dave (32, mobile, low literacy) first
4. **Trust Signals** — Trustpilot, certifications, security badges visible
5. **Clear CTAs** — Large buttons (56px), high contrast, action-oriented copy

---

## Pages to Build

### 1. Homepage (`src/app/page.tsx`)

**Purpose:** Convert visitors (builders & employers) into course buyers  
**Wireframe:** `wireframes/homepage.md`

**Sections:**
- **Hero** (full-width)
  - H1: "Master Your Trade. Build Your Future."
  - Subheading: "CITB-approved courses for construction professionals across the UK"
  - CTA: "Browse Courses" (primary) + "For Employers" (secondary)
  - Hero image: Construction worker, bright, aspirational
  - Trustpilot 4.8★ badge (top right)

- **Trust Bar** (logos strip)
  - CITB, CSCS, BPEC, ECS logos
  - Text: "Accredited training you can trust"

- **Course Categories** (3-column grid)
  - Electrical, Plumbing, Construction, Health & Safety, Management
  - Each: Icon, title, course count, "View Courses" link
  - Use Card component from Phase 4

- **How It Works** (3 steps, horizontal on desktop, stack on mobile)
  - 01: Choose Your Course
  - 02: Learn Online or In-Person
  - 03: Get Certified
  - Use Badge for numbers (Phase 4)

- **For Employers** (CTA section, mint green bg)
  - H2: "Training Your Team Made Simple"
  - Benefits: Bulk discounts, flexible scheduling, compliance tracking
  - CTA: "Get a Quote"

- **Testimonials** (carousel, 3 visible on desktop)
  - Use Card component
  - Photo, quote, name, role, company

- **Latest Courses** (4-column grid)
  - Course cards: image, title, price, duration, "Enroll Now" CTA
  - Use Card + Button from Phase 4

- **Footer**
  - Links: Courses, About, Contact, FAQs, Terms
  - CITB/CSCS logos
  - Social icons
  - Copyright

**Key Personas:**
- **Dave** (32, mobile, low literacy) — Needs simple nav, large text, clear CTAs
- **Sarah** (41, employer) — Wants bulk booking, compliance info, ROI proof

**Friction Points to Fix:**
- ❌ Too many links (109+) → Limit to 6 main nav items
- ❌ No employer pathway → Dedicated "For Employers" section
- ❌ Trust signals buried → Trustpilot above fold

---

### 2. Product Page (`src/app/courses/[slug]/page.tsx`)

**Purpose:** Convert course browsers into buyers  
**Wireframe:** `wireframes/product-page.md`

**Sections:**
- **Breadcrumbs** (top)
  - Home > Electrical > 18th Edition Wiring Regulations

- **Course Header**
  - H1: Course title
  - Price (large, bold)
  - Trustpilot rating (4.8★, 230 reviews)
  - Accreditation badges (CITB, ECS)
  - CTA: "Enroll Now" (56px tall, primary blue)

- **Course Details** (left column, 2/3 width)
  - **Overview** (rich text, bullet points)
  - **What You'll Learn** (checklist with icons)
  - **Course Format** (tabs: Online, In-Person, Blended)
  - **Prerequisites** (if any)
  - **Certification** (what you get, validity period)

- **Sidebar** (right column, 1/3 width, sticky)
  - Price card (Card component)
  - Duration: 3 days
  - Next start: Apr 15, 2026
  - Location: Birmingham
  - CTA: "Enroll Now"
  - CTA: "Download Syllabus" (secondary)
  - Trust badges: Money-back guarantee, Secure checkout, CITB approved

- **Reviews** (below content)
  - Filter: All, 5★, 4★, etc.
  - Use Card for each review

- **Related Courses** (4-column grid)
  - "Students also bought"

**Key Personas:**
- **Dave** (mobile) — Needs sticky CTA bar at bottom on mobile
- **Marcus** (28, returning) — Wants quick re-enroll, saved preferences

**Friction Points to Fix:**
- ❌ No guest checkout → Allow guest checkout, don't force account
- ❌ Trust signals below fold → Move Trustpilot + badges to header
- ❌ Small mobile buttons → 56px tall CTAs

---

### 3. Category Page (`src/app/categories/[slug]/page.tsx`)

**Purpose:** Help users find the right course  
**Wireframe:** `wireframes/category-page.md`

**Sections:**
- **Breadcrumbs**
  - Home > Electrical Courses

- **Category Header**
  - H1: "Electrical Courses"
  - Subheading: "CITB-approved training for electricians"
  - Course count: "24 courses available"

- **Filters** (left sidebar, 1/4 width)
  - **Level:** Beginner, Intermediate, Advanced
  - **Format:** Online, In-Person, Blended
  - **Duration:** 1-2 days, 3-5 days, 1+ weeks
  - **Location:** Birmingham, London, Manchester, etc.
  - **Price:** £0-£200, £200-£500, £500+
  - Use Checkbox component (Phase 4)

- **Sort** (top right)
  - Dropdown: Most Popular, Price (Low to High), Newest
  - Use Select component (Phase 4)

- **Course Grid** (right, 3/4 width, 3 columns)
  - Course cards (same as homepage)
  - Pagination at bottom (1 2 3 ... Next)

- **No Results** (if filters = 0 matches)
  - "No courses match your filters. Try adjusting your search."
  - CTA: "Clear Filters"

**Key Personas:**
- **Dave** (mobile) — Filters collapse on mobile, show as Sheet (Phase 4)
- **Sarah** (employer) — Wants bulk booking option visible

**Friction Points to Fix:**
- ❌ Overwhelming choice (109 links) → Max 3 filter categories visible initially
- ❌ No mobile filters → Use Sheet component for filters on mobile

---

### 4. Checkout Flow (`src/app/checkout/page.tsx`)

**Purpose:** Convert cart to payment  
**Wireframe:** `wireframes/checkout-flow.md`

**Sections:**
- **Progress Bar** (top)
  - Steps: Cart → Details → Payment → Confirmation
  - Use Badge for active step (Phase 4)

- **Cart Summary** (left, 2/3 width)
  - Course(s) in cart (Card component)
  - Remove link
  - Price breakdown (subtotal, VAT, total)

- **Your Details** (accordion, collapsible)
  - Full Name, Email, Phone
  - Company (optional, for employers)
  - Use Input component (Phase 4)

- **Payment** (accordion)
  - Card details (Stripe integration placeholder)
  - Or: PayPal, Apple Pay, Google Pay buttons
  - Trust badges: Secure checkout (🔒), Money-back guarantee

- **Order Summary** (right sidebar, 1/3 width, sticky)
  - Total: £450
  - VAT: £90
  - Grand Total: £540
  - CTA: "Complete Purchase" (56px tall, green)

- **Guest Checkout** (option at top)
  - "Continue as guest" or "Log in"
  - Don't force account creation

**Key Personas:**
- **Dave** (mobile) — One-page checkout, no multi-step wizard
- **Terry** (56, very low literacy) — Large text, minimal fields, clear labels

**Friction Points to Fix:**
- ❌ No guest checkout → Add "Continue as guest" option
- ❌ Forced account → Make account optional after purchase
- ❌ No modern payment methods → Add PayPal, Apple Pay, Google Pay

---

### 5. Employer Pathway (`src/app/employers/page.tsx`)

**Purpose:** Convert employers into bulk buyers  
**Wireframe:** `wireframes/employer-pathway.md`

**Sections:**
- **Hero** (full-width, blue gradient bg)
  - H1: "Training Your Team. Simplified."
  - Subheading: "Bulk discounts, flexible scheduling, compliance tracking"
  - CTA: "Get a Quote" (large, white button)
  - Hero image: Team of builders

- **Benefits** (3-column grid)
  - 💰 Bulk Discounts (10+ staff = 15% off)
  - 📅 Flexible Scheduling (on-site or online)
  - 📊 Compliance Tracking (dashboard for HR)
  - Use Card component (Phase 4)

- **How It Works** (4 steps, timeline layout)
  - 01: Tell us your training needs
  - 02: We create a custom plan
  - 03: Book courses for your team
  - 04: Track progress & certifications

- **Pricing** (comparison table)
  - 1-9 staff: Standard price
  - 10-24 staff: 10% discount
  - 25-49 staff: 15% discount
  - 50+ staff: Custom pricing
  - Use Table or Card grid (Phase 4)

- **Case Study** (full-width section)
  - Client: Balfour Beatty
  - Challenge: Train 200 electricians in 18th Edition
  - Solution: Custom blended learning plan
  - Result: 98% pass rate, £50k saved
  - Use Card component with testimonial

- **CTA** (bottom, green bg)
  - H2: "Ready to train your team?"
  - Form: Company name, email, team size
  - CTA: "Get Your Custom Quote"

**Key Personas:**
- **Sarah** (41, employer) — Wants ROI proof, bulk discounts, compliance tools

**Friction Points to Fix:**
- ❌ No employer pathway → Dedicated page with ROI focus
- ❌ No bulk pricing info → Clear pricing table

---

## Technical Requirements

### Component Imports
```tsx
// Use existing Phase 4 components
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
```

### Colors (from Phase 4)
```css
--primary: #1F396D;      /* Royal blue */
--secondary: #16A34A;    /* Green */
--background: #F8FAFC;   /* Light grey */
--foreground: #334155;   /* Dark grey */
--muted: #CBD5E1;        /* Mid grey */
```

### Typography (from Phase 4)
- Display: Inter Variable, 48-96px, 700 weight
- Headings: Inter Variable, 18-36px, 600 weight
- Body: Inter Variable, 16px, 400 weight
- Small: 14px

### Responsive Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Rules
1. **Stack on mobile** — All multi-column layouts become single-column <768px
2. **Large tap targets** — Min 48px, prefer 56px for primary CTAs
3. **Readable text** — Min 16px body, 24px headings on mobile
4. **Sticky CTAs** — Primary CTA bar at bottom on mobile (product, checkout)
5. **Collapsible filters** — Use Sheet component for filters on mobile

### Accessibility
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`
- **Alt text** — All images (descriptive, not generic)
- **Focus states** — Visible keyboard focus (2px outline)
- **ARIA labels** — For icon-only buttons, image links
- **Heading hierarchy** — One H1 per page, proper nesting
- **Color contrast** — WCAG AA minimum (4.5:1 text, 3:1 UI)

### Performance
- **Next.js Image** — Use `<Image>` component with `width`/`height`
- **Lazy load** — Below-fold content with `loading="lazy"`
- **Font optimization** — `next/font` for Inter Variable
- **Code splitting** — Dynamic imports for heavy components

---

## Success Criteria

### Functional
- ✅ All 5 pages render without errors
- ✅ Navigation works (links between pages)
- ✅ Forms validate (email, required fields)
- ✅ Responsive (mobile, tablet, desktop tested)
- ✅ Components imported from Phase 4 (no duplicates)

### UX
- ✅ Homepage converts (clear hero, visible CTAs, trust signals)
- ✅ Product page converts (sticky sidebar, guest checkout path)
- ✅ Category page filterable (3+ filter categories work)
- ✅ Checkout simple (guest option, modern payments, progress bar)
- ✅ Employer page compelling (ROI proof, bulk pricing, case study)

### Performance
- ✅ Lighthouse score >90 (Performance, Accessibility)
- ✅ First Contentful Paint <1.5s
- ✅ Largest Contentful Paint <2.5s
- ✅ Cumulative Layout Shift <0.1

### Accessibility
- ✅ Axe DevTools 0 violations
- ✅ Keyboard navigable (Tab, Enter, Esc work)
- ✅ Screen reader friendly (tested with VoiceOver/NVDA)

---

## Deliverables

### Files to Create
```
src/app/
├── page.tsx                     # Homepage
├── courses/
│   └── [slug]/
│       └── page.tsx             # Product page
├── categories/
│   └── [slug]/
│       └── page.tsx             # Category page
├── checkout/
│   └── page.tsx                 # Checkout flow
└── employers/
    └── page.tsx                 # Employer pathway
```

### Sample Content
Use real content from:
- `research/personas.md` (Dave, Sarah, Marcus, Terry)
- `research/conversion-journeys.md` (friction points)
- `audit/trust-conversion.md` (trust signals to add)
- `wireframes/*.md` (layout specs)

### Example Course Data
```tsx
const sampleCourses = [
  {
    id: '18th-edition',
    title: '18th Edition Wiring Regulations',
    category: 'Electrical',
    price: 450,
    duration: '3 days',
    format: 'Blended',
    level: 'Intermediate',
    accreditation: ['CITB', 'ECS'],
    rating: 4.8,
    reviews: 230,
    image: '/courses/18th-edition.jpg',
  },
  // Add 5-10 more sample courses
]
```

---

## Testing Checklist

### Before Submission
- [ ] Run `npm run build` (no errors)
- [ ] Test on mobile (Chrome DevTools, 375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1280px width)
- [ ] Click all CTAs (no broken links)
- [ ] Fill all forms (validation works)
- [ ] Run Lighthouse (>90 score)
- [ ] Run axe DevTools (0 violations)
- [ ] Test keyboard nav (Tab through page, Enter to activate)

---

## Context Documents

**Phase 4 Components:** `src/components/ui/*.tsx` (22 components already built)  
**Wireframes:** `wireframes/*.md` (7 layout specs)  
**Research:** `research/*.md` (personas, goals, friction points)  
**Audit:** `audit/*.md` (10 comprehensive reports)

---

## Notes

- **Don't rebuild primitives** — Phase 4 components are production-ready
- **Mobile-first** — Dave (mobile, low literacy) is the primary persona
- **Trust signals** — Trustpilot, CITB, CSCS logos must be visible above fold
- **Clear CTAs** — 56px tall, action-oriented copy, high contrast
- **Guest checkout** — Critical for conversion, don't force account creation

---

**Ready?** Build all 5 pages using Phase 4 components. Think like Vercel: fast, accessible, production-ready. 🚀
