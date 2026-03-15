# Phase 2: Full Audit — The Builders Academy Redesign

## Context
You are a team of world-class audit specialists conducting a comprehensive audit of **The Builders Academy** (https://thebuildersacademy.co.uk) — an e-learning platform for construction training certifications on Magento/Adobe Commerce.

**Phase 1 Insights (READ FIRST):**
- `research/business-goals.md` — 9 prioritized business goals + 12 KPIs
- `research/personas.md` — 4 user personas (Dave, Sarah, Marcus, Terry)
- `research/conversion-journeys.md` — 2 funnel analyses with 23 friction points
- `research/strategic-direction.md` — 5 strategic pillars (Trust First, Simplicity, Mobile-First, Employer Growth, Smart Discovery)

**Phase 1 Playwright Data (ALREADY COLLECTED):**
- `research/audit/homepage-structure.json` — 109 navigation links, 61 products
- `research/audit/product-page-structure.json` — Product page DOM structure
- `research/screenshots/` — Desktop + mobile screenshots

## Objective
Conduct a **comprehensive, evidence-based audit** across 9 dimensions. Use existing Playwright data + Phase 1 research. Output detailed findings with severity ratings, specific examples, and actionable recommendations.

## Audit Dimensions

### 1. UX Audit (Nielsen's 10 Heuristics)
**Lead:** UX Researcher (Google-level expertise)

Evaluate against Nielsen Norman Group's 10 Usability Heuristics:
1. Visibility of system status
2. Match between system and the real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation

**Deliverable:** `audit/ux-heuristics.md` (rate each heuristic 0-5, cite specific examples from Playwright data)

---

### 2. Content Audit
**Lead:** Content Strategist

Analyze:
- Content clarity (Flesch-Kincaid reading level)
- Product descriptions (scannability, trust signals, benefits vs features)
- Microcopy (CTAs, error messages, help text)
- Tone consistency
- Duplicate content
- Missing content (FAQs, trust pages, employer info)

**Deliverable:** `audit/content-audit.md` (rate each section, flag high-impact rewrites)

---

### 3. Information Architecture Review
**Lead:** IA Specialist (Claude-level expertise)

Audit current IA from Playwright data:
- Navigation depth (current: 109+ links)
- Category structure
- Labeling clarity
- Search functionality
- Breadcrumbs
- Cross-linking
- Mental model alignment with user personas

**Propose:**
- Simplified IA (5-7 top categories)
- Card sorting-informed category names
- "For Employers" pathway

**Deliverable:** `audit/ia-review.md` + `audit/proposed-ia.md` (visual sitemap)

---

### 4. SEO Technical Review
**Lead:** SEO Specialist (Google Search-level expertise)

Audit (use Playwright HTML data where available):
- Page titles and meta descriptions
- H1/H2 structure (current finding: 2 H1 tags on homepage)
- Image alt text (current finding: 1 missing alt)
- Schema markup (Course, Organization, Review markup)
- URL structure
- Internal linking
- Mobile-friendliness
- Core Web Vitals (infer from structure)
- Canonical tags
- XML sitemap structure

**Deliverable:** `audit/seo-technical.md` (prioritized fixes with impact ratings)

---

### 5. Accessibility Audit (WCAG 2.2 AA)
**Lead:** Accessibility Specialist (Apple-level expertise)

Audit against WCAG 2.2 AA (mandatory for UK public sector, best practice for all):
- Color contrast (text, UI elements)
- Keyboard navigation
- Screen reader compatibility
- Touch target sizes (current: likely <48px on mobile)
- Form labels and error handling
- Skip links
- Heading hierarchy
- Alt text (1 missing identified)
- Focus indicators
- ARIA labels

**Deliverable:** `audit/accessibility-wcag.md` (A/AA/AAA ratings, legal risk assessment)

---

### 6. Responsive & Mobile Review
**Lead:** Responsive Designer (Apple-level mobile expertise)

Audit mobile experience (significant mobile traffic):
- Touch target sizes (48px min, 56px preferred)
- Text readability (16px+ body)
- Viewport scaling
- Mobile navigation (hamburger with 109 links)
- Form input types
- Sticky headers/CTAs
- Image optimization
- Desktop vs mobile parity

**Deliverable:** `audit/responsive-mobile.md` (device-specific issues, mobile conversion blockers)

---

### 7. Trust & Conversion Audit
**Lead:** CRO Specialist (Shopify-level conversion expertise)

Audit trust signals and conversion optimization:
- Above-the-fold trust (reviews, badges, social proof)
- Trust throughout funnel (checkout security, refund policy)
- CTA clarity and prominence
- Urgency/scarcity (ethical only)
- Social proof placement
- Checkout friction (current: forces account, no Apple Pay/Google Pay)
- Guest checkout availability
- Progress indicators
- Cart abandonment recovery

**Deliverable:** `audit/trust-conversion.md` (annotated screenshots with conversion blockers)

---

### 8. Visual Design Modernity Audit
**Lead:** UI Designer (Pinterest-level visual expertise)

Audit visual design against 2026 standards:
- Typography (hierarchy, readability, scale)
- Color system (accessibility, consistency, emotional impact)
- Spacing system (whitespace, density)
- Imagery (quality, relevance, optimization)
- Iconography (clarity, consistency)
- Visual hierarchy
- Brand perception
- Competitive visual benchmark (vs 3 direct competitors)

**Deliverable:** `audit/visual-design.md` (modernization opportunities, competitor comparison)

---

### 9. Competitive Benchmark
**Lead:** Product Strategist (Apple-level strategic thinking)

Benchmark against 3 competitors:
1. **Reed Courses** (large UK training marketplace)
2. **iHasco** (health & safety e-learning)
3. **Skillshub** (construction-specific training)

Compare:
- Homepage clarity
- Product page structure
- Trust signals
- Mobile experience
- Checkout flow
- Employer pathways
- Visual modernity
- Unique differentiators

**Deliverable:** `audit/competitive-benchmark.md` (4-column comparison table + strategic insights)

---

## Constraints & Rules

### Platform Constraints (CRITICAL)
- **Magento/Adobe Commerce** — Must work within this platform
- Cannot break existing functionality
- Must preserve SEO rankings
- No fantasy redesigns — realistic implementations only

### Audience Constraints
- 20-60+ age range
- Mixed digital literacy (Terry persona = very low)
- Mobile-first traffic
- Need for trust and simplicity

### Methodology
- Use **existing Playwright data** from `research/audit/` and `research/screenshots/`
- Reference **Phase 1 personas and journeys** for context
- Rate severity: **Critical / High / Moderate / Low**
- Provide **specific examples** with line numbers or element IDs where possible
- Prioritize fixes by **impact × effort** matrix

### Deliverable Structure (Each Audit File)
```markdown
# [Audit Name]

## Summary
[2-3 sentence overview]

## Severity Breakdown
- Critical: X issues
- High: Y issues
- Moderate: Z issues
- Low: N issues

## Findings

### [Category Name]
**Severity:** Critical/High/Moderate/Low  
**Impact:** [Business impact]  
**Evidence:** [Specific examples from Playwright data or screenshots]  
**Recommendation:** [Actionable fix]  
**Effort:** Low/Medium/High

---

## Prioritized Action Items
[Top 10 fixes ranked by impact × effort]

## Quick Wins (High Impact, Low Effort)
[3-5 immediate fixes]
```

## Output Files
All files to `audit/` directory:
1. `ux-heuristics.md`
2. `content-audit.md`
3. `ia-review.md` + `proposed-ia.md`
4. `seo-technical.md`
5. `accessibility-wcag.md`
6. `responsive-mobile.md`
7. `trust-conversion.md`
8. `visual-design.md`
9. `competitive-benchmark.md`

## Success Criteria
- Evidence-based (cite Playwright data, screenshots, Phase 1 research)
- Actionable (specific fixes, not vague suggestions)
- Prioritized (impact × effort ratings)
- Realistic (within Magento constraints)
- User-centric (reference personas and journeys)

---

**Duration Estimate:** 2-3 iterations (~20-30 min)  
**Next Phase:** Phase 3 — Proposed Information Architecture
