# Phase 4 — Iteration 5: Storybook Integration

## Setup

- **Storybook:** v10.2.15 (latest)
- **Framework:** `@storybook/nextjs-vite`
- **Addons:**
  - `@storybook/addon-a11y` — Accessibility testing (WCAG violations)
  - `@storybook/addon-docs` — Auto-generated documentation
  - `@storybook/addon-vitest` — Test integration
  - `@chromatic-com/storybook` — Visual regression (optional)
  - `@storybook/addon-onboarding` — First-run guide

## Story Coverage

### UI Components (4 stories files)
| Component | Stories | Variants Covered |
|-----------|---------|-----------------|
| Button | 9 | Primary, Secondary, Outline, Ghost, Destructive, AllSizes, WithIcon, Loading, FullWidth |
| Card | 2 | Default, ProductCard |
| Input | 5 | Default, WithLabel, LargeInput, Disabled, WithError |
| Badge | 4 | Default, Secondary, Outline, AllVariants |

### Primitives (9 story files)
| Component | Stories | Variants Covered |
|-----------|---------|-----------------|
| TrustBadge | 8 | CPD, CITB, IOSH, Trustpilot, Secure, Popular, AllTypes, AllSizes |
| StarRating | 3 | Compact, Full, Minimal |
| SearchBar | 3 | Hero, Header, Category |
| ProductCard | 4 | Default, Compact, Featured, CardGrid |
| CategoryCard | 4 | CSCS, Safety, Employer, ThreeCards |
| ProgressSteps | 3 | Step1, Step2, Step3 |
| FilterChip | 4 | Inactive, Active, WithRemove, FilterGroup |
| HowItWorks | 2 | Horizontal, Vertical |
| KeyFact | 2 | Default, FourFacts |

### Templates (5 story files)
| Template | Stories | Layout |
|----------|---------|--------|
| Homepage | 1 | fullscreen |
| ProductPage | 1 | fullscreen |
| CategoryPage | 1 | fullscreen |
| CheckoutFlow | 1 | fullscreen |
| EmployerPathway | 1 | fullscreen |

**Total:** 18 story files, 54+ individual stories

## Running Storybook

```bash
cd builders-academy-design-system
npm run storybook
```

Storybook runs at `http://localhost:6006`

## Accessibility Testing

The `@storybook/addon-a11y` addon runs axe-core checks on every story. Violations appear in the Accessibility panel. The addon is configured in `todo` mode — violations show as warnings that must be resolved before production.
