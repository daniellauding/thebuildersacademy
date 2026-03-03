# The Builders Academy - Redesign Project

**Website:** https://thebuildersacademy.co.uk  
**Platform:** Magento/Adobe Commerce  
**Start:** 2026-03-03  

---

## 📁 Project Structure

```
thebuildersacademy/
├── PROJECT-BRIEF.md          # Overview & goals
├── MASTER-PROMPT.md          # System prompt for AI agents
├── research/                 # Research & audit findings
│   ├── audit/                # Full site audit
│   ├── competitive/          # Competitor analysis
│   ├── personas/             # User personas
│   └── screenshots/          # Site screenshots
├── design/                   # Design deliverables
│   ├── ia/                   # Information architecture
│   ├── wireframes/           # UX wireframes
│   ├── ui/                   # UI mockups
│   └── design-system/        # Design system docs
├── docs/                     # Documentation
│   ├── accessibility.md      # WCAG 2.2 AA compliance
│   ├── seo.md                # SEO strategy
│   └── testing-plan.md       # QA & validation
└── agents/                   # Agent work logs
    ├── ux-researcher/
    ├── ui-designer/
    ├── seo-specialist/
    └── ...
```

---

## 🚀 Getting Started

### 1. Initial Audit (Playwright)
```bash
# Run automated audit
cd ~/Work/external/thebuildersacademy
playwright test audit.spec.ts
```

### 2. Launch Agent Team (Ralph)
```bash
# Start multi-agent research
ralph "PHASE 1: Define business goals and personas for thebuildersacademy.co.uk" \
  --agent claude-code \
  --tasks \
  --max-iterations 5
```

### 3. View Research in Notion
- **Notion Database:** (TBD - set up manually or via API)

---

## 🛠️ Tools

- **Playwright** — Site crawling, screenshots, testing
- **Ralph** — Agent orchestration
- **Claude Code** — Research & design agents
- **Figma** — Design handoff
- **Notion** — Project management
- **GitHub** — Version control

---

## 📋 Current Phase

**Phase:** Setup  
**Status:** ⏳ In Progress  
**Next:** Initial site audit with Playwright

---

## 🎯 Key Deliverables

- [ ] Full audit report
- [ ] Redesigned IA & sitemap
- [ ] Wireframes (home, product, category)
- [ ] Modern UI direction
- [ ] Design system foundation
- [ ] Accessibility checklist
- [ ] Testing plan

---

_Owner: Daniel Lauding (danne)_  
_Lead AI: laubot_
