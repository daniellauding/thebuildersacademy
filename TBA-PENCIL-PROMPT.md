# TBA Pencil Prototype — Homepage + Product Page

**Agent:** Claude Code (Max Plan)  
**Duration:** 2-3 hours  
**Output:** Pencil wireframes → Export PNG/PDF

---

## 🎯 Mission

Create high-fidelity wireframes for The Builders Academy homepage and product page using Pencil app.

**Deliverables:**
1. **Homepage wireframe** (desktop + mobile)
2. **Product page wireframe** (desktop + mobile)
3. **Exported assets** (PNG + PDF)
4. **Component specs** (annotations)

---

## 📐 Design System Reference

**Project:** `/Users/lume/Work/external/thebuildersacademy/builders-academy-design-system`

**Existing components:**
- Button (4 variants + 3 sizes)
- Card (simple, with header/footer)
- Input, Badge, Accordion
- Avatar, Checkbox, Dialog
- Dropdown Menu, Label, Radio Group
- Select, Separator, Sheet
- Skeleton, Tabs, Textarea, Toggle

**Colors (from research):**
- Primary: #0066CC (trust blue)
- Secondary: #FF6B00 (construction orange)
- Success: #00A651
- Background: #FFFFFF, #F5F5F5
- Text: #1A1A1A, #666666

**Typography:**
- Headings: Inter Bold
- Body: Inter Regular
- CTAs: Inter SemiBold

---

## 🏗️ 1. Homepage Wireframe

### A. Hero Section
```
┌───────────────────────────────────────────────────────┐
│ [Logo]                     [Courses] [For Employers]  │
│                            [About Us] [Login/Register] │
├───────────────────────────────────────────────────────┤
│                                                       │
│   Start Your Construction Career Today               │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                  │
│                                                       │
│   Industry-recognised training for scaffolders,      │
│   bricklayers, plasterers, and more.                 │
│                                                       │
│   [Browse All Courses →]  [For Employers →]          │
│                                                       │
│   [Hero Image: Construction workers on site]          │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Pencil Elements:**
- Desktop Page template (1440px wide)
- Navigation bar (sticky)
- H1 hero headline (48px)
- Body text (18px, max-width 600px)
- 2x CTA buttons (primary blue + secondary orange)
- Hero image placeholder (1200x600)

### B. Course Categories
```
┌────────────────────────────────────────────┐
│  Popular Training Courses                 │
│  ─────────────────────────                │
│                                            │
│  [Card: Scaffolding]                      │
│  • CISRS Basic Scaffolding                │
│  • 5 days • £650                          │
│  [View Details →]                          │
│                                            │
│  [Card: Bricklaying]                      │
│  • NVQ Level 2 Bricklaying                │
│  • 12 weeks • £1,200                      │
│  [View Details →]                          │
│                                            │
│  [Card: Plastering]                       │
│  • City & Guilds Plastering               │
│  • 8 weeks • £950                         │
│  [View Details →]                          │
│                                            │
│  [View All 120+ Courses →]                │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- 3-column grid (desktop) → 1-column (mobile)
- Card component with:
  - Icon/image (64x64)
  - Course title (20px bold)
  - Details (duration, price)
  - CTA button (secondary)

### C. Why Choose TBA?
```
┌────────────────────────────────────────────┐
│  Why Choose The Builders Academy?         │
│  ─────────────────────────────────         │
│                                            │
│  ✓ Industry-Recognised Qualifications     │
│    [Icon]                                  │
│    CITB, CISRS, City & Guilds approved    │
│                                            │
│  ✓ Expert Instructors                     │
│    [Icon]                                  │
│    Qualified professionals with real-world │
│    construction experience                 │
│                                            │
│  ✓ Flexible Learning                      │
│    [Icon]                                  │
│    Full-time, part-time, or weekend       │
│    courses to fit your schedule           │
│                                            │
│  ✓ Job Placement Support                  │
│    [Icon]                                  │
│    Connect with 500+ construction          │
│    employers across the UK                 │
│                                            │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- 4-column grid (desktop) → 2-column (mobile)
- Icon + heading + text pattern
- Checkmark icons (24px)

### D. Testimonials
```
┌────────────────────────────────────────────┐
│  What Our Students Say                    │
│  ─────────────────────────                │
│                                            │
│  "The CISRS course transformed my career.  │
│   I went from zero experience to a fully   │
│   qualified scaffolder in just 5 weeks."   │
│   ⭐⭐⭐⭐⭐                                 │
│   — James M., Scaffolder                   │
│                                            │
│  [Previous] [Next]                         │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- Testimonial card (centered, max-width 800px)
- Quote text (24px italic)
- Star rating (5 stars)
- Author name + role (16px)
- Navigation arrows

### E. CTA Section
```
┌────────────────────────────────────────────┐
│                                            │
│  Ready to Start Your Training?            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━                 │
│                                            │
│  Browse our courses or contact us for     │
│  tailored training solutions.              │
│                                            │
│  [Browse Courses →]  [Contact Us →]        │
│                                            │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- Full-width section (blue background)
- Centered text (white)
- 2x CTA buttons (white outline)

### F. Footer
```
┌────────────────────────────────────────────┐
│  [Logo]                                    │
│                                            │
│  Courses        For Employers    About     │
│  • Scaffolding  • Hire Trainees  • Our     │
│  • Bricklaying  • Apprenticeships  Team    │
│  • Plastering   • Upskilling     • Contact │
│  • See All      • Funding        • FAQ     │
│                                            │
│  © 2026 The Builders Academy Ltd.         │
│  All rights reserved. | Privacy | Terms   │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- 3-column footer layout
- Link lists (14px)
- Social icons (24px)

---

## 📦 2. Product Page Wireframe

### A. Header (same as homepage)

### B. Course Hero
```
┌────────────────────────────────────────────┐
│  [Breadcrumb: Home > Courses > Scaffolding]│
│                                            │
│  CISRS Basic Scaffolding Course           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━              │
│                                            │
│  Industry-recognised qualification for     │
│  working on construction scaffolding.      │
│                                            │
│  ⭐⭐⭐⭐⭐ 4.8 (127 reviews)               │
│                                            │
│  [Course Image: Scaffolding training]      │
│                                            │
│  ┌──────────────────────┐                 │
│  │ 5 days               │                 │
│  │ £650 + VAT           │                 │
│  │ Next start: 24 Mar   │                 │
│  │                      │                 │
│  │ [Book Now →]         │                 │
│  │ [Download Brochure]  │                 │
│  └──────────────────────┘                 │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- Breadcrumb navigation
- H1 course title (40px)
- Star rating + review count
- 2-column layout:
  - Left: Course image + description
  - Right: Sticky booking card

### C. Course Details
```
┌────────────────────────────────────────────┐
│  [Tabs: Overview | Content | Reviews]     │
│                                            │
│  OVERVIEW                                  │
│  ─────────                                 │
│                                            │
│  What You'll Learn                         │
│  • Set up and dismantle scaffolding       │
│  • Health & safety regulations            │
│  • Load-bearing calculations              │
│  • Inspection procedures                   │
│                                            │
│  Who Should Attend?                        │
│  This course is ideal for:                │
│  • New entrants to construction            │
│  • Existing workers seeking CISRS card    │
│  • Employers upskilling staff             │
│                                            │
│  Prerequisites                             │
│  • Minimum age: 18                         │
│  • Good physical fitness                   │
│  • Basic English literacy                  │
│                                            │
│  Certification                             │
│  On completion, you'll receive:           │
│  • CISRS Scaffolder Card (valid 5 years)  │
│  • Certificate of Completion              │
│  • Health & Safety Awareness              │
│                                            │
└────────────────────────────────────────────┘
```

**Pencil Elements:**
- Tab navigation
- Bulleted lists
- Section headings (24px)
- Body text (16px)

### D. Course Content Tab
```
┌────────────────────────────────────────────┐
│  COURSE CONTENT                            │
│  ─────────────                             │
│                                            │
│  Day 1: Introduction to Scaffolding       │
│  • Industry overview                       │
│  • Types of scaffolding systems            │
│  • Safety equipment                        │
│                                            │
│  Day 2: Basic Assembly                     │
│  • Base plates and sole boards             │
│  • Standard tubes and fittings             │
│  • Ledgers and transoms                    │
│                                            │
│  Day 3: Advanced Techniques                │
│  • Tie patterns                            │
│  • Load calculations                       │
│  • Weather considerations                  │
│                                            │
│  Day 4: Inspection & Safety                │
│  • Pre-use checks                          │
│  • Handover procedures                     │
│  • Incident reporting                      │
│                                            │
│  Day 5: Practical Assessment               │
│  • Hands-on scaffold build                 │
│  • Written exam                            │
│  • Certification ceremony                  │
│                                            │
└────────────────────────────────────────────┘
```

### E. Reviews Tab
```
┌────────────────────────────────────────────┐
│  STUDENT REVIEWS                           │
│  ──────────────                            │
│                                            │
│  ⭐⭐⭐⭐⭐ 4.8 out of 5 (127 reviews)      │
│                                            │
│  [5 stars] ████████████████████░░ 85%     │
│  [4 stars] ████░░░░░░░░░░░░░░░░ 12%      │
│  [3 stars] ░░░░░░░░░░░░░░░░░░░░ 2%       │
│  [2 stars] ░░░░░░░░░░░░░░░░░░░░ 1%       │
│  [1 star]  ░░░░░░░░░░░░░░░░░░░░ 0%       │
│                                            │
│  ─────────────────────────────             │
│                                            │
│  ⭐⭐⭐⭐⭐                                  │
│  "Excellent course! The instructors were   │
│   knowledgeable and hands-on. I'm now     │
│   working on major construction sites."    │
│   — James M. • 2 weeks ago                 │
│                                            │
│  ⭐⭐⭐⭐☆                                  │
│  "Great training, but could use more       │
│   practical time on scaffolds."            │
│   — Sarah K. • 1 month ago                 │
│                                            │
│  [Load More Reviews]                       │
└────────────────────────────────────────────┘
```

### F. Related Courses
```
┌────────────────────────────────────────────┐
│  You May Also Like                         │
│  ──────────────────                        │
│                                            │
│  [Card: Advanced Scaffolding]             │
│  CISRS Advanced • 10 days • £1,200        │
│                                            │
│  [Card: Health & Safety]                  │
│  CITB Site Safety Plus • 1 day • £180     │
│                                            │
│  [Card: First Aid]                        │
│  Emergency First Aid • 1 day • £120       │
│                                            │
└────────────────────────────────────────────┘
```

### G. Footer (same as homepage)

---

## 🛠️ Pencil App Instructions

### 1. Install Pencil (if needed)
```bash
# macOS
brew install --cask pencil

# Or download from: https://pencil.evolus.vn/
```

### 2. Create New Project
1. Open Pencil
2. File → New
3. Set page size: 1440x900 (desktop), 375x812 (mobile)
4. Save as: `TBA-Homepage-Desktop.ep` and `TBA-Homepage-Mobile.ep`

### 3. Use Stencils
**Built-in:**
- Common Shapes (rectangles, text, icons)
- Desktop UI (navigation, cards, buttons)
- Mobile UI (bottom nav, cards, inputs)

**Custom (if needed):**
- Import TBA color palette
- Create reusable components (Button, Card, etc.)

### 4. Desktop Homepage Workflow

**Step 1: Header**
- Rectangle (1440x80) → fill #FFFFFF, border-bottom #E5E5E5
- Text: "The Builders Academy" (24px bold)
- Navigation links (16px regular)

**Step 2: Hero**
- Rectangle (1440x600) → fill #F5F5F5
- Centered text:
  - H1: "Start Your Construction Career Today" (48px bold)
  - Subtext: "Industry-recognised training..." (18px)
- 2x Button components:
  - Primary (blue): 200x50
  - Secondary (orange): 200x50

**Step 3: Course Cards**
- 3-column grid (400px each, 40px gap)
- Card template:
  - Rectangle (400x300) → fill #FFFFFF, border #E5E5E5
  - Icon placeholder (64x64)
  - Text: Course title (20px bold)
  - Text: Duration + Price (16px)
  - Button: "View Details" (160x40)

**Step 4: Why TBA Section**
- 4-column grid (320px each, 40px gap)
- Each column:
  - Icon (48x48)
  - Heading (18px bold)
  - Body text (14px)

**Step 5: Testimonial**
- Centered container (800px wide)
- Quote text (24px italic)
- Star rating (5x 24px stars)
- Author (16px)
- Navigation arrows (left/right)

**Step 6: CTA**
- Full-width rectangle (1440x300) → fill #0066CC
- Centered text (white)
- 2x outline buttons (white border)

**Step 7: Footer**
- Rectangle (1440x400) → fill #1A1A1A
- 3-column layout (white text)
- Logo + link lists + social icons

### 5. Mobile Homepage Workflow

**Adapt desktop wireframe:**
- Single column layout (375px wide)
- Stack all sections vertically
- Cards: 1 per row instead of 3
- Hero: Reduce text sizes (32px → 24px)
- Navigation: Hamburger menu
- Buttons: Full-width (335px)

### 6. Product Page Workflow

**Follow same structure but add:**
- Sticky sidebar (booking card)
- Tab navigation
- Accordion for FAQ (optional)
- Review cards with star ratings
- Progress bars for rating distribution

---

## 📤 Export Instructions

### 1. Export PNG (for sharing)
```
File → Export → PNG
Resolution: 2x (2880x1800 for Retina)
Pages: All or Selected
Output: /Users/lume/Work/external/thebuildersacademy/wireframes/pencil-exports/
```

### 2. Export PDF (for documentation)
```
File → Export → PDF
Pages: All
Output: TBA-Wireframes-v1.pdf
```

### 3. Annotate (optional)
- Add text labels for interactions
- Use arrows for flow
- Color-code sections (header = blue, CTA = orange, etc.)

---

## ✅ Success Criteria

**Homepage:**
- [ ] Desktop wireframe (1440x900) complete
- [ ] Mobile wireframe (375x812) complete
- [ ] All 7 sections designed (header → footer)
- [ ] Components reusable (button, card, etc.)
- [ ] Annotations added
- [ ] Exported as PNG + PDF

**Product Page:**
- [ ] Desktop wireframe complete
- [ ] Mobile wireframe complete
- [ ] Tab navigation functional (3 tabs)
- [ ] Sticky booking card
- [ ] Review section with ratings
- [ ] Exported as PNG + PDF

**Bonus:**
- [ ] Interactive prototype (Pencil supports clickable links between pages)
- [ ] Component library saved for reuse
- [ ] Design system colors/fonts documented

---

## 🚀 Next Steps After Wireframes

1. **Review with stakeholders** (Joel, Daniel, team)
2. **Iterate based on feedback**
3. **Move to high-fidelity mockups** (Figma/Sketch)
4. **Build React components** (already 50% done in design-system)
5. **Deploy to staging** (http://100.110.129.19:5173)

---

## 📝 Notes

- **Pencil is fast** — prioritize speed over pixel-perfect
- **Focus on layout + hierarchy** — not colors/fonts
- **Use real content** — course names, prices, dates from TBA website
- **Mobile-first thinking** — design mobile first, then scale up
- **Accessibility** — clear headings, good contrast, readable text

---

**Created:** 2026-03-12  
**Agent:** Claude Code (Max Plan)  
**Project:** The Builders Academy Redesign Phase 6
