# Category Page Wireframes — The Builders Academy

## Layout Principles

Based on Phase 1-2 research findings:

- **Smart Discovery:** Prominent search with autocomplete + filters by price, duration, accreditation, job role
- **Role-based filtering:** Job role filter helps Dave find "what do I need?" (persona insight)
- **Social proof on cards:** Star ratings + review counts on every course card
- **Mobile-first filters:** Collapsible filter sheet (not sidebar) on mobile
- **Sort options:** Popularity (default), price, rating — common mental models
- **Progressive loading:** "Load More" instead of pagination (less cognitive load)

---

## Desktop Wireframe (1280px)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]   Categories ▼   For Employers   Search [________]   [LOGIN] [CTA]  │
├───────────────────────────────────────────────────────────────────────────────┤
│  Home  >  Health & Safety Training                                           │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  HEALTH & SAFETY TRAINING COURSES                                             │
│  Accredited construction safety courses for site workers                      │
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────┐             │
│  │  🔍  Search within Health & Safety courses...                │             │
│  └──────────────────────────────────────────────────────────────┘             │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────┐    ┌──────────────────────────────────────────┐     │
│  │                      │    │                                          │     │
│  │  FILTERS             │    │  SORT: [Most Popular ▼]   12 courses    │     │
│  │                      │    │                                          │     │
│  │  Price               │    │  ┌────────────────┐  ┌────────────────┐ │     │
│  │  ○ All               │    │  │ [Course Image] │  │ [Course Image] │ │     │
│  │  ○ Under £25         │    │  │                │  │                │ │     │
│  │  ○ £25 - £50         │    │  │ CSCS Green     │  │ Working at     │ │     │
│  │  ○ £50+              │    │  │ Card Test      │  │ Height         │ │     │
│  │                      │    │  │                │  │                │ │     │
│  │  Duration            │    │  │ £35.00         │  │ £25.00         │ │     │
│  │  ○ All               │    │  │ ⭐ 4.9 (1,240) │  │ ⭐ 4.8 (890)   │ │     │
│  │  ○ Under 1 hour      │    │  │ 45 min         │  │ 30 min         │ │     │
│  │  ○ 1 - 2 hours       │    │  │ Online         │  │ Online         │ │     │
│  │  ○ 2+ hours          │    │  │                │  │                │ │     │
│  │                      │    │  │ [VIEW COURSE]  │  │ [VIEW COURSE]  │ │     │
│  │  Accreditation       │    │  └────────────────┘  └────────────────┘ │     │
│  │  ☐ CPD               │    │                                          │     │
│  │  ☐ CITB              │    │  ┌────────────────┐  ┌────────────────┐ │     │
│  │  ☐ IOSH              │    │  │ [Course Image] │  │ [Course Image] │ │     │
│  │                      │    │  │                │  │                │ │     │
│  │  Job Role            │    │  │ First Aid      │  │ Fire Safety    │ │     │
│  │  ○ All Roles         │    │  │ at Work        │  │ Awareness      │ │     │
│  │  ○ Labourer          │    │  │                │  │                │ │     │
│  │  ○ Supervisor        │    │  │ £40.00         │  │ £20.00         │ │     │
│  │  ○ Manager           │    │  │ ⭐ 4.7 (650)   │  │ ⭐ 4.9 (410)   │ │     │
│  │  ○ All Site Staff    │    │  │ 1 hr           │  │ 20 min         │ │     │
│  │                      │    │  │ Online         │  │ Online         │ │     │
│  │  ──────────────────  │    │  │                │  │                │ │     │
│  │                      │    │  │ [VIEW COURSE]  │  │ [VIEW COURSE]  │ │     │
│  │  [CLEAR FILTERS]     │    │  └────────────────┘  └────────────────┘ │     │
│  │                      │    │                                          │     │
│  └──────────────────────┘    │  ┌────────────────┐  ┌────────────────┐ │     │
│                               │  │ [Course Image] │  │ [Course Image] │ │     │
│                               │  │                │  │                │ │     │
│                               │  │ Manual         │  │ Asbestos       │ │     │
│                               │  │ Handling       │  │ Awareness      │ │     │
│                               │  │                │  │                │ │     │
│                               │  │ £20.00         │  │ £25.00         │ │     │
│                               │  │ ⭐ 4.7 (380)   │  │ ⭐ 4.8 (290)   │ │     │
│                               │  │ 30 min         │  │ 45 min         │ │     │
│                               │  │ Online         │  │ Online         │ │     │
│                               │  │                │  │                │ │     │
│                               │  │ [VIEW COURSE]  │  │ [VIEW COURSE]  │ │     │
│                               │  └────────────────┘  └────────────────┘ │     │
│                               │                                          │     │
│                               │           [LOAD MORE COURSES]            │     │
│                               │                                          │     │
│                               └──────────────────────────────────────────┘     │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ABOUT HEALTH & SAFETY TRAINING                                               │
│                                                                               │
│  Health and safety training is a legal requirement for anyone working on      │
│  a construction site in the UK. Our CPD and CITB accredited courses...        │
│  [Read more]                                                                  │
│                                                                               │
│  Training 5+ staff?  [REQUEST A BULK QUOTE →]                                │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                       │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Wireframe (375px)

```
┌─────────────────────────────┐
│  ☰   [LOGO]        🔍  👤  │
├─────────────────────────────┤
│  Home > Health & Safety     │
├─────────────────────────────┤
│                             │
│  HEALTH & SAFETY            │
│  TRAINING COURSES           │
│  Accredited courses for     │
│  site workers               │
│                             │
│  ┌───────────────────────┐  │
│  │ 🔍 Search courses...  │  │
│  └───────────────────────┘  │
│                             │
│  ┌──────────┐ ┌──────────┐  │
│  │ FILTERS ▼│ │ SORT ▼   │  │  ← 48px tap targets
│  └──────────┘ └──────────┘  │
│                             │
│  Active: [All ✕] 12 results │
│                             │
├─────────────────────────────┤
│                             │
│ ┌─────────────────────────┐ │
│ │  CSCS Green Card Test   │ │
│ │  £35.00 | ⭐ 4.9 (1,240)│ │
│ │  45 min | Online        │ │
│ │  [CPD] [CITB]           │ │
│ │  [VIEW COURSE →]        │ │  ← 48px button
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  Working at Height      │ │
│ │  £25.00 | ⭐ 4.8 (890)  │ │
│ │  30 min | Online        │ │
│ │  [CPD] [CITB]           │ │
│ │  [VIEW COURSE →]        │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  First Aid at Work      │ │
│ │  £40.00 | ⭐ 4.7 (650)  │ │
│ │  1 hr | Online          │ │
│ │  [CPD]                  │ │
│ │  [VIEW COURSE →]        │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  Fire Safety Awareness  │ │
│ │  £20.00 | ⭐ 4.9 (410)  │ │
│ │  20 min | Online        │ │
│ │  [CPD]                  │ │
│ │  [VIEW COURSE →]        │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │  Manual Handling        │ │
│ │  £20.00 | ⭐ 4.7 (380)  │ │
│ │  30 min | Online        │ │
│ │  [CPD]                  │ │
│ │  [VIEW COURSE →]        │ │
│ └─────────────────────────┘ │
│                             │
│  [LOAD MORE COURSES]        │
│                             │
├─────────────────────────────┤
│  Training 5+ staff?         │
│  [REQUEST A BULK QUOTE →]   │
├─────────────────────────────┤
│  FOOTER (minimal)           │
└─────────────────────────────┘
```

---

## Mobile Filter Sheet (Overlay)

```
┌─────────────────────────────┐
│  FILTERS            [DONE]  │
├─────────────────────────────┤
│                             │
│  PRICE                      │
│  ┌─────┐ ┌─────┐ ┌───────┐ │
│  │ All │ │ <£25│ │£25-£50│ │  ← Pill toggles
│  └─────┘ └─────┘ └───────┘ │
│  ┌─────┐                    │
│  │ £50+│                    │
│  └─────┘                    │
│                             │
│  DURATION                   │
│  ┌─────┐ ┌────┐ ┌───────┐  │
│  │ All │ │ <1h│ │ 1-2h  │  │
│  └─────┘ └────┘ └───────┘  │
│  ┌─────┐                    │
│  │ 2h+ │                    │
│  └─────┘                    │
│                             │
│  ACCREDITATION              │
│  ☐ CPD                      │
│  ☐ CITB                     │
│  ☐ IOSH                     │
│                             │
│  JOB ROLE                   │
│  ○ All Roles                │
│  ○ Labourer                 │
│  ○ Supervisor               │
│  ○ Manager                  │
│                             │
│  ─────────────────────────  │
│                             │
│  [CLEAR ALL]  [SHOW 12 →]  │  ← Count updates live
│                             │
└─────────────────────────────┘
```

---

## Mobile Sort Sheet (Overlay)

```
┌─────────────────────────────┐
│  SORT BY            [DONE]  │
├─────────────────────────────┤
│                             │
│  ● Most Popular             │  ← Default
│  ○ Price: Low to High       │
│  ○ Price: High to Low       │
│  ○ Highest Rated            │
│  ○ Newest                   │
│                             │
└─────────────────────────────┘
```

---

## Course Card Component Detail

```
Desktop Card (2-column grid):
┌──────────────────────────────┐
│  ┌────────────────────────┐  │
│  │     [Course Image]     │  │  ← 16:9 ratio
│  └────────────────────────┘  │
│                              │
│  CSCS Green Card Test        │  ← H3, 16px, #334155
│  Labourer & Operatives       │  ← Subtitle, 14px, #475569
│                              │
│  £35.00                      │  ← 20px, bold, #1F396D
│  ⭐ 4.9/5 (1,240 reviews)   │  ← 13px, #475569
│  45 min  |  Online           │  ← 13px, #475569
│                              │
│  [CPD] [CITB]                │  ← Badge components, 12px
│                              │
│  [VIEW COURSE →]             │  ← Primary button, 40px height
│                              │
└──────────────────────────────┘

Mobile Card (full-width):
┌─────────────────────────────┐
│  CSCS Green Card Test       │  ← H3, 16px bold
│  £35.00 | ⭐ 4.9 (1,240)    │  ← Price + rating inline
│  45 min | Online            │  ← Duration + format
│  [CPD] [CITB]               │  ← Badges
│  [VIEW COURSE →]            │  ← Full-width button, 48px
└─────────────────────────────┘
```

---

## Section-by-Section Layout Rationale

### Category Header
- **H1:** Category name (e.g., "Health & Safety Training Courses")
- **Subtitle:** Brief description for SEO and user context
- **Search:** In-category search with autocomplete
- **Why:** Smart Discovery pillar; users may know the course name but not the category

### Filter Sidebar (Desktop) / Filter Sheet (Mobile)
- **4 filter groups:** Price, Duration, Accreditation, Job Role
- **Desktop:** Persistent left sidebar with radio buttons and checkboxes
- **Mobile:** Bottom sheet overlay triggered by "FILTERS" button
- **Why:** Category pages lacked filtering (conversion journey friction point)
- **Job Role filter:** Unique to this industry — helps Dave find "what do I need as a labourer?"

### Sort Bar
- **Default:** Most Popular (social proof)
- **Options:** Price (low/high), Highest Rated, Newest
- **Why:** Common e-commerce mental model; popularity = social proof

### Course Grid
- **Desktop:** 2-column grid with images
- **Mobile:** Full-width list cards (no images to save space)
- **Card content:** Title, price, rating, duration, format, accreditation badges, CTA
- **Why:** All key decision factors visible without clicking through

### SEO Content Block
- **Below courses:** Category description text
- **Why:** SEO value + educational content for users browsing
- **Employer CTA:** "Training 5+ staff?" catch for employer discovery

### Progressive Loading
- **"Load More" button** instead of pagination
- **Why:** Less cognitive load; no page number decisions; works better on mobile
