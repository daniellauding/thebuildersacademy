import Link from "next/link"
import { Button } from "@/components/ui/button"

const VARIANTS = [
  {
    id: "variant-a",
    title: "Variant A: Trust-First Hero",
    description: "Certifieringar & betyg above fold. Trust signals synliga omedelbart.",
    features: [
      "⭐ Trustpilot score prominent",
      "🎓 Large accreditation badges (CPD, CITB, IOSH)",
      "🏢 Employer logos (Balfour Beatty, etc)",
      "✅ Social proof (50,000+ learners, 98% pass rate)",
    ],
    target: "First-time learners, risk-averse köpare",
  },
  {
    id: "variant-b",
    title: "Variant B: Search-First Hero",
    description: "Stort sökfält för snabba köp. Optimerad för repeat visitors.",
    features: [
      "🔍 Large hero search bar",
      "⚡ Popular course quick links",
      "📱 Mobile-first approach",
      "🎯 Direct to product (85% av trafiken)",
    ],
    target: "Return customers, high-intent visitors",
  },
  {
    id: "variant-c",
    title: "Variant C: Story-First Hero ⭐ REKOMMENDERAD",
    description: "Featured lärarintervjuer & karriärvägar. Podia-inspirerad.",
    features: [
      "👥 4 student success stories",
      "🎥 Video testimonials",
      "👨‍🏫 Featured instructor profiles",
      "💡 Career transformation focus",
    ],
    target: "Differentiation, emotional buy-in, employer appeal",
  },
]

export default function VariantsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">TBA Design Variants</h1>
          <p className="text-muted-foreground">Compare 3 different homepage approaches</p>
        </div>
      </div>

      {/* Variants Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VARIANTS.map((variant) => (
            <div
              key={variant.id}
              className="flex flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Title */}
              <h2 className="mb-2 text-xl font-bold">{variant.title}</h2>
              
              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground">{variant.description}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2 flex-grow">
                {variant.features.map((feature) => (
                  <li key={feature} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Target Audience */}
              <div className="mb-4 rounded-md bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground mb-1">Target Audience</p>
                <p className="text-sm">{variant.target}</p>
              </div>

              {/* CTA */}
              <Link href={`/variants/${variant.id}`}>
                <Button className="w-full">View Variant →</Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Back to Original */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              ← Back to Original Homepage
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            🎨 Design Presentation: All variants use the same design system (shadcn/ui + Tailwind)
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Original homepage preserved at <code className="rounded bg-muted px-2 py-1">http://localhost:5173/</code>
          </p>
        </div>
      </div>
    </div>
  )
}
