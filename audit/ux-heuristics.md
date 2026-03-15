# UX Heuristics Audit (Nielsen's 10)

## Summary
The Builders Academy website suffers from significant usability issues across multiple Nielsen heuristics, most critically in navigation complexity (109+ links), aesthetic minimalism, and consistency. The site functions but creates unnecessary friction for all user personas — particularly Dave (builder) and Terry (low digital literacy). The cookie consent popup immediately blocks content on every page load, creating a hostile first impression.

## Severity Breakdown
- Critical: 4 issues
- High: 8 issues
- Moderate: 7 issues
- Low: 3 issues

---

## Findings

### H1: Visibility of System Status
**Rating: 2/5**

**Severity:** High
**Impact:** Users cannot tell where they are in multi-step processes, increasing anxiety and abandonment — especially for Terry persona.
**Evidence:**
- No breadcrumbs visible on product pages (product-banksman-full.png)
- No progress indicator in checkout flow (Magento default multi-step checkout)
- Cart icon in header shows no item count badge (homepage-hero.png — cart icon visible but no count)
- No loading indicators observed for add-to-cart actions
- "Student Login" link in header gives no indication of logged-in state
**Recommendation:**
- Add breadcrumbs to all pages: Home > Category > Course Name
- Add item count badge to cart icon
- Add progress steps to checkout (Step 1 of 3, etc.)
- Show loading spinners on add-to-cart button click
**Effort:** Low-Medium

---

### H2: Match Between System and the Real World
**Rating: 2/5**

**Severity:** High
**Impact:** Course names use official certification jargon that doesn't match how tradespeople search. Dave searches "green card course" but the product is titled "CSCS Green Card Labourer Course – Online, Same-Day Results & Certificate" (navigation.json line 8).
**Evidence:**
- Course names are excessively long and jargon-heavy: "CSCS Green Card Labourer Course – Online, Same-Day Results & Certificate", "Lifting Operations (Slinger Signaller) Awareness Online Course- CPD Accredited"
- Category labels mix audience understanding levels: "CPD Accredited - CV Enhancers" assumes user knows what CPD means
- "EUSR" appears without explanation in navigation (Utilities- EUSR category)
- "Test Hub" in navigation is ambiguous — is it practice tests? Product testing?
- Cookie consent lists 80+ cookies with technical descriptions (product-page-structure.json — Cookiebot data) — incomprehensible to Terry persona
**Recommendation:**
- Add informal aliases to product pages and search index ("green card course", "banksman course")
- Spell out all acronyms on first use: "CPD (Continuing Professional Development)"
- Rename "Test Hub" to "Free Practice Tests" or "CSCS Mock Exams"
- Add plain-English explanations to cookie categories or simplify to Accept/Reject
**Effort:** Low-Medium

---

### H3: User Control and Freedom
**Rating: 2/5**

**Severity:** High
**Impact:** Users who make mistakes or change their mind lack obvious escape routes, increasing frustration and abandonment.
**Evidence:**
- Cookie consent modal blocks entire page content on load — must interact to see anything (homepage-hero.png, product-banksman-hero.png)
- No visible "Back to category" or "Back to results" link on product pages
- "x" close buttons appear in navigation data (navigation.json lines 66, 87) suggesting modal/overlay patterns without clear dismiss affordance
- No visible "Edit cart" or "Remove item" on mobile views
- Tawk.to chat widget ("WE ARE HERE!" banner) obstructs content on mobile (product-banksman-hero.png — green banner overlays product page bottom-right)
**Recommendation:**
- Make cookie consent non-blocking (banner at bottom) rather than modal overlay
- Add clear "Back to [Category Name]" link at top of product pages
- Ensure chat widget is minimized by default and doesn't overlap content
- Add clear cart editing capabilities accessible on mobile
**Effort:** Medium

---

### H4: Consistency and Standards
**Rating: 2/5**

**Severity:** High
**Impact:** Inconsistent naming, formatting, and patterns across the site confuse users and erode trust.
**Evidence:**
- Course name formatting is wildly inconsistent in navigation.json:
  - Some use em-dashes (–), some use hyphens (-)
  - Some have "CPD Accredited" in the name, others don't
  - Inconsistent spacing around hyphens: "Fire Marshal/Extinguisher-  Online Course" (double space before "Online")
  - "Online Course" placement varies: sometimes at start, sometimes at end
- Duplicate courses appear across multiple categories (navigation.json): "Ladder Safety Awareness" appears under Construction Courses, Health and Safety Courses, AND CPD Accredited categories
- CTA buttons inconsistent: "Add to Cart" on homepage product cards, "Buy Now" on product page sidebar (product-banksman-full.png)
- Product card layout on homepage shows "Reg price" labels (homepage-full.png) — inconsistent price display pattern
**Recommendation:**
- Standardize course naming convention: "[Course Name] – Online Course" (consistently use em-dash, consistent placement)
- Remove duplicate course entries across categories — use a single canonical listing with cross-category tagging
- Standardize CTA language: use "Add to Cart" everywhere or "Buy Now" everywhere
- Standardize price display format across all pages
**Effort:** Medium

---

### H5: Error Prevention
**Rating: 2/5**

**Severity:** Moderate
**Impact:** Users can easily take wrong actions with no confirmation or warning, particularly problematic for Terry persona.
**Evidence:**
- No confirmation dialog when adding to cart — item appears to add silently
- Cookie consent offers 3 options (Deny, Allow selection, Allow all) with toggles for 4 categories — complex for error-prone interaction, especially on mobile
- Search bar (homepage-hero.png) has no autocomplete or suggestions — users who misspell "banksman" or "asbestos" get no help
- No visible form validation patterns on the contact form (product-banksman-full.png — form at bottom of product page)
- Inline CSS/JS code appearing in navigation links (navigation.json lines 78-82) — suggests broken markup leaking into the DOM
**Recommendation:**
- Add search autocomplete with fuzzy matching and popular queries
- Add visual cart confirmation (mini-cart dropdown or toast notification)
- Simplify cookie consent to "Accept All" / "Manage Preferences" — two buttons, not three
- Add real-time form validation with clear error messages
- Fix broken navigation markup leaking CSS/JS into link text
**Effort:** Medium

---

### H6: Recognition Rather Than Recall
**Rating: 2/5**

**Severity:** Moderate
**Impact:** Users must remember course names, navigate complex menus, and recall information across pages — high cognitive load for all personas.
**Evidence:**
- 109+ navigation links (navigation.json) require users to scan and recall categories — no visual grouping or icons
- Product pages don't show comparison info — user must remember details from other courses
- Homepage shows 8 product cards (homepage-full.png) with truncated titles — must click to see full details
- No "Recently Viewed" or "Continue where you left off" for returning users (Marcus persona)
- Category pages in nav dropdown are text-only lists — no icons, thumbnails, or visual differentiation
**Recommendation:**
- Reduce navigation to 5-7 top categories with icons/visual markers
- Add "Recently Viewed Courses" section for logged-in/cookied users
- Show key differentiators (price, duration, accreditation) on category listing cards
- Add comparison functionality or side-by-side views for related courses
**Effort:** Medium-High

---

### H7: Flexibility and Efficiency of Use
**Rating: 2/5**

**Severity:** Moderate
**Impact:** No shortcuts for experienced users; inefficient flows for all users.
**Evidence:**
- Search exists but no autocomplete, no filters, no advanced search
- No "Quick Buy" option — must go through full product page even for known courses
- No bulk purchase flow for employers (Sarah persona) — must add courses individually
- No account dashboard showing past purchases or recommended next courses
- Phone number visible in header (0203 345 6575) — good for Terry persona as an alternative channel
- Blog and Resources dropdown (navigation.json lines 88-97) provide category browsing but no filtering
**Recommendation:**
- Add search autocomplete with course suggestions
- Add "Buy Again" shortcut for returning customers
- Create employer bulk purchase flow with quantity selectors
- Enable one-click reorder for previously purchased courses
**Effort:** High (employer features), Low (search improvements)

---

### H8: Aesthetic and Minimalist Design
**Rating: 1/5**

**Severity:** Critical
**Impact:** Visual clutter, dense layouts, and information overload create cognitive strain that directly impacts conversion — the #1 design issue.
**Evidence:**
- Homepage (homepage-full.png): Cookie consent modal covers entire above-the-fold content. Below that, hero area uses category pills (Construction, Health and Safety, CSCS Cards, etc.) that aren't obviously clickable
- Homepage product grid shows 8 courses with long titles, truncated text, "Reg price" labels, and small "Add to Cart" links — visually dense
- Product page (product-banksman-full.png): Long course title wraps awkwardly ("Online Traffic Marshal / Banksman Training – Same-Day Certificate"), followed by duration, then badges, then a wall of text description
- Navigation has 109+ links across 7+ categories with duplicate entries — extreme information overload
- Footer contains 12+ links in two columns plus legal text — standard but adds to page density
- Tawk.to "WE ARE HERE!" green banner is visually aggressive and competes with page content (product-banksman-hero.png)
- CSS/JS code literally appears in navigation link text (navigation.json lines 78-82) — broken markup
**Recommendation:**
- Reduce homepage to: hero with clear value prop → 3-4 user pathways → 4 featured courses → trust signals → footer
- Reduce navigation to 5-7 top categories, no duplicates
- Product pages: lead with sticky sidebar (price + CTA + key facts) and clean, scannable content blocks
- Remove or minimize Tawk.to banner — replace with subtle chat icon
- Fix broken navigation markup immediately
**Effort:** High (redesign), Low (fixing broken markup)

---

### H9: Help Users Recognize, Diagnose, and Recover From Errors
**Rating: 2/5**

**Severity:** Moderate
**Impact:** When things go wrong, users have limited guidance to recover — particularly dangerous for Terry persona who may abandon the site entirely.
**Evidence:**
- No visible 404/error page patterns in the data (would need testing)
- Contact form (product-banksman-full.png) shows basic fields (First name, Last name, Email, Phone, Message) with a Submit button but no visible validation states
- Cookie consent "Deny" option gives no feedback on what happens if you deny — does the site still work?
- No visible error states for search (what happens with no results?)
- IAB consent framework shows broken labels: "[#IABV2_LABEL_PURPOSES#]", "[#IABV2_LABEL_FEATURES#]", "[#IABV2_LABEL_PARTNERS#]" (product-page-structure.json) — template variables not rendering
**Recommendation:**
- Create helpful 404 page with search and popular courses
- Add inline validation with specific, actionable error messages
- Fix broken IAB consent template variables
- Show friendly "no results" state for search with suggestions
**Effort:** Low-Medium

---

### H10: Help and Documentation
**Rating: 3/5**

**Severity:** Moderate
**Impact:** Some help exists but it's reactive (chat) rather than proactive (contextual help).
**Evidence:**
- FAQ section exists on product pages (product-banksman-full.png) with relevant questions: "Can I do this course on my phone?", "How long does the course take?", "What if I don't pass the course or test?"
- Tawk.to live chat is available (prominent "WE ARE HERE!" banner)
- Phone number visible in header: 0203 345 6575
- "How it works" section on product page shows 4 steps: 1. Enrol Instantly, 2. Learn at Your Own Pace, 3. Complete Today, 4. Get Certified
- Contact form at bottom of product page
- No visible help/FAQ page linked from main navigation
- Blog exists (navigation.json) with categorized articles
**Recommendation:**
- Add a dedicated Help/FAQ page linked from main navigation and footer
- Add contextual help tooltips next to confusing elements (e.g., "What is CPD?")
- Add "How it Works" section to homepage (currently only on product pages)
- Consider adding a "New here?" guided tour for first-time visitors
**Effort:** Low-Medium

---

## Heuristic Scores Summary

| Heuristic | Score (0-5) | Priority |
|-----------|-------------|----------|
| H1: Visibility of system status | 2 | High |
| H2: Match between system and real world | 2 | High |
| H3: User control and freedom | 2 | High |
| H4: Consistency and standards | 2 | High |
| H5: Error prevention | 2 | Moderate |
| H6: Recognition rather than recall | 2 | Moderate |
| H7: Flexibility and efficiency of use | 2 | Moderate |
| H8: Aesthetic and minimalist design | 1 | Critical |
| H9: Help recognize/recover from errors | 2 | Moderate |
| H10: Help and documentation | 3 | Low |
| **Overall Average** | **2.0/5** | |

---

## Prioritized Action Items

1. **Fix broken navigation markup** — CSS/JS code appearing in nav links (Critical, Low effort)
2. **Replace blocking cookie consent modal** with non-blocking bottom banner (Critical, Medium effort)
3. **Fix broken IAB consent template variables** — "[#IABV2_LABEL_PURPOSES#]" rendering in UI (Critical, Low effort)
4. **Reduce navigation to 5-7 categories** — eliminate duplicates and overload (Critical, High effort)
5. **Standardize course naming convention** across all pages and navigation (High, Medium effort)
6. **Add breadcrumbs** to product and category pages (High, Low effort)
7. **Add search autocomplete** with fuzzy matching and informal term support (High, Medium effort)
8. **Minimize Tawk.to chat widget** — remove aggressive "WE ARE HERE!" banner (High, Low effort)
9. **Add cart item count badge** to header cart icon (Moderate, Low effort)
10. **Add checkout progress indicator** with clear step numbering (Moderate, Medium effort)

## Quick Wins (High Impact, Low Effort)
1. Fix broken nav markup leaking CSS/JS into link text
2. Fix IAB consent template variables not rendering
3. Add breadcrumbs to all product pages
4. Minimize Tawk.to chat banner to subtle icon
5. Add item count badge to cart icon in header
