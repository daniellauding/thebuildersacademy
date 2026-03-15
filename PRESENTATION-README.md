# How to Use the Presentation

**File:** `PRESENTATION.md`  
**Format:** Marp (Markdown Presentation Ecosystem)  
**Slides:** 25 slides covering research, audit, design system, outcomes, timeline

---

## Export Options

### 1. PDF (Recommended for Sharing)

```bash
# Install Marp CLI
npm install -g @marp-team/marp-cli

# Export to PDF
marp PRESENTATION.md --pdf

# Output: PRESENTATION.pdf
```

### 2. PowerPoint

```bash
# Export to PPTX
marp PRESENTATION.md --pptx

# Output: PRESENTATION.pptx
```

### 3. HTML (Interactive)

```bash
# Export to HTML slideshow
marp PRESENTATION.md --html

# Output: PRESENTATION.html
```

### 4. View in Browser (Live Preview)

```bash
# Start local server with live reload
marp -s PRESENTATION.md

# Open: http://localhost:8080
```

---

## VS Code Extension (Best Experience)

1. Install **Marp for VS Code** extension
2. Open `PRESENTATION.md`
3. Click "Open Preview" icon (top right)
4. Present directly from VS Code

**Features:**
- Live preview as you edit
- Export to PDF/PPTX/HTML from sidebar
- Speaker notes support
- Theme customization

---

## Slide Navigation

**Keyboard shortcuts:**
- `→` / `Space` — Next slide
- `←` — Previous slide
- `Home` — First slide
- `End` — Last slide
- `F` — Fullscreen
- `Esc` — Exit fullscreen

---

## Customization

### Change Theme

Edit first slide (front matter):
```yaml
---
marp: true
theme: default  # Options: default, gaia, uncover
---
```

### Change Colors

```yaml
backgroundColor: #fff
color: #333
```

### Add Speaker Notes

```markdown
---

# Slide Title

Content here

<!--
Speaker notes go here (only visible in presenter mode)
-->
```

---

## Presentation Structure

### Part 1: The Problem (Slides 1-6)
- Challenge overview
- User personas
- Top 3 problems
- Business impact

### Part 2: The Discovery (Slides 7-11)
- Phase 1: Research
- Phase 2: Audit
- Key findings
- Quick wins
- Strategic pillars

### Part 3: The Solution (Slides 12-16)
- Design system foundation
- Component architecture
- Page templates
- Design variants

### Part 4: The Impact (Slides 17-19)
- Expected outcomes (KPI table)
- ROI breakdown
- Annual revenue impact: +£700K

### Part 5: Next Steps (Slides 20-23)
- Implementation timeline
- Why this approach works
- Resources needed
- Decision point: Friday, March 7th

### Part 6: Close (Slides 24-25)
- Questions
- Thank you

---

## Tips for Presenting

### For Executives (15 min version)
**Show:** Slides 1-6, 12-13, 17-19, 23-25  
**Focus:** Problem, solution overview, ROI, decision point

### For Team (30 min version)
**Show:** All slides  
**Focus:** Process, design system details, implementation plan

### For Client (20 min version)
**Show:** Slides 1-11, 12-16, 17-19, 20, 24-25  
**Focus:** User problems, research rigor, solution, outcomes, timeline

---

## Editing Tips

### Add a New Slide

```markdown
---

# New Slide Title

Content here
```

### Add Images

```markdown
![Image description](path/to/image.jpg)
```

### Add Two-Column Layout

```markdown
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
<div>

## Left Column
Content here

</div>
<div>

## Right Column
Content here

</div>
</div>
```

### Highlight Important Text

```markdown
**Bold text**  
*Italic text*  
`Code text`
```

---

## Export for Different Audiences

### For Print (Handout)

```bash
marp PRESENTATION.md --pdf --allow-local-files
```

### For Email (Single HTML File)

```bash
marp PRESENTATION.md --html --allow-local-files
```

### For Website Embed

```bash
marp PRESENTATION.md --html --template bespoke
```

---

## Troubleshooting

### Marp not installed?

```bash
npm install -g @marp-team/marp-cli
```

### Export failed?

Check that you're in the project directory:
```bash
cd ~/Work/external/thebuildersacademy
marp PRESENTATION.md --pdf
```

### Images not showing?

Use `--allow-local-files` flag:
```bash
marp PRESENTATION.md --pdf --allow-local-files
```

---

## Quick Commands Cheat Sheet

```bash
# View in browser (live reload)
marp -s PRESENTATION.md

# Export to PDF
marp PRESENTATION.md --pdf

# Export to PowerPoint
marp PRESENTATION.md --pptx

# Export to HTML
marp PRESENTATION.md --html

# Watch mode (auto-export on save)
marp -w PRESENTATION.md --pdf
```

---

## Resources

**Marp Official:** https://marp.app/  
**Documentation:** https://marpit.marp.app/  
**VS Code Extension:** https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode  
**Themes:** https://github.com/marp-team/marp-core/tree/main/themes

---

_Created for The Builders Academy Website Redesign Project_
