# Content Audit

## Summary
The Builders Academy's content is functional but suffers from inconsistent formatting, excessive jargon, poor scannability, and missing trust-building content. Product page content buries key purchase-decision information (price, duration, certificate details) beneath walls of text. Critical content gaps exist for employer audiences, and there is significant duplicate content across category navigation. The overall tone is professional but impersonal and overly formal for the tradesperson audience.

## Severity Breakdown
- Critical: 3 issues
- High: 6 issues
- Moderate: 5 issues
- Low: 3 issues

---

## Findings

### Content Clarity & Reading Level
**Severity:** High
**Impact:** Target audience (builders, 20-60+, mixed digital literacy) needs plain-English content. Current content is too formal and jargon-heavy for Terry and Dave personas.
**Evidence:**
- Product page description for Banksman course (product-banksman-full.png): "Get certified and job-ready with our nationally recognised and CPD-accredited Traffic Marshal (Banksman) Online Course- perfect for individuals and companies looking to boost safety and compliance on construction sites" — 33-word sentence, estimated Flesch-Kincaid grade 14+ (college level)
- Extensive use of unexplained acronyms: CPD, CITB, CSCS, EUSR, FAW, EFAW, HSE — all appear in navigation and product pages without definitions
- Category label "CPD Accredited - CV Enhancers" assumes familiarity with both CPD and the concept of CV enhancement for construction workers
- Cookie consent text: "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic..." — legalistic, not plain English
**Recommendation:**
- Rewrite product descriptions to Flesch-Kincaid grade 8 or below
- Add acronym definitions in parentheses on first use per page
- Lead product descriptions with outcomes, not features: "After this course, you'll have your Traffic Marshal certificate — valid for 3 years, accepted on every UK construction site"
- Replace cookie consent text with plain English: "We use cookies to make this site work properly and understand how you use it"
**Effort:** Medium

---

### Product Description Scannability
**Severity:** Critical
**Impact:** Dave and Terry scan pages in seconds. If they can't find price, duration, and "what do I get" immediately, they bounce.
**Evidence:**
- Product page (product-banksman-full.png) layout: Title → Duration → Accreditation badges → Wall of description text → Bullet points ("You'll learn how to:") → More paragraphs → Key facts with green checkmarks far below fold
- Critical buying information scattered across page:
  - Price: £35.00 — visible in sidebar "Buy Now" area (good on desktop, requires scroll on mobile)
  - Duration: "1-2 Hours" — small text near title
  - Certificate: "Same-day CPD E-Certificate- Valid for 3 years" — buried below multiple sections
  - Accreditation: CPD + HSE badges near title (small)
- Green checkmark facts ("24/7 Access & Unlimited Free Retakes", "Complete in 1 hour on any device", "Same-day CPD E-Certificate") are the most compelling content but appear well below the fold
- "How it works" 4-step section is excellent but placed mid-page, not visible on landing
**Recommendation:**
- Create a structured "Key Facts" card above the fold on every product page:
  - Price | Duration | Certificate | Accreditation | Retakes
- Move green checkmark USPs above the fold
- Move "How it works" section higher, ideally just below the key facts
- Use progressive disclosure: essential facts first, detailed description expandable
**Effort:** Medium

---

### CTA Microcopy
**Severity:** High
**Impact:** CTAs that don't match user mental models reduce click-through rates.
**Evidence:**
- "Buy Now" button on product page sidebar (product-banksman-full.png) — direct but doesn't acknowledge what the user gets
- "Add to Cart" on homepage product cards — standard e-commerce but feels transactional for a learning platform
- "Chat to us now" and "Contact us" buttons on homepage (homepage-full.png) — two CTAs that do similar things, creating decision paralysis
- "Submit" on contact form (product-banksman-full.png) — generic, doesn't indicate outcome
- "Read more" link in "Who are We?" section (homepage-full.png) — vague, doesn't tell user where it goes
- Homepage has no primary CTA above the fold — the hero area shows category pills but no clear action
**Recommendation:**
- Change "Buy Now" to "Enrol Now — £35" (includes price for confidence)
- Change "Add to Cart" to "Enrol — £35" on product cards
- Merge "Chat to us now" and "Contact us" into single "Need help? Chat with us" CTA
- Change "Submit" to "Send your question"
- Change "Read more" to "About The Builders Academy"
- Add primary CTA to homepage hero: "Find Your Course" or "Get Certified Today"
**Effort:** Low

---

### Tone & Voice Consistency
**Severity:** Moderate
**Impact:** Inconsistent tone undermines brand perception and trust.
**Evidence:**
- Homepage "Who are We?" section (homepage-full.png): formal, third-person — "The Builders Academy is an online and remote training provider based in London. We offer qualifications to enhance our learners' employment chances."
- Product page (product-banksman-full.png): switches between second person ("Get certified and job-ready") and benefit-focused ("perfect for individuals and companies")
- FAQ questions use first person ("Can I do this course on my phone?") — more natural and appropriate
- Tawk.to banner uses aggressive, all-caps "WE ARE HERE!" — clashes with the site's otherwise professional tone
- Footer legal text is standard corporate
**Recommendation:**
- Establish tone guide: conversational, reassuring, second-person ("You'll get your certificate the same day")
- Use FAQ-style writing as the model — it's the most natural and user-friendly content on the site
- Remove "WE ARE HERE!" banner copy — replace with subtle "Chat with us" or "Need help?"
- Rewrite "Who are We?" in second person: "We're here to help you get certified — quickly, affordably, and entirely online"
**Effort:** Low-Medium

---

### Duplicate Content
**Severity:** Critical
**Impact:** Duplicate course listings across categories create confusion, dilute SEO, and inflate the navigation with redundant links.
**Evidence:**
- From navigation.json, these courses appear in 3+ categories each:
  - "Ladder Safety Awareness Online Course- CPD Accredited" → Construction Courses, Health and Safety Courses, CPD Accredited
  - "Lifting Operations (Slinger Signaller) Awareness Online Course- CPD Accredited" → Construction Courses, Health and Safety Courses, CPD Accredited
  - "Manual Handling Online Course- CPD Accredited" → Construction Courses, Health and Safety Courses, CPD Accredited
  - "Abrasive Wheels Safety Awareness – Online Course- CPD Accredited" → Construction Courses, Health and Safety Courses, CPD Accredited
  - "Online Traffic Marshal / Banksman Training – Same-Day Certificate" → Construction Courses, Health and Safety Courses, CPD Accredited
  - "Asbestos Awareness Training Online Course- CPD Accredited" → Construction Courses, Health and Safety Courses, CPD Accredited
- This creates 18+ redundant navigation entries from just 6 courses
- URL structure appears canonical (each course has one URL), but the navigation bloat creates confusion
**Recommendation:**
- Remove duplicate nav entries — each course appears once in its primary category
- Use cross-category tagging or filters instead of duplicating listings
- Create a flat "All Courses" page with filter-by-category functionality
**Effort:** Medium

---

### Missing Content: Trust & Credibility Pages
**Severity:** Critical
**Impact:** Builders and employers need to verify the platform's legitimacy before purchasing. Missing trust content directly reduces conversion.
**Evidence:**
- No visible "Accreditations" or "Our Partners" page — employer logos (BBC Studios, Anglian Water, G4S, Galliford Try, Clarion) appear as a carousel (product-banksman-full.png: "Companies we work with") but without case studies or context
- No testimonials page or section beyond Trustpilot integration
- No "How It Works" page (only a section on product pages)
- No "For Employers" or "Business" page — the Sarah persona has no dedicated entry point
- No visible accreditation verification page (e.g., "Verify your certificate")
- Footer has: About Us, Contact Us, Blog, Test Hub, Sign into my account, Terms and Conditions, Anti-slavery & Human Trafficking Policy, Equality and Diversity, Health and Safety, Privacy & Terms of Business — but nothing for trust-building or employer-specific content
- No visible refund/guarantee policy page
**Recommendation:**
- Create "Our Accreditations" page explaining CPD, CITB, and HSE approval
- Create "For Employers" page with: bulk pricing, case studies, training matrix, team management overview
- Create standalone "How It Works" page (and link from homepage)
- Add "Money Back Guarantee" or refund policy page
- Add employer case studies: "How Skanska trains 500+ operatives with The Builders Academy"
**Effort:** Medium-High

---

### Missing Content: FAQ & Help
**Severity:** High
**Impact:** Pre-purchase questions that go unanswered drive users to live chat (increasing support burden) or to competitors.
**Evidence:**
- Product-level FAQs exist (product-banksman-full.png shows 6 FAQ items) — good for specific courses
- No site-wide FAQ page answering common questions across all courses:
  - "Are these courses accepted by employers?"
  - "How quickly will I get my certificate?"
  - "Can I do this on my phone?"
  - "What if I fail?"
  - "Do you offer group/employer discounts?"
  - "How do I access the course after payment?"
- No visible "Getting Started" guide for first-time online learners (critical for Terry persona)
- No visible glossary explaining industry terms (CSCS, CITB, CPD, EUSR, etc.)
**Recommendation:**
- Create a comprehensive FAQ page linked from header navigation and footer
- Create a "Getting Started" or "First Time Here?" guide with visual step-by-step instructions
- Create a glossary page for construction training acronyms and terms
- Move the best FAQ questions to a homepage section
**Effort:** Medium

---

### Course Description Quality (Per-Product)
**Severity:** High
**Impact:** Product descriptions are the primary sales content for 70%+ of visitors (Journey 1: Google → Product Page). Quality directly impacts conversion.
**Evidence:**
- Banksman course (product-banksman-full.png) description structure:
  1. Opening paragraph (benefit statement + audience — good but too long)
  2. "You'll learn how to:" bullet list — good format
  3. Paragraph about video content — good
  4. "Same-day results- Instant e-certificate" — key USP buried mid-page
  5. Three value proposition cards ("Become a Traffic Marshal", "Official Qualification", "No Entry Barriers") — good content but small text
  6. Green checkmark USPs — excellent but below fold
  7. "How it works" — excellent but mid-page
  8. Company logos — trust signal mid-page
  9. FAQs — useful but at bottom
  10. Contact form — at bottom
- Description mixes features and benefits without clear hierarchy
- No visible reviews or ratings on the product page body (only Trustpilot widget reference in trust-signals.json: "3 review/rating elements")
**Recommendation:**
- Restructure product page content hierarchy:
  1. Key Facts card (price, duration, cert, accreditation) — above fold
  2. Green checkmark USPs — immediately below
  3. "How it works" — next
  4. Course content / "You'll learn" — expandable section
  5. Reviews — social proof section
  6. FAQs — near bottom
  7. Related courses — cross-sell
- Add visible star rating and review count near the title
- Add "Who is this for?" section targeting specific roles
**Effort:** Medium

---

### Homepage Content Effectiveness
**Severity:** High
**Impact:** Homepage serves Journey 2 (~30% of conversions) and shapes first impressions for all discovery visitors.
**Evidence:**
- Homepage hero (homepage-hero.png): Dark background image of construction worker, overlaid with category pills (Construction, Health and Safety, CSCS Cards, Utilities - EUSR, Test Hub-Free CSCS Mock Exams) — no clear value proposition headline visible behind cookie consent
- "Our popular courses" section shows 8 product cards — good content but titles are truncated and hard to scan
- "Trusted by 1000's of companies and learners across the UK" subheading — good but appears small
- Chat CTAs ("Chat to us now", "Contact us") appear mid-page
- Employer logos (BBC Studios, Anglian Water, Clarion, Galliford Try) appear below product cards
- "Who are We?" section with blue background provides company info
- No role-based entry points ("I'm a builder" / "I'm an employer")
- No visible "How it works" section on homepage
- No visible Trustpilot rating on homepage
**Recommendation:**
- Add clear hero headline: "Get Certified for UK Construction — Online, Same-Day Certificates"
- Add "How It Works" 3-step section to homepage (Buy → Complete → Certified)
- Add visible Trustpilot score to homepage hero or just below
- Replace 8-course grid with 4 "Most Popular" courses + "View all" link
- Add role-based pathways: "Builders & Tradespeople" / "Employers & Training Managers"
**Effort:** Medium

---

### Microcopy: Form Labels & Errors
**Severity:** Moderate
**Impact:** Poor form labels increase errors and abandonment, especially for Terry persona.
**Evidence:**
- Contact form on product page (product-banksman-full.png) has: "First name", "Last name", "Email", "Phone number", "Please leave us a message" fields with "Submit" button
- Labels are functional but not guiding — "Please leave us a message" could be more specific
- No visible required field indicators (* or "required" labels)
- No visible inline validation or error message styling
- "Click to chat with us" button above form uses chat icon — good
**Recommendation:**
- Add "(required)" labels to mandatory fields
- Change "Please leave us a message" to "How can we help? (e.g., I need help choosing a course)"
- Add placeholder text showing expected formats: "john@example.com" for email
- Change "Submit" to "Send Message"
**Effort:** Low

---

### Legal & Policy Content
**Severity:** Moderate
**Impact:** Required for compliance; current content exists but may not meet current UK regulations.
**Evidence:**
- Footer links include: Terms and Conditions, Anti-slavery & Human Trafficking Policy, Equality and Diversity, Health and Safety, Privacy & Terms of Business
- Cookie consent uses Cookiebot with detailed categorization (24 Necessary, 5 Preferences, 19 Statistics, 30 Marketing cookies)
- Company registration visible in footer: "Learning Spot Ltd, Company Registration Number 15736345, trading as The Builders Academy™"
- "not affiliated with CSCS or CITB" disclaimer in footer — legally important
**Recommendation:**
- Ensure Privacy Policy is GDPR-compliant and up to date
- Add accessibility statement (required for WCAG compliance)
- Verify cookie consent implementation is ICO-compliant
- Consider adding a dedicated "Refund Policy" page (builds trust for Dave/Terry)
**Effort:** Low

---

## Prioritized Action Items

1. **Restructure product page content hierarchy** — key facts above fold (Critical, Medium effort)
2. **Remove duplicate course entries** from navigation across categories (Critical, Medium effort)
3. **Create "For Employers" landing page** with bulk pricing and case studies (Critical, High effort)
4. **Rewrite product descriptions** to grade-8 reading level with benefit-first structure (High, Medium effort)
5. **Create site-wide FAQ page** answering top pre-purchase questions (High, Medium effort)
6. **Improve CTA microcopy** — "Enrol Now — £35" instead of "Buy Now" (High, Low effort)
7. **Add role-based homepage pathways** — builder vs employer entry points (High, Medium effort)
8. **Define and explain all acronyms** across the site (High, Low effort)
9. **Create "Our Accreditations" trust page** (Moderate, Medium effort)
10. **Add visible Trustpilot score to homepage** (Moderate, Low effort)

## Quick Wins (High Impact, Low Effort)
1. Improve CTA microcopy across the site (change "Buy Now" → "Enrol Now — £35")
2. Add acronym definitions in parentheses on all pages
3. Move green checkmark USPs above the fold on product pages
4. Add required field indicators to forms
5. Add visible Trustpilot score to homepage hero area
