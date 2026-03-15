# Phase 4 — Iteration 3: Custom Primitives

## Custom Components Built (12)

### Trust & Rating Components

#### TrustBadge (`primitives/trust-badge.tsx`)
- **Types:** cpd, citb, iosh, trustpilot, secure, popular
- **Sizes:** sm, md, lg
- **Colors:** Each type has unique border/bg/text colors (green for CPD, navy for CITB, etc.)
- **Icons:** Lucide icons (CheckCircle, Shield, Star)
- **Usage:** Product cards, above-fold trust signals, checkout security

#### StarRating (`primitives/star-rating.tsx`)
- **Variants:** compact (⭐ 4.9 (1,240)), full (5 stars + score), minimal (⭐ 4.9)
- **Props:** value, showCount, count, variant
- **Accessibility:** `role="img"` with `aria-label` for full variant

### Search & Navigation

#### SearchBar (`primitives/search-bar.tsx`)
- **Variants:** hero (56px, prominent), header (40px, compact), category (48px)
- **Features:** Search icon, responsive sizing, keyboard submit
- **Accessibility:** `aria-label="Search courses"`

#### Navbar (`primitives/navbar.tsx`)
- **Features:** Sticky header, top info bar, responsive mobile menu (Sheet)
- **Navigation:** 5 categories (reduced from 109+ links per audit)
- **Mobile:** Hamburger → Sheet overlay with 56px tap targets
- **Highlights:** "For Employers" in green for B2B visibility

#### Footer (`primitives/footer.tsx`)
- **Layout:** 4-column grid (Courses, Support, Company, Contact)
- **Features:** Phone/email/chat links, accreditation badges, legal links
- **Mobile:** 2-column responsive grid

### Product Display

#### ProductCard (`primitives/product-card.tsx`)
- **Variants:** default, compact (no image), featured (highlighted border)
- **Content:** Title, price (mono font), rating, duration, format, badges, CTA
- **Interactions:** Hover: shadow-level-2 + translate-y
- **Responsive:** Compact variant for cross-sell and mobile views

#### CategoryCard (`primitives/category-card.tsx`)
- **Icons:** BookOpen (CSCS), Shield (Safety), Building2 (Employer)
- **Features:** Icon circle, title, subtitle, price/CTA
- **Interactions:** Hover: shadow + translate + border color change

#### KeyFact (`primitives/key-fact.tsx`)
- **Layout:** Icon + label + value, centered in muted card
- **Usage:** Product page "Key Facts" grid (Duration, Certificate, etc.)

### Checkout & Flow

#### ProgressSteps (`primitives/progress-steps.tsx`)
- **States:** Pending (gray), Active (primary), Completed (green check)
- **Connector:** 2px lines between steps
- **Accessibility:** `aria-current="step"` for active step, `role="navigation"`

#### StickyCTABar (`primitives/sticky-cta-bar.tsx`)
- **Behavior:** Fixed bottom, appears on scroll (400px threshold)
- **Mobile-only:** Hidden on md+ screens
- **Content:** Price + "Buy Now" + security micro-text
- **Z-index:** z-40 (above content, below modals)

### Filtering

#### FilterChip (`primitives/filter-chip.tsx`)
- **States:** Inactive (border), Active (primary border + bg)
- **Features:** Toggle + optional remove (X) button
- **Accessibility:** `aria-pressed` for toggle state

#### HowItWorks (`primitives/how-it-works.tsx`)
- **Variants:** horizontal (desktop), vertical (mobile)
- **Steps:** Numbered circles + title + description
- **Connectors:** Arrow icons between steps (horizontal)
