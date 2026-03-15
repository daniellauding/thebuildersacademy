# Phase 4 — Iteration 4: Page Templates

## 5 Page Templates Implemented

### 1. Homepage (`templates/homepage.tsx`)
**Route:** `/`

**Sections:**
1. **Navbar** — Sticky header with 5 categories, search, cart
2. **Hero** — Gradient background, H1, subheadline, hero SearchBar, trust badges above fold
3. **How It Works** — 3-step flow (Choose → Complete → Certify)
4. **Category Entry Points** — 3 cards (CSCS, Safety, Employer)
5. **Popular Courses** — 6-card grid with ProductCards
6. **Trusted By** — Employer logo strip (Skanska, Kier, G4S, BBC Studios, Balfour Beatty)
7. **Reviews** — 3 testimonial cards with ratings
8. **Footer** — 4-column with accreditations

**Key Decisions:**
- Trust signals (Trustpilot, CPD, CITB) placed above fold per audit
- Search prominent in hero for smart course discovery
- 3 entry points match persona needs (Dave→CSCS, Terry→Safety, Sarah→Employer)
- "For My Business" card has green CTA for B2B visibility

### 2. Product Page (`templates/product-page.tsx`)
**Route:** `/product`

**Sections:**
1. **Above Fold** — Image + title + price + rating + badges + dual CTA (Add to Cart / Buy Now)
2. **Key Facts** — 4-card grid (Duration, Certificate, Accreditation, Format)
3. **What You'll Learn / Who Is This For** — 2-column bullet lists
4. **How It Works** — 4-step purchase flow
5. **FAQ Accordion** — 4 expandable questions
6. **Related Courses** — 3 ProductCards for cross-sell
7. **Mobile Sticky CTA** — Fixed bottom bar with price + Buy Now

**Key Decisions:**
- Single H1 (audit: dual H1s caused SEO issues)
- Trust badges adjacent to CTA for conversion
- StickyCTABar ensures mobile purchase path always visible
- FAQ accordion reduces support queries

### 3. Category Page (`templates/category-page.tsx`)
**Route:** `/category`

**Sections:**
1. **Category Hero** — Title, description, scoped SearchBar
2. **Desktop Sidebar Filters** — Price, Duration, Accreditation (sticky)
3. **Mobile Filter Sheet** — Bottom sheet with FilterChips
4. **Sort Bar** — Popular, Price, Rating, Newest (Select dropdown)
5. **Course Grid** — 2-column ProductCard grid
6. **Load More** — Progressive loading button

**Key Decisions:**
- Sidebar filters on desktop, bottom sheet on mobile
- FilterChips for price/duration, checkboxes for accreditation
- Select dropdown for sort (not FilterChips — too many options)

### 4. Checkout Flow (`templates/checkout-flow.tsx`)
**Route:** `/checkout`

**3 Steps:**
1. **Cart** — Items, cross-sell (2 compact ProductCards), guest/account toggle
2. **Details** — Email, name, phone, company (optional), newsletter opt-in
3. **Payment** — Apple Pay / Google Pay (express), card form, security badges

**Post-Purchase:**
- Success screen with order confirmation
- 4-step "What Happens Next" guide
- "Start Your Course" CTA

**Key Decisions:**
- Guest checkout as default (audit: no guest checkout was major friction)
- Minimal form fields (email, name, phone, optional company)
- Express checkout buttons first (Apple Pay, Google Pay)
- Cross-sell targeting +15% AOV per spec
- 48px+ input heights for mobile accessibility

### 5. Employer Pathway (`templates/employer-pathway.tsx`)
**Route:** `/employers`

**Sections:**
1. **Hero** — Navy background, value props checklist, dual CTA (Quote + Phone)
2. **Dashboard Preview** — Mock stats (staff enrolled, completion, certs valid)
3. **Employer Logos** — Social proof strip
4. **How It Works** — 3-step employer flow
5. **Training Packages** — 3 pricing cards (Site Worker, Supervisor, Custom)
6. **Training by Role** — 4 role cards (Labourer, Supervisor, Manager, All Staff)
7. **Employer Testimonials** — 2 B2B-focused quotes
8. **Quote Request Form** — 6 fields + team size dropdown + submit CTA

**Key Decisions:**
- Separate from individual pathway (audit: £500K uncaptured employer revenue)
- Dashboard preview demonstrates value proposition
- "Most Popular" badge on Supervisor package
- Phone number prominent for high-value leads preferring human contact
- Team size dropdown matches B2B segmentation

## Route Summary

| Route | Template | Type |
|-------|----------|------|
| `/` | Homepage | Static |
| `/product` | ProductPage | Static |
| `/category` | CategoryPage | Static |
| `/checkout` | CheckoutFlow | Static |
| `/employers` | EmployerPathway | Static |
