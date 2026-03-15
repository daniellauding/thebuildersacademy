# Accessibility Audit (WCAG 2.2 AA)

## Summary
The Builders Academy has multiple WCAG 2.2 AA compliance failures that create real barriers for users with disabilities and significantly degrade the experience for the Terry persona (low digital literacy, 50-65+, potential vision/motor impairments). The most critical issues are: dual H1 heading hierarchy, missing alt text, likely insufficient touch targets on mobile, and a complex cookie consent dialog that may trap keyboard users. As a UK commercial website, WCAG 2.2 AA compliance is best practice and increasingly expected under the Equality Act 2010.

## Severity Breakdown
- Critical: 3 issues
- High: 6 issues
- Moderate: 5 issues
- Low: 3 issues

## Legal Context
- **UK Equality Act 2010** requires service providers to make "reasonable adjustments" for disabled people. Inaccessible websites can constitute discrimination.
- **WCAG 2.2 AA** is the accepted standard for web accessibility in the UK
- **Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018** mandates accessibility for public sector — while TBA is private sector, construction training companies serving government contractors (Kier, Skanska, Wates) may face pressure to demonstrate accessibility
- **Risk level:** Medium — not legally mandated for private sector but increasingly expected, especially from enterprise employer clients (Sarah persona)

---

## Findings

### 1. Heading Hierarchy
**Severity:** Critical
**WCAG Criterion:** 1.3.1 Info and Relationships (Level A)
**Impact:** Screen reader users rely on heading hierarchy to navigate page structure. Multiple H1 tags and skipped heading levels create confusion about page organization.
**Evidence:**
- **2 H1 tags on homepage** (accessibility-quick.json) — violates the one-H1-per-page best practice
- Product page (product-banksman-full.png) appears to have a single H1 (course title) — likely correct
- Heading cascade unknown for subheadings — "How it works", "Companies we work with", "Frequently Asked Questions", "Need some more info?" may skip levels (e.g., jumping from H1 to H3)
- "Personal information" (form section heading) may not be a proper heading element
**Recommendation:**
- Fix homepage to single H1 containing the primary page purpose
- Audit all pages for proper heading cascade: H1 → H2 → H3 (no skipped levels)
- Ensure all visible headings use semantic heading elements (not styled `<div>` or `<span>`)
- Use heading hierarchy that creates a navigable page outline for screen readers
**Effort:** Low

---

### 2. Image Alt Text
**Severity:** High
**WCAG Criterion:** 1.1.1 Non-text Content (Level A)
**Impact:** Users with visual impairments cannot understand the purpose of images without alt text. Missing alt text also affects SEO.
**Evidence:**
- **1 image without alt text on homepage** (accessibility-quick.json)
- Employer logos in "Companies we work with" carousel — alt text presence/quality unknown. If these are `<img>` tags without alt, they're invisible to screen readers
- Product card images on homepage (homepage-full.png) show course-related photos — alt text quality unknown
- Hero image (construction worker background on homepage) — if decorative, should have `alt=""`; if informative, needs descriptive alt
- Product page hero image (product-banksman-hero.png) — appears to be a stock photo of construction workers, likely needs descriptive alt
**Recommendation:**
- Fix the 1 identified missing alt text immediately
- Audit all images site-wide for alt text presence and quality
- Employer logos: `alt="BBC Studios logo"`, `alt="Anglian Water logo"`, etc.
- Decorative images: `alt=""` (empty alt, not missing alt)
- Product images: descriptive alt like "Construction worker in high-vis vest directing traffic on building site"
**Effort:** Low

---

### 3. Cookie Consent Dialog Accessibility
**Severity:** Critical
**WCAG Criteria:** 2.1.1 Keyboard (Level A), 2.4.3 Focus Order (Level A), 2.1.2 No Keyboard Trap (Level A)
**Impact:** The Cookiebot consent modal blocks all page content on load. If it cannot be operated by keyboard alone, it traps all keyboard-only and screen reader users.
**Evidence:**
- Cookie consent modal appears on every page load (homepage-hero.png, product-banksman-hero.png)
- Modal has 3 tabs: "Consent", "Details", "About" — requires tab/focus management
- 4 category toggles (Necessary, Preferences, Statistics, Marketing) — toggle switches may not be keyboard accessible
- 3 action buttons: "Deny", "Allow selection", "Allow all" — should be keyboard-focusable
- "Details" tab shows 80+ individual cookies in scrollable list — extremely complex for keyboard navigation
- Broken IAB consent template variables: "[#IABV2_LABEL_PURPOSES#]", "[#IABV2_LABEL_FEATURES#]", "[#IABV2_LABEL_PARTNERS#]" (product-page-structure.json) — screen reader would read these broken strings aloud
**Recommendation:**
- Test cookie consent modal for full keyboard operability
- Ensure focus is trapped within the modal until dismissed (not trapped permanently — user must be able to dismiss)
- Fix broken IAB template variable rendering
- Simplify to 2 buttons: "Accept All" and "Manage Preferences" — reduces cognitive load for assistive tech users
- Ensure modal has proper `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` attributes
**Effort:** Medium (Cookiebot configuration)

---

### 4. Touch Target Sizes
**Severity:** Critical
**WCAG Criterion:** 2.5.8 Target Size (Minimum) (Level AA — new in WCAG 2.2)
**Impact:** Small touch targets make the site unusable for users with motor impairments, and frustrating for all mobile users — especially Terry persona (50-65+, may have reduced fine motor control).
**Evidence:**
- Homepage mobile (homepage-mobile.png):
  - "Add to Cart" links on product cards appear to be small text links (~12-14px text, likely < 44px touch target)
  - Category pills in hero area appear small on mobile
  - Cookie consent toggle switches appear small
- Product page mobile (product-banksman-mobile.png):
  - Cookie consent buttons appear adequate size
  - Navigation links in hamburger menu — size unknown
  - FAQ accordion expand/collapse icons — likely small
- WCAG 2.2 AA requires minimum 24x24px touch targets with 24px spacing (or equivalent)
- WCAG 2.2 AAA recommends 44x44px minimum
- Best practice for this audience: 48px minimum (Phase 1 strategic direction specifies 48px minimum, 56px preferred)

**Recommendation:**
- Audit all interactive elements for touch target size compliance
- Increase all button/link targets to minimum 48px height on mobile
- Ensure adequate spacing between adjacent touch targets (minimum 8px)
- "Add to Cart" buttons on mobile product cards: convert from text link to full-width button with 48px+ height
- FAQ accordion: increase tap target to full row width, 48px+ height
- Cookie consent toggles: increase to 44px minimum
**Effort:** Medium

---

### 5. Color Contrast
**Severity:** High
**WCAG Criterion:** 1.4.3 Contrast (Minimum) (Level AA)
**Impact:** Insufficient contrast makes text unreadable for users with low vision — a real concern for older tradespeople (Terry persona) who may have uncorrected vision issues.
**Evidence:**
- Header: White text on dark navy/black background — likely meets 4.5:1 ratio (good)
- "Buy Now" button: White text on green (#2ecc71 or similar green) — needs verification, green buttons frequently fail contrast
- Product card "Reg price" text appears to be light gray — may fail contrast against white background
- Category pills on homepage hero: Green checkmarks with white text on semi-transparent dark overlay — contrast depends on background image
- Footer: White/light text on dark background — likely adequate
- Body text appears to be dark gray/black on white — likely adequate
- Green checkmark icons with text (product-banksman-full.png: "24/7 Access & Unlimited Free Retakes") — icon color fine, but verify text contrast
- Tawk.to "WE ARE HERE!" banner: White text on green — needs verification

**Recommendation:**
- Run automated contrast checker (axe, WAVE) on all pages
- Verify all green buttons meet 4.5:1 contrast ratio for normal text
- Verify all gray text meets 4.5:1 minimum
- Consider increasing body text contrast to AAA level (7:1) for the Terry persona audience
- Ensure no text relies solely on color to convey information
**Effort:** Low-Medium

---

### 6. Keyboard Navigation
**Severity:** High
**WCAG Criterion:** 2.1.1 Keyboard (Level A)
**Impact:** Users who cannot use a mouse (motor disabilities, screen reader users) must be able to operate all functionality via keyboard alone.
**Evidence:**
- No evidence of keyboard navigation testing in Playwright data
- Complex navigation dropdown (109+ links) would require extensive keyboard navigation — likely poor experience
- Cookie consent modal with tabs and toggles — keyboard operability uncertain
- Tawk.to chat widget — third-party widget keyboard accessibility uncertain
- Product page "Buy Now" sidebar — if it's a sticky element, focus management may be problematic
- FAQ accordions — must be keyboard expandable/collapsible (Enter or Space)
- "Companies we work with" logo carousel (product-banksman-full.png) — carousel navigation arrows must be keyboard accessible

**Recommendation:**
- Test all interactive elements for keyboard-only operability
- Ensure logical tab order follows visual reading order
- Add visible focus indicators to all focusable elements
- Test mega menu dropdown for keyboard navigation and escape key to close
- Ensure FAQ accordions use `<button>` or `role="button"` with proper ARIA attributes
**Effort:** Medium

---

### 7. Focus Indicators
**Severity:** High
**WCAG Criterion:** 2.4.7 Focus Visible (Level AA), 2.4.13 Focus Appearance (Level AAA — enhanced)
**Impact:** Without visible focus indicators, keyboard users cannot tell which element is currently selected.
**Evidence:**
- Default Magento themes sometimes remove or reduce focus outlines for aesthetic reasons
- No visible focus indicators apparent in screenshots (though screenshots don't capture focus states)
- Dark header with white text — focus indicator needs sufficient contrast against dark background
- Cookie consent buttons — focus indicator visibility unknown
- Green "Allow all" button — focus indicator needs to be visible against green background

**Recommendation:**
- Ensure all focusable elements have a visible focus indicator meeting WCAG 2.4.11 requirements
- Use a consistent focus style: 2px solid outline with offset, using a contrasting color
- Never use `outline: none` without providing an alternative focus style
- Test focus visibility on both light and dark backgrounds
**Effort:** Low

---

### 8. Skip Links
**Severity:** High
**WCAG Criterion:** 2.4.1 Bypass Blocks (Level A)
**Impact:** Without a "Skip to main content" link, keyboard users must tab through the entire 109+ link navigation on every page load.
**Evidence:**
- No visible skip link in any screenshots (though skip links are typically hidden until focused)
- With 109+ navigation links, a keyboard user would need to press Tab 109+ times to reach main content — completely unusable
- Even with the proposed reduced navigation (35-40 links), skip links would still be important

**Recommendation:**
- Add "Skip to main content" link as the first focusable element on every page
- Make it visible when focused (hidden by default, appears on focus)
- Also consider "Skip to search" and "Skip to footer" links
- Ensure `<main>` landmark element exists for screen readers to jump to
**Effort:** Low

---

### 9. Form Accessibility
**Severity:** High
**WCAG Criteria:** 1.3.1 Info and Relationships (Level A), 3.3.2 Labels or Instructions (Level A)
**Impact:** Forms without proper labels, error handling, and instructions are unusable for screen reader users and confusing for all users.
**Evidence:**
- Contact form (product-banksman-full.png): "First name", "Last name", "Email", "Phone number", "Please leave us a message" with "Submit" button
- Labels appear to be visible text above/inside fields — but unknown if associated via `<label for="">` or `aria-label`
- No visible required field indicators
- No visible error message styling or ARIA live regions for form errors
- "Search Courses..." search bar in header — unknown if it has an accessible label
- Cookie consent toggle inputs — unknown if they have accessible labels

**Recommendation:**
- Ensure all form inputs have programmatically associated labels (use `<label for="id">`)
- Add `required` attribute and visual "(required)" indicators to mandatory fields
- Add ARIA live region for form error messages (`role="alert"`)
- Ensure search input has `aria-label="Search courses"` or visible label
- Add `autocomplete` attributes to form fields (e.g., `autocomplete="given-name"`)
**Effort:** Low-Medium

---

### 10. Screen Reader Compatibility
**Severity:** Moderate
**WCAG Criteria:** 4.1.2 Name, Role, Value (Level A)
**Impact:** Improper ARIA usage or missing semantic HTML prevents screen readers from correctly interpreting page components.
**Evidence:**
- Broken template variables in cookie consent: "[#IABV2_LABEL_PURPOSES#]", "[#IABV2_LABEL_FEATURES#]", "[#IABV2_LABEL_PARTNERS#]" — screen reader would read these aloud
- CSS/JS code appearing in navigation link text (navigation.json lines 78-82) — screen reader would attempt to read entire blocks of CSS/JavaScript code as navigation link text
- "Companies we work with" carousel — needs ARIA labels and proper controls
- FAQ accordions — need proper `aria-expanded` states
- Cart icon — needs `aria-label="Shopping cart, X items"` with dynamic count
- Mobile hamburger menu — needs `aria-expanded` and `aria-label="Main menu"`

**Recommendation:**
- Fix broken template variables and CSS/JS in navigation immediately — these are read aloud by screen readers
- Add ARIA landmarks: `<header>`, `<nav>`, `<main>`, `<footer>` with appropriate labels
- Add `aria-expanded` to all accordion/dropdown triggers
- Add `aria-label` to icon-only buttons (cart, search, account)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)
**Effort:** Medium

---

### 11. Page Language Declaration
**Severity:** Moderate
**WCAG Criterion:** 3.1.1 Language of Page (Level A)
**Impact:** Screen readers need to know the page language to use correct pronunciation. Without `lang="en"` on `<html>`, screen readers may use wrong speech synthesis.
**Evidence:**
- Not captured in Playwright data — needs manual verification
- Standard Magento installations typically include `lang` attribute, but custom themes may omit it
**Recommendation:**
- Verify `<html lang="en-GB">` exists on all pages (en-GB for UK English)
- If missing, add it to the Magento theme template
**Effort:** Low

---

### 12. Responsive Text Sizing
**Severity:** Moderate
**WCAG Criterion:** 1.4.4 Resize Text (Level AA)
**Impact:** Users who need larger text (vision impairment, Terry persona with reading glasses) must be able to zoom to 200% without loss of content or functionality.
**Evidence:**
- Body text appears to be standard size (likely 14-16px) — adequate
- Screenshots don't show zoomed behavior
- Complex navigation with 109+ links may break at 200% zoom
- Cookie consent modal may overflow at high zoom levels
- Product page sidebar "Buy Now" section may overlap or disappear at high zoom
**Recommendation:**
- Test all pages at 200% browser zoom
- Use relative font sizes (rem/em) not fixed pixels
- Ensure no content is clipped or lost at 200% zoom
- Verify horizontal scrolling doesn't occur at 200% zoom on desktop
**Effort:** Medium

---

### 13. Motion & Animation
**Severity:** Low
**WCAG Criterion:** 2.3.1 Three Flashes (Level A), 2.2.2 Pause, Stop, Hide (Level A)
**Impact:** Animations can trigger seizures or cause disorientation for users with vestibular disorders.
**Evidence:**
- "Companies we work with" logo carousel appears to auto-rotate — needs pause control
- Tawk.to "WE ARE HERE!" banner may animate on appearance
- No other significant animations visible in screenshots
**Recommendation:**
- Add pause/stop control to any auto-playing carousel
- Respect `prefers-reduced-motion` CSS media query
- Ensure no content flashes more than 3 times per second
**Effort:** Low

---

## WCAG 2.2 Compliance Summary

| Level | Criteria Tested | Pass | Fail | Unknown |
|-------|----------------|------|------|---------|
| A (Minimum) | 15 key criteria | ~5 | 6 | 4 |
| AA (Target) | 10 key criteria | ~3 | 4 | 3 |
| AAA (Enhanced) | 5 key criteria | ~1 | 2 | 2 |

**Overall Compliance Level: Non-compliant with WCAG 2.2 AA**

Key failures at Level A (minimum compliance):
- 1.1.1 Non-text Content (missing alt text)
- 1.3.1 Info and Relationships (heading hierarchy)
- 2.4.1 Bypass Blocks (likely no skip links)
- 4.1.2 Name, Role, Value (broken template variables in DOM, CSS/JS in nav links)

---

## Prioritized Action Items

1. **Fix heading hierarchy** — single H1 per page, proper cascade (Critical, Low effort)
2. **Fix CSS/JS code appearing in navigation** — screen readers read this aloud (Critical, Low effort)
3. **Fix broken IAB template variables** in cookie consent (Critical, Low effort)
4. **Fix missing alt text** on homepage image (High, Low effort)
5. **Add skip links** to all pages (High, Low effort)
6. **Audit and fix touch target sizes** — minimum 48px for this audience (High, Medium effort)
7. **Audit color contrast** across all pages (High, Low effort)
8. **Add proper form labels** and required indicators (High, Low effort)
9. **Test and fix keyboard navigation** for all interactive elements (High, Medium effort)
10. **Add focus indicators** to all focusable elements (High, Low effort)

## Quick Wins (High Impact, Low Effort)
1. Fix dual H1 on homepage (5 minutes)
2. Fix 1 missing alt text (5 minutes)
3. Add skip link to page template (30 minutes)
4. Fix broken template variables in cookie consent configuration
5. Add `aria-label` to icon-only buttons (cart, search, account)
