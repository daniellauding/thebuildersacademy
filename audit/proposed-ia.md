# Proposed Information Architecture

## Summary
A simplified, user-centric information architecture that reduces 109+ navigation links to a clean 5-7 category structure with role-based entry points, smart search, and clear pathways for all four personas.

---

## Proposed Site Map

```
The Builders Academy
│
├── HOME
│   ├── Hero: "Get Certified for UK Construction — Online, Same-Day Certificates"
│   ├── [Search Bar — prominent, with autocomplete]
│   ├── Pathways:
│   │   ├── "I need a CSCS card" → CSCS Cards & Entry-Level
│   │   ├── "I need safety training" → Health & Safety
│   │   ├── "I'm an employer" → For Employers
│   │   └── "Help me choose" → Course Finder Quiz
│   ├── Popular Courses (4 cards)
│   ├── How It Works (3 steps: Enrol → Learn → Get Certified)
│   ├── Trust Bar (Trustpilot score + accreditation badges + employer logos)
│   └── "Who are We?" summary
│
├── COURSES [Top-level nav]
│   │
│   ├── All Courses (flat view with filters)
│   │   ├── Filter: Category (CSCS, H&S, First Aid, Utilities, Construction Skills)
│   │   ├── Filter: Price range
│   │   ├── Filter: Duration
│   │   ├── Filter: Accreditation (CPD, CITB, EUSR)
│   │   └── Sort: Popular, Price, Duration, Newest
│   │
│   ├── CSCS Cards & Entry-Level (/cscs-cards)
│   │   ├── CSCS Green Card Labourer Course
│   │   ├── CSCS Green Card – Full Package (Course + Exam + Card)
│   │   ├── CITB Touch Screen Test – Green Card
│   │   ├── CITB Test – Blue Card (Skilled Worker)
│   │   ├── CITB Test – Gold Supervisor Card
│   │   ├── CITB Test – Gold Advanced Craft
│   │   ├── CITB Test – Black Manager Card
│   │   └── CITB Test – Red Provisional Card
│   │
│   ├── Health & Safety (/health-and-safety)
│   │   ├── Manual Handling
│   │   ├── Working at Height
│   │   ├── Asbestos Awareness
│   │   ├── Fire Marshal
│   │   ├── Abrasive Wheels Safety
│   │   ├── Ladder Safety
│   │   ├── Working in Confined Spaces
│   │   ├── Slips, Trips and Falls
│   │   ├── Legionella Awareness
│   │   └── Health & Safety in the Workplace
│   │
│   ├── First Aid (/first-aid)
│   │   ├── First Aid at Work (FAW) — 3 Day Equivalent
│   │   └── Emergency First Aid at Work (EFAW) — 1 Day Equivalent
│   │
│   ├── Water & Utilities (EUSR) (/water-utilities)
│   │   ├── EUSR National Water Hygiene (Blue Card)
│   │   ├── SHEA Water Course
│   │   ├── EUSR Power Course
│   │   └── SHEA Gas Course
│   │
│   └── Construction Skills (/construction-skills)
│       ├── Traffic Marshal / Banksman Training
│       ├── Lifting Operations (Slinger Signaller)
│       └── Bricklaying Basics
│
├── FOR EMPLOYERS [Top-level nav]
│   ├── Overview (benefits, pricing, case studies)
│   ├── Training Matrix (which courses for which roles)
│   ├── Request a Quote (bulk pricing for 5+ learners)
│   ├── Employer Case Studies
│   └── Contact for Business
│
├── ABOUT US [Top-level nav]
│   ├── Our Story
│   ├── Our Accreditations (CPD, CITB, HSE explained)
│   ├── Companies We Work With
│   └── Reviews & Testimonials
│
├── RESOURCES [Top-level nav]
│   ├── Free CSCS Mock Tests
│   ├── Blog / Articles
│   │   ├── CSCS Card Guides
│   │   ├── Health & Safety Guides
│   │   ├── Industry News
│   │   └── Career Development
│   ├── Course Finder Quiz ("Help me choose")
│   └── Glossary (CSCS, CITB, CPD, EUSR explained)
│
├── HELP & CONTACT [Top-level nav]
│   ├── FAQ (site-wide)
│   ├── Contact Us (form + phone + chat)
│   ├── How It Works
│   └── Getting Started Guide
│
├── UTILITY NAV (header, always visible)
│   ├── Search Courses [icon + field]
│   ├── Phone: 0203 345 6575
│   ├── My Account / Sign In
│   └── Cart (with item count badge)
│
└── FOOTER
    ├── Popular Courses (top 4-6 by sales)
    ├── For Employers (CTA)
    ├── Company (About, Contact, Blog)
    ├── Help (FAQ, How It Works, Glossary)
    ├── Legal (Terms, Privacy, Cookies, Anti-Slavery, Equality)
    ├── Accreditation Badges (CPD, CITB logos)
    ├── Trustpilot Badge
    └── "Learning Spot Ltd" registration details
```

---

## Navigation Comparison: Current vs Proposed

| Dimension | Current | Proposed |
|-----------|---------|----------|
| Top-level nav items | 5 (Home, Courses, About Us, Contact Us, Resources) | 6 (Home, Courses, For Employers, About Us, Resources, Help) |
| Course categories | 7 (with heavy overlap) | 5 (no overlap) |
| Total nav links | 109+ | ~35-40 |
| Duplicate course entries | 18+ redundant entries | 0 |
| Employer pathway | None | Dedicated top-level section |
| Mobile nav items | 109+ in hamburger | 6 top-level + 5 categories |
| Search prominence | Small field, top-right | Prominent, center, with autocomplete |
| Breadcrumbs | None | All pages |
| Role-based entry | None | 3 homepage pathways |

---

## Category Naming Rationale

| Current Name | Proposed Name | Rationale |
|-------------|--------------|-----------|
| Construction Courses | Construction Skills | Narrower, avoids overlap with H&S. Contains only hands-on skills (banksman, slinger, bricklaying) |
| CSCS Cards | CSCS Cards & Entry-Level | Expanded to include the full "getting your card" journey. Matches search intent |
| First Aid Courses | First Aid | Simplified. Only 2 courses — clear and self-explanatory |
| Health and Safety Courses | Health & Safety | Shortened. Clear industry-standard term |
| Utilities- EUSR | Water & Utilities (EUSR) | Added plain-English descriptor. Explains EUSR in context |
| CPD Accredited - CV Enhancers | *(removed as category)* | CPD becomes a filter/tag. "CV Enhancers" is marketing-speak that doesn't match user mental models |
| Blog | *(moved to Resources)* | Blog is content, not product navigation. Separated to reduce product nav clutter |
| Test Hub | Free CSCS Mock Tests | Renamed for clarity. "Test Hub" is ambiguous |

---

## Mobile Navigation Proposal

```
┌──────────────────────────────────────┐
│ ☰  [Logo]  🔍  👤  🛒(2)           │  ← Sticky header
├──────────────────────────────────────┤
│                                      │
│  Hamburger menu (☰) opens:           │
│  ┌────────────────────────┐          │
│  │ × Close                │          │
│  │                        │          │
│  │ 🔍 Search Courses      │          │
│  │                        │          │
│  │ Courses           ▸    │          │
│  │ For Employers     ▸    │          │
│  │ About Us          ▸    │          │
│  │ Resources         ▸    │          │
│  │ Help & Contact    ▸    │          │
│  │                        │          │
│  │ ─────────────────      │          │
│  │ 📞 0203 345 6575      │          │
│  │ My Account             │          │
│  └────────────────────────┘          │
│                                      │
│  "Courses" sub-menu:                 │
│  ┌────────────────────────┐          │
│  │ ← Back                 │          │
│  │                        │          │
│  │ All Courses            │          │
│  │ CSCS Cards & Entry     │          │
│  │ Health & Safety        │          │
│  │ First Aid              │          │
│  │ Water & Utilities      │          │
│  │ Construction Skills    │          │
│  └────────────────────────┘          │
│                                      │
│  Bottom nav bar (sticky):            │
│  ┌──────┬──────┬──────┬──────┐      │
│  │ Home │Search│Courses│ Cart │      │
│  │  🏠  │  🔍  │  📚  │ 🛒  │      │
│  └──────┴──────┴──────┴──────┘      │
└──────────────────────────────────────┘
```

---

## Homepage Pathway Design

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│    Get Certified for UK Construction                │
│    Online courses · Same-day certificates           │
│                                                     │
│    [🔍 Search for a course...              ]        │
│                                                     │
│    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│    │ 🏗️ I need a  │ │ 🛡️ I need    │ │ 🏢 I'm an   ││
│    │ CSCS card   │ │ safety      │ │ employer    ││
│    │             │ │ training    │ │             ││
│    │ Get your    │ │ Meet site   │ │ Train your  ││
│    │ green,blue, │ │ requirements│ │ team with   ││
│    │ or gold card│ │ quickly     │ │ bulk pricing││
│    └─────────────┘ └─────────────┘ └─────────────┘│
│                                                     │
│    [Not sure what you need? Help me choose →]       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Course Finder Quiz Flow

For users who don't know exactly what they need (Terry, some Dave):

```
Step 1: "What describes you best?"
  ○ I'm a builder / labourer / tradesperson
  ○ I'm a manager / supervisor
  ○ I'm an employer / training manager
  ○ I work in water / utilities

Step 2: "What do you need?"
  ○ A CSCS card (to get on site)
  ○ A specific safety certificate
  ○ First aid training
  ○ Multiple courses for my team

Step 3: Results
  → "Based on your answers, we recommend:"
  → [Relevant courses with key facts + "Enrol Now" CTAs]
```

---

## Implementation Priority

| Change | Impact | Effort | Priority |
|--------|--------|--------|----------|
| De-duplicate navigation entries | High | Low | Week 1 |
| Add breadcrumbs | High | Low | Week 1 |
| Rename confusing categories | High | Low | Week 1 |
| Reduce nav to 5 categories | Very High | Medium | Week 2-3 |
| Add "For Employers" nav item | High | Low (link) | Week 1 |
| Build homepage pathways | Very High | Medium | Week 3-4 |
| Add search autocomplete | High | Medium | Week 3-4 |
| Build mobile bottom nav | High | Medium | Week 4-5 |
| Build "For Employers" page | Very High | High | Week 5-8 |
| Build Course Finder quiz | Medium | High | Week 8-10 |

---

## Magento Implementation Notes

All proposed changes are achievable within Magento/Adobe Commerce:
- **Category restructure:** Magento's category management allows restructuring without URL changes (use 301 redirects for any removed category URLs)
- **Breadcrumbs:** Native Magento feature — may need theme customization for styling
- **Search autocomplete:** Magento has built-in search suggestions; enhanced autocomplete available via extensions (e.g., Amasty, Algolia)
- **Mega menu reduction:** Theme modification to limit displayed items per category
- **Bottom mobile nav:** Custom theme CSS/JS addition
- **Course Finder quiz:** Custom CMS page with conditional logic — can use Magento's page builder or a custom module
- **For Employers:** CMS page with custom form — can use existing contact form infrastructure
