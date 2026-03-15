# Visual Design Modernity Audit

## Summary
The Builders Academy's visual design is functional but dated — it reads as a 2018-2020 era Magento template with minimal customization. Against 2026 design standards and direct competitors (Reed Courses, iHasco), the site looks unpolished, dense, and lacking brand personality. This directly undermines the trust-building goal: a professional, modern appearance signals "established, credible company" while a dated appearance signals "small, possibly fly-by-night operation." For the construction audience, visual design doesn't need to be trendy — it needs to look trustworthy, professional, and easy to use.

## Severity Breakdown
- Critical: 2 issues
- High: 5 issues
- Moderate: 4 issues
- Low: 3 issues

---

## Findings

### Typography: Hierarchy & Readability
**Severity:** High
**Impact:** Typography is the primary tool for establishing visual hierarchy and guiding users' eyes to important information. Poor typographic hierarchy forces users to scan harder, increasing cognitive load.
**Evidence:**
- **Headings** (product-banksman-full.png): Course title "Online Traffic Marshal / Banksman Training – Same-Day Certificate" is large, bold, dark navy — effective but the long title wraps awkwardly
- **Body text** appears to be a standard sans-serif (likely system or Magento default font) at ~14-16px — functional but generic
- **Product card titles** (homepage-full.png): Truncated, small, and hard to scan across the 4x2 grid. Text hierarchy within cards is flat — title, price, and CTA compete for attention
- **"Reg price" labels**: Redundant text that adds visual noise without value
- **Section headings** ("Our popular courses", "Who are We?"): Appear to be larger bold text but lack the visual weight and spacing of modern heading design
- **No custom brand typography** — the site uses default or near-default fonts, which signals "template" rather than "custom brand"
- **Mobile** (homepage-mobile.png, product-banksman-mobile.png): Text sizes appear borderline — body text may be under 16px in some areas

**Recommendation:**
- Select a brand font pairing: a distinctive sans-serif for headings (e.g., Plus Jakarta Sans, Inter, or similar professional font) + a highly readable body font
- Establish a clear type scale: H1 (32-40px), H2 (24-28px), H3 (20-22px), Body (16-18px), Small (14px)
- Increase letter-spacing and line-height for body text (1.5-1.6 line height)
- Remove "Reg price" labels — they add visual noise
- Use font weight and size (not just color) to create clear hierarchy
**Effort:** Medium

---

### Color System
**Severity:** High
**Impact:** Color creates emotional response and communicates brand personality. The current color palette is functional but inconsistent and lacks personality.
**Evidence:**
- **Primary brand color:** Dark navy (#1a2a3a or similar) used in header, footer, and section backgrounds — professional but somber
- **Secondary color:** Green used for CTAs ("Buy Now", "Allow all", "Add to Cart", checkmark icons) — functional but the specific green varies between elements
- **Accent colors:** Minimal use — mostly navy and green with white
- **Background:** White for content areas — clean but stark without any warm neutral tones
- **Hero section** (homepage-hero.png): Dark overlay on construction photo with white text and green checkmark icons — effective but moody
- **"Who are We?" section** (homepage-full.png): Blue/dark background with white text — provides visual variety but creates a dense, heavy feel
- **Trust badge colors:** CPD badge (purple/burgundy), HSE badge (red/blue) — these don't integrate with the site's color system
- **Tawk.to widget:** Bright green "WE ARE HERE!" banner clashes with the site's more muted palette
- **Cookie consent:** Blue Cookiebot branding + green "Allow all" button — introduces third-party colors that don't match the site's palette

**Recommendation:**
- Define a 5-color brand palette:
  - Primary: Dark navy (keep — it's professional)
  - Secondary: A warmer, more vibrant accent (consider teal or a construction-associated color like orange/amber)
  - CTA: High-contrast green or orange for all action buttons (consistent shade)
  - Neutral: Warm gray for backgrounds (#f5f5f0 or similar) instead of stark white
  - Support: Light tints of primary for badges, tags, and highlights
- Ensure CTA green meets WCAG AA contrast (4.5:1) against all backgrounds
- Unify third-party widget colors where possible (Tawk.to can be styled)
- Add subtle background colors to content sections to create visual rhythm
**Effort:** Medium

---

### Spacing & Whitespace
**Severity:** Critical
**Impact:** Insufficient whitespace creates visual density that makes content feel overwhelming — particularly harmful for the low-digital-literacy audience (Terry persona). This is the single most impactful visual design improvement possible.
**Evidence:**
- **Homepage** (homepage-full.png):
  - Product card grid: Cards are tightly packed with minimal gap between them
  - Sections flow into each other without clear separation (product grid → chat buttons → employer logos → "Who are We?")
  - Footer has dense two-column text with minimal padding
- **Product page** (product-banksman-full.png):
  - Content sections lack clear visual boundaries — text, badges, description, and bullet points blend together
  - FAQ items have adequate spacing (good)
  - "How it works" cards have minimal inner padding
  - Company logos section has adequate horizontal spacing but tight vertical spacing
- **Mobile** (homepage-mobile.png, product-banksman-mobile.png):
  - Content is vertically stacked with minimal breathing room between sections
  - Product cards in single column are adequately spaced
  - Cookie consent modal has tight internal spacing

**Recommendation:**
- Establish a spacing scale based on an 8px grid: 8, 16, 24, 32, 48, 64, 96px
- Increase section margins to 48-64px between major content blocks
- Add card padding to at least 24px internal spacing
- Use subtle background color changes between sections (alternating white and light gray)
- Add horizontal rules or visual dividers between content sections
- On mobile, increase vertical spacing between content blocks by 50%
**Effort:** Medium

---

### Imagery
**Severity:** High
**Impact:** Image quality and relevance directly affect perceived professionalism and trust. Generic stock photos can feel inauthentic.
**Evidence:**
- **Homepage hero** (homepage-hero.png): Full-bleed construction worker photo with dark overlay — decent quality stock image, contextually appropriate
- **Product page hero** (product-banksman-hero.png): Construction worker image in sidebar — appears to be stock photography, reasonable quality
- **Product card images** (homepage-full.png): Each course has a small thumbnail showing construction-related imagery — mix of stock photos and some that appear custom
  - Some images show workers in high-vis vests, hard hats — appropriate
  - Image quality varies — some appear lower resolution
  - Images are small (approximately 135px wide based on CSS in navigation.json)
- **CPD badge graphic**: Appears to be an official CPD certification logo — appropriate
- **No visible illustrations or iconography** beyond small badges and checkmarks
- **No visible video content** on homepage (though product pages mention "engaging videos and animations" in course descriptions)

**Recommendation:**
- Invest in a consistent image library: either custom photography or a curated set of high-quality construction stock
- Use larger product images on course cards (at least 250px wide, not 135px)
- Add a short course preview video thumbnail on product cards (differentiation from competitors)
- Use consistent image treatment: same crop ratio, same overlay style, same color temperature
- Add illustrations for "How it works" steps and category icons
- Optimize all images for web (WebP, lazy loading, srcset)
**Effort:** Medium-High

---

### Iconography
**Severity:** Moderate
**Impact:** Icons aid recognition and reduce reliance on text. The current site uses minimal iconography.
**Evidence:**
- **Green checkmark icons** on product pages (product-banksman-full.png): Simple checkmark circles for USPs — effective but basic
- **Clock icon** for duration (product-banksman-full.png): Small icon next to "Duration: 1-2 Hours" — appropriate
- **Account/cart/search icons** in header (homepage-hero.png): Standard utility icons — functional
- **"How it works" section** (product-banksman-full.png): Uses small icons for each step — functional but not visually distinctive
- **Category icons**: No visible icons next to category names in navigation
- **Missing icons**: No icons for accreditation types, course features, or navigation categories
- **No consistent icon system** — icons appear sourced from different sets or are custom one-offs

**Recommendation:**
- Adopt a consistent icon library (e.g., Phosphor, Heroicons, or custom set)
- Add icons to:
  - Navigation categories (hardhat for Construction, shield for H&S, etc.)
  - Course feature badges (clock for duration, certificate for certification, screen for online)
  - Trust signals (star for reviews, shield for secure payment)
  - Homepage pathway cards (wrench for builder, building for employer)
- Use filled/colored icons sparingly for emphasis (e.g., green checkmarks) and outline icons for secondary information
**Effort:** Low-Medium

---

### Visual Hierarchy
**Severity:** Critical
**Impact:** Visual hierarchy guides the user's eye through the page in the intended order. Without clear hierarchy, users don't know where to look first, reducing conversion.
**Evidence:**
- **Homepage** (homepage-full.png):
  1. Cookie consent modal dominates (wrong — should be the hero)
  2. After consent: Hero image with category pills — unclear primary action
  3. "Our popular courses" section — 8 equal-weight product cards with no visual emphasis on "most popular" or "best seller"
  4. Chat buttons and employer logos at similar visual weight
  5. "Who are We?" section — dark background draws attention but content is secondary to conversion goals
  - **Problem:** No clear visual hierarchy. Everything is roughly the same weight. No element says "look here first"
- **Product page** (product-banksman-full.png):
  1. Title (large, bold) — good primary element
  2. Duration badge and accreditation badges compete for secondary attention
  3. Description text wall — undifferentiated
  4. Green checkmark USPs — visually distinct but too far down
  5. "Buy Now" button in sidebar — visible on desktop but not the most visually prominent element
  - **Problem:** The CTA and price should be the most visually prominent elements after the title, but they're visually equal to the description

**Recommendation:**
- Homepage: Establish clear hierarchy: Hero headline → Search bar → 3 pathway cards → 4 popular courses → trust bar
- Product page: Title → Key Facts card (price, duration, cert) → CTA button → USPs → Content
- Use size, color, weight, and spacing to create 3-4 distinct hierarchy levels
- Make CTA buttons the most visually prominent element (largest, most colorful, most contrast)
- Reduce visual weight of secondary elements (descriptions, legal text, etc.)
**Effort:** Medium

---

### Card & Component Design
**Severity:** High
**Impact:** Course cards are the primary product display format. Their design directly affects browsing behavior and click-through rates.
**Evidence:**
- **Homepage product cards** (homepage-full.png):
  - Structure: Small image (135px) + Title (truncated, 2-3 lines) + "Reg price £XX.XX" + "Add to Cart" text link
  - No visible rating, accreditation badge, duration, or other trust/info signals on the card
  - Cards appear flat (no shadow, no border, no hover effects visible)
  - "Add to Cart" is a small text link, not a prominent button
  - Layout is a standard 4-column grid on desktop, single column on mobile
- **Product page value proposition cards** (product-banksman-full.png):
  - "Become a Traffic Marshal", "Official Qualification", "No Entry Barriers" — three cards in a row
  - Simple icon + heading + description — clean but small and low impact
- **FAQ accordion cards**: Clean expand/collapse pattern with chevron — functional
- **No visible hover states**, micro-interactions, or transitions

**Recommendation:**
- Redesign product cards with richer information:
  ```
  ┌────────────────────────────┐
  │ [Course Image — 16:9]      │
  │ ┌──────────────────┐       │
  │ │ CPD │ Same-Day │         │
  │ └──────────────────┘       │
  │ Course Name                │
  │ ⏱ 1-2 hours · ★ 4.8       │
  │                            │
  │ £35.00                     │
  │ [Enrol Now ─────────]      │
  └────────────────────────────┘
  ```
- Add subtle box-shadow and rounded corners (8-12px radius) to cards
- Add hover effect: slight elevation + shadow increase (desktop)
- Include key facts on each card: price, duration, rating, accreditation badge
- Make CTA a proper button (full-width, 48px height, high contrast)
**Effort:** Medium

---

### Brand Perception Assessment
**Severity:** High
**Impact:** The overall visual design communicates brand attributes to visitors before they read a single word. Currently, the site communicates "functional e-commerce template" rather than "trusted UK training authority."
**Evidence:**
- **What the current design communicates:**
  - "Small business" — Magento default template with minimal customization
  - "Budget" — No premium design touches, dense layout, generic imagery
  - "Template" — Standard patterns without brand personality
  - "Adequate but not invested" — The business works, but they haven't invested in presentation
- **What the design should communicate:**
  - "Trusted authority" — Clean, professional, confidence-inspiring
  - "Easy and simple" — Open spacing, clear hierarchy, obvious actions
  - "Modern and credible" — Contemporary design patterns, quality imagery
  - "Built for builders" — Construction-relevant imagery, practical tone, robust feel
- **Competitor comparison:**
  - Reed Courses: "Established marketplace" — clean, trustworthy, professional
  - iHasco: "Modern SaaS platform" — contemporary, polished, enterprise-grade
  - CITB: "Government institution" — formal, authoritative, dense
  - The Builders Academy: "Small business e-commerce" — functional but unpolished

**Recommendation:**
- Position visual identity between Reed (professional marketplace) and iHasco (modern platform) — avoid both the institutional feel of CITB and the template feel of current design
- Invest in 5 key design elements that shift perception:
  1. Custom typography (signals investment and care)
  2. Consistent whitespace (signals professionalism)
  3. High-quality imagery (signals credibility)
  4. Prominent trust signals (signals established business)
  5. Cohesive color system (signals brand maturity)
**Effort:** High (holistic), but individual elements can be incremental

---

### Component Consistency
**Severity:** Moderate
**Impact:** Inconsistent component styling undermines perceived quality and trust.
**Evidence:**
- **Buttons:**
  - "Buy Now" (product page sidebar): Green, rectangular, appears solid fill
  - "Add to Cart" (homepage cards): Small text link, not a button — inconsistent with "Buy Now"
  - "Chat to us now" + "Contact us" (homepage): Green outline buttons — different style from "Buy Now"
  - "Allow all" (cookie consent): Blue/dark fill — different system entirely
  - "Submit" (contact form): Appears to be a full-width button — different from "Buy Now"
  - "Read more" (Who are We? section): Appears as a text link or small button
- **Cards:** Product cards (homepage) use one style; value prop cards (product page) use another; FAQ items use another — no consistent card component
- **Badges:** CPD badge, HSE badge, green checkmarks, course category pills — all different visual treatments
- **Form fields:** Contact form fields appear standard — no visible custom styling or consistency with other UI elements

**Recommendation:**
- Create a design system with consistent components:
  - **Primary button:** Solid green/accent, 48px+ height, rounded corners, white text
  - **Secondary button:** Outline style, same height, brand color border
  - **Text link:** Underlined, brand color, clear hover state
  - **Card:** Consistent border-radius, shadow, padding, and structure
  - **Badge:** Consistent size, shape, and treatment for all trust/info badges
  - **Form field:** Consistent height, border, focus state, padding
- Apply consistently across all pages
**Effort:** Medium-High

---

### Dark Mode & Theme Considerations
**Severity:** Low
**Impact:** Dark mode is increasingly expected but not critical for this audience.
**Evidence:**
- No dark mode support visible
- Site uses a white/light background with dark navy accents — standard light theme
**Recommendation:**
- Not a priority for this audience. Focus on light theme quality first.
- Consider supporting `prefers-color-scheme` media query in a future phase
**Effort:** Low (for system preference), High (for full dark theme)

---

### Animation & Micro-Interactions
**Severity:** Moderate
**Impact:** Subtle animations improve perceived quality and provide feedback, but must not distract or disorient (especially for the older target audience).
**Evidence:**
- No visible hover effects on product cards
- No visible transition animations on page elements
- Cookie consent toggles appear to have standard switch animations
- Logo carousel ("Companies we work with") has left/right arrows — likely auto-rotates
- Tawk.to "WE ARE HERE!" banner likely animates on appearance
- No visible loading animations or skeleton screens
**Recommendation:**
- Add subtle, purposeful micro-interactions:
  - Button hover: slight color darken + cursor pointer
  - Card hover: slight elevation (2-4px translateY) + shadow increase
  - Page transitions: subtle fade-in for content sections
  - CTA: gentle pulse or glow on the primary "Enrol Now" button (attention without annoyance)
- Respect `prefers-reduced-motion` for all animations
- Keep all animations under 300ms duration
- Avoid auto-playing carousels — use manual navigation or static displays
**Effort:** Low-Medium

---

### Print Stylesheet
**Severity:** Low
**Impact:** Sarah (employer) may print course information to share with management. A clean print stylesheet improves this experience.
**Evidence:**
- No evidence of print stylesheet — likely prints the full page with nav, footer, and ads
**Recommendation:**
- Add a basic print stylesheet: hide navigation, footer, chat widget, cookie banner
- Emphasize key facts: course name, price, accreditation, duration, certificate details
- Low priority but easy to implement
**Effort:** Low

---

## Competitive Visual Benchmark

| Element | The Builders Academy | Reed Courses | iHasco | 2026 Standard |
|---------|---------------------|-------------|--------|---------------|
| Typography | Default/generic sans-serif | Professional, consistent hierarchy | Custom brand fonts (Figtree + NE Orange) | Custom font pair, clear scale |
| Color system | Navy + green, inconsistent | Blue/green, consistent | Pink/purple/navy, distinctive | Defined palette, 5 colors |
| Whitespace | Dense, tight spacing | Balanced, clean | Generous, modern | 8px grid, breathing room |
| Card design | Flat, minimal info | Rich, badges + ratings + CTAs | Clean with hover animations | Shadow + radius + hover states |
| Imagery | Stock, small, mixed quality | Consistent thumbnails | Video + gradient overlays | High-quality, consistent treatment |
| Icons | Minimal, inconsistent | Consistent utility icons | Custom icon set | Cohesive icon system |
| Visual hierarchy | Flat, everything same weight | Clear, CTAs prominent | Strong, gradient-led hierarchy | 3-4 distinct levels |
| Brand personality | "Template/generic" | "Established marketplace" | "Modern SaaS" | Distinctive, appropriate to audience |
| Micro-interactions | None visible | Subtle hover states | Card translations, scale effects | Purposeful, under 300ms |
| Overall impression | 2018-2020 era | 2023-2024 era | 2024-2025 era | 2025-2026 standards |

---

## Prioritized Action Items

1. **Increase whitespace and spacing** across all pages — 8px grid system (Critical, Medium effort)
2. **Establish clear visual hierarchy** on homepage and product pages (Critical, Medium effort)
3. **Select and implement brand typography** — custom font pairing (High, Medium effort)
4. **Redesign product cards** with richer info, badges, prominent CTAs (High, Medium effort)
5. **Define and apply consistent color palette** — 5 colors with contrast verification (High, Medium effort)
6. **Create consistent button/component system** across all pages (High, Medium effort)
7. **Improve image quality and consistency** — larger, better-cropped product images (High, Medium effort)
8. **Add subtle micro-interactions** — button hovers, card elevation, transitions (Moderate, Low effort)
9. **Implement consistent iconography** — adopt icon library, add to navigation and features (Moderate, Low effort)
10. **Add accreditation and trust badge visual system** — consistent badge design (Moderate, Low effort)

## Quick Wins (High Impact, Low Effort)
1. Add subtle box-shadows and rounded corners to product cards (CSS only)
2. Increase section spacing/margins by 50% (CSS only)
3. Add button hover effects to all CTAs (CSS only)
4. Implement consistent icon system using an open-source icon library
5. Remove "Reg price" label from product cards — just show the price
