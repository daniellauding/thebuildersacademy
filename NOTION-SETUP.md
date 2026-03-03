# Notion Setup for The Builders Academy

**Project workspace:** (TBD — create manually or via API)

---

## 📊 Databases to Create

### 1. Research Database
**Type:** Database - Table view

**Properties:**
- **Name** (Title) — Finding/insight name
- **Phase** (Select) — Phase 1–10
- **Category** (Multi-select) — UX, UI, SEO, Accessibility, IA, CRO, etc.
- **Priority** (Select) — Critical, High, Medium, Low
- **Status** (Select) — To Review, In Progress, Done
- **Agent** (Select) — UX Researcher, UI Designer, etc.
- **Date** (Date) — When discovered
- **Notes** (Text) — Details, screenshots, links

**Views:**
- Table view (default)
- Board by Phase
- Gallery with screenshots

---

### 2. Design Tasks Database
**Type:** Database - Board view

**Properties:**
- **Task** (Title)
- **Phase** (Select) — Research, IA, Wireframes, UI, Design System, etc.
- **Assignee** (Select) — Which agent
- **Status** (Select) — Todo, In Progress, Review, Done
- **Priority** (Select) — P0, P1, P2, P3
- **Due Date** (Date)
- **Deliverable** (Files & media) — Wireframes, mockups, etc.
- **Notes** (Text)

**Views:**
- Board by Status
- Timeline by Due Date
- Table by Phase

---

### 3. Audit Findings Database
**Type:** Database - Table view

**Properties:**
- **Issue** (Title)
- **Type** (Multi-select) — UX, Accessibility, SEO, Performance, Visual
- **Severity** (Select) — Critical, Moderate, Minor
- **Impact** (Select) — High, Medium, Low
- **Effort** (Select) — High, Medium, Low
- **Page** (Select) — Homepage, Product Page, Category, etc.
- **Screenshot** (Files & media)
- **Recommendation** (Text)
- **Status** (Select) — Open, In Design, Resolved

**Views:**
- Priority Matrix (Board: Impact vs Effort)
- By Page
- By Type

---

### 4. Design System Components
**Type:** Database - Gallery view

**Properties:**
- **Component** (Title) — Button, Card, Input, etc.
- **Category** (Select) — Atoms, Molecules, Organisms
- **Status** (Select) — Draft, In Progress, Designed, Approved
- **Figma Link** (URL)
- **Screenshot** (Files & media)
- **Variants** (Multi-select) — Primary, Secondary, Disabled, etc.
- **Notes** (Text) — Usage guidelines

**Views:**
- Gallery (default)
- Table by Category
- Board by Status

---

## 🔗 Links

**Optional:** Link databases via relations:
- **Design Tasks** → **Audit Findings** (tasks created from findings)
- **Design Tasks** → **Design System Components** (components to create)
- **Research** → **Design Tasks** (insights that inform tasks)

---

## 📝 Pages to Create

1. **Project Overview** — Goals, timeline, team, links
2. **Phase 1: Business Goals** — Strategic foundation
3. **Phase 2: Full Audit** — Comprehensive findings
4. **Phase 3: Information Architecture** — New IA & sitemap
5. **Phase 4: UX Structure** — Wireframes & flows
6. **Phase 5: UI Modernization** — Visual direction
7. **Phase 6: Design System** — Component library
8. **Phase 7: Accessibility** — WCAG compliance checklist
9. **Phase 8: SEO Strategy** — Content & structured data
10. **Phase 9: Testing Plan** — Validation approach
11. **Phase 10: Execution Recommendations** — Multi-agent recommendations

---

## 🚀 Quick Start

1. Create a new Notion workspace: **The Builders Academy**
2. Add the 4 databases above
3. Create the 11 phase pages
4. Link to GitHub repo: https://github.com/daniellauding/thebuildersacademy
5. Share with AI agents (or keep private, manual updates)

---

_Created: 2026-03-03_
