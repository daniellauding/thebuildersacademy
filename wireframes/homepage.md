# Homepage Wireframes — The Builders Academy

## Layout Principles

Based on Phase 1-2 research findings:

- **Trust First:** Trustpilot score, accreditation badges, and employer logos visible above the fold
- **Simplicity:** 5-7 navigation categories (down from 109+ links)
- **Mobile-First:** 70%+ of primary persona (Dave) traffic is mobile; large tap targets (48px+)
- **Clear Entry Points:** Role-based pathways ("I need a CSCS card" / "I need safety training" / "For my business")
- **Smart Discovery:** Prominent search bar with autocomplete supporting informal terms ("green card")
- **Employer Pathway:** Visible "For Employers" CTA from homepage (Strategic Pillar #4)
- **How It Works:** 3-step visual for low-literacy users (Terry persona)

---

## Desktop Wireframe (1280px)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                              HEADER                                          │
│  [LOGO]   Categories ▼   For Employers   Search [________]   [LOGIN] [CTA]  │
│           ├── CSCS Cards                                                      │
│           ├── Health & Safety                                                 │
│           ├── First Aid                                                       │
│           ├── Fire Safety                                                     │
│           ├── Working at Height                                               │
│           └── All Courses                                                     │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                        HERO SECTION                                           │
│                                                                               │
│              FIND YOUR CONSTRUCTION TRAINING                                  │
│         Get CSCS Certified Online — Same-Day Results                          │
│                                                                               │
│         ┌──────────────────────────────────────────────┐                      │
│         │  🔍  Search courses, e.g. "CSCS Green Card"  │  [Find Course]      │
│         └──────────────────────────────────────────────┘                      │
│         Autocomplete: CSCS Green Card | Working at Height | First Aid...      │
│                                                                               │
│    ⭐⭐⭐⭐⭐  Trustpilot 4.8/5 from 2,340 reviews                              │
│    [CPD Accredited]  [CITB Approved]  [IOSH Certified]                       │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                     HOW IT WORKS                                              │
│                                                                               │
│    ┌────────────┐        ┌────────────┐        ┌────────────┐                │
│    │     ①      │   →    │     ②      │   →    │     ③      │                │
│    │   Choose   │        │  Complete  │        │    Get     │                │
│    │  & Pay     │        │   Online   │        │  Your Cert │                │
│    │            │        │            │        │  Same Day  │                │
│    └────────────┘        └────────────┘        └────────────┘                │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│    I NEED A...              I NEED SAFETY...       FOR MY BUSINESS            │
│   ┌────────────────┐       ┌────────────────┐     ┌────────────────┐         │
│   │  🪪             │       │  ⚠️             │     │  🏢             │         │
│   │  CSCS Card     │       │  Working       │     │  Bulk          │         │
│   │  Green / Red   │       │  at Height     │     │  Training      │         │
│   │  from £30      │       │  from £25      │     │                │         │
│   │                │       │                │     │  Request       │         │
│   │  [GET STARTED] │       │  [GET STARTED] │     │  a Quote       │         │
│   └────────────────┘       └────────────────┘     │                │         │
│                                                    │  [REQUEST →]   │         │
│                                                    └────────────────┘         │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                      POPULAR COURSES                                          │
│                                                                               │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐           │
│   │  [Course Image]  │  │  [Course Image]  │  │  [Course Image]  │           │
│   │                  │  │                  │  │                  │           │
│   │  CSCS Green      │  │  Working at      │  │  First Aid       │           │
│   │  Card Test       │  │  Height          │  │  at Work         │           │
│   │                  │  │                  │  │                  │           │
│   │  £35.00          │  │  £25.00          │  │  £40.00          │           │
│   │  ⭐ 4.9 (1,240)  │  │  ⭐ 4.8 (890)    │  │  ⭐ 4.7 (650)    │           │
│   │  45 min | Online │  │  30 min | Online │  │  1 hr | Online   │           │
│   │                  │  │                  │  │                  │           │
│   │  [START NOW →]   │  │  [START NOW →]   │  │  [START NOW →]   │           │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘           │
│                                                                               │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐           │
│   │  [Course Image]  │  │  [Course Image]  │  │  [Course Image]  │           │
│   │                  │  │                  │  │                  │           │
│   │  CSCS Red        │  │  Fire Safety     │  │  Manual          │           │
│   │  Managers Card   │  │  Awareness       │  │  Handling        │           │
│   │                  │  │                  │  │                  │           │
│   │  £55.00          │  │  £20.00          │  │  £20.00          │           │
│   │  ⭐ 4.8 (520)    │  │  ⭐ 4.9 (410)    │  │  ⭐ 4.7 (380)    │           │
│   │  2 hr | Online   │  │  20 min | Online │  │  30 min | Online │           │
│   │                  │  │                  │  │                  │           │
│   │  [START NOW →]   │  │  [START NOW →]   │  │  [START NOW →]   │           │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘           │
│                                                                               │
│                    [VIEW ALL COURSES →]                                       │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│     TRUSTED BY LEADING CONSTRUCTION COMPANIES                                 │
│                                                                               │
│   [Skanska]   [Kier]   [G4S]   [BBC Studios]   [Balfour Beatty]             │
│                                                                               │
│   "We trained 120 staff in 3 months"              — Skanska                  │
│   "Great dashboard for tracking team progress"     — Kier Group              │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│     WHAT OUR LEARNERS SAY                                                     │
│                                                                               │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐           │
│   │  ⭐⭐⭐⭐⭐          │  │  ⭐⭐⭐⭐⭐          │  │  ⭐⭐⭐⭐⭐          │           │
│   │  "Quick and easy │  │  "Got my cert    │  │  "Best value     │           │
│   │   to complete.   │  │   the same day.  │  │   for training   │           │
│   │   Highly         │  │   Very clear     │  │   I've found     │           │
│   │   recommend."    │  │   instructions." │  │   online."       │           │
│   │                  │  │                  │  │                  │           │
│   │  — Dave T.       │  │  — Sarah M.      │  │  — Marcus J.     │           │
│   │    Builder       │  │    Site Manager  │  │    Electrician   │           │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘           │
│                                                                               │
│                 Trustpilot: ⭐⭐⭐⭐⭐ 4.8/5                                    │
│                 [READ ALL REVIEWS →]                                          │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                          FOOTER                                               │
│                                                                               │
│  COURSES          SUPPORT          LEGAL            ACCREDITATIONS            │
│  CSCS Cards       0800 XXX XXXX    Terms & Conditions  [CPD Badge]           │
│  Health & Safety  Live Chat        Privacy Policy       [CITB Badge]         │
│  First Aid        Email Us         Cookie Policy        [IOSH Badge]         │
│  Fire Safety      FAQ              Refund Policy        [Trustpilot]         │
│  All Courses      Mon-Fri 9-5                                                 │
│                                                                               │
│  © 2024 The Builders Academy. All rights reserved.                           │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Wireframe (375px)

```
┌─────────────────────────────┐
│  ☰   [LOGO]        🔍  👤  │
├─────────────────────────────┤
│                             │
│    FIND YOUR CSCS CARD      │
│     TRAINING ONLINE         │
│   Same-Day Results          │
│                             │
│  ┌───────────────────────┐  │
│  │ 🔍 Search courses...  │  │
│  └───────────────────────┘  │
│  [FIND COURSE →]            │
│                             │
│  ⭐⭐⭐⭐⭐ 4.8/5 Trustpilot  │
│  [CPD] [CITB] [IOSH]       │
│                             │
├─────────────────────────────┤
│                             │
│  HOW IT WORKS               │
│                             │
│  ①  Choose & Pay            │
│  ②  Complete Online         │
│  ③  Get Your Cert Same Day  │
│                             │
├─────────────────────────────┤
│                             │
│  I NEED A...                │
│                             │
│ ┌─────────────────────────┐ │
│ │  🪪 CSCS Green Card     │ │
│ │  from £30               │ │
│ │  [GET STARTED →]        │ │  ← 56px tap target
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  ⚠️ Working at Height   │ │
│ │  from £25               │ │
│ │  [GET STARTED →]        │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  🏢 For Employers       │ │
│ │  Bulk Training          │ │
│ │  [REQUEST QUOTE →]      │ │
│ └─────────────────────────┘ │
│                             │
├─────────────────────────────┤
│                             │
│  POPULAR COURSES            │
│                             │
│ ┌─────────────────────────┐ │
│ │  CSCS Green Card Test   │ │
│ │  £35 | ⭐ 4.9 (1,240)   │ │
│ │  45 min | Online        │ │
│ │  [START NOW →]          │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  Working at Height      │ │
│ │  £25 | ⭐ 4.8 (890)     │ │
│ │  30 min | Online        │ │
│ │  [START NOW →]          │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  First Aid at Work      │ │
│ │  £40 | ⭐ 4.7 (650)     │ │
│ │  1 hr | Online          │ │
│ │  [START NOW →]          │ │
│ └─────────────────────────┘ │
│                             │
│  [VIEW ALL COURSES →]       │
│                             │
├─────────────────────────────┤
│                             │
│  TRUSTED BY                 │
│  [Skanska] [Kier] [G4S]    │
│  [BBC Studios] [Balfour]   │
│                             │
├─────────────────────────────┤
│                             │
│  WHAT LEARNERS SAY          │
│                             │
│  ⭐⭐⭐⭐⭐                    │
│  "Quick and easy to         │
│   complete. Highly          │
│   recommend."               │
│  — Dave T., Builder         │
│                             │
│  [← ● ○ ○ →]  (swipeable)  │
│                             │
├─────────────────────────────┤
│                             │
│  FOOTER                     │
│  📞 0800 XXX XXXX          │
│  💬 Live Chat               │
│  [CPD] [CITB] [Trustpilot] │
│                             │
│  Courses | Support | Legal  │
│                             │
│  © 2024 The Builders Academy│
│                             │
└─────────────────────────────┘
```

---

## Mobile Navigation Overlay

```
┌─────────────────────────────┐
│  ✕   [LOGO]                 │
├─────────────────────────────┤
│                             │
│  CSCS Cards            →   │
│  ─────────────────────────  │
│  Health & Safety       →   │
│  ─────────────────────────  │
│  First Aid             →   │
│  ─────────────────────────  │
│  Fire Safety           →   │
│  ─────────────────────────  │
│  Working at Height     →   │
│  ─────────────────────────  │
│  All Courses           →   │
│                             │
│  ─────────────────────────  │
│                             │
│  For Employers         →   │
│                             │
│  ─────────────────────────  │
│                             │
│  [LOGIN]                    │
│  [GET STARTED →]            │
│                             │
│  📞 0800 XXX XXXX          │
│                             │
└─────────────────────────────┘
```

---

## Section-by-Section Layout Rationale

### Header
- **Desktop:** Logo left, 6 navigation categories, search, login, primary CTA
- **Mobile:** Hamburger menu, logo center, search icon, account icon
- **Why:** Reduced from 109+ links to 6 clear categories (audit finding: cognitive overload)

### Hero
- **Content:** H1 headline, subheadline, prominent search bar, trust signals
- **Why:** Dave persona arrives via search wanting quick action; trust signals above fold (Strategic Pillar #1)
- **Search:** Autocomplete supports informal terms like "green card" (Smart Discovery pillar)

### How It Works
- **Content:** 3-step visual (Choose & Pay → Complete Online → Get Cert Same Day)
- **Why:** Terry persona (low digital literacy) needs reassurance about the process
- **Placement:** Early on page to reduce bounce from uncertainty

### Entry Point Cards
- **Content:** 3 pathways — CSCS Cards, Safety Training, Employer/Bulk
- **Why:** Addresses 3 primary conversion journeys from research
- **Mobile:** Full-width stacked cards with 56px tap targets

### Popular Courses
- **Content:** 6 course cards (3x2 grid desktop, stacked mobile) with price, rating, duration
- **Why:** Social proof ("popular") + key decision factors above fold on cards
- **Card info:** Price, star rating, review count, duration, format — the 4 key facts

### Trust Section
- **Content:** Employer logos + testimonial quotes
- **Why:** Sarah persona needs employer validation; Dave needs peer validation

### Reviews
- **Content:** 3 review cards (carousel on mobile)
- **Why:** Trustpilot widget reinforcement; real customer voices

### Footer
- **Desktop:** 4 columns (Courses, Support, Legal, Accreditations)
- **Mobile:** Condensed with phone number and live chat prominent
- **Why:** Phone number visible for Terry persona; accreditation badges for trust
