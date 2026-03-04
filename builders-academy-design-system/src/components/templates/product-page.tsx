import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { StarRating } from "@/components/primitives/star-rating"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { ProductCard } from "@/components/primitives/product-card"
import { KeyFact } from "@/components/primitives/key-fact"
import { HowItWorks } from "@/components/primitives/how-it-works"
import { StickyCTABar } from "@/components/primitives/sticky-cta-bar"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Download, Award, Monitor, Shield } from "lucide-react"

const PRODUCT_STEPS = [
  { number: 1, title: "Purchase", description: "Buy your course online instantly" },
  { number: 2, title: "Complete", description: "Study at your own pace" },
  { number: 3, title: "Pass", description: "Take the assessment online" },
  { number: 4, title: "Download", description: "Get your certificate immediately" },
]

const FAQ_ITEMS = [
  { q: "How long does the course take?", a: "The CSCS Green Card test takes approximately 45 minutes to complete. You can pause and resume at any time." },
  { q: "Is this course accredited?", a: "Yes, this course is CPD Accredited and CITB Approved. Your certificate is recognized across the UK construction industry." },
  { q: "Can I get a refund?", a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund." },
  { q: "Do I need any prior experience?", a: "No prior experience is required. The course is designed for complete beginners entering the construction industry." },
]

export function ProductPage() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Product Info ABOVE FOLD */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-xl bg-muted">
            <div className="flex aspect-video items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Award className="mx-auto size-16 text-primary/30" />
                <p className="mt-2 text-sm">Course Preview Image</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-h1 font-bold">CSCS Green Card Test</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Labourer & Construction Operatives
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-d6 font-bold text-primary font-mono">£35.00</span>
              <StarRating value={4.9} showCount count={1240} />
            </div>

            {/* Trust Badges ABOVE FOLD */}
            <div className="mt-4 flex flex-wrap gap-2">
              <TrustBadge type="cpd" />
              <TrustBadge type="citb" />
              <TrustBadge type="popular" />
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex gap-3">
              <Button size="xl" className="flex-1">Add to Cart</Button>
              <Button size="xl" variant="secondary" className="flex-1">Buy Now</Button>
            </div>

            {/* Micro trust signals */}
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Shield className="size-4 text-success" />
                Secure checkout
              </span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <KeyFact icon={<Clock className="size-6" />} label="Duration" value="45 minutes" />
          <KeyFact icon={<Download className="size-6" />} label="Certificate" value="Instant download" />
          <KeyFact icon={<Award className="size-6" />} label="Accreditation" value="CPD + CITB" />
          <KeyFact icon={<Monitor className="size-6" />} label="Format" value="Online, self-paced" />
        </div>

        {/* What You'll Learn */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-h2 font-bold mb-4">What You&apos;ll Learn</h2>
            <ul className="space-y-3">
              {[
                "Health & Safety awareness for construction sites",
                "Identifying and managing site hazards",
                "CSCS Green Card test preparation and practice",
                "Working at height safety fundamentals",
                "Manual handling best practices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h2 font-bold mb-4">Who Is This For?</h2>
            <ul className="space-y-3">
              {[
                "New entrants to the construction industry",
                "Labourers needing CSCS certification",
                "Workers requiring card renewal",
                "Anyone needing site safety awareness",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12">
          <h2 className="text-h2 font-bold text-center mb-8">How It Works</h2>
          <HowItWorks steps={PRODUCT_STEPS} />
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-h2 font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Related Courses */}
        <div className="mt-12">
          <h2 className="text-h2 font-bold mb-6">Related Courses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard title="CSCS Red Card" price={45} rating={4.8} reviewCount={890} duration="1 hour" badges={["cpd"]} />
            <ProductCard title="Working at Height" price={25} rating={4.9} reviewCount={720} duration="45 min" badges={["cpd"]} />
            <ProductCard title="First Aid at Work" price={40} rating={4.9} reviewCount={1560} duration="2 hours" badges={["cpd", "citb"]} />
          </div>
        </div>
      </div>

      <StickyCTABar price={35} />
      <Footer />
    </>
  )
}
