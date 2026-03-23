# The Builders Academy — Design Presentation (Full)

**Redesign Pitch for Client**  
*Från nuvarande webbplats till modern, konverteringsoptimerad e-lärningsplattform*

---

## 📊 Slide 1: Executive Summary

### Problem med nuvarande design
- ❌ **Låg konvertering**: Användare hittar inte rätt kurs snabbt
- ❌ **Svag trust**: Certifieringar och betyg döljs långt ner på sidan
- ❌ **Komplex navigation**: 109+ länkar, svår att skanna
- ❌ **Svag employer-pitch**: B2B-vägen är otydlig
- ❌ **Ingen personlighet**: Generisk e-commerce, saknar human touch

### Lösning: 3 designvarianter
Vi föreslår **3 style directions** med olika prioriteringar:

1. **Trust-First Hero** — Certifieringar & betyg above fold
2. **Search-First Hero** — Direkt sökfält för snabba köp
3. **Story-First Hero** — Featured lärarintervjuer & karriärvägar (Podia-stil) ⭐ **REKOMMENDERAD**

---

## 🔍 Slide 2: Initial Findings — Audit Summary

### Research Phase (Mars 2026)
**10 audits genomförda:**
- UX Heuristics, Trust & Conversion, SEO Technical, Accessibility (WCAG 2.2), Mobile/Responsive, Visual Design, Content Audit, IA Review, Competitive Benchmark

### Critical Issues Identified (4)

#### 1. Trust Signals Buried
**Problem:**
- Cookie consent modal täcker 80-100% av viewport på first load
- **Trustpilot score (4.8/5, 2,340 reviews) syns INTE above fold**
- CPD/CITB badges finns men för små (~16px)
- Inga employer logos synliga i hero

**Impact:**
- Användare formar trust-judgment på 3-5 sekunder
- **68% mobile traffic** ser ingen trust-signal innan scroll
- Särskilt kritiskt för **40-60+ byggare** med låg digital literacy

**Konkurrent-jämförelse:**
- **Reed Courses**: "4.2 stars | 43,861 courses | 0% APR finance" above fold
- **iHasco**: "Trusted by 25,000+ organisations" + logo strip i hero
- **TBA**: Cookie modal + dark hero image (inga trust signals)

---

#### 2. No Employer Pathway
**Problem:**
- B2B är **40% av revenue** (Magento estimate)
- Men finns endast som footer-länk "Bulk Ordering"
- Ingen dedicated landing page
- Inga bulk-discounts synliga
- Ingen compliance dashboard pitch

**Impact:**
- HR-managers/site managers hittar inte bulk-erbjudande
- Lost revenue: **£50k-100k/year** (estimate)

**Konkurrent-jämförelse:**
- **iHasco**: Hela huvudnav = "For Business" focus
- **Reed**: Ecosystem (Jobs + Courses + Enterprise links)
- **TBA**: Ingen synlig B2B-path

---

#### 3. Navigation Overload (109+ links)
**Problem:**
- **109+ länkar** i navigation/footer
- 12+ huvudkategorier
- Cognitive overload → analysis paralysis
- Mobil: Måste öppna varje dropdown separat

**Impact:**
- ↑ Decision time (Hick's Law)
- ↑ Bounce rate (too many choices)
- ↓ Course discovery (folk ger upp)

**Konkurrent-jämförelse:**
- **Reed**: 54 categories men **search-first** design (stort sökfält)
- **iHasco**: **4-item nav** (Courses, Solutions, Resources, Pricing)
- **TBA**: 12+ dropdowns

---

#### 4. Checkout Friction (Mobile)
**Problem:**
- Magento default checkout (multi-step)
- Ingen express payment (Apple Pay, Google Pay, PayPal)
- Desktop-first design → cramped på mobil
- No 0% APR finance option

**Impact:**
- **Cart abandonment**: Estimated 60-70%
- **Mobile CR**: 1.2% vs desktop 3.5%
- Lost sales: **£30k-50k/year**

**Konkurrent-jämförelse:**
- **Reed**: DivideBuy 0% APR (3-12 månader)
- **iHasco**: Express checkout (inferred from modern UX)
- **TBA**: Standard Magento checkout

---

### High-Severity Issues (6)

5. **Pricing Transparency** — Prices synliga men inga discounts/bundles
6. **Course Discovery** — Sortering endast name/price (inga filters för difficulty/duration/accreditation)
7. **Visual Design** — Magento default theme, dated 2020-2022
8. **Review Integration** — Trustpilot finns men inte prominent (no carousel, no per-course ratings)
9. **Content Depth** — Produktsidor saknar "What You'll Learn" bullet points, video previews
10. **Mobile UX** — CTA obstructed av cookie modal, footer (scroll 3 screens för bulk-link)

---

### Key Research Insights

**Personas (4 identified):**
1. **First-Time Learner** (25-35, new to construction, needs CSCS Green)
2. **Career Advancer** (35-50, labourer → supervisor, needs SMSTS/IOSH)
3. **Compliance Officer** (30-55, HR/H&S, buys bulk for company)
4. **Return Customer** (any age, already bought 1+ course, knows system)

**User Journeys:**
- **85% Google direct-to-product** (high-intent, know what they want)
- **10% Homepage discovery** (don't know exact course)
- **5% Employer referral** (sent link by company)

**Pain Points:**
- "Is this legit?" (trust anxiety)
- "Will my employer accept it?" (accreditation confusion)
- "How long will it take?" (time-commitment fear)
- "Can I do it on my phone?" (device anxiety)

---

## 🎯 Slide 3: Opportunities Identified

### Opportunity Matrix

| Opportunity | Impact | Effort | Priority |
|-------------|--------|--------|----------|
| **Trust-first hero redesign** | 🔥🔥🔥 High | 🔨 Medium | P0 |
| **Dedicated B2B landing page** | 🔥🔥🔥 High | 🔨 Medium | P0 |
| **4-item simplified navigation** | 🔥🔥 Med-High | 🔨 Low-Med | P0 |
| **Story-driven content (testimonials)** | 🔥🔥🔥 High | 🔨🔨 High | P1 |
| **Express checkout (Apple Pay, etc)** | 🔥🔥 Medium | 🔨🔨 High | P1 |
| **Hub-and-spoke IA (SEO)** | 🔥🔥 Medium | 🔨 Medium | P1 |
| **Finance option (0% APR partner)** | 🔥🔥🔥 High | 🔨🔨🔨 V.High | P2 |
| **Career pathways visualization** | 🔥 Med-Low | 🔨🔨 High | P2 |

---

### Top 3 Opportunities Explained

#### 1. Trust-First Hero (P0) 🏆
**What:**
- Move Trustpilot score (4.8/5, 2,340 reviews) above fold
- Enlarge accreditation badges (CPD, CITB, HSE)
- Add employer logos ("Trusted by Balfour Beatty, Laing O'Rourke")
- Replace blocking cookie modal with non-blocking banner

**Why:**
- **Trust = #1 conversion blocker** for this audience
- 3-5 second window to convince skeptical builders
- Competitors ALL lead with trust (Reed, iHasco, CITB)

**Expected Impact:**
- +40% bounce rate reduction
- +25% conversion rate increase
- £25k-40k additional revenue/year

---

#### 2. Dedicated B2B Page (P0) 🏆
**What:**
- Create `/for-employers` landing page
- Bulk pricing tiers (10+, 50+, 100+ learners)
- Compliance dashboard demo
- Case studies (Balfour Beatty quote)
- Request Demo CTA (lead gen form)

**Why:**
- B2B = **40% revenue** but <5% visibility
- HR managers can't find bulk path
- Competitors have full B2B sections (iHasco entire nav)

**Expected Impact:**
- +150% employer inquiries (currently <10/month)
- +£50k-100k annual B2B revenue
- Higher AOV (£500-2000 vs £20)

---

#### 3. Story-Driven Content (P1) 🎬
**What:**
- Featured student testimonials (video + written)
- Instructor profiles ("Meet Your SMSTS Teacher: 20 Years on Site")
- Career progression timelines (Labourer → Manager roadmap)
- "Karriärer" section in main nav

**Why:**
- **Emotional connection** → differentiation
- Humanizes brand (not faceless Magento store)
- Positions TBA as **career partner**, not just course seller
- Podia-style approach (proven in SaaS, new in construction training)

**Expected Impact:**
- +200% dwell time (1m30s → 4min+)
- +15% conversion (emotional buy-in)
- SEO boost (long-form content, video embeds)
- £15k-25k additional revenue/year

---

## 🧭 Slide 4: Strategic Focus & Vägval

### 9 Business Goals (From Research)
1. **Increase individual course purchases** (P0)
2. **Increase employer/bulk sales** (P0)
3. **Increase trust & credibility** (P0)
4. **Improve course discovery** (P1)
5. **Increase returning buyer rate** (P1)
6. **Modernize brand presence** (P1)
7. **Increase organic search visibility** (P2)
8. **Build email/marketing pipeline** (P2)
9. **Reduce support burden** (P2)

### Vägval: Vad prioriterar vi?

#### ✅ FOCUS: Trust + B2B + Discovery (Goals 1-4)
**Varför:**
- **Highest ROI** → conversion blockers first
- **Quick wins** → trust redesign = weeks, not months
- **Revenue multipliers** → B2B = higher AOV
- **Competitive gaps** → Reed/iHasco redan gör detta bättre

**What we build:**
- Trust-first hero (Variant A eller C)
- Dedicated B2B landing page
- 4-item simplified navigation
- Hub-and-spoke IA (CSCS Cards, H&S, Management hubs)

---

#### ⏭️ DEFER: Finance, Checkout Overhaul, Email Automation (Goals 7-9)
**Varför:**
- **Higher effort** → checkout = Magento custom dev (4-6 weeks)
- **Partner dependencies** → 0% APR needs DivideBuy partnership
- **Lower immediate impact** → email automation = long-term play

**What we skip (Phase 1):**
- Express checkout (Apple Pay/Google Pay)
- 0% APR finance partnership
- Klaviyo automation sequences
- Advanced filtering (duration/difficulty/accreditation)

**When we revisit:**
- **Phase 2** (3-6 months post-launch)
- After measuring Phase 1 impact
- When Magento dev capacity available

---

#### 🎨 STYLE DIRECTION: Story-First (Variant C)
**Varför valde vi Podia-approach?**

**Konkurrent-gap:**
- Reed = Marketplace scale (breadth, not depth)
- iHasco = Enterprise focus (corporate, not individual)
- CITB = Authority (but terrible UX)
- **TBA = ?** → undefined positioning

**Our differentiation:**
- **Human-first** construction training
- **Career transformation** stories (labourer → manager)
- **Instructor credibility** (20 years on site, not just theory)
- **Community feel** (Podia-style social proof)

**Why it works:**
- Construction = personal industry (trust people > brands)
- **40-60 age group** responds to human stories
- Emotional buy-in → higher LTV (return customers)
- **No UK competitor** doing this (white space!)

---

### What We're NOT Building (Anti-Scope)

❌ **Marketplace** (Reed model) — TBA owns all courses, no aggregation  
❌ **Jobs Board** (Reed/LinkedIn) — Not core business (yet)  
❌ **Live Chat AI** — Tawk.to already works, no ROI  
❌ **Mobile App** — Web-first, mobile-responsive enough  
❌ **Video Course Platform** (Udemy) — Static content works for compliance training  
❌ **Community Forums** — Phase 3+ (post-launch)  

**Why anti-scope matters:**
- Prevents feature creep
- Keeps timeline realistic (6-8 weeks Phase 1)
- Focuses on **conversion**, not features

---

## 🎨 Slide 5: Variant A — Trust-First Hero

### Koncept
**"Visa trovärdighet innan allt annat"**

```
┌─────────────────────────────────────────────────────┐
│ [Logo] TBA    [Sök] [Kurser] [För Företag] [Logga in] │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Start Your Construction Career Today              │
│   Get CSCS Certified Online — Same-Day Results      │
│                                                     │
│   ⭐⭐⭐⭐⭐ 4.8 (2,340 reviews)                      │
│   [CPD Badge] [CITB Badge] [IOSH Badge]             │
│                                                     │
│   [Find Course →] [For Employers]                   │
│                                                     │
│   Trusted by 50,000+ learners • 98% pass rate       │
│   [Balfour] [Laing O'Rourke] [Kier Group]           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ How It Works                                        │
│ 1️⃣ Choose & Pay → 2️⃣ Complete Online → 3️⃣ Get Cert  │
└─────────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ Trust signals synliga omedelbart (betyg, badges, antal elever)
- ✅ Minskar tvivel innan scroll
- ✅ Passar risk-averse köpare (första jobbet, career change)

**SEO:**
- H1: "Start Your Construction Career Today"
- Meta desc: Trust + USP (same-day, online, certified)
- Rich snippets: Rating 4.8/5

---

## 🎨 Slide 6: Variant B — Search-First Hero

### Koncept
**"Låt användaren hitta sin kurs på 3 sekunder"**

```
┌─────────────────────────────────────────────────────┐
│ [Logo] TBA    [Kurser] [För Företag] [Logga in]      │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Get CSCS Certified Online                         │
│   Same-Day Results • 98% Pass Rate                  │
│                                                     │
│   ┌───────────────────────────────────────────┐   │
│   │ 🔍 Search courses, e.g. "CSCS Green Card" │   │
│   └───────────────────────────────────────────┘   │
│                                                     │
│   Popular: CSCS Green | CSCS Black | SMSTS          │
│                                                     │
│   ⭐ 4.8 (2,340) • [CPD] [CITB] [IOSH]              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ What Do You Need?                                   │
│ [CSCS Cards] [Health & Safety] [Management]         │
└─────────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ Snabbaste vägen till köp för return visitors
- ✅ Fungerar för folk som vet exakt vad de vill ha
- ✅ Mobil-first (stor sökruta är lättare än dropdown-nav)

**SEO:**
- Autocomplete → long-tail keywords
- Search analytics → vilka termer folk använder
- Schema markup för site search

**Target audience:**
- 85% av trafiken = Google direct-to-product (vet redan vad de vill ha)
- Return customers (köpt 1+ kurser innan)

---

## 🎨 Slide 7: Variant C — Story-First Hero ⭐ **REKOMMENDERAD**

### Koncept
**"Visa framtiden de får — inte bara produkten"** *(inspirerat av Podia)*

```
┌─────────────────────────────────────────────────────┐
│ [Logo] TBA    [Kurser] [Karriärer] [För Företag]     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Their careers finally found the right             │
│   start with The Builders Academy.                  │
│   So can yours.                                     │
│                                                     │
│   More than 50,000 learners — including site        │
│   workers, managers, and career changers —          │
│   started their construction journey here.          │
│                                                     │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │
│   │ 👤   │ │ 👤   │ │ 👤   │ │ 👤   │             │
│   │ Emma │ │ James│ │ Sarah│ │ David│             │
│   │ CSCS │ │ SMSTS│ │ IOSH │ │ NEBOS│             │
│   └──────┘ └──────┘ └──────┘ └──────┘             │
│                                                     │
│   [Start Your Journey →]                            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Featured Stories                                    │
│ "From Labourer to Site Manager in 18 Months"        │
│ 🎥 Watch Emma's Journey                             │
└─────────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ **Emotional connection** — visar transformation, inte bara certifikat
- ✅ **Differentiation** — ingen annan UK construction site gör detta
- ✅ **Längre engagement** — folk stannar för att läsa stories
- ✅ **Employer appeal** — visar kvalitet på elever de kan rekrytera

**SEO:**
- User-generated content (intervjuer, case studies)
- Video embeds → dwell time
- Social proof på steroids

**Long Vision:**
- **Featured Teacher Interviews** — "Meet Your SMSTS Instructor: 20 Years on Site"
- **Student Spotlights** — "How I Passed CSCS on First Try"
- **Career Pathways** — "Labourer → Supervisor → Manager" flödesschema
- **Employer Stories** — "Why Balfour Beatty Trusts Our Training"

---

## 🏗️ Slide 8: Produktsida Variants

### Variant A: Conversion-Optimized (Amazon-stil)
```
┌─────────────────────────────────────────────────────┐
│ CSCS Green Card                                     │
│ ⭐⭐⭐⭐⭐ 4.9 (1,240 reviews)                        │
│                                                     │
│ [Kurs-bild]  │ £19.99                               │
│              │ ✅ Same-day certificate               │
│              │ ✅ CPD accredited                     │
│              │ ✅ 98% pass rate                      │
│              │                                       │
│              │ [Add to Basket →]                     │
│              │ Delivery: Instant access              │
│              │ Guarantee: Pass or refund             │
├─────────────────────────────────────────────────────┤
│ What's Included?                                    │
│ • 2h online training                                │
│ • 50 practice questions                             │
│ • Instant PDF certificate                           │
└─────────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ All info above fold
- ✅ Trust signals synliga (reviews, pass rate)
- ✅ Clear CTA

**Target:** First-time buyers, high-intent (vet vad de vill ha)

---

### Variant B: Education-Focused (Udemy-stil) ⭐ **REKOMMENDERAD**
```
┌─────────────────────────────────────────────────────┐
│ CSCS Green Card Online Course                       │
│ Become a certified construction operative in 2 hours│
│                                                     │
│ Created by [Instructor Name] • Last updated Mar 2026│
│ ⭐ 4.9 (1,240) • 15,000 learners • CPD Accredited   │
│                                                     │
│ [Preview Course →] [Enrol Now - £19.99]             │
├─────────────────────────────────────────────────────┤
│ What You'll Learn                                   │
│ ✓ Health & safety fundamentals                      │
│ ✓ CSCS test preparation                             │
│ ✓ Same-day certification                            │
│                                                     │
│ Course Content                                      │
│ 📚 6 modules • 2h duration • 50 quiz questions      │
└─────────────────────────────────────────────────────┘
```

**Fördelar:**
- ✅ Fokus på learning outcomes (vad du får ut)
- ✅ Instruktör synlig (trust + personlighet)
- ✅ Preview-funktion (reduce anxiety)

**Target:** Career advancers, compliance officers (vill se value)

**Varför rekommenderad:**
- Kombinerar trust (instructor) + outcome (learning objectives)
- Passar Story-First Hero (variant C)
- Differentiation (humaniserar produkten)

---

## 📐 Slide 9: Information Architecture — Varför Omstrukturerad?

### Original Site (https://thebuildersacademy.co.uk/)
```
Huvudnavigation (12+ items):
- CSCS Cards
- Health & Safety
- Management
- Confined Spaces
- Working at Height
- First Aid
- Fire Safety
- Asbestos Awareness
- ...
```

**Problem:**
- ❌ 109+ total länkar → Cognitive overload
- ❌ Flera kurser i flera kategorier (SMSTS: Management + H&S)
- ❌ Svårt för employer att hitta bulk-ordering
- ❌ Ingen tydlig entry point för "vet inte vad jag behöver"

---

### Ny IA (React Prototype)
```
Huvudnavigation (4 items):
1. Kurser (dropdown)
   ├─ CSCS Cards
   ├─ Health & Safety
   ├─ Management
   └─ Specialistkurser
2. För Företag (NYA!)
   ├─ Bulk Ordering
   ├─ Custom Training
   └─ Compliance Dashboard
3. Karriärer (NYA!)
   ├─ Career Pathways
   ├─ Student Stories
   └─ Job Board (framtid)
4. Om Oss

Startsida:
├─ Hero (trust/search/story-first)
├─ "What Do You Need?" — 3 entry points:
│  ├─ CSCS Cards (mest populär)
│  ├─ Health & Safety
│  └─ Management
├─ How It Works (3 steps)
├─ Popular Courses (6 cards)
├─ Employer Section (nytt!)
└─ Trust Footer
```

**Förbättringar:**
✅ **3-choice rule** — "What Do You Need?" ger 3 tydliga vägar (inte 12+)  
✅ **Employer-separation** — Egen sida för B2B (inte gömd i footer)  
✅ **Story-section** — Karriärer får egen plats (differentiation)  
✅ **Mobile-first** — 4-item nav funkar på små skärmar

---

### IA Comparison Table

| Metric | Original | Redesign | Impact |
|--------|----------|----------|--------|
| **Navigation Items** | 12+ | 4 | -66% cognitive load |
| **Total Links** | 109+ | ~30 | -73% overwhelm |
| **Click Depth to Product** | 2-3 clicks | 1-2 clicks | -33% friction |
| **Duplicate Product Pages** | ~20% | 0% (canonicals) | SEO boost |
| **B2B Visibility** | Footer only | Dedicated page | +150% leads |
| **Emotional Content** | 0 stories | 15+ stories | Differentiation |
| **Mobile Nav Complexity** | 12 dropdowns | 1 dropdown | -92% taps |

---

## 🔍 Slide 10: SEO Motiveringar

### 1. Content Hierarchy
**Före:**
- H1: "The Builders Academy" (brand, inget värde)
- H2: Product titles (inte searchable)

**Efter:**
- H1: "Start Your Construction Career Today" (intent-match)
- H2: "Get CSCS Certified Online — Same-Day Results" (USP)
- H3: Category titles ("CSCS Cards", "Health & Safety")

**Impact:** +40% keyword coverage

---

### 2. Hub-and-Spoke Internal Linking
**Före:**
- Flat taxonomy (all courses på samma nivå)
- Footer-länkar till alla kurser (100+ länkar)

**Efter:**
```
Homepage
  │
  ├─ CSCS Cards (Hub) ← 500 ord guide
  │   ├─ Green Card
  │   ├─ Blue Card
  │   └─ ... (6 total)
  │
  ├─ Health & Safety (Hub) ← 800 ord guide
  │   ├─ IOSH Working Safely
  │   └─ ... (12 total)
  │
  └─ Karriärer (Hub) ← 1200 ord content
      └─ Student Stories
```

**Impact:**
- Topic clusters → topical authority
- Crawler efficiency (3x faster deep page discovery)
- Long-form hub content (500-1200 ord)

---

### 3. Core Web Vitals
**Före:**
- Magento (tung)
- 8-12s load time
- CLS issues (shifting layout)

**Efter:**
- Next.js 16 + Tailwind (53KB bundle)
- 0.6-0.9s load time ⚡
- Zero CLS (fixed header, pre-allocated image slots)

**Impact:** Mobil-first indexing boost

---

### 4. Structured Data (Schema.org)
```json
{
  "@type": "Course",
  "name": "CSCS Green Card",
  "provider": "The Builders Academy",
  "aggregateRating": {
    "ratingValue": 4.8,
    "reviewCount": 2340
  },
  "offers": {
    "price": "19.99",
    "priceCurrency": "GBP"
  }
}
```

**Impact:** Rich snippets i Google (ratings, price, availability)

---

## 📈 Slide 11: Success Metrics & Roadmap

### Current Baseline (Estimated)
- Conversion rate: **2-3%** (industry average)
- Avg time on site: **1m 30s**
- Mobile bounce rate: **65%**
- Employer inquiries: **<10/month**

### Target Goals (6 months post-launch)
- Conversion rate: **5-7%** (+100% improvement)
- Avg time on site: **4m+** (story engagement)
- Mobile bounce rate: **45%** (-20%)
- Employer inquiries: **+150%** (dedicated B2B section)

### How We'll Measure
- 📊 Google Analytics 4 (full event tracking)
- 🔥 Hotjar (heatmaps, session recordings)
- 📋 User testing (5 participants/month)
- 💬 Customer surveys (post-purchase NPS)

---

### Implementation Roadmap

#### Phase 1: MVP (2 weeks)
- ✅ React prototype (startsida + produktsida)
- ✅ 3 style variants för client review
- ⏳ Client feedback & style selection

#### Phase 2: Content Production (2-4 weeks)
- 📸 Shoot 3-5 student testimonial videos
- 🎤 Record 2 instructor interviews
- 📝 Write 5 case studies
- 🎨 Design career pathway infographic

#### Phase 3: Full Build (4-6 weeks)
- 💻 Next.js production site
- 🔌 Magento API integration
- 🧪 A/B testing setup (Google Optimize)
- 📊 Analytics implementation

#### Phase 4: Launch & Optimize (Ongoing)
- 📈 Monitor conversion rate
- 🔄 Iterate based on user behavior
- 🎥 Add more stories quarterly
- 🏆 Launch career pathways tool

---

## ✅ Slide 12: Rekommendation

### Style Direction
**Variant C (Story-First Hero)** + **Variant B (Education-Focused Product Page)**

### Varför?
1. **Differentiation** — Ingen konkurrent kör story-approach i UK construction training
2. **Long-term Value** — Stories är evergreen content (uppdateras årligen)
3. **Dual Appeal** — Fungerar för både B2C (emotional) och B2B (quality proof)
4. **SEO** — Video + case studies = massive dwell time boost
5. **White space opportunity** — Reed = scale, iHasco = enterprise, CITB = authority, **TBA = human-first**

---

### Strategic Focus (Phase 1)
**P0 (Must-Have):**
- Trust-first hero redesign
- Dedicated B2B landing page
- 4-item simplified navigation
- Hub-and-spoke IA

**P1 (Should-Have):**
- Story section (3-5 testimonials)
- Instructor profiles (2 featured)
- Career pathway visualization

**P2 (Nice-to-Have, defer):**
- Express checkout (Apple Pay/Google Pay)
- 0% APR finance partnership
- Klaviyo email automation

---

### Next Steps
1. ✅ **Review denna presentation** med client
2. 📸 **Plan first 3 student shoots** (budget: £500-1000 for video production)
3. 🎨 **Finalize design tokens** (colors, typography, spacing)
4. 💻 **Start production build** (Next.js + Magento integration)
5. 🧪 **Set up A/B testing** (trust-first vs search-first vs story-first)

---

## 🙋‍♂️ Frågor?

**Diskussionspunkter:**
- Vilken style variant föredrar ni? (A/B/C)
- Budget för video production (student testimonials)?
- Timeline för Phase 2 content production?
- Magento dev capacity för API integration?
- Vilka employer logos får vi använda?

---

**Appendix: Research Artifacts**
- 10 audit reports (UX, Trust, SEO, Accessibility, etc.)
- 4 personas + 3 user journeys
- Competitive benchmark (Reed, iHasco, CITB)
- Wireframes (homepage, product page, employer page)
- Strategic direction document (9 business goals)

