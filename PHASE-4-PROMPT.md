# Phase 4: Frontend Design System Implementation — The Builders Academy

## Context
You are building a production-ready frontend design system using **shadcn/ui + Tailwind CSS** based on wireframes, theme design, and audit findings.

**Previous Phases:**
- Phase 1: Research (business goals, personas, journeys)
- Phase 2: Audit (9 comprehensive audits)
- Phase 2.5: Wireframes (7 files with ASCII layouts, component specs, theme design)

**Reference Files:**
- `wireframes/homepage.md` — Desktop + mobile layouts
- `wireframes/product-page.md` — Product page layouts
- `wireframes/category-page.md` — Category page layouts
- `wireframes/checkout-flow.md` — 3-screen checkout
- `wireframes/employer-pathway.md` — B2B landing page
- `wireframes/component-specs.md` — Complete component inventory
- `wireframes/theme-design.md` — Typography, colors, spacing, shadows

**Audit Findings (Critical):**
- Navigation overload (109+ links → 5-7 categories)
- No guest checkout (major friction)
- No employer pathway (£500K uncaptured)
- Trust signals buried (move above fold)
- Mobile tap targets <48px (accessibility fail)

---

## Objective
Build a **working design system** in Next.js 15 + shadcn/ui + Tailwind CSS that implements:

1. **Design Tokens** (Tailwind config)
2. **Core Components** (38+ components with variants)
3. **Page Templates** (5 key pages)
4. **Storybook Integration** (component documentation)
5. **Accessibility** (WCAG 2.2 AA compliance)

---

## Tech Stack

### Core Framework
- **Next.js 15** (App Router, React Server Components)
- **React 19** (latest stable)
- **TypeScript** (strict mode)

### UI Framework
- **shadcn/ui** (copy-paste components, Radix UI primitives)
- **Tailwind CSS 4.0** (utility-first CSS)
- **Radix UI** (headless accessible components)

### Styling System
- **CVA (Class Variance Authority)** (component variants)
- **tailwind-merge** (merge Tailwind classes)
- **clsx** (conditional classes)

### Documentation
- **Storybook 8** (component preview + docs)
- **@storybook/addon-a11y** (accessibility testing)
- **storybook-addon-designs** (Figma links later)

---

## Project Structure

```
builders-academy-design-system/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── primitives/   # Custom primitives
│   │   │   ├── trust-badge.tsx
│   │   │   ├── search-bar.tsx
│   │   │   └── ...
│   │   └── templates/    # Page templates
│   │       ├── homepage.tsx
│   │       ├── product-page.tsx
│   │       └── ...
│   ├── lib/
│   │   ├── utils.ts      # cn() helper
│   │   └── constants.ts  # Design tokens
│   ├── styles/
│   │   └── globals.css   # Tailwind + custom CSS
│   └── app/
│       ├── page.tsx      # Homepage demo
│       ├── product/      # Product page demo
│       └── layout.tsx    # Root layout
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── theme.ts
├── tailwind.config.ts    # Design tokens
├── components.json       # shadcn/ui config
└── package.json
```

---

## Phase 4 Deliverables

### Iteration 1: Setup + Design Tokens (15 min)

**Tasks:**
1. Initialize Next.js 15 project with TypeScript
2. Install shadcn/ui + dependencies
3. Configure Tailwind with design tokens from `wireframes/theme-design.md`
4. Set up Storybook 8

**Design Tokens (from theme-design.md):**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Brand colors (from client PDF)
        primary: {
          DEFAULT: '#1F396D', // Dark Blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#16A34A', // Green
          foreground: '#FFFFFF',
        },
        // UI Surface colors
        background: '#FFFFFF',
        foreground: '#334155', // Heading
        muted: {
          DEFAULT: '#F8FAFC', // BG Light Gray
          foreground: '#475569', // Body text
        },
        accent: {
          DEFAULT: '#E1F1EA', // BG Secondary (Light Mint)
          foreground: '#334155',
        },
        // Semantic colors
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      fontSize: {
        // Display scale (D1-D6)
        'd1': '128px',
        'd2': '96px',
        'd3': '72px',
        'd4': '60px',
        'd5': '48px',
        'd6': '36px',
        // Heading scale (H1-H6)
        'h1': '30px',
        'h2': '24px',
        'h3': '20px',
        'h4': '18px',
        'h5': '16px',
        'h6': '14px',
      },
      spacing: {
        // 4px base unit
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'none': '0',
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '14px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'level-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'level-2': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'level-3': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'level-4': '0 20px 48px rgba(0, 0, 0, 0.15)',
      },
    },
  },
}
```

**Deliverable:** `design-system/01-setup.md` (setup log + token documentation)

---

### Iteration 2: Core Components (20 min)

**Install shadcn/ui components:**
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add badge
npx shadcn@latest add dropdown-menu
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add toggle
npx shadcn@latest add avatar
npx shadcn@latest add skeleton
```

**Customize variants (from component-specs.md):**

**Button Component:**
```typescript
// src/components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "hover:bg-muted",
        disabled: "opacity-50 cursor-not-allowed",
      },
      size: {
        sm: "h-8 px-3 text-sm", // 32px
        md: "h-10 px-4 text-base", // 40px
        lg: "h-12 px-6 text-lg", // 48px
        xl: "h-14 px-8 text-xl", // 56px (mobile)
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
```

**Card Component (Product Card, Category Card, Trust Card):**
```typescript
// src/components/ui/card.tsx
const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "border-muted shadow-level-2",
        elevated: "border-muted shadow-level-3",
        outlined: "border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

**Input Component (with states):**
```typescript
// src/components/ui/input.tsx
const inputVariants = cva(
  "w-full rounded-sm border px-3 transition-colors",
  {
    variants: {
      size: {
        sm: "h-8 text-sm", // 32px
        md: "h-10 text-base", // 40px
        lg: "h-12 text-lg", // 48px
      },
      state: {
        default: "border-muted focus:border-primary",
        error: "border-error focus:border-error",
        success: "border-success focus:border-success",
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
)
```

**Deliverable:** `design-system/02-components.md` (component inventory + usage examples)

---

### Iteration 3: Custom Primitives (15 min)

**Build custom components (from component-specs.md):**

**TrustBadge:**
```typescript
// src/components/primitives/trust-badge.tsx
export function TrustBadge({ type }: { type: 'cpd' | 'citb' | 'trustpilot' }) {
  const badges = {
    cpd: { label: 'CPD Accredited', icon: '✓' },
    citb: { label: 'CITB Approved', icon: '✓' },
    trustpilot: { label: 'Trustpilot', icon: '⭐' },
  }
  
  return (
    <Badge variant="outline" className="gap-1">
      <span>{badges[type].icon}</span>
      <span>{badges[type].label}</span>
    </Badge>
  )
}
```

**SearchBar:**
```typescript
// src/components/primitives/search-bar.tsx
export function SearchBar({ 
  placeholder = "Search courses...",
  onSearch,
  showAutocomplete = true 
}: SearchBarProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-10"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      {showAutocomplete && (
        <DropdownMenu>
          {/* Autocomplete results */}
        </DropdownMenu>
      )}
    </div>
  )
}
```

**ProductCard:**
```typescript
// src/components/primitives/product-card.tsx
export function ProductCard({
  title,
  price,
  rating,
  badges,
  image,
}: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        {image && <img src={image} alt={title} className="rounded-t-xl" />}
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-h4">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-h2 font-bold text-primary">£{price}</span>
          <Rating value={rating} />
        </div>
        <div className="flex gap-2 mt-3">
          {badges.map((badge) => <TrustBadge key={badge} type={badge} />)}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Now</Button>
      </CardFooter>
    </Card>
  )
}
```

**Deliverable:** `design-system/03-primitives.md` (custom component docs)

---

### Iteration 4: Page Templates (20 min)

**Build 5 page templates (from wireframes):**

**Homepage Template:**
```typescript
// src/components/templates/homepage.tsx
export function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-h1 font-bold mb-4">
            Find Your Construction Training
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Get CSCS Certified Online – Same-Day Results
          </p>
          
          <SearchBar placeholder="Search courses..." />
          
          {/* Trust Signals ABOVE FOLD */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Rating value={4.8} showCount count={2340} />
            <TrustBadge type="cpd" />
            <TrustBadge type="citb" />
          </div>
        </div>
      </section>

      {/* Category Cards (5-7 max) */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <CategoryCard title="I need a CSCS Card" price="from £30" />
          <CategoryCard title="I need Safety Training" price="from £25" />
          <CategoryCard title="For My Business" cta="Request Quote" />
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-12 px-6 bg-muted">
        <h2 className="text-h2 font-bold text-center mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ProductCard title="CSCS Green Card Test" price={35} rating={4.9} badges={['cpd', 'citb']} />
          <ProductCard title="Working at Height" price={25} rating={4.8} badges={['cpd']} />
          <ProductCard title="First Aid at Work" price={40} rating={4.9} badges={['cpd', 'citb']} />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-6">
        <p className="text-center text-muted-foreground mb-6">Trusted By</p>
        <div className="flex justify-center items-center gap-8">
          {['Skanska', 'Kier', 'G4S', 'BBC Studios', 'Balfour Beatty'].map((company) => (
            <span key={company} className="text-lg font-semibold">{company}</span>
          ))}
        </div>
      </section>
    </>
  )
}
```

**Product Page Template:**
```typescript
// src/components/templates/product-page.tsx
export function ProductPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Product Info ABOVE FOLD */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src="/product-image.jpg" className="rounded-xl" />
        </div>
        <div>
          <h1 className="text-h1 font-bold mb-4">CSCS Green Card Test</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Labourer & Construction Operatives
          </p>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-h2 font-bold text-primary">£35.00</span>
            <Rating value={4.9} showCount count={1240} />
          </div>
          
          {/* Trust Badges ABOVE FOLD */}
          <div className="flex gap-2 mb-6">
            <TrustBadge type="cpd" />
            <TrustBadge type="citb" />
          </div>
          
          <div className="flex gap-4">
            <Button size="lg" className="flex-1">Add to Cart</Button>
            <Button size="lg" variant="secondary">Buy Now</Button>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <KeyFact icon="⏱️" label="Duration" value="45 minutes" />
        <KeyFact icon="📜" label="Certificate" value="Instant download" />
        <KeyFact icon="✓" label="Accreditation" value="CPD + CITB" />
        <KeyFact icon="📱" label="Format" value="Online, self-paced" />
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-h2 font-bold mb-4">What You'll Learn</h2>
        <ul className="space-y-2">
          <li>✓ Health & Safety awareness</li>
          <li>✓ Site hazards and controls</li>
          <li>✓ CSCS Green Card test preparation</li>
        </ul>
      </div>

      {/* Related Courses */}
      <div className="mt-12">
        <h2 className="text-h2 font-bold mb-6">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard title="CSCS Red Card" price={45} rating={4.8} badges={['cpd']} />
          <ProductCard title="Working at Height" price={25} rating={4.9} badges={['cpd']} />
          <ProductCard title="First Aid" price={40} rating={4.9} badges={['cpd', 'citb']} />
        </div>
      </div>
    </div>
  )
}
```

**Checkout Flow Template (3 steps):**
```typescript
// src/components/templates/checkout-flow.tsx
export function CheckoutFlow() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        <Step number={1} label="Cart" active={step === 1} />
        <Step number={2} label="Details" active={step === 2} />
        <Step number={3} label="Payment" active={step === 3} />
      </div>

      {/* Step 1: Cart + Guest Choice */}
      {step === 1 && (
        <>
          <CartSummary />
          <div className="mt-8">
            <h2 className="text-h3 font-bold mb-4">Checkout As:</h2>
            <RadioGroup>
              <RadioGroupItem value="guest">Guest (faster checkout)</RadioGroupItem>
              <RadioGroupItem value="account">Create account (save progress)</RadioGroupItem>
            </RadioGroup>
          </div>
          <Button className="w-full mt-6" onClick={() => setStep(2)}>
            Continue to Details →
          </Button>
        </>
      )}

      {/* Step 2: Billing Details (Minimal) */}
      {step === 2 && (
        <>
          <div className="space-y-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Full Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Company (optional)" />
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" onClick={() => setStep(1)}>← Back</Button>
            <Button className="flex-1" onClick={() => setStep(3)}>Continue →</Button>
          </div>
        </>
      )}

      {/* Step 3: Payment (Apple Pay + Google Pay) */}
      {step === 3 && (
        <>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              <AppleIcon /> Pay with Apple Pay
            </Button>
            <Button variant="outline" className="w-full">
              <GoogleIcon /> Pay with Google Pay
            </Button>
            <div className="text-center text-muted-foreground">or</div>
            <Input placeholder="Card Number" />
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="MM/YY" />
              <Input placeholder="CVV" />
            </div>
          </div>
          
          {/* Security Badges */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">🔒 Secure checkout</span>
            <Badge variant="outline">Visa</Badge>
            <Badge variant="outline">Mastercard</Badge>
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
            <Button className="flex-1">Complete Purchase (£35.00) →</Button>
          </div>
        </>
      )}
    </div>
  )
}
```

**Deliverable:** `design-system/04-templates.md` (page template docs + screenshots)

---

### Iteration 5: Storybook Integration (15 min)

**Set up Storybook 8:**
```bash
npx storybook@latest init
npm install --save-dev @storybook/addon-a11y storybook-addon-designs
```

**Configure Storybook:**
```typescript
// .storybook/main.ts
export default {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
}
```

**Create stories for all components:**
```typescript
// src/components/ui/button.stories.tsx
export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/GIBjKMKtYjBMLExYrVb1lh/The-Builders-Academy?node-id=...',
    },
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Start Now',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL (Mobile)</Button>
    </div>
  ),
}
```

**Deliverable:** `design-system/05-storybook.md` (Storybook setup + story coverage)

---

### Iteration 6: Accessibility + Documentation (15 min)

**Run a11y tests:**
- Test all components with `@storybook/addon-a11y`
- Verify WCAG 2.2 AA compliance (color contrast, touch targets, keyboard nav)
- Add ARIA labels where needed

**Create comprehensive docs:**
```markdown
# Design System Documentation

## Installation
\`\`\`bash
npm install
npm run dev
\`\`\`

## Usage
\`\`\`tsx
import { Button, Card, Input } from '@/components/ui'

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </Card>
  )
}
\`\`\`

## Design Tokens
See `tailwind.config.ts` for full token reference.

## Component API
See Storybook docs at `http://localhost:6006`

## Accessibility
All components meet WCAG 2.2 AA standards:
- Color contrast: 4.5:1 minimum
- Touch targets: 48px minimum
- Keyboard navigation: Full support
- Screen readers: ARIA labels + semantic HTML
```

**Deliverable:** `design-system/06-documentation.md` (full system docs)

---

## Success Criteria

✅ **Design tokens** implemented in Tailwind config  
✅ **38+ components** built with shadcn/ui + custom primitives  
✅ **5 page templates** implemented (homepage, product, category, checkout, employer)  
✅ **Storybook stories** for all components  
✅ **Accessibility tests** passing (WCAG 2.2 AA)  
✅ **Documentation** complete (README, component API, usage examples)  
✅ **Working demo** deployed to Vercel/Netlify  

---

## Next Phase

**Phase 5: Figma Documentation (Reverse Engineer)**
- Import design system FROM code INTO Figma
- Create component library in Figma matching implementation
- Document variables, component props, usage guidelines
- Add screenshots from Storybook

**Result:** Code = source of truth, Figma = living documentation

---

**Duration Estimate:** 6 iterations (~90-120 min total)  
**Output:** Fully functional design system ready for Magento theming
