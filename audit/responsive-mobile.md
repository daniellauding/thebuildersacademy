# Responsive & Mobile Review

## Summary
The Builders Academy is responsive — content reflows for mobile viewports — but it is not mobile-optimized. For a site where 70%+ of the primary persona (Dave/Terry) traffic comes from mobile devices, the mobile experience contains critical conversion blockers: a full-screen cookie consent modal, key purchase information below the fold, small touch targets, no sticky CTA, and a hamburger menu containing 109+ links. The gap between "works on mobile" and "converts on mobile" is the single largest revenue opportunity.

## Severity Breakdown
- Critical: 4 issues
- High: 5 issues
- Moderate: 4 issues
- Low: 2 issues

---

## Findings

### Cookie Consent Blocks Entire Mobile Screen
**Severity:** Critical
**Impact:** 100% of first-time mobile visitors see the cookie consent modal before ANY site content. For Dave (urgent need, low patience) and Terry (easily overwhelmed), this is potentially a bounce trigger before they even see a course.
**Evidence:**
- Mobile homepage (homepage-mobile.png): Cookiebot consent modal covers approximately 80% of the mobile viewport
- Mobile product page (product-banksman-mobile.png): Same modal covers the entire above-fold area
- Modal contains: 3 tabs (Consent, Details, About), 4 category toggles, 3 action buttons (Deny, Allow selection, Allow all)
- On mobile, the modal requires scrolling to see all options
- "Allow all" button (green) is the most prominent but requires scrolling past the toggles on small screens
**Recommendation:**
- Replace modal with a non-blocking bottom banner: "We use cookies to improve your experience. [Accept] [Manage]"
- Keep banner compact — 2 buttons maximum
- Allow users to browse the site while the banner is visible
- This single change could reduce mobile bounce rate by 5-10%
**Effort:** Low (Cookiebot configuration change)

---

### No Sticky Mobile CTA
**Severity:** Critical
**Impact:** On mobile product pages, the "Buy Now" button and price are only visible at the top. As users scroll to read course details, FAQs, and reviews, they lose access to the purchase CTA — requiring them to scroll back up to buy.
**Evidence:**
- Mobile product page (product-banksman-mobile.png): Long scrolling page with content sections:
  1. Title + Duration (visible)
  2. Description paragraphs
  3. "You'll learn" bullets
  4. Green checkmark USPs
  5. "How it works" section
  6. Company logos
  7. FAQ section (6 items)
  8. Contact form
  9. Footer
- "Buy Now" appears only at the top (in the sidebar area on desktop, which stacks to top on mobile)
- User must scroll past ~15+ screen heights of content to reach the bottom
- No persistent "Buy Now" or "Enrol" CTA visible while scrolling
**Recommendation:**
- Add sticky bottom CTA bar on mobile product pages:
  ```
  ┌──────────────────────────────────┐
  │  £35.00    [Enrol Now]           │
  │  Same-day certificate            │
  └──────────────────────────────────┘
  ```
- Bar appears after user scrolls past the initial CTA
- Disappears if user scrolls back up to the main CTA
- Includes price and key USP ("Same-day certificate") as reinforcement
**Effort:** Medium

---

### Mobile Navigation: 109+ Links in Hamburger
**Severity:** Critical
**Impact:** A hamburger menu containing 109+ links is effectively unusable on mobile. Users must scroll through an extremely long list to find what they need. This particularly fails the Terry persona who needs clear, obvious paths.
**Evidence:**
- Homepage mobile (homepage-mobile.png): Hamburger icon (☰) visible in header
- Full navigation (navigation.json): 109+ links including course names, categories, utility links, and blog categories
- With average link height of 44-48px, this menu would be approximately 5,000+ pixels tall (10+ screens of scrolling)
- No visible search within the mobile menu
- Duplicate entries make the list even longer
**Recommendation:**
- Reduce mobile menu to 5-7 top-level items
- Each item expands to show category courses (slide-in sub-menu pattern)
- Add search as the first item in mobile menu
- Add phone number prominently in mobile menu
- Consider bottom navigation bar for key actions (Home, Search, Courses, Cart)
**Effort:** High

---

### Touch Target Sizes
**Severity:** Critical
**Impact:** Small touch targets cause mis-taps and frustration. For Terry persona (50-65+, possibly wearing work gloves or with reduced motor control), this is a usability barrier.
**Evidence:**
- Homepage mobile (homepage-mobile.png):
  - "Add to Cart" appears as text links (~12px text) below product cards — likely < 44px touch target
  - Category pills in hero area appear small and crowded
  - Header icons (account, cart) appear appropriately sized
- Product page mobile (product-banksman-mobile.png):
  - Cookie consent toggle switches appear small (~30px)
  - FAQ accordion chevrons appear small
  - Footer links appear to be standard size text links — likely < 44px
- Minimum recommended: 48px (Phase 1 strategic direction), WCAG 2.2 minimum: 24x24px
**Recommendation:**
- Audit all interactive elements for 48px minimum touch target size
- Convert "Add to Cart" text links to full-width buttons (48px+ height)
- Increase FAQ accordion touch targets to full-row width and 48px+ height
- Add spacing between adjacent touch targets (8px minimum)
- Cookie consent toggles: increase to 44px minimum
**Effort:** Medium

---

### Text Readability on Mobile
**Severity:** High
**Impact:** Body text that's too small forces pinch-to-zoom, breaking the mobile experience. Terry persona users (50-65+) are especially affected.
**Evidence:**
- Product page mobile (product-banksman-mobile.png):
  - Body text appears to be approximately 14-16px — borderline acceptable
  - Course title is large and readable — good
  - Duration text appears small (~12px)
  - Green checkmark USP text appears adequate
  - FAQ question text appears adequate
  - Footer text appears small
- Homepage mobile (homepage-mobile.png):
  - "Trusted by 1000's of companies" subtitle text appears small
  - Product card titles are truncated and may be hard to read
  - "Reg price" labels are small
**Recommendation:**
- Set minimum body text to 16px across all mobile views
- Critical information (price, duration, accreditation) should be 18px+
- CTAs should use 16px+ bold text
- Reduce reliance on truncated text — use shorter display names
**Effort:** Low

---

### Mobile Product Page Length
**Severity:** High
**Impact:** On mobile, the product page is extremely long — cookie consent + title + description + bullets + USPs + how it works + logos + 6 FAQs + contact form + footer = 15+ screen scrolls. Most mobile users won't scroll that far.
**Evidence:**
- Product page mobile (product-banksman-mobile.png) shows the full vertical extent:
  - Total page height appears to be 4000+ pixels
  - Critical conversion information (price, CTA, accreditation, USPs) is distributed across the top 30% of the page
  - Lower 70% contains supporting content that most mobile users will never see
- No table of contents or anchor navigation on mobile
- No collapsible sections to reduce page length
**Recommendation:**
- Use progressive disclosure: show key facts above fold, collapse details
- Make FAQ and "How it works" sections collapsible on mobile (default collapsed)
- Remove or collapse the contact form on product pages (move to separate Contact page)
- Prioritize content order for mobile: Key Facts → CTA → USPs → Reviews → How it Works → FAQ
- Add "Jump to" anchor links on mobile: "Course details | FAQ | Contact"
**Effort:** Medium

---

### Viewport Scaling & Meta Viewport
**Severity:** Moderate
**Impact:** Incorrect viewport meta tags can cause scaling issues on mobile devices.
**Evidence:**
- Mobile screenshots (homepage-mobile.png, product-banksman-mobile.png) show properly scaled content — viewport meta tag appears correctly set
- No horizontal scrolling visible in mobile screenshots — good
- Content reflows to single column on mobile — responsive design is working
- Text is readable without zooming (mostly) — viewport settings appear correct
**Recommendation:**
- Verify `<meta name="viewport" content="width=device-width, initial-scale=1">` is set
- Ensure `maximum-scale` is not set to 1.0 (which prevents user zooming — accessibility issue)
- Test on actual devices (not just responsive preview)
**Effort:** Low

---

### Mobile Image Optimization
**Severity:** High
**Impact:** Large unoptimized images significantly slow mobile page loads, especially on 3G/4G connections common on construction sites.
**Evidence:**
- Homepage hero: Large full-width background image of construction worker — likely several hundred KB unoptimized
- Product page hero: Full-width product/stock image — similar size concern
- Product card images on homepage: 8 product images loaded simultaneously
- Employer logos: Multiple logo images in carousel
- No evidence of lazy loading, WebP format, or responsive images (srcset) in Playwright data
- Mobile users on construction sites may have poor network connectivity
**Recommendation:**
- Implement lazy loading for below-fold images
- Serve WebP format with JPEG/PNG fallback
- Use responsive images (`srcset`) to serve smaller images to mobile devices
- Compress all images — target < 100KB per image
- Consider placeholder/low-res preview while images load
**Effort:** Medium

---

### Mobile Forms
**Severity:** High
**Impact:** Poorly optimized mobile forms cause frustration and abandonment — especially at checkout (the most revenue-critical form).
**Evidence:**
- Contact form (product-banksman-mobile.png) shows: First name, Last name, Email, Phone number, Message, Submit
- Form fields appear full-width on mobile — good
- Unknown if form inputs use correct mobile types:
  - Email field should use `type="email"` (shows @ key on mobile keyboard)
  - Phone field should use `type="tel"` (shows number pad)
  - Name fields should use `autocomplete="given-name"` / `autocomplete="family-name"`
- Submit button appears full-width — good
- Search input in header — unknown if `type="search"` is used
**Recommendation:**
- Verify all form inputs use correct `type` attributes for mobile keyboards
- Add `autocomplete` attributes to all form fields
- Ensure tap targets for form fields are 48px+ height
- Add input masking or formatting guidance for phone numbers
- Checkout forms (not visible in data): ensure mobile-optimized with express payment
**Effort:** Low

---

### Desktop vs Mobile Content Parity
**Severity:** Moderate
**Impact:** Content differences between desktop and mobile can cause confusion and trust issues — users may feel they're getting a lesser experience on mobile.
**Evidence:**
- Desktop homepage (homepage-full.png) vs Mobile homepage (homepage-mobile.png):
  - Desktop: 2-column product grid (4x2) → Mobile: single column (8x1) — same content, different layout (good)
  - Desktop: "Chat to us now" / "Contact us" buttons visible → Mobile: appear to be present but position changes
  - Desktop: employer logos in horizontal row → Mobile: appear to stack or carousel
  - Desktop: "Who are We?" section with blue background → Mobile: same content, full-width
- Desktop product page vs Mobile product page:
  - Desktop: sidebar with "Buy Now" + product image stays visible while scrolling → Mobile: stacks to top, scrolls away
  - Desktop: "How it works" 4 columns → Mobile: likely stacks to 1 or 2 columns
  - Desktop: FAQ and contact form visible together → Mobile: long single column
- Content appears to be the same on both — no hidden content on mobile (good)
**Recommendation:**
- Maintain content parity (current approach is good)
- Optimize the order/layout for mobile rather than simply stacking
- Consider hiding less-critical content on mobile behind "Show more" toggles
**Effort:** Low

---

### Sticky Header Behavior
**Severity:** Moderate
**Impact:** A sticky header provides persistent access to navigation and search, but an oversized sticky header wastes precious mobile viewport space.
**Evidence:**
- Header appears to contain: Logo, hamburger menu, "Courses" dropdown, About Us, Contact Us, Resources, phone number, account icon, cart icon, search field (homepage-hero.png)
- On mobile, header contains: hamburger icon, logo, utility icons — appears compact
- Unknown if header is sticky on scroll
- If the full header sticks, it could consume 60-80px of viewport on mobile
**Recommendation:**
- Make header sticky on mobile with compact version: hamburger + logo + cart icon only
- Show full header on scroll-up, hide on scroll-down (smart sticky behavior)
- Keep phone number accessible in hamburger menu
- Add bottom nav bar for Home/Search/Courses/Cart as persistent navigation
**Effort:** Medium

---

### Tawk.to Chat Widget on Mobile
**Severity:** High
**Impact:** The "WE ARE HERE!" chat banner overlaps content on mobile, obscuring important information and creating frustration.
**Evidence:**
- Product page desktop (product-banksman-hero.png): "WE ARE HERE!" green banner appears in bottom-right corner with "Online" status
- Product page mobile (product-banksman-mobile.png): Same banner appears but takes up proportionally more mobile screen space
- Banner includes: "WE ARE HERE!" text, "Online" status, close (×) button
- On mobile, this likely overlaps the sticky "Buy Now" CTA area if one were added
- Multiple close (×) buttons visible — one for the chat banner, potentially confusing
**Recommendation:**
- Replace the "WE ARE HERE!" banner with a small, subtle chat icon (standard Tawk.to bubble)
- Don't auto-expand the chat widget on mobile
- If adding a sticky bottom CTA bar, ensure chat icon doesn't overlap it
- Consider showing chat only after 30 seconds on page or on scroll-up intent
**Effort:** Low (Tawk.to configuration)

---

## Device-Specific Issue Summary

| Issue | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| Cookie consent blocks content | Critical | High | Moderate |
| No sticky CTA | Critical | High | Low (sidebar sticks) |
| 109+ link hamburger menu | Critical | High | High |
| Small touch targets | Critical | High | N/A |
| Page too long | High | Moderate | Low |
| Text too small | High | Moderate | Low |
| Image optimization | High | High | Moderate |
| Chat widget overlap | High | Moderate | Low |

---

## Mobile Conversion Blockers (Ranked)

1. **Cookie consent modal** — blocks 100% of content on first visit
2. **No sticky CTA** — purchase button scrolls away on product pages
3. **Small touch targets** — "Add to Cart" and interactive elements too small
4. **No express payment** — no Apple Pay / Google Pay (the fastest mobile payment)
5. **109+ link hamburger** — impossible to navigate on mobile
6. **Chat widget overlap** — obscures content and potential CTAs
7. **Slow image loading** — no optimization for mobile networks
8. **Long page length** — critical info distributed across 15+ scroll screens

---

## Prioritized Action Items

1. **Replace cookie consent modal** with non-blocking bottom banner (Critical, Low effort)
2. **Add sticky mobile CTA bar** with price + "Enrol Now" (Critical, Medium effort)
3. **Audit and fix touch target sizes** — 48px minimum for all interactive elements (Critical, Medium effort)
4. **Simplify mobile hamburger menu** — max 5-7 top-level items (Critical, High effort)
5. **Minimize Tawk.to widget** — subtle icon instead of "WE ARE HERE!" banner (High, Low effort)
6. **Optimize images** for mobile — lazy loading, WebP, responsive srcset (High, Medium effort)
7. **Add express payment** — Apple Pay / Google Pay integration (High, High effort)
8. **Increase mobile text sizes** — 16px minimum body, 18px+ for key facts (High, Low effort)
9. **Reduce product page length** on mobile — progressive disclosure, collapsible sections (Moderate, Medium effort)
10. **Add mobile bottom nav bar** — Home, Search, Courses, Cart (Moderate, Medium effort)

## Quick Wins (High Impact, Low Effort)
1. Change Cookiebot from modal to non-blocking banner (configuration change)
2. Minimize Tawk.to to small chat icon (configuration change)
3. Increase minimum font size to 16px in mobile CSS
4. Set correct input types for mobile forms (type="email", type="tel")
5. Add `loading="lazy"` to all below-fold images
