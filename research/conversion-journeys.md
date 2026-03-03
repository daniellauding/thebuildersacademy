# Phase 1: Conversion Journeys

**Project:** The Builders Academy Redesign
**Date:** 2026-03-03
**Status:** Phase 1 Complete

---

## Journey 1: Direct Search to Purchase (Primary — ~70% of conversions)

**Route:** Google Search → Product Page → Add to Cart → Checkout → Certificate

**Persona fit:** Dave (Builder), Terry (Low Literacy), Marcus (Returning)

This is the most common and most important journey. Most traffic arrives via Google directly onto a product page. The user already has intent — they searched for a specific course.

---

### Funnel Visualization

```
┌─────────────────────────────────────────────────────────────────────┐
│  STEP 1: GOOGLE SEARCH                                             │
│  "CSCS green card course online" / "banksman training certificate"  │
│  ═══════════════════════════════════════════════════════════════     │
│  100% of journey traffic                                            │
│                                                                     │
│  Key metric: Organic ranking position, click-through rate           │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Search result click
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 2: PRODUCT PAGE LANDING                                       │
│  ═══════════════════════════════════════════════════════════════     │
│  ~100% arrive here                                                  │
│  BOUNCE RISK: 40-60% (industry average for e-commerce)              │
│                                                                     │
│  User scans for: Price, duration, accreditation, "same-day cert"    │
│  Trust check: Reviews, employer logos, professional appearance       │
│                                                                     │
│  ⚠ FRICTION: Cookie consent popup blocks content immediately        │
│  ⚠ FRICTION: 2x H1 tags — confusing for screen readers + SEO       │
│  ⚠ FRICTION: Key info (price, duration) may require scrolling       │
│  ⚠ FRICTION: Course names don't match informal search terms         │
│                                                                     │
│  Key metric: Bounce rate, time on page, scroll depth, Add to Cart   │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ "Buy Now" / "Add to Cart" click
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 3: CART / CHECKOUT INITIATION                                 │
│  ═══════════════════════════════════════════════════════════════     │
│  ~30-40% of product page visitors (target: 45-50%)                  │
│  DROP-OFF RISK: High — this is where mobile users abandon           │
│                                                                     │
│  ⚠ FRICTION: Magento checkout is multi-step by default              │
│  ⚠ FRICTION: Account creation required? (guest checkout available?) │
│  ⚠ FRICTION: No Apple Pay / Google Pay visible (payment anxiety)    │
│  ⚠ FRICTION: No cross-sell nudge ("Add Asbestos Awareness — £35")  │
│  ✓ POSITIVE: Stripe integration = secure, modern payment            │
│                                                                     │
│  Key metric: Cart abandonment rate, checkout initiation rate        │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Payment submitted
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 4: PAYMENT & CONFIRMATION                                     │
│  ═══════════════════════════════════════════════════════════════     │
│  ~60-70% of checkout initiators (target: 80%+)                      │
│                                                                     │
│  ⚠ FRICTION: Mobile payment form usability                          │
│  ⚠ FRICTION: Unclear what happens after payment                     │
│  ⚠ FRICTION: No visible security reassurance at payment step        │
│                                                                     │
│  Key metric: Payment completion rate, failed payment rate           │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Order confirmed
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 5: POST-PURCHASE / COURSE ACCESS                              │
│  ═══════════════════════════════════════════════════════════════     │
│  100% of purchasers should reach here                               │
│                                                                     │
│  ⚠ FRICTION: How to access the course? LMS login separate?          │
│  ⚠ FRICTION: No "what happens next" clarity on confirmation page    │
│  ✓ OPPORTUNITY: Cross-sell "Related courses you might need"         │
│  ✓ OPPORTUNITY: Trustpilot review prompt                            │
│  ✓ OPPORTUNITY: Renewal reminder signup (certificate expires 3yr)   │
│                                                                     │
│  Key metric: Course start rate, course completion rate, NPS         │
└─────────────────────────────────────────────────────────────────────┘
```

### Friction Analysis — Journey 1

| Step | Friction Point | Severity | Improvement |
|------|---------------|----------|-------------|
| Landing | Cookie consent popup with 80+ cookies obscures page | High | Simplify to Accept/Reject only |
| Landing | Key info (price, duration, what you get) below fold on mobile | High | Sticky price/CTA bar on mobile scroll |
| Landing | 2x H1 tags confuse page hierarchy | Medium | Fix to single H1 (course name) |
| Landing | Course names don't match common search terms | Medium | Add informal aliases to page content ("green card course") |
| Landing | Trust signals (reviews, accreditation) not immediately visible | High | Move trust badges above fold, near price |
| Cart | No visible cross-sell / "frequently bought together" | Medium | Add 1-2 related course suggestions at cart |
| Checkout | Unknown if guest checkout is available | High | Enable prominent guest checkout option |
| Checkout | No Apple Pay / Google Pay for mobile users | High | Add express payment options |
| Checkout | Payment trust signals not prominent enough | Medium | Add security badges next to payment form |
| Post-purchase | Unclear course access flow | Medium | Immediate "Start Your Course" CTA on confirmation page |
| Post-purchase | No renewal/follow-up system | Medium | Email sequence: completion congratulations → review request → related courses → renewal reminder |

### Recommended Improvements — Journey 1

**Quick Wins (Low effort, high impact):**
1. Fix dual H1 tags → single H1
2. Move price + "Same-day certificate" above the fold on mobile
3. Add Trustpilot widget + accreditation badges next to Add to Cart
4. Simplify cookie consent to 2 buttons (Accept / Manage)

**Medium Effort:**
5. Add sticky mobile CTA bar (price + "Buy Now" visible while scrolling)
6. Add "What's included" summary (certificate, accreditation, duration, retakes)
7. Implement cross-sell on cart page
8. Add "How it works" 3-step visual to product pages

**High Effort (Phase 2+):**
9. Apple Pay / Google Pay integration
10. One-page checkout (or simplified Magento checkout)
11. Post-purchase email automation via Klaviyo
12. Course access integrated into confirmation flow

---

## Journey 2: Discovery to Purchase (Secondary — ~30% of conversions)

**Route:** Google Search → Homepage → Category Page → Product Page → Add to Cart → Checkout → Certificate

**Persona fit:** Sarah (Employer), Marcus (Returning), Dave (exploring options)

This journey is for users who don't know exactly what they need, or who arrive at the homepage and need to discover the right course. It's also the employer journey — Sarah needs to browse multiple courses to build a training package.

---

### Funnel Visualization

```
┌─────────────────────────────────────────────────────────────────────┐
│  STEP 1: GOOGLE SEARCH (BROADER)                                    │
│  "construction training online UK" / "health and safety courses"    │
│  ═══════════════════════════════════════════════════════════════     │
│  100% of journey traffic                                            │
│                                                                     │
│  Key metric: Brand search volume, non-brand organic ranking         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Homepage or category link
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 2: HOMEPAGE                                                   │
│  ═══════════════════════════════════════════════════════════════     │
│  BOUNCE RISK: 50-65%                                                │
│                                                                     │
│  User goal: Understand what's offered, find the right category      │
│                                                                     │
│  ⚠ FRICTION: 109+ navigation links — cognitive overload             │
│  ⚠ FRICTION: No clear "I need..." pathway (by role? by cert?)      │
│  ⚠ FRICTION: No visible employer/business pathway                   │
│  ⚠ FRICTION: Hero/banner may not communicate value proposition      │
│  ⚠ FRICTION: 1 image missing alt text (accessibility)               │
│  ✓ POSITIVE: Employer logos visible (trust signal)                  │
│  ✓ POSITIVE: Trustpilot integration present                         │
│                                                                     │
│  Key metric: Bounce rate, category click rate, search usage         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Category selection
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 3: CATEGORY PAGE                                              │
│  ═══════════════════════════════════════════════════════════════     │
│  ~35-50% of homepage visitors reach a category page                 │
│                                                                     │
│  User goal: Browse available courses, compare, find the right one   │
│                                                                     │
│  ⚠ FRICTION: Duplicate courses across categories (same course in    │
│     Construction, H&S, and CPD categories)                          │
│  ⚠ FRICTION: No filtering by price, duration, or accreditation     │
│  ⚠ FRICTION: Long course names hard to scan ("CSCS Green Card      │
│     Labourer Course – Online, Same-Day Results & Certificate")      │
│  ⚠ FRICTION: No "sort by" options (popularity, price, duration)    │
│  ⚠ FRICTION: No "Compare courses" feature for employers            │
│                                                                     │
│  Key metric: Category → product click rate, courses viewed per      │
│  session, time on category page                                     │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ Course selection
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEP 4: PRODUCT PAGE                                               │
│  (Same as Journey 1, Step 2 — but user arrived via browsing,        │
│   not direct search, so mental model is different)                  │
│  ═══════════════════════════════════════════════════════════════     │
│  ~60-70% of category visitors click through to a product            │
│                                                                     │
│  Additional friction vs Journey 1:                                  │
│  ⚠ FRICTION: No "Back to category" breadcrumb clarity              │
│  ⚠ FRICTION: No "Related courses" or "Complete your training"      │
│  ⚠ FRICTION: For employers — no "Add to package" or bulk option    │
│                                                                     │
│  Key metric: Product page → Add to Cart rate (discovery visitors)  │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                    ▼ (Continues as Journey 1, Steps 3-5)
                               │
┌──────────────────────────────┴──────────────────────────────────────┐
│  STEPS 5-7: CART → CHECKOUT → POST-PURCHASE                        │
│  (Same flow as Journey 1)                                           │
│                                                                     │
│  Additional employer friction:                                      │
│  ⚠ FRICTION: No bulk quantity selector                              │
│  ⚠ FRICTION: No invoice/PO number option at checkout                │
│  ⚠ FRICTION: No employer account for tracking team completions      │
│                                                                     │
│  Key metric: Multi-item cart rate, AOV for discovery visitors       │
└─────────────────────────────────────────────────────────────────────┘
```

### Friction Analysis — Journey 2

| Step | Friction Point | Severity | Improvement |
|------|---------------|----------|-------------|
| Homepage | 109+ nav links create decision paralysis | Critical | Reduce to 5-7 primary categories with clear labels |
| Homepage | No role-based entry ("I'm a builder" / "I'm an employer") | High | Add role-based pathway cards on homepage |
| Homepage | No prominent search with autocomplete | High | Large search bar with course name suggestions |
| Homepage | Missing employer/business pathway | High | Add "For Business" section/CTA on homepage |
| Category | Duplicate courses across categories confuse | Medium | De-duplicate or clearly indicate shared courses |
| Category | No filtering or sorting | High | Add filter by: price, duration, accreditation, certification type |
| Category | Long course names hard to scan | Medium | Use shortened display names with full name on hover/detail |
| Product | No "Related courses" for discovery users | Medium | Add "Complete your training" module |
| Product | No bulk/employer purchase option | High | Add quantity selector + "Request bulk quote" |
| Checkout | No multi-course discount incentive | Medium | "Add a second course and save 10%" |
| Checkout | No employer invoicing | High | Add "Pay by Invoice" option for business accounts |

### Recommended Improvements — Journey 2

**Quick Wins (Low effort, high impact):**
1. Reduce main navigation to 5-7 clear categories
2. Add prominent search bar with autocomplete to homepage
3. Add breadcrumbs to all pages for clear wayfinding
4. Add "Most Popular Courses" section to homepage

**Medium Effort:**
5. Add role-based entry points: "I'm a Builder" / "For Employers" on homepage
6. Add filtering and sorting to category pages
7. Add "Related courses" and "Complete your training" to product pages
8. De-duplicate courses across categories

**High Effort (Phase 2+):**
9. Build "For Employers" landing page with bulk pricing
10. Add employer account features (team management, invoice download, completion tracking)
11. Multi-course discount system ("Bundle and save")
12. Intelligent course recommendations based on browsing/purchase history

---

## Journey Comparison & Priority

| Dimension | Journey 1 (Direct) | Journey 2 (Discovery) |
|-----------|--------------------|-----------------------|
| Traffic volume | ~70% of conversions | ~30% of conversions |
| User intent | High (knows what they want) | Medium (exploring) |
| Avg conversion rate | Higher (direct intent) | Lower (more steps) |
| Avg order value | Lower (single course) | Higher (multiple courses) |
| Optimization priority | **#1** — highest volume | **#2** — highest AOV potential |
| Key bottleneck | Product page trust + mobile checkout | Navigation + discovery + employer flow |

---

## Cross-Journey Metrics Dashboard

Track these metrics across both journeys to measure redesign impact:

| Metric | Journey 1 | Journey 2 | Combined |
|--------|-----------|-----------|----------|
| Bounce rate (landing page) | Product page bounce | Homepage bounce | Overall bounce |
| Add-to-cart rate | Product → Cart | Category → Product → Cart | Overall ATC |
| Cart abandonment rate | Same | Same | Combined |
| Checkout completion rate | Same | Same | Combined |
| Average order value | Single course avg | Multi-course avg | Overall AOV |
| Mobile vs desktop conversion | Split by device | Split by device | Mobile parity |
| Time to purchase | Short (2-5 min) | Longer (5-15 min) | Average |
| Pages per session | 1-3 pages | 3-6 pages | Average |

---

*Next: Phase 1 — Strategic Direction (strategic-direction.md)*
