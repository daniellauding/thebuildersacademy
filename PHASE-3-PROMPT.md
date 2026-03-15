# Phase 3: Design System Foundation — The Builders Academy Redesign

## Context
You are a **world-class design system architect** building a comprehensive design system in Figma for The Builders Academy. You have access to:

**Phase 1 & 2 Insights:**
- `research/business-goals.md` — 9 goals, 12 KPIs, 5 strategic pillars
- `research/personas.md` — 4 user personas (Dave, Sarah, Marcus, Terry)
- `research/conversion-journeys.md` — 23 friction points across 2 funnels
- `research/strategic-direction.md` — Trust First, Simplicity, Mobile-First, Employer Growth, Smart Discovery
- `audit/` — 9 comprehensive audits (UX, Content, IA, SEO, Accessibility, Mobile, Trust, Visual, Competitive)

**Figma File:**
- URL: https://www.figma.com/design/GIBjKMKtYjBMLExYrVb1lh/The-Builders-Academy
- Access: Figma token configured (see TOOLS.md)

**Moodboard Inspiration (STUDY THESE):**
- https://www.airbnb.com/ — Trust signals, mobile-first, clear CTAs
- https://www.eventbrite.com/ — Category discovery, event cards, search patterns

## Objective
Build a **production-ready design system** in Figma that:

1. **Reflects audit findings** — Trust signals, simplified navigation, mobile-first, accessibility
2. **Supports user personas** — Low digital literacy (Terry), employer pathways (Sarah), mobile-first (Dave), returning buyers (Marcus)
3. **Enables variant exploration** — Multiple design directions, A/B test candidates
4. **Syncs with Storybook** — Variables ready for export, component documentation aligned
5. **Documents itself** — Design tokens, usage guidelines, do's/don'ts per component

## Strategic Design Principles (From Phase 1-2)

### 1. Trust First
- Trustpilot reviews above the fold
- CPD/CITB badges next to CTAs
- "Trusted by" employer logos (Skanska, Kier, G4S, BBC Studios)
- Security badges at checkout
- Visible phone number + live chat

### 2. Simplicity Over Features
- Reduce navigation from 109+ links to 5-7 categories
- Product pages: 4 key facts only (Price, Duration, Certificate, Accreditation)
- Mobile: sticky CTA bar
- Minimal checkout steps, guest checkout enabled
- Clear entry points on homepage

### 3. Mobile-First Reality
- Large tap targets (48px min, 56px preferred)
- Readable text (16px+ body)
- Streamlined mobile checkout
- Apple Pay / Google Pay integration
- Test on actual devices

### 4. Accessibility (WCAG 2.2 AA Mandatory)
- Color contrast: APCA-based (Lc 60+ for body text, Lc 90+ for small text)
- Touch targets: 48px minimum (56px preferred)
- Keyboard navigation: visible focus states
- Screen reader: proper ARIA labels, semantic HTML
- Form labels: always visible, not placeholders

### 5. Conversion-Optimized
- Above-the-fold trust signals
- Clear CTAs with high contrast
- Price clarity (no hidden fees)
- Guest checkout (no forced account)
- Progress indicators at checkout

## Deliverables

### 1. Foundation Page — Variables & Tokens
**Location:** Figma file → "🎨 Foundation" page

**Variables to create (DeLaval-inspired architecture):**

**Color Collections (multi-mode: Light / Dark):**
```
Brand (11 vars):
- color/primary/50 → color/primary/900 (full scale)
- color/primary/light (alias for lighter shades)

Semantic (8 vars):
- color/success, color/success-bg
- color/warning, color/warning-bg
- color/error, color/error-bg
- color/info, color/info-bg

Neutral (7 vars):
- color/neutral/0 (white) → color/neutral/900 (near-black)

UI Surface (36+ vars — SEMANTIC ALIASES):
- color/background, color/foreground
- color/card, color/border, color/muted
- color/accent, color/input-bg, color/destructive
- color/canvas, color/surface
- color/chip-*, color/table-*, color/icon-*
```

**Spacing Collection:**
```
Base scale:
- space/0: 0, space/1: 4px, space/2: 8px, space/3: 12px
- space/4: 16px, space/5: 20px, space/6: 24px, space/8: 32px
- space/10: 40px, space/12: 48px, space/16: 64px

Semantic spacing (multi-mode support):
- padding/page: 24, padding/section: 32, padding/card: 16
- padding/card-sm: 12, padding/input: 12, padding/button: 12
- padding/inline: 8
- gap/page: 32, gap/section: 24, gap/stack: 16
- gap/stack-sm: 12, gap/form: 16, gap/inline: 8
- gap/tight: 4
```

**Radius Collection:**
```
- radius/none: 0, radius/xs: 4px, radius/sm: 6px, radius/md: 8px
- radius/lg: 10px, radius/xl: 14px, radius/2xl: 16px
- radius/3xl: 24px, radius/4xl: 32px, radius/full: 9999px
```

**Stroke Collection:**
```
- stroke/none: 0, stroke/thin: 1px, stroke/default: 1.5px
- stroke/medium: 2px, stroke/thick: 4px
```

**Shadow Collection (via Effect Styles):**
```
- shadow/1: offsetY 1px, blur 3px (subtle lift)
- shadow/2: offsetY 4px, blur 16px (cards, dropdowns)
- shadow/3: offsetY 8px, blur 32px (modals, floating panels)
- shadow/4: offsetY 20px, blur 48px (top-level overlays)
```

**Size Collection:**
```
- size/height/button-sm/md/lg: 32/40/48
- size/height/input-sm/md/lg: 32/40/48
- size/height/icon-sm/md/lg: 16/20/24
- size/height/topbar: 56
- size/width/sidebar: 240
- size/width/dialog-sm/md/lg: 400/560/720
- size/container/sm…2xl: 640…1440
```

**Opacity Collection:**
```
- opacity/0 → opacity/100 (10% steps)
```

**Typography Variables (from client PDF):**
```
Font family: Inter Sans Serif Variable
Display scale (D1-D6): 128px → 36px
Heading scale (H1-H6): 30px → 14px
Line heights: normal 1.5rem (150%)
```

**Documentation:**
- Create a text section (Ctrl/Cmd+S) per category explaining naming rationale
- Include contrast ratios for color pairs
- Add usage examples ("Use Primary for main CTAs, Secondary for secondary actions")

**Deliverable:** `design-system/01-foundation.md` (export Figma variables as markdown table)

---

### 2. Components Library — Core UI Elements
**Location:** Figma file → "🧩 Components" page

**Component sets to build (DeLaval-style architecture):**

**Buttons:**
- **Variants:** Size (S/M/L) × Variant (Primary/Secondary/Ghost/Disabled/Icon/Icon-Secondary/Icon-Ghost) = 21 variants
- **Props:**
  - `label` (text)
  - `iconBefore` (boolean)
  - `iconAfter` (boolean)
  - `buttonIcon` (instance swap)
  - `isLoading` (boolean)
- **Layout:** Horizontal auto-layout, padding bound to `padding/button`, gap bound to `gap/tight`, radius bound to `radius/full` for pill shape
- **Variable bindings:** ALL padding, gap, radius, fill colors, stroke colors MUST be bound to variables

**Form Inputs:**
- Text input, Email, Phone, Password
- States: Default, Focus, Error, Success, Disabled
- With/without label, help text, error message
- Variants: Outline, Filled
- Sizes: Medium (40px), Large (48px for mobile)

**Cards:**
- Product card (course listing)
- Category card (navigation)
- Trust card (testimonial, review)
- Employer card (bulk purchase CTA)
- Variants: Horizontal, Vertical, Compact

**Navigation:**
- Desktop header (simplified 5-7 links)
- Mobile header (hamburger + search + cart)
- Footer (minimal, trust-focused)
- Breadcrumbs
- Pagination

**Trust Elements:**
- Review star rating (1-5 stars)
- Badge (CPD, CITB, accreditation)
- Trustpilot widget
- Employer logo grid
- Security badge (checkout)

**Checkout:**
- Cart item
- Order summary
- Progress stepper (3 steps max)
- Payment method selector (card, Apple Pay, Google Pay)

**Responsive Behavior:**
- Each component must have mobile (375px) and desktop (1280px) variants
- Document responsive breakpoints per component

**Documentation per component:**
- Usage guidelines ("When to use this component")
- Accessibility notes (ARIA, keyboard nav)
- Do's and don'ts (visual examples)
- Code reference (for Storybook sync)

**isLoading States (CRITICAL — DeLaval pattern):**
Every component MUST have an `isLoading` boolean property. When true:
1. White blocker rectangle (absolute-positioned, STRETCH constraints) covers content
2. Shimmer skeleton shapes (gradient-filled) appear on top
3. Real content visually hidden behind blocker

**Shimmer gradient pattern:**
```
GRADIENT_LINEAR
0% → #E0E0E6
35% → #E0E0E6
50% → #F2F2F5 (bright highlight)
65% → #E0E0E6
100% → #E0E0E6
Transform: [[1.5, 0, -0.25], [0, 0, 0.5]]
```

**Variable Binding Rules (MANDATORY):**
| Property | Variable Collection | Example |
|---|---|---|
| All padding (top/right/bottom/left) | Spacing or Semantic Spacing | `paddingTop → space/4` or `padding/card` |
| Item spacing (gap) | Spacing or Semantic Spacing | `itemSpacing → gap/stack` |
| Corner radius (all corners) | Radius | `topLeftRadius → radius/md` |
| Stroke weight | Stroke | `strokeWeight → stroke/thin` |
| Fill colors | UI Surface / Brand / Semantic | `fills → color/foreground` |
| Stroke colors | UI Surface / Semantic | `strokes → color/border` |
| Width/height (fixed sizes) | Size | `width → size/width/dialog-md` |

**What CANNOT be bound:**
- Shadow effects → Use Effect Styles instead (`Shadow/Level 1–4`)
- Font family/weight → Use Text Styles instead
- Boolean logic → No inverse bindings

**Deliverable:** `design-system/02-components.md` (component inventory with screenshots + guidelines + variable binding checklist)

---

### 3. Page Templates — Key User Journeys
**Location:** Figma file → "📄 Templates" page

**Templates to design (desktop + mobile):**

**Homepage:**
- Simplified hero (clear entry points: "I need CSCS card" / "I need safety training")
- Trust signals above fold (Trustpilot + accreditation badges)
- Category cards (5-7 max)
- "For Employers" CTA
- Featured courses
- Trust reinforcement (employer logos, review highlights)
- Simplified footer

**Product Page:**
- Hero image + title
- Price (prominent), duration, certificate type
- Trust signals (reviews, badges) ABOVE FOLD
- 4 key facts (Price, Duration, Certificate, Accreditation)
- Simplified description (scannable)
- Related courses (upsell)
- Sticky CTA bar (mobile)

**Category Page:**
- Page title + description (SEO)
- Filters (price, duration, accreditation, job role)
- Sort options (popularity, price)
- Course cards (grid)
- Search with autocomplete

**Checkout Flow (3 screens max):**
- Screen 1: Cart summary + guest/account choice
- Screen 2: Billing details (minimal fields)
- Screen 3: Payment (card, Apple Pay, Google Pay) + security badges
- Progress indicator
- Mobile-optimized (large tap targets, minimal typing)

**Employer Pathway:**
- "For Employers" landing page
- Bulk pricing / Request a quote
- Training matrix by role
- Employer dashboard (concept)

**Responsive variants:**
- All templates in mobile (375px) AND desktop (1280px)
- Document mobile-specific changes (sticky CTAs, simplified nav)

**Deliverable:** `design-system/03-templates.md` (template screenshots + journey flow diagrams)

---

### 4. Design Variants — Multiple Directions
**Location:** Figma file → "🎭 Variants" page

**Goal:** Explore **3 design directions** for A/B testing

**Variant A: Trust-Forward (Conservative)**
- Strong trust signals (reviews, badges, logos)
- Professional, clean aesthetic
- Minimal color (trust-building blue/green)
- Large typography, high contrast
- Best for: Terry (low digital literacy), Sarah (employer)

**Variant B: Modern Simplified (Balanced)**
- Simplified navigation (5 categories)
- Smart use of whitespace
- Contemporary typography (Inter/SF Pro)
- Mobile-first layout
- Best for: Dave (mobile), Marcus (returning)

**Variant C: Bold Discovery (Progressive)**
- Visual category cards with imagery
- Prominent search with autocomplete
- Smart recommendations
- Employer pathway highlighted
- Best for: Sarah (employer), Marcus (returning)

**Each variant includes:**
- Homepage redesign
- Product page redesign
- Mobile navigation pattern
- Trust signal placement strategy

**Deliverable:** `design-system/04-variants.md` (3 variants with rationale + persona fit)

---

### 5. Storybook Integration Plan
**Location:** Figma file → "📚 Storybook" page (documentation layer)

**Goal:** Prepare design system for Storybook export

**Storybook framework recommendation:**
- **shadcn/ui** (Radix UI primitives + Tailwind) — easiest to theme, accessibility built-in
- Alternative: Chakra UI, MUI (Material UI)

**Component mapping:**
- Each Figma component → Storybook story
- Variables → CSS custom properties or Tailwind config
- Documentation → MDX stories

**Export process:**
1. Use Figma Variables API to extract tokens
2. Convert to Tailwind config or CSS variables
3. Map components to shadcn/ui primitives
4. Add Storybook stories with controls (variants, sizes, states)
5. Document accessibility (ARIA, keyboard nav)

**Deliverable:** `design-system/05-storybook-plan.md` (mapping table + export script)

---

### 6. Documentation Hub
**Location:** Figma file → "📖 Documentation" page

**Content:**
- **Design Principles** — Trust First, Simplicity, Mobile-First, Accessibility, Conversion
- **Color System** — Semantic naming, contrast ratios, usage guidelines
- **Typography Scale** — Font pairing, hierarchy, responsive scaling
- **Spacing System** — 4px base unit, how to apply
- **Component Guidelines** — When to use, accessibility, do's/don'ts
- **Responsive Strategy** — Breakpoints, mobile-first approach
- **Accessibility Checklist** — WCAG 2.2 AA requirements per component

**Format:**
- Use Figma text sections (Ctrl/Cmd+S) for organization
- Add visual examples next to guidelines
- Link to Storybook stories (when available)

**Deliverable:** `design-system/06-documentation.md` (exported as markdown for Notion/Confluence)

---

## Tools & Workflow

### Figma MCP Server (Already Configured)
```json
"figma-code-to-canvas": {
  "command": "npx",
  "args": ["-y", "@figma/mcp-server"],
  "env": {
    "FIGMA_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN_HERE"
  }
}
```

### Figma Desktop Bridge Plugin
- Install: Plugins → Development → Import plugin from manifest
- Path: `/path/to/figma-console-mcp/figma-desktop-bridge/manifest.json`
- Purpose: Access variables and component descriptions via MCP

### Claude Code → Figma Workflow
1. **Capture UI:** `"Capture localhost:3000 and send to Figma"`
2. **Generate design:** `"Implement this Figma design: [URL]"`
3. **Extract variables:** `figma_get_variables({ format: "summary" })`
4. **Get component:** `figma_get_component({ fileUrl: "...", nodeId: "..." })`

### Inspiration Moodboard
**Study these before designing:**
- **Airbnb:** Trust signals, mobile navigation, clear CTAs, search patterns
- **Eventbrite:** Category cards, event discovery, filters, responsive design
- **Notion:** Clean typography, subtle shadows, component documentation
- **Stripe:** Payment UI, trust signals, form design, error states
- **Apple:** Product cards, accessibility, mobile-first, typography scale

**Extract learnings:**
- Screenshot key patterns (navigation, trust signals, forms, mobile)
- Annotate what works and why
- Reference in design decisions

---

## Constraints & Rules

### Platform Constraints
- **Magento/Adobe Commerce** — Components must be implementable in Magento
- **No fantasy designs** — Realistic implementations only
- **Preserve SEO** — Maintain URL structure, H1 hierarchy

### Audience Constraints
- **Low digital literacy** (Terry) — Large text, clear labels, minimal choices
- **Mobile-first** (Dave) — Touch targets 48px+, thumb-friendly CTAs
- **Employer pathway** (Sarah) — B2B UI patterns, bulk pricing, invoicing
- **Accessibility** — WCAG 2.2 AA mandatory (UK requirement)

### Deliverable Format
**Each markdown file structure:**
```markdown
# [Section Name]

## Summary
[2-3 sentence overview]

## Design Decisions
- [Decision 1] — Rationale tied to persona/audit finding
- [Decision 2] — Rationale tied to strategic principle

## Figma Structure
[Screenshot or description of Figma organization]

## Implementation Notes
- [Platform constraints to consider]
- [Accessibility requirements]
- [Responsive behavior]

## Next Steps
[How this feeds into Phase 4 or Storybook]
```

---

## Common Mistakes to Avoid (from DeLaval best practices)

### DO NOT: Use static/hardcoded values
```
BAD:  cornerRadius = 8         → Use radius/md variable
BAD:  paddingTop = 16          → Use space/4 or padding/card variable
BAD:  fill = #1A1A2E           → Use color/foreground variable
BAD:  strokeWeight = 1         → Use stroke/thin variable
BAD:  shadow blur = 16         → Use Shadow/Level 2 effect style
BAD:  fontSize = 14            → Use Type/Body text style
```

### DO NOT: Detach component instances
Always override via properties (text, booleans, instance swaps). If you need a variation that doesn't exist, create a new variant rather than detaching.

### DO NOT: Nest auto-layout incorrectly
- Horizontal children should use `HUG` width (or specific FILL)
- Vertical children should use `FILL` width for full-width items
- Never set fixed width on a child that should be responsive

### DO NOT: Mix spacing values
Pick from the spacing scale. If you need 16px, use `space/4`. If you need 24px, use `space/6`. Never use arbitrary numbers like 15px or 17px.

### DO NOT: Ignore the isLoading state
When building prototypes, use `isLoading = true` on components to show realistic loading states instead of placeholder text.

### DO NOT: Forget theme switching
Test layouts in Light AND Dark modes to verify colors adapt correctly. Any hardcoded color will break in alternate themes.

### DO: Use semantic tokens over primitive tokens
```
GOOD:  color/foreground     (semantic — adapts to context)
OK:    color/neutral/900    (primitive — explicit but less flexible)
BAD:   #111827              (hardcoded — breaks everything)
```

### DO: Check variable binding after placing components
In Figma Inspect panel, verify padding, radius, stroke, and colors show variable names (not raw numbers). If you see raw values, binding is missing.

---

## Success Criteria

✅ **Foundation complete** — Variables and tokens exported and documented  
✅ **Components built** — 50+ components with variants, states, and documentation  
✅ **Templates designed** — 5+ key page templates (mobile + desktop)  
✅ **Variants explored** — 3 design directions with persona fit analysis  
✅ **Storybook-ready** — Component mapping and export plan documented  
✅ **Documentation hub** — Guidelines accessible in Figma and markdown  
✅ **Audit-driven** — Every design decision references Phase 1-2 findings  
✅ **Accessibility validated** — WCAG 2.2 AA compliant (contrast, touch targets, keyboard nav)  

---

## Multi-Agent Approach (Ralph + Specialized Designers)

**Recommended:** Use Ralph with **agent rotation** to simulate multi-designer team:

```bash
ralph --prompt-file PHASE-3-PROMPT.md \
  --max-iterations 6 \
  --rotation "claude-code:anthropic/claude-sonnet-4-5,claude-code:anthropic/claude-sonnet-4-5" \
  --no-stream
```

**Iteration breakdown:**
1. **Foundation** — Variables, tokens, documentation
2. **Core components** — Buttons, forms, cards
3. **Navigation components** — Header, footer, mobile nav
4. **Page templates** — Homepage, product page, category page
5. **Checkout + employer** — Checkout flow, employer pathway
6. **Variants + documentation** — 3 design directions, final docs

**Alternative:** Manual iteration per deliverable (slower but more control)

---

**Duration Estimate:** 6 iterations (~60-90 min total)  
**Next Phase:** Phase 4 — High-Fidelity UI Design  
**Final Output:** Figma file ready for developer handoff + Storybook integration
