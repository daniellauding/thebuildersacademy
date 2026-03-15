# SEO Technical Review

## Summary
The Builders Academy has a solid organic search foundation — product pages rank for commercial keywords and URL structure is clean. However, critical technical SEO issues (dual H1 tags, missing schema markup, inconsistent heading hierarchy, 1 missing alt text) undermine rankings potential. The site's strongest SEO asset is its commercial intent keyword coverage; the biggest risk is the lack of structured data (Course schema) which would significantly improve SERP visibility in an increasingly rich-result-driven search landscape.

## Severity Breakdown
- Critical: 3 issues
- High: 5 issues
- Moderate: 4 issues
- Low: 3 issues

---

## Findings

### Page Titles & Meta Descriptions
**Severity:** High
**Impact:** Title tags and meta descriptions directly affect click-through rates from search results. Poor titles = lost organic traffic. When Dave searches "CSCS green card course online", the SERP title is the first thing he reads — a truncated or unclear title loses the click to a competitor.
**Evidence:**
- Product page title (product-page-structure.json): "Online Traffic Marshal / Banksman Training – Same-Day Certificate" — 66 characters, acceptable length
- Title includes key search terms ("Traffic Marshal", "Banksman Training", "Same-Day Certificate") — good keyword targeting
- Homepage title not captured in Playwright data — needs manual verification
- Course names used as titles are extremely long — some likely exceed 60-character optimal length:
  - "CSCS Green Card Labourer Course – Online, Same-Day Results & Certificate" (72 chars) — may be truncated in SERPs
  - "Lifting Operations (Slinger Signaller) Awareness Online Course- CPD Accredited" (79 chars) — definitely truncated
  - "EUSR National Water Hygiene (Blue Card) – Complete Online Today" (63 chars) — borderline
- Meta descriptions not captured in Playwright data — unknown quality
- For Dave and Terry, truncated titles may omit the critical "Same-Day Certificate" USP that drives click-through
- For Sarah (employer), titles don't mention "accredited" or "team training" — missing B2B search intent
**Recommendation:**
- Audit all page titles; keep under 60 characters with key terms front-loaded
- Shorten product titles for SEO: "Traffic Marshal Course Online — Same-Day Certificate | Builders Academy"
- Write unique, compelling meta descriptions (150-160 chars) for every product page including: course name, price, duration, and "same-day certificate" USP
- Add brand name to end of all titles: "| The Builders Academy"
- For employer-targeted pages, include terms like "accredited", "team training", "bulk booking" in meta descriptions
**Effort:** Medium

---

### Heading Hierarchy (H1/H2 Structure)
**Severity:** Critical
**Impact:** Multiple H1 tags confuse search engines about page topic and hurt accessibility. Heading hierarchy affects both SEO and screen reader navigation.
**Evidence:**
- **2 H1 tags on homepage** (accessibility-quick.json: "2 H1 tags (should be 1)") — confirmed issue
- Product page heading structure (product-banksman-full.png) visible headings:
  - Course title appears to be the main H1
  - "How it works" — likely H2
  - "Companies we work with" — likely H2
  - "Frequently Asked Questions" — likely H2
  - "Need some more info?" — likely H2
  - "Personal information" — likely H3 or lower
- Homepage visible headings (homepage-full.png):
  - "Our popular courses" — likely one of the H1 or H2 tags
  - "Who are We?" — likely H2
  - Category sections lack visible heading structure
**Recommendation:**
- **Immediately fix dual H1 on homepage** — single H1 should be the primary value proposition headline
- Ensure every page has exactly one H1 containing the primary keyword
- Audit all pages for proper heading cascade: H1 → H2 → H3 (no skipping levels)
- Product pages: H1 = Course name, H2 = major sections, H3 = subsections
**Effort:** Low

---

### Image Alt Text
**Severity:** High
**Impact:** Missing alt text hurts both SEO (image search visibility) and accessibility (screen reader users).
**Evidence:**
- **1 image without alt text** on homepage (accessibility-quick.json: "1 images without alt text")
- Product images appear to have alt text (product page hero image visible in screenshot)
- Employer logo carousel images ("Companies we work with") — alt text quality unknown but logos should have company name as alt text
- Homepage product card images — alt text quality unknown
- No evidence of optimized, keyword-rich alt text (e.g., "CSCS Green Card course online — same-day certificate")
**Recommendation:**
- Fix the 1 missing alt text immediately
- Audit all images site-wide for alt text presence and quality
- Use descriptive, keyword-relevant alt text: "Traffic Marshal Banksman training course — CPD accredited online certificate"
- Ensure decorative images use empty alt="" not missing alt attribute
- Add alt text to all employer logos: "BBC Studios — trusted employer using The Builders Academy"
**Effort:** Low

---

### Schema Markup (Structured Data)
**Severity:** Critical
**Impact:** Course schema markup enables rich results in Google (price, rating, provider info displayed directly in SERPs), significantly increasing CTR. Competitors without schema present an opportunity.
**Evidence:**
- No Course schema detected in Playwright data
- No Organization schema detected
- No Review/AggregateRating schema detected (despite Trustpilot integration)
- No BreadcrumbList schema detected
- No FAQ schema detected (despite FAQ sections on product pages)
- Product pages have all the data needed for Course schema: name, description, provider, price
**Recommendation:**
- **Highest priority SEO fix**: Add Course schema to all product pages:
  ```json
  {
    "@type": "Course",
    "name": "Traffic Marshal / Banksman Training",
    "provider": { "@type": "Organization", "name": "The Builders Academy" },
    "offers": { "@type": "Offer", "price": "35.00", "priceCurrency": "GBP" },
    "hasCourseInstance": { "courseMode": "online", "duration": "PT2H" }
  }
  ```
- Add Organization schema to homepage with logo, contact info, social profiles
- Add AggregateRating schema pulling from Trustpilot data
- Add FAQPage schema to product pages (enables FAQ rich results)
- Add BreadcrumbList schema for enhanced SERP navigation display
**Effort:** Medium

---

### URL Structure
**Severity:** Low
**Impact:** URL structure is generally good — clean, descriptive, and keyword-rich.
**Evidence:**
- Product URLs are descriptive and SEO-friendly (products.json):
  - `/banksman-traffic-marshal-training-online-course` — excellent
  - `/cscs-card-1-day-course-qcf-level-1-award-in-health-and-safety-in-a-construction-environment` — too long, contains outdated "QCF" reference
  - `/ladder-safety-awareness-course-online` — good
  - `/asbestos-awareness-training-online-course` — good
  - `/working-at-height-online-training-course` — good
- Category URLs (products.json):
  - `/construction-courses` — good
  - `/first-aid-courses` — good
  - `/health-and-safety-courses` — good
- No dynamic parameters or session IDs in URLs — clean structure
**Recommendation:**
- Keep existing URLs to preserve SEO equity — do NOT change
- For the one overly long URL (`cscs-card-1-day-course-qcf-level-1-award...`), consider a 301 redirect to a shorter URL only if crawl data shows issues
- Ensure all new pages follow the pattern: `/[course-name]-online-course`
- Verify XML sitemap includes all product and category URLs
**Effort:** Low (preserve), Medium (if redirects needed)

---

### Internal Linking
**Severity:** High
**Impact:** Weak internal linking reduces crawl efficiency and misses opportunities to distribute page authority.
**Evidence:**
- Navigation provides extensive internal linking (109+ links) but is over-saturated — dilutes link equity across too many links per page
- Product pages (product-banksman-full.png) show no visible "Related Courses" or "You might also need" sections with internal links
- Homepage links to 8 featured products (homepage-full.png) — good but limited
- Blog exists with categorized articles (navigation.json: CSCS Card & Entry-Level Training, Water & Environmental Safety, etc.) — potential for strong internal linking from blog posts to product pages
- No visible "breadcrumb" navigation providing hierarchical internal links
- Footer provides some internal links (About Us, Contact Us, Blog, Test Hub, etc.)
**Recommendation:**
- Add "Related Courses" internal links to every product page (3-4 related courses)
- Add breadcrumbs with links: Home > Health & Safety Courses > Traffic Marshal Training
- Reduce navigation links from 109+ to ~30-40 (concentrates link equity on important pages)
- Add contextual internal links within product descriptions ("Need your CSCS card first? Start with our [Green Card Course]")
- Link blog posts to relevant product pages with clear CTAs
**Effort:** Medium

---

### Mobile-Friendliness (SEO Perspective)
**Severity:** High
**Impact:** Google uses mobile-first indexing. Mobile UX issues directly affect search rankings. Dave (70%+ mobile traffic) and Terry (phone-only user) experience the site primarily on mobile — Google ranks based on what they see.
**Evidence:**
- Homepage mobile view (homepage-mobile.png): content is responsive but cookie consent takes full screen on mobile — poor mobile-first signal
- Product page mobile (product-banksman-mobile.png): content is readable but key info requires significant scrolling
- "Buy Now" / "Add to Cart" CTA not visible above fold on mobile product page
- Touch targets appear small in mobile screenshots — problematic for Terry persona (50-65+, may wear reading glasses, reduced fine motor control)
- Text appears readable (16px+) on mobile views — acceptable
- No visible AMP implementation (not required but could benefit page speed)
- Cookie consent interstitial on mobile (homepage-mobile.png) may trigger Google's intrusive interstitial penalty, affecting rankings for Dave's "CSCS green card course online" searches
**Recommendation:**
- Ensure cookie consent doesn't block mobile content (Google may count this as interstitial penalty)
- Add sticky mobile CTA bar with price and "Enrol Now" button
- Verify tap targets meet 48px minimum for mobile usability (Google mobile-friendly requirement)
- Test with Google's Mobile-Friendly Test tool
- Optimize images for mobile (WebP format, lazy loading)
**Effort:** Medium

---

### Core Web Vitals (Inferred)
**Severity:** High
**Impact:** Core Web Vitals are a Google ranking factor. Poor CWV = lower rankings.
**Evidence (inferred from structure/screenshots):**
- **LCP (Largest Contentful Paint):** Cookie consent modal likely delays perception of largest contentful paint — the modal is the first large element rendered. Hero image behind it may load slowly (large construction worker photo)
- **FID/INP (Interaction to Next Paint):** Multiple third-party scripts detected:
  - Cookiebot (cookie consent)
  - Tawk.to (live chat)
  - Google Analytics
  - Microsoft Clarity
  - Klaviyo (email marketing)
  - Stripe (payments)
  - 5+ script sources = potential main thread blocking
- **CLS (Cumulative Layout Shift):** Cookie consent modal appearing on load likely causes significant layout shift. Tawk.to "WE ARE HERE!" banner injection also causes shift
- Inline CSS/JS in navigation DOM (navigation.json lines 78-82) suggests render-blocking resources or poor code hygiene
**Recommendation:**
- Measure actual CWV with Google PageSpeed Insights and Chrome UX Report
- Defer non-critical third-party scripts (Tawk.to, Clarity, Klaviyo) to after page load
- Replace blocking cookie consent modal with non-blocking banner
- Lazy load images below the fold
- Preload hero image for faster LCP
- Consider reducing Magento page weight through component optimization
**Effort:** Medium-High

---

### Canonical Tags & Duplicate Content
**Severity:** Moderate
**Impact:** Duplicate content across categories could cause indexing confusion if canonicals aren't properly set.
**Evidence:**
- Same courses appear in multiple navigation categories (navigation.json): Ladder Safety, Lifting Operations, Manual Handling, Abrasive Wheels, Traffic Marshal, Asbestos Awareness each appear 3 times
- If these generate different URLs per category, this creates duplicate content
- Based on products.json, each course has a single canonical URL (not category-prefixed) — this is correct
- Need to verify canonical tags are properly implemented on all category pages pointing to the main product URL
**Recommendation:**
- Verify `<link rel="canonical">` tags on all product pages point to the single correct URL
- Verify category pages don't create alternate product URLs
- Add canonical self-references to all pages
- Verify no orphan pages exist without canonical tags
**Effort:** Low

---

### XML Sitemap & Robots.txt
**Severity:** Moderate
**Impact:** Proper sitemap and robots.txt ensure efficient crawling.
**Evidence:**
- No sitemap data captured in Playwright audit — needs manual verification
- Magento typically auto-generates XML sitemaps — likely exists but quality unknown
- Unknown if blog posts, category pages, and product pages are all included
- Unknown robots.txt configuration
**Recommendation:**
- Verify XML sitemap exists at /sitemap.xml and is submitted to Google Search Console
- Ensure sitemap includes all product pages, category pages, and key content pages
- Exclude admin, cart, checkout, and account pages from sitemap
- Verify robots.txt doesn't block important resources
- Set up automatic sitemap regeneration for new products
**Effort:** Low

---

### Local SEO & Google Business Profile
**Severity:** Moderate
**Impact:** As a UK-based training provider, local SEO signals strengthen credibility and visibility.
**Evidence:**
- Phone number visible: 0203 345 6575 (London number) — good local signal
- Company address: "based in London" (from homepage "Who are We?" section)
- Company registration: "Learning Spot Ltd, Company Registration Number 15736345"
- No visible Google Business Profile integration
- No visible address/location structured data
**Recommendation:**
- Ensure Google Business Profile is claimed and optimized
- Add LocalBusiness schema to homepage with address, phone, opening hours
- Include full business address on Contact Us page
- Encourage Google reviews alongside Trustpilot
**Effort:** Low

---

### Blog & Content Marketing SEO
**Severity:** Moderate
**Impact:** Blog content can capture top-of-funnel search traffic and support product page authority. Addresses Journey 2 (discovery) where users arrive with broader queries before finding the right course.
**Evidence:**
- Blog exists with categorized content (navigation.json lines 90-97):
  - CSCS Card & Entry-Level Training
  - Water & Environmental Safety
  - Health & Safety Training
  - First Aid & Emergency Response
  - Construction Management & Supervision
  - Business & Career Development
  - Plant, Traffic & On-Site Operations
  - Industry News & Updates
- Blog categories align well with product categories — good for topic authority
- "Practice tests" and "View all articles" links exist
- Unknown: blog post quality, publishing frequency, internal linking from posts to products
**Recommendation:**
- Audit blog posts for internal links to relevant product pages
- Target long-tail keywords matching persona search behavior:
  - Dave: "do I need a CSCS card to work on a building site?", "how to become a traffic marshal UK"
  - Sarah: "construction training requirements for employers UK", "bulk construction safety training online"
  - Marcus: "what courses do I need after CSCS green card", "construction career progression courses"
  - Terry: "easiest way to get CSCS card online", "is online construction training accepted"
- Add clear CTAs in blog posts linking to relevant courses
- Publish regular content (2-4 posts/month) targeting buyer journey questions
**Effort:** Medium (ongoing)

---

## Prioritized Action Items

1. **Fix dual H1 on homepage** — immediately, single highest-impact quick fix (Critical, Low effort)
2. **Add Course schema** to all product pages (Critical, Medium effort)
3. **Add FAQ schema** to product pages with existing FAQ content (Critical, Low effort)
4. **Fix 1 missing image alt text** on homepage (High, Low effort)
5. **Add breadcrumb navigation** with BreadcrumbList schema (High, Medium effort)
6. **Add "Related Courses" internal links** to all product pages (High, Medium effort)
7. **Audit and optimize page titles** — keep under 60 chars (High, Medium effort)
8. **Defer non-critical scripts** to improve Core Web Vitals (High, Medium effort)
9. **Write unique meta descriptions** for all product/category pages (Moderate, Medium effort)
10. **Add Organization schema** to homepage (Moderate, Low effort)

## Quick Wins (High Impact, Low Effort)
1. Fix dual H1 tags on homepage (5 minutes)
2. Fix 1 missing image alt text (5 minutes)
3. Add FAQ schema to product pages (uses existing FAQ content)
4. Add Organization schema to homepage
5. Add canonical self-reference tags to all pages
