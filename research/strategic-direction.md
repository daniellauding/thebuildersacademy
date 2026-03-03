# Phase 1: Strategic Direction — Executive Summary

**Project:** The Builders Academy Redesign
**Date:** 2026-03-03
**Status:** Phase 1 Complete

---

## The Big Picture

The Builders Academy is a **functionally solid but visually dated** e-learning platform in the UK construction training market. The business works — courses are accredited, priced competitively, and deliver same-day certificates. But the website undersells this value through cluttered navigation, weak trust presentation, missing employer pathways, and a design that doesn't match the credibility of the underlying product.

**The strategic opportunity:** In a market where every competitor's website looks equally outdated and transactional, a modernized, trust-forward, accessibility-first redesign would be a genuine competitive moat — not just a cosmetic improvement.

---

## Strategic Pillars

The redesign should be guided by five strategic pillars, in priority order:

### 1. Trust First

**Why:** The primary audience — builders aged 20-60+ with mixed digital literacy — needs to trust the site before entering payment details. Many have never heard of The Builders Academy before landing on a product page from Google.

**How:**
- Trustpilot reviews and star rating visible above the fold on every product page
- CPD / CITB accreditation badges next to the Add to Cart button, not buried in the description
- Employer logos (Skanska, Kier, G4S, BBC Studios) presented as "Trusted by" social proof
- Professional, clean design that signals "established company" not "cheap online course"
- Visible phone number and live chat as safety nets for hesitant buyers

### 2. Simplicity Over Features

**Why:** The biggest single UX issue is cognitive overload. 109+ navigation links, long course names, cluttered layouts, and a complex cookie consent dialog create friction for all users — but especially for older, less tech-savvy tradespeople.

**How:**
- Reduce navigation to 5-7 clear categories
- Product pages: lead with 4 key facts (Price, Duration, Certificate, Accreditation)
- Mobile: sticky CTA bar so "Buy Now" is always one tap away
- Checkout: minimize steps, enable guest checkout, add express payment
- Homepage: clear entry points by user need ("I need a CSCS card" / "I need safety training" / "I'm an employer")

### 3. Mobile-First Reality

**Why:** A significant portion of traffic comes from mobile devices — tradespeople checking courses during breaks, on the van, or after being told by their employer to "get that card sorted." If the mobile experience is poor, conversions are lost.

**How:**
- Design mobile layouts first, then enhance for desktop
- Large tap targets (48px minimum, 56px preferred)
- Readable text without zooming (16px+ body text)
- Streamlined mobile checkout
- Apple Pay / Google Pay integration (Phase 2)
- Test every page on actual mobile devices, not just responsive previews

### 4. Employer Revenue Growth

**Why:** Employer/bulk purchases represent the highest AOV opportunity. A single employer order can be worth 10-50x a single builder's purchase. Currently, there is no visible pathway for employers to buy in bulk, get invoices, or manage team training.

**How:**
- "For Employers" / "For Business" pathway visible from the homepage
- Bulk pricing or "Request a Quote" flow for 5+ licences
- Training matrix: which courses does your team need, by role?
- Invoice/PO support at checkout
- Employer dashboard (long-term) for tracking team completions
- Employer case studies and testimonials (not just logos)

### 5. Smart Discovery

**Why:** Users who don't land directly on a product page need help finding the right course. Current navigation is overwhelming. Category pages lack filtering. Course names are long and jargon-heavy.

**How:**
- Prominent search with autocomplete and informal term support ("green card" → CSCS Green Card)
- Category pages with filters: by price, duration, accreditation type, job role
- "Most Popular" and "Best Sellers" social proof on category pages
- Related courses and "Complete your training" recommendations on product pages
- Career pathway view: "You have X → Next get Y → Then consider Z"

---

## What Not To Do

1. **Don't redesign for redesign's sake.** The current site works. Improvements should be measurable and intentional, not "let's make it look modern."

2. **Don't break SEO.** The site ranks for valuable commercial keywords. URL structure, heading hierarchy, and content should be preserved or carefully migrated with redirects.

3. **Don't over-design.** The audience is tradespeople, not designers. Clean beats clever. Readable beats trendy. Obvious beats subtle.

4. **Don't ignore Magento constraints.** Every design decision must be implementable within Magento/Adobe Commerce. Custom checkout flows, navigation patterns, and template changes need Magento-specific development.

5. **Don't big-bang launch.** Deploy changes incrementally. Product pages first (highest traffic, highest impact), then category pages, then homepage, then employer features.

---

## Phase 1 Deliverables Summary

| Deliverable | File | Status |
|-------------|------|--------|
| Business Goals, KPIs, and Risks | `research/business-goals.md` | Complete |
| User Personas (4 personas with journeys) | `research/personas.md` | Complete |
| Conversion Journeys (2 funnels with friction analysis) | `research/conversion-journeys.md` | Complete |
| Strategic Direction (this document) | `research/strategic-direction.md` | Complete |

---

## Priority Roadmap for Phases 2-10

Based on Phase 1 findings, the following phases should be prioritized:

### Immediate Impact (Phases 2-4)
- **Phase 2: Full Audit** — Quantify the problems identified here. Establish baselines for all KPIs. Run Lighthouse, WCAG audit, heuristic evaluation, and competitive benchmark.
- **Phase 3: Information Architecture** — Fix the navigation. This single change will improve every journey. Reduce 109+ links to a clean, scannable structure.
- **Phase 4: UX Structure** — Wireframe the improved product page, homepage, and category page. Focus on the "above the fold" experience for mobile.

### Medium-Term Value (Phases 5-7)
- **Phase 5: UI Modernization** — Visual refresh that increases trust without alienating existing users. Evolution, not revolution.
- **Phase 6: Design System** — Scalable component library for consistent implementation. Ensures new pages match the redesigned ones.
- **Phase 7: Accessibility** — WCAG 2.2 AA compliance. Not just legal — it directly improves usability for the low-literacy persona (Terry).

### Long-Term Growth (Phases 8-10)
- **Phase 8: SEO & Content** — Structured data, heading hierarchy, internal linking strategy. Protect and grow organic search traffic.
- **Phase 9: Testing Plan** — A/B tests, usability testing, heatmaps. Validate that changes actually improved metrics.
- **Phase 10: Execution Model** — Implementation plan with risks, recommendations, and governance.

---

## The One-Line Strategy

**Make it obvious, make it trusted, make it easy — especially on mobile, especially for people who aren't comfortable online.**

---

*Phase 1 Complete. Ready for Phase 2: Full Audit.*
