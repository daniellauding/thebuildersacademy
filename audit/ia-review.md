# Information Architecture Review

## Summary
The Builders Academy's current information architecture is the site's single biggest usability problem. With 109+ navigation links, heavy category duplication, no filtering/sorting capabilities, and no role-based pathways, the IA creates cognitive overload for all personas. Dave (builder) can't find his specific course quickly, Sarah (employer) has no dedicated pathway, and Terry (low digital literacy) is overwhelmed by the sheer volume of choices. The IA needs radical simplification from 109+ links to a clean 5-7 category structure with smart filtering and role-based entry points.

## Severity Breakdown
- Critical: 4 issues
- High: 5 issues
- Moderate: 3 issues
- Low: 2 issues

---

## Findings

### Navigation Structure: Extreme Overload
**Severity:** Critical
**Impact:** 109+ navigation links create decision paralysis for all users. This is the #1 conversion blocker for Journey 2 (discovery) users and a significant frustration for all personas.
**Evidence:**
- Total navigation links captured: 109+ (navigation.json)
- Top-level categories in main nav (visible in screenshots):
  1. Home
  2. Courses (mega-dropdown with subcategories)
  3. About Us
  4. Contact Us
  5. Resources (dropdown)
- Under "Courses" dropdown, 7 subcategories each expand to full course lists:
  1. Construction Courses (12 courses listed)
  2. CSCS Cards (6 courses listed)
  3. First Aid Courses (2 courses listed)
  4. Health and Safety Courses (15 courses listed)
  5. Utilities- EUSR (4 courses listed)
  6. CPD Accredited - CV Enhancers (7 courses listed)
  7. Blog / Test Hub (additional entries)
- The total catalogue is approximately 25-30 unique courses (products.json reports 61 product links, but this includes the same course listed under multiple categories — after de-duplication, the actual unique course count is ~25-30)
- Additional utility links: Search Courses, Student Login, Cart, Phone number (0203 345 6575)
- Mobile navigation (homepage-mobile.png): hamburger menu that presumably contains all 109+ links in a scrollable list — extremely poor mobile IA

**Recommendation:**
- Reduce to 5-7 top-level categories with no duplicates (see proposed-ia.md)
- Show max 4-6 featured courses per category in dropdown, with "View all" link
- Move search to prominent position in header
- Add "For Employers" as a top-level nav item
**Effort:** High

---

### Category Duplication
**Severity:** Critical
**Impact:** Same courses appearing in 3+ categories confuses users, inflates navigation, and creates a false impression of breadth. Users may click the same course multiple times thinking it's different.
**Evidence:**
- From navigation.json, 6 courses appear in 3 categories each (18 redundant entries):

| Course | Construction | H&S | CPD |
|--------|:-----------:|:---:|:---:|
| Ladder Safety Awareness | Yes | Yes | Yes |
| Lifting Operations (Slinger Signaller) | Yes | Yes | Yes |
| Manual Handling | Yes | Yes | Yes |
| Abrasive Wheels Safety Awareness | Yes | Yes | Yes |
| Traffic Marshal / Banksman | Yes | Yes | Yes |
| Asbestos Awareness | Yes | Yes | Yes |

- Additionally, "CSCS Green Card" courses appear in both Construction Courses and Health and Safety Courses
- "Working at Height" appears in both Construction and Health and Safety
- "First Aid" courses appear in both First Aid and Health and Safety categories
- Net effect: ~30 unique courses displayed as 60+ navigation entries

**Recommendation:**
- Assign each course a single primary category
- Use tags/filters for secondary categorization (e.g., a course tagged "Construction" AND "CPD" appears once but is filterable by either)
- De-duplicate all navigation entries immediately
**Effort:** Medium

---

### Category Naming & Clarity
**Severity:** High
**Impact:** Category names don't align with how users (especially Dave and Terry) think about their needs. Categories are organized by content type, not by user need.
**Evidence:**
- Current categories (navigation.json):
  - "Construction Courses" — broad, unclear what's included vs excluded
  - "CSCS Cards" — good, matches search intent for card-seekers
  - "First Aid Courses" — clear
  - "Health and Safety Courses" — overlaps heavily with "Construction Courses"
  - "Utilities- EUSR" — jargon, unclear to non-specialists
  - "CPD Accredited - CV Enhancers" — assumes knowledge of CPD; "CV Enhancers" is marketing-speak, not how users think
  - "Blog" — not a product category; shouldn't be in the same nav level
  - "Test Hub" — ambiguous
- The distinction between "Construction Courses" and "Health and Safety Courses" is unclear — most H&S courses ARE construction courses
- Blog categories (Resources dropdown) are actually well-named: "CSCS Card & Entry-Level Training", "Health & Safety Training", "Plant, Traffic & On-Site Operations"

**Recommendation:**
- Rename categories using user mental models (see proposed-ia.md):
  - "CSCS Cards & Entry-Level" (matches "I need a card" intent)
  - "Health & Safety Training" (clear, standard term)
  - "First Aid" (keep — it's clear)
  - "Water & Utilities (EUSR)" (explains the acronym)
  - "All Courses" (flat view with filters)
- Remove "CPD Accredited - CV Enhancers" as a category — make CPD a filter tag instead
- Separate Blog from product navigation
**Effort:** Medium

---

### Search Functionality
**Severity:** High
**Impact:** Search is the fastest path for Dave and Marcus (who know what they want). Poor search = lost conversions.
**Evidence:**
- Search bar visible in header: "Search Courses..." placeholder (homepage-hero.png) — good that it exists
- No evidence of autocomplete or search suggestions
- No evidence of fuzzy matching (handling misspellings like "banksman" vs "bankman" or "asbestos" vs "asbestoes")
- No evidence of informal term mapping (e.g., "green card" → CSCS Green Card Labourer Course)
- Search appears to be a standard Magento search — typically keyword-match only
- No visible search results page was captured — unknown quality of results display

**Recommendation:**
- Add autocomplete/typeahead showing course names as user types
- Map informal terms to official course names ("green card" → CSCS Green Card, "banksman" → Traffic Marshal)
- Add fuzzy matching for misspellings
- Show search results with key facts (price, duration, accreditation) not just course names
- Add "Popular searches" dropdown on empty search focus
**Effort:** Medium

---

### Breadcrumbs
**Severity:** High
**Impact:** Without breadcrumbs, users lose their place in the site hierarchy. This increases back-button usage and abandonment, especially for Journey 2 (discovery) users.
**Evidence:**
- No breadcrumbs visible on product page screenshots (product-banksman-full.png, product-banksman-mobile.png)
- No breadcrumbs visible on homepage screenshots
- Without breadcrumbs, the only way to navigate "up" is the main navigation or browser back button
- For Terry persona, losing context of "where am I?" increases anxiety

**Recommendation:**
- Add breadcrumbs to all pages: Home > Category > Course Name
- Breadcrumbs should use the course's primary category
- Style breadcrumbs clearly with > separators and link styling
- Add BreadcrumbList schema for SEO rich results
**Effort:** Low

---

### Cross-Linking & Related Content
**Severity:** High
**Impact:** Weak cross-linking means users who land on one product page have no easy path to discover related courses — a missed revenue and engagement opportunity.
**Evidence:**
- Product page (product-banksman-full.png) has no visible "Related Courses" section
- No "Builders who bought this also bought..." recommendations
- No "Complete your training" pathway showing logical next courses
- No course bundle suggestions or package deals visible
- Homepage product grid (homepage-full.png) shows 8 courses but with no thematic grouping or progression logic
- "Companies we work with" section exists (logos) but doesn't link to an employer page or case studies

**Recommendation:**
- Add "Related Courses" section to every product page (3-4 courses, algorithm or manual selection)
- Add "Complete Your Training" section showing logical progression:
  - "You're looking at Traffic Marshal → You might also need: CSCS Green Card, Working at Height, Manual Handling"
- Add bundle/package suggestions for multi-course purchases
- Link employer logos to a "For Employers" page
**Effort:** Medium

---

### Mental Model Alignment (Persona Fit)
**Severity:** Critical
**Impact:** The IA doesn't match how any of the four personas think about their needs. It's organized by content taxonomy, not user intent.
**Evidence:**
- **Dave (Builder):** Thinks "I need the green card" → Current IA forces him to choose between "Construction Courses", "CSCS Cards", or "Health and Safety Courses" — he doesn't know which category it's in
- **Sarah (Employer):** Thinks "I need to train 12 people across 4 courses" → No employer pathway, no bulk purchasing, no training matrix. Must navigate the individual consumer flow repeatedly
- **Marcus (Returning):** Thinks "I did asbestos awareness last year, what's next?" → No personalized recommendations, no "My Courses" dashboard, no career progression view
- **Terry (Low Literacy):** Thinks "I need to find the thing my boss told me about" → 109+ links, jargon-heavy categories, no "Help me choose" pathway
- Homepage (homepage-full.png): No role-based entry points, no "I need..." pathways, no guided discovery

**Recommendation:**
- Add role-based entry points on homepage:
  - "I need a certification" → quiz/guided selector
  - "I'm an employer" → For Employers page
  - "I'm not sure what I need" → Help me choose flow
- Create persona-aligned pathways (see proposed-ia.md)
- Add guided course finder: "What type of work do you do?" → "What card/cert do you need?" → Recommended courses
**Effort:** High

---

### Mobile Navigation
**Severity:** Critical
**Impact:** Mobile users (70%+ for Dave and Terry personas) must navigate 109+ links through a hamburger menu — an impossible task on small screens.
**Evidence:**
- Mobile homepage (homepage-mobile.png): hamburger menu icon visible, content is vertically stacked
- Mobile product page (product-banksman-mobile.png): full-width layout, long scrolling page
- No visible mobile-specific navigation patterns (bottom nav bar, sticky category tabs, etc.)
- Category pills visible on homepage mobile view (Construction, Health and Safety, CSCS Cards, etc.) but appear small and crowded
- No visible mobile search shortcut

**Recommendation:**
- Mobile navigation: max 5-7 categories in hamburger, each showing 3-4 featured courses
- Add sticky bottom nav bar on mobile: Home | Search | Courses | Cart | Account
- Make search the primary navigation method on mobile (search icon always visible)
- Use horizontal scrolling category tabs on homepage (mobile pattern)
**Effort:** High

---

### Footer Navigation
**Severity:** Low
**Impact:** Footer is standard and functional but misses opportunities for key pages.
**Evidence:**
- Footer links (homepage-full.png) split into two columns:
  - "The Company": About Us, Contact Us, Blog, Test Hub, Sign into my account
  - "Policies": Terms and Conditions, Anti-slavery & Human Trafficking Policy, Equality and Diversity, Health and Safety, Privacy & Terms of Business
- Missing from footer: FAQ/Help page, For Employers, Course Categories, Accreditations, Trustpilot link

**Recommendation:**
- Add footer sections: "Popular Courses", "For Employers", "Help & Support"
- Add Trustpilot badge/link to footer
- Add accreditation logos to footer
- Add company registration and VAT details for employer trust
**Effort:** Low

---

### Blog & Resources IA
**Severity:** Moderate
**Impact:** Blog categories are actually well-structured but disconnected from the main product IA.
**Evidence:**
- Resources dropdown (navigation.json) contains:
  - Practice tests
  - View all articles
  - Blog categories: CSCS Card & Entry-Level Training, Water & Environmental Safety, Health & Safety Training, First Aid & Emergency Response, Construction Management & Supervision, Business & Career Development, Plant, Traffic & On-Site Operations, Industry News & Updates
- Blog categories are arguably better-named than product categories
- No visible connection between blog content and product pages (e.g., blog about CSCS cards should link to CSCS courses)

**Recommendation:**
- Align product categories with blog categories for consistency
- Add contextual product links within blog posts
- Create hub pages that combine blog content + product listings for each major topic
**Effort:** Medium

---

## Prioritized Action Items

1. **Reduce navigation to 5-7 categories** — eliminate all duplication (Critical, High effort)
2. **De-duplicate course entries** across categories — each course listed once (Critical, Medium effort)
3. **Add role-based homepage entry points** — builder / employer / help me choose (Critical, High effort)
4. **Redesign mobile navigation** — max 5-7 items, prominent search, bottom nav bar (Critical, High effort)
5. **Add breadcrumbs** to all product and category pages (High, Low effort)
6. **Add search autocomplete** with informal term mapping and fuzzy matching (High, Medium effort)
7. **Rename categories** to match user mental models, not internal taxonomy (High, Medium effort)
8. **Add "Related Courses"** cross-linking to all product pages (High, Medium effort)
9. **Create "For Employers"** top-level navigation item and landing page (High, High effort)
10. **Add guided course finder** — interactive quiz to help undecided users (Moderate, High effort)

## Quick Wins (High Impact, Low Effort)
1. Add breadcrumbs to all product pages
2. Remove duplicate navigation entries (same courses in multiple categories)
3. Rename "CPD Accredited - CV Enhancers" to something user-friendly
4. Add "For Employers" link to main navigation (even before the page is built — can link to contact form)
5. Move "Blog" out of the "Courses" dropdown into "Resources"
