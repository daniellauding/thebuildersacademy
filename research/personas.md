# Phase 1: User Personas

**Project:** The Builders Academy Redesign
**Date:** 2026-03-03
**Status:** Phase 1 Complete

---

## Persona 1: Dave — The Builder/Tradesperson

**"I just need the card so I can get on site."**

### Profile
- **Age:** 28-55
- **Role:** Builder, labourer, tradesperson
- **Digital literacy:** Low to moderate
- **Device:** Mobile (70%+), sometimes desktop at home
- **Typical spend:** £35-£120 per course

### Motivations
- Needs a specific certification (CSCS Green Card, Asbestos Awareness, etc.) to work on a site
- Employer or agency told him he needs it — urgency is high
- Wants the cheapest, fastest route to the certificate
- "Same-day certificate" is the killer feature — he may need it tomorrow
- Prefers online over in-person (saves time, can do it after work)

### Friction Points
- **Low trust in online training** — "Is this legit? Will my employer accept it?"
- **Confusing navigation** — 109+ links. Dave doesn't browse, he searches for one specific thing
- **Payment anxiety** — Reluctant to enter card details on an unfamiliar site, especially on mobile
- **Jargon uncertainty** — Knows he needs "the green card" but may not know the official course name (CSCS Level 1 / Health & Safety in Construction Environment)
- **Long product descriptions** — Won't read walls of text. Needs key facts: price, duration, what he gets, is it accepted

### Mental Model
Dave thinks in outcomes, not products. He's not "shopping for courses" — he's getting a requirement ticked off. His mental model is:
1. I need [card/certificate]
2. Google it
3. Find cheapest/quickest option
4. Pay and do it
5. Get certificate, move on

### Design Implications
- Product pages must lead with **what you get** (certificate name, accreditation body, validity period)
- Price, duration, and "same-day certificate" must be visible without scrolling
- Trust signals (Trustpilot, accreditation badges, employer logos) must be prominent
- Mobile checkout must be frictionless — ideally Apple Pay / Google Pay
- Search and course names should support informal terms ("green card course", "banksman")

### User Journey Map

```
Trigger          Search              Land              Evaluate           Purchase
─────────────────────────────────────────────────────────────────────────────────────
"Boss says I     Google: "CSCS       Product page      Scans for:         Adds to cart
 need green      green card          (direct link)     - Price            → Checkout
 card"           course online"                        - Duration         → Payment
                                                       - "Same day"       → Certificate
                                                       - Reviews

Key emotions:  Urgency / Mild     Scanning quickly   Trust assessment   Anxiety about
               frustration        for relevance      "Is this legit?"   payment on mobile
```

---

## Persona 2: Sarah — The Employer/Training Manager

**"I need to get 12 lads certified by end of month."**

### Profile
- **Age:** 30-55
- **Role:** HR manager, training coordinator, or site manager at a construction company
- **Digital literacy:** Moderate to high
- **Device:** Desktop (primary), mobile for quick checks
- **Typical spend:** £500-£5,000+ per order (bulk)

### Motivations
- Regulatory compliance — needs staff trained to meet HSE requirements
- Efficiency — wants one supplier for multiple courses, not shopping around
- Cost control — needs bulk pricing or package deals
- Audit trail — needs proper invoices, certificates, and completion records
- Reliability — needs to know staff will actually get certified

### Friction Points
- **No visible bulk/employer pathway** — The site currently offers no visible way to buy for multiple people. Sarah has to add courses one by one or call to ask about bulk pricing
- **No company account/invoicing** — Construction companies often need invoices, PO numbers, and payment on account. Current checkout is consumer-focused
- **Certificate management** — Needs to track which staff have completed which courses. No employer dashboard visible
- **Discovery burden** — Needs to find 4-5 different courses for different roles. Navigation doesn't support "build a training package" flow
- **Trust at organizational level** — Needs to justify the provider choice to management. CPD accreditation and employer logos help, but a dedicated "For Employers" page would be stronger

### Mental Model
Sarah thinks in programs, not individual courses. Her mental model is:
1. What training does my team need?
2. Can I get it all from one provider?
3. Is it accredited and will HSE accept it?
4. What's the bulk pricing?
5. How do I track completion?

### Design Implications
- Create a visible "For Employers" / "Business" pathway from the homepage
- Offer bulk pricing or "Request a Quote" flow for 5+ licences
- Show a training matrix: roles x required courses
- Emphasize accreditation and compliance value (not just "cheap and fast")
- Provide employer testimonials and case studies (Skanska, Kier, G4S already exist as logos — add their stories)
- Support invoicing, PO numbers, and account management in checkout

### User Journey Map

```
Trigger          Research             Evaluate           Contact/Buy        Manage
──────────────────────────────────────────────────────────────────────────────────────
HSE audit or     Google: "bulk        Homepage or        Looks for bulk     Tracks staff
new site         construction         category pages     pricing →          completion
requirement      training online"     → browses          Can't find it →    → Needs
                                      multiple courses   Calls or chats     certificates

Key emotions:   Pressure / Need     Comparing options  Frustration at     Ongoing need
                for efficiency      "Can I do it all   lack of employer   for admin
                                    here?"             features           visibility
```

---

## Persona 3: Marcus — The Returning Buyer

**"I did my Asbestos Awareness here last year. What else do I need?"**

### Profile
- **Age:** 25-50
- **Role:** Experienced tradesperson building qualifications over time
- **Digital literacy:** Moderate (already completed an online course successfully)
- **Device:** Mobile (primary), occasional desktop
- **Typical spend:** £35-£120 per visit, 2-4 times per year

### Motivations
- Already trusts the platform — had a good experience before
- Needs to add more certifications to expand what sites he can work on
- May have expiring certificates that need renewal (courses valid for 3 years)
- Wants to "level up" — move from labourer to a more specialized role
- Convenience — already has an account, knows the process

### Friction Points
- **No personalized experience** — Site doesn't show "courses you might need" based on past purchases
- **No renewal reminders** — Certificates expire after 3 years. No email or account prompt to renew
- **Discovery gap** — Knows the platform, but course names are long and navigation is cluttered. Finding "what should I do next" is hard
- **No career pathway view** — Can't see a progression path (e.g., "You have Green Card → next get Traffic Marshal → then Supervisor")
- **Re-login friction** — If he has to create a new account or can't remember credentials, may go elsewhere

### Mental Model
Marcus thinks in career progression. His mental model is:
1. I've done [previous course] here before
2. Now I need [next certification]
3. Go back to the same site (trusts it)
4. Find the course, buy it, do it
5. Add to my growing portfolio of certificates

### Design Implications
- "My Courses" dashboard showing completed courses, expiry dates, and recommended next steps
- Email nurture sequences (via Klaviyo) for certificate renewal and progression
- Cross-sell recommendations on product pages: "Builders who took this also took..."
- Simplified re-login (magic link, social login, or persistent session)
- Course bundles positioned as "Career Packs" — save by buying your next 3 certifications together

### User Journey Map

```
Trigger          Return               Browse             Purchase           Complete
──────────────────────────────────────────────────────────────────────────────────────
Certificate      Direct URL or        Browses categories  Familiar with     Does course,
expiring, or     Google brand         or searches for     process →         adds to
new site needs   search "builders     specific course     Quick checkout    portfolio
more certs       academy"                                 (account exists)

Key emotions:   Trust / Loyalty     Mild friction       Confidence        Satisfaction
                "I used them        finding next        (repeat buyer)    "Growing my
                before"             course                                qualifications"
```

---

## Persona 4: Terry — The Low Digital Literacy User

**"My son showed me how to do this on my phone."**

### Profile
- **Age:** 50-65+
- **Role:** Experienced tradesperson who has always done in-person training
- **Digital literacy:** Low — uses phone for calls, WhatsApp, and basic browsing
- **Device:** Mobile (phone), rarely uses a computer
- **Typical spend:** £35-£220 (often needs the full CSCS package with exam booking)

### Motivations
- Has been told online training is mandatory (or much cheaper/faster than in-person)
- Wants to keep working — can't afford to not have the required certifications
- May be nervous about online learning but willing to try
- Needs reassurance that it's straightforward and he won't get stuck

### Friction Points
- **Complex navigation overwhelms** — 109+ links, dropdown menus, hover states. Terry needs clear, big, obvious paths
- **Small text and targets** — Default mobile text sizes and tap targets are too small for users who wear reading glasses on site
- **Payment process anxiety** — Very nervous about entering card details online. "What if I get scammed?"
- **Course completion uncertainty** — "What happens after I pay? How do I actually do the course? Will it work on my phone?"
- **Account creation barrier** — Email/password requirements, email verification, remembering credentials
- **Jargon and acronyms** — CPD, CITB, CSCS, EUSR, FAW, EFAW — Terry knows what he needs practically but not all the official acronyms
- **Cookie consent popups** — Confusing consent dialog with 80+ cookies listed is terrifying for low-tech users

### Mental Model
Terry thinks in simple steps and needs hand-holding. His mental model is:
1. Someone told me to go to this website
2. Find the thing I need
3. Pay for it (hopefully it's safe)
4. Do the course (hopefully I can manage)
5. Get my certificate (hopefully it works)

Every step has a "hopefully" — Terry needs constant reassurance.

### Design Implications
- **Large tap targets** (minimum 48px, ideally 56px+ for primary actions)
- **Large, readable text** (16px minimum body, 18px preferred)
- **High contrast** (WCAG AAA for critical elements like price, CTA, navigation)
- **Simple, linear flows** — Minimize choices, use progressive disclosure
- **Visible phone number** — Terry may prefer to call and order over the phone
- **"How it works" section** — 3-step visual: 1) Buy 2) Complete online 3) Get certificate
- **Payment trust signals next to checkout** — Padlock, "Secure payment", Stripe logo, money-back guarantee
- **Simplified cookie consent** — One "Accept all" button, not a complex categorized dialog
- **Post-purchase guidance** — Clear "What happens next" email and on-screen confirmation

### User Journey Map

```
Trigger          Arrive               Understand          Purchase           Complete
──────────────────────────────────────────────────────────────────────────────────────
Colleague or     Types URL or         Reads carefully,    Hesitates at      Follows step-
employer sends   taps a link          needs to            checkout →        by-step
him a link       someone sent         understand what     Looks for phone   instructions
                                      he's buying         number or help    → Gets cert

Key emotions:   Apprehension        Caution / Need     Anxiety / Trust    Relief /
                "Can I do this?"    for clarity        "Is this safe?"   Pride
                                                                         "I did it!"
```

---

## Persona Priority Matrix

| Persona | Revenue Impact | Traffic Volume | Design Effort | Priority |
|---------|---------------|---------------|---------------|----------|
| Dave (Builder) | High (volume) | Highest (organic search) | Medium | **#1** |
| Sarah (Employer) | Very High (AOV) | Low (but growing) | High (new features) | **#2** |
| Terry (Low literacy) | Medium | Medium | High (accessibility) | **#3** |
| Marcus (Returning) | Medium (LTV) | Low-Medium | Medium (personalization) | **#4** |

**Key insight:** Optimizing for Dave (the direct-from-Google builder) has the highest immediate revenue impact. But designing for Terry (low digital literacy) forces accessibility and simplicity improvements that benefit ALL personas. If Terry can use it, everyone can.

---

*Next: Phase 1 — Conversion Journeys (conversion-journeys.md)*
