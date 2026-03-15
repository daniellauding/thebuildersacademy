# Checkout Flow Wireframes — The Builders Academy

## Layout Principles

Based on Phase 1-2 research findings:

- **3 steps max:** Cart → Details → Payment (conversion journey: minimize steps)
- **Guest checkout enabled:** No forced account creation (friction point from audit)
- **Express payment:** Apple Pay + Google Pay options (Dave persona: 70%+ mobile)
- **Security signals near payment:** Trust badges, secure checkout, money-back guarantee
- **Progress indicator:** Clear visual of current step
- **Large tap targets:** 48px+ on mobile (Terry persona: low digital literacy)
- **Minimal form fields:** Only essential information collected
- **Cross-sell in cart:** 1-2 related courses (target: +15% AOV)

---

## Screen 1: Cart + Guest/Account Choice

### Desktop (1280px)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]              CHECKOUT                      📞 0800 XXX XXXX          │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ●───────────────○───────────────○                                           │
│  1. Cart         2. Details      3. Payment                                  │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  YOUR CART                                      ORDER SUMMARY                │
│                                                                               │
│  ┌────────────────────────────────────┐        ┌────────────────────┐        │
│  │                                    │        │                    │        │
│  │  CSCS Green Card Test              │        │  Subtotal: £35.00  │        │
│  │  Labourer & Operatives             │        │  VAT (0%): £0.00   │        │
│  │  £35.00              [Remove]      │        │                    │        │
│  │                                    │        │  ────────────────  │        │
│  └────────────────────────────────────┘        │                    │        │
│                                                 │  Total:   £35.00  │        │
│  ─────────────────────────────────────         │                    │        │
│                                                 │  ────────────────  │        │
│  COMPLETE YOUR TRAINING (optional)              │                    │        │
│                                                 │  CHECKOUT AS:      │        │
│  ┌───────────────┐  ┌───────────────┐          │                    │        │
│  │ Working at    │  │ Manual        │          │  ○ Guest           │        │
│  │ Height        │  │ Handling      │          │    (faster)        │        │
│  │ £25.00        │  │ £20.00        │          │  ○ Create account  │        │
│  │ [+ ADD]       │  │ [+ ADD]       │          │    (save progress) │        │
│  └───────────────┘  └───────────────┘          │                    │        │
│                                                 │  [CONTINUE →]      │        │
│                                                 │                    │        │
│                                                 │  🔒 Secure         │        │
│                                                 │  30-day money-back │        │
│                                                 │  guarantee         │        │
│                                                 │                    │        │
│                                                 └────────────────────┘        │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌─────────────────────────────┐
│  [LOGO]      CHECKOUT       │
├─────────────────────────────┤
│                             │
│  ●─────○─────○              │
│  Cart  Details Payment      │
│                             │
├─────────────────────────────┤
│                             │
│  YOUR CART                  │
│                             │
│  CSCS Green Card Test       │
│  Labourer & Operatives      │
│  £35.00          [Remove]   │
│                             │
│  ─────────────────────────  │
│                             │
│  ADD TO YOUR ORDER          │
│  ┌───────────────────────┐  │
│  │ Working at Height     │  │
│  │ £25  [+ ADD]          │  │
│  └───────────────────────┘  │
│  ┌───────────────────────┐  │
│  │ Manual Handling       │  │
│  │ £20  [+ ADD]          │  │
│  └───────────────────────┘  │
│                             │
│  ─────────────────────────  │
│                             │
│  Subtotal:        £35.00    │
│  VAT (0%):        £0.00     │
│  Total:           £35.00    │
│                             │
│  ─────────────────────────  │
│                             │
│  CHECKOUT AS:               │
│  ┌───────────────────────┐  │
│  │ ○ Guest (faster)      │  │  ← 56px tap target
│  └───────────────────────┘  │
│  ┌───────────────────────┐  │
│  │ ○ Create account      │  │
│  │   (save progress)     │  │
│  └───────────────────────┘  │
│                             │
│  [CONTINUE TO DETAILS →]    │  ← 56px, full-width
│                             │
│  🔒 Secure checkout         │
│  30-day money-back guarantee│
│                             │
└─────────────────────────────┘
```

---

## Screen 2: Billing Details

### Desktop (1280px)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]              CHECKOUT                      📞 0800 XXX XXXX          │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ✓───────────────●───────────────○                                           │
│  1. Cart         2. Details      3. Payment                                  │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  BILLING DETAILS                                ORDER SUMMARY                │
│                                                                               │
│  Email *                                       ┌────────────────────┐        │
│  ┌──────────────────────────────────┐          │                    │        │
│  │  you@example.com                 │          │  CSCS Green Card   │        │
│  └──────────────────────────────────┘          │  Test              │        │
│  We'll send your certificate here              │  £35.00            │        │
│                                                 │                    │        │
│  Full Name *                                    │  ────────────────  │        │
│  ┌──────────────────────────────────┐          │  Subtotal: £35.00  │        │
│  │                                  │          │  VAT:      £0.00   │        │
│  └──────────────────────────────────┘          │  Total:    £35.00  │        │
│                                                 │                    │        │
│  Phone * (for certificate)                      └────────────────────┘        │
│  ┌──────────────────────────────────┐                                        │
│  │  +44                             │                                        │
│  └──────────────────────────────────┘                                        │
│                                                                               │
│  Company Name (optional)                                                     │
│  ┌──────────────────────────────────┐                                        │
│  │                                  │                                        │
│  └──────────────────────────────────┘                                        │
│  For employers: put company name for records                                 │
│                                                                               │
│  ☐ I'd like to receive course recommendations                               │
│                                                                               │
│  [← BACK TO CART]                                [CONTINUE TO PAYMENT →]     │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌─────────────────────────────┐
│  [LOGO]      CHECKOUT       │
├─────────────────────────────┤
│                             │
│  ✓─────●─────○              │
│  Cart  Details Payment      │
│                             │
├─────────────────────────────┤
│                             │
│  BILLING DETAILS            │
│                             │
│  Email *                    │
│  ┌───────────────────────┐  │
│  │ you@example.com       │  │  ← type="email"
│  └───────────────────────┘  │
│  Certificate sent here      │
│                             │
│  Full Name *                │
│  ┌───────────────────────┐  │
│  │                       │  │  ← 48px input height
│  └───────────────────────┘  │
│                             │
│  Phone *                    │
│  ┌───────────────────────┐  │
│  │ +44                   │  │  ← type="tel"
│  └───────────────────────┘  │
│                             │
│  Company (optional)         │
│  ┌───────────────────────┐  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  ─────────────────────────  │
│                             │
│  CSCS Green Card   £35.00   │
│  Total:            £35.00   │
│                             │
│  [← BACK]                   │
│  [CONTINUE TO PAYMENT →]    │  ← 56px, full-width
│                             │
└─────────────────────────────┘
```

---

## Screen 3: Payment

### Desktop (1280px)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]              CHECKOUT                      📞 0800 XXX XXXX          │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ✓───────────────✓───────────────●                                           │
│  1. Cart         2. Details      3. Payment                                  │
│                                                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  PAYMENT METHOD                                 ORDER SUMMARY                │
│                                                                               │
│  ┌────────────────────────────────────┐        ┌────────────────────┐        │
│  │                                    │        │                    │        │
│  │  EXPRESS CHECKOUT                  │        │  CSCS Green Card   │        │
│  │                                    │        │  Test              │        │
│  │  [     Apple Pay     ]             │        │  £35.00            │        │
│  │  [    Google Pay     ]             │        │                    │        │
│  │                                    │        │  ────────────────  │        │
│  │  ──── OR PAY WITH CARD ────        │        │  Subtotal: £35.00  │        │
│  │                                    │        │  VAT:      £0.00   │        │
│  │  Card Number                       │        │  Total:    £35.00  │        │
│  │  ┌──────────────────────────────┐  │        │                    │        │
│  │  │  1234 5678 9012 3456         │  │        │  ────────────────  │        │
│  │  └──────────────────────────────┘  │        │                    │        │
│  │                                    │        │  Billing:          │        │
│  │  Expiry          CVV              │        │  Dave Thomas       │        │
│  │  ┌──────────┐   ┌──────────┐     │        │  dave@email.com    │        │
│  │  │  MM / YY  │   │  123     │     │        │                    │        │
│  │  └──────────┘   └──────────┘     │        │  [Edit details]    │        │
│  │                                    │        │                    │        │
│  │  Name on Card                      │        └────────────────────┘        │
│  │  ┌──────────────────────────────┐  │                                      │
│  │  │  Dave Thomas                 │  │                                      │
│  │  └──────────────────────────────┘  │                                      │
│  │                                    │                                      │
│  └────────────────────────────────────┘                                      │
│                                                                               │
│  🔒 Your payment is secure and encrypted                                     │
│  [Visa] [Mastercard] [Amex] [Secure Checkout Badge]                         │
│                                                                               │
│  [← BACK TO DETAILS]                            [COMPLETE PURCHASE →]        │
│                                                                               │
│  By purchasing, you agree to our Terms & Conditions and Privacy Policy       │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌─────────────────────────────┐
│  [LOGO]      CHECKOUT       │
├─────────────────────────────┤
│                             │
│  ✓─────✓─────●              │
│  Cart  Details Payment      │
│                             │
├─────────────────────────────┤
│                             │
│  EXPRESS CHECKOUT            │
│                             │
│  [     Apple Pay     ]      │  ← 56px height
│  [    Google Pay     ]      │  ← 56px height
│                             │
│  ──── OR PAY WITH CARD ──── │
│                             │
│  Card Number                │
│  ┌───────────────────────┐  │
│  │ 1234 5678 9012 3456   │  │  ← 48px input
│  └───────────────────────┘  │
│                             │
│  ┌──────────┐ ┌──────────┐  │
│  │ MM / YY  │ │ CVV      │  │
│  └──────────┘ └──────────┘  │
│                             │
│  Name on Card               │
│  ┌───────────────────────┐  │
│  │ Dave Thomas           │  │
│  └───────────────────────┘  │
│                             │
│  ─────────────────────────  │
│                             │
│  🔒 Secure & encrypted     │
│  [Visa] [MC] [Amex] [🔒]  │
│                             │
│  ─────────────────────────  │
│                             │
│  CSCS Green Card   £35.00   │
│  Total:            £35.00   │
│                             │
│  [← BACK]                   │
│  [COMPLETE PURCHASE →]      │  ← 56px, full-width
│                             │  ← Primary color, bold
│  Terms & Privacy apply      │
│                             │
└─────────────────────────────┘
```

---

## Post-Purchase Confirmation Screen

### Desktop

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                                                      │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                    ✅  ORDER CONFIRMED!                                       │
│                                                                               │
│              Thank you, Dave. Your order #TBA-12345 is confirmed.            │
│              We've sent a confirmation email to dave@email.com               │
│                                                                               │
│  ─────────────────────────────────────────────────────────────────────────    │
│                                                                               │
│  WHAT HAPPENS NEXT                                                            │
│                                                                               │
│  ①  Check your email for login details                                       │
│  ②  Start the course at your own pace                                        │
│  ③  Complete the assessment (unlimited retakes)                              │
│  ④  Download your certificate instantly                                      │
│                                                                               │
│  [START YOUR COURSE NOW →]                                                   │
│                                                                               │
│  ─────────────────────────────────────────────────────────────────────────    │
│                                                                               │
│  ORDER DETAILS                                                                │
│                                                                               │
│  CSCS Green Card Test                                          £35.00        │
│  Total Paid:                                                   £35.00        │
│                                                                               │
│  ─────────────────────────────────────────────────────────────────────────    │
│                                                                               │
│  NEED HELP?                                                                   │
│  📞 0800 XXX XXXX  |  💬 Live Chat  |  📧 support@thebuildersacademy.com    │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌─────────────────────────────┐
│  [LOGO]                     │
├─────────────────────────────┤
│                             │
│       ✅ ORDER CONFIRMED!   │
│                             │
│  Thank you, Dave.           │
│  Order #TBA-12345           │
│                             │
│  Confirmation email sent    │
│  to dave@email.com          │
│                             │
├─────────────────────────────┤
│                             │
│  WHAT HAPPENS NEXT          │
│                             │
│  ① Check email for login    │
│  ② Start the course         │
│  ③ Complete assessment      │
│  ④ Download certificate     │
│                             │
│  [START YOUR COURSE →]      │  ← 56px, full-width
│                             │
├─────────────────────────────┤
│                             │
│  ORDER DETAILS              │
│  CSCS Green Card   £35.00   │
│  Total Paid:       £35.00   │
│                             │
├─────────────────────────────┤
│                             │
│  NEED HELP?                 │
│  📞 0800 XXX XXXX          │
│  💬 Live Chat               │
│                             │
└─────────────────────────────┘
```

---

## Checkout Flow Rationale

### Screen 1: Cart
- **Cross-sell:** 2 related courses below cart items (target +15% AOV)
- **Guest/Account toggle:** Guest is default for faster checkout
- **Order summary:** Persistent on desktop (sticky sidebar)
- **Security signals:** Lock icon, money-back guarantee near CTA
- **Why:** Cart abandonment reduction target of 20%

### Screen 2: Billing Details
- **4 fields only:** Email, Name, Phone, Company (optional)
- **Helper text:** "Certificate sent here" under email field
- **Company field:** Optional, but enables employer tracking
- **No address fields:** Digital product, no shipping needed
- **Why:** Minimal form fields = less mobile friction (Dave persona)

### Screen 3: Payment
- **Express checkout first:** Apple Pay / Google Pay above card form
- **Why:** Dave persona on mobile — one-tap payment reduces friction dramatically
- **Card form:** Standard fields (number, expiry, CVV, name)
- **Trust signals:** Payment method logos, secure checkout badge, encrypted text
- **Order summary:** Visible with edit link

### Post-Purchase
- **Clear next steps:** 4-step process (What Happens Next)
- **"Start Course" CTA:** Immediate action available
- **Why:** Terry persona needs post-purchase guidance (persona research finding)
- **Support contact:** Phone + chat visible for any issues

### Progress Indicator
- **3 steps:** Visual dots/checkmarks showing current position
- **Why:** Reduces anxiety about how many steps remain
- **Completed steps:** Checkmark icon instead of number

### Mobile Optimizations
- **56px button heights:** For large tap targets (Terry persona)
- **Full-width CTAs:** No missed taps
- **Inline order summary:** Collapsed on mobile to save space
- **Input types:** email, tel — triggers appropriate mobile keyboard
- **48px input heights:** Easy to tap into on mobile
