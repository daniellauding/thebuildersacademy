import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { StarRating } from "@/components/primitives/star-rating"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { ProductCard } from "@/components/primitives/product-card"
import { KeyFact } from "@/components/primitives/key-fact"
import { StickyCTABar } from "@/components/primitives/sticky-cta-bar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Download, Award, Monitor, Shield, CheckCircle2, ChevronRight, Home } from "lucide-react"

const HOW_IT_WORKS_STEPS = [
  { number: 1, title: "Purchase Online", description: "Secure checkout, instant access" },
  { number: 2, title: "Complete at Your Pace", description: "45 minutes, study anytime" },
  { number: 3, title: "Pass Assessment", description: "Unlimited retakes included" },
  { number: 4, title: "Download Certificate", description: "Instant PDF certificate" },
]

const FAQ_ITEMS = [
  {
    q: "Is this course accredited?",
    a: "Yes, this course is CPD Accredited and CITB Approved. Your certificate is recognized across the UK construction industry.",
  },
  {
    q: "How long does the certificate last?",
    a: "The CSCS Green Card certificate is valid for 5 years from the date of completion. You'll need to renew it before expiry to maintain site access.",
  },
  {
    q: "Can I retake the assessment?",
    a: "Yes! You get unlimited retakes at no extra cost. Study the material and try again whenever you're ready.",
  },
  {
    q: "Is this the same as the CITB Health, Safety & Environment test?",
    a: "This course prepares you for the CSCS Green Card application. After passing, you'll be qualified to apply for your CSCS card through the CSCS website.",
  },
  {
    q: "How do I apply for my CSCS card after passing?",
    a: "Once you have your certificate, visit cscs.uk.com to complete your card application. You'll need your certificate, proof of identity, and the card fee.",
  },
]

const COURSE_CONTENT = [
  { module: "Module 1", title: "Introduction to Site Safety", duration: "10 min" },
  { module: "Module 2", title: "Identifying Hazards", duration: "15 min" },
  { module: "Module 3", title: "Personal Protective Equipment (PPE)", duration: "10 min" },
  { module: "Module 4", title: "Working at Height Basics", duration: "10 min" },
  { module: "Module 5", title: "Fire Safety & Emergencies", duration: "10 min" },
  { module: "Module 6", title: "Final Assessment", duration: "15 min" },
]

export function ProductPage() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="size-4" />
              Home
            </a>
            <ChevronRight className="size-4" />
            <a href="/categories/health-safety" className="hover:text-primary transition-colors">
              Health & Safety
            </a>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">CSCS Green Card Test</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Product Hero - ABOVE THE FOLD */}
        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          {/* Left Column - Course Info */}
          <div>
            {/* Product Image */}
            <div className="overflow-hidden rounded-xl bg-primary/5 border-2 border-primary/20 mb-6">
              <div className="flex aspect-video items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <Award className="mx-auto size-24 text-primary/30 mb-4" />
                  <p className="text-lg font-semibold text-primary">CSCS Green Card</p>
                  <p className="text-sm text-muted-foreground mt-2">Course Preview Image</p>
                </div>
              </div>
            </div>

            <h1 className="text-h1 font-bold mb-2">CSCS Green Card Test</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Labourer & Construction Operatives
            </p>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
              <KeyFact icon={<Clock className="size-6" />} label="Duration" value="45 minutes" />
              <KeyFact icon={<Download className="size-6" />} label="Certificate" value="Instant" />
              <KeyFact icon={<Award className="size-6" />} label="Accreditation" value="CPD + CITB" />
              <KeyFact icon={<Monitor className="size-6" />} label="Format" value="Online" />
            </div>

            {/* Tabs: Overview, Content, Reviews */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* What You'll Learn & Who Is This For */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-h2 font-bold mb-4">What You&apos;ll Learn</h2>
                    <ul className="space-y-3">
                      {[
                        "Health & Safety awareness on construction sites",
                        "Common site hazards and control measures",
                        "Personal protective equipment (PPE) requirements",
                        "Fire safety and emergency procedures",
                        "CSCS Green Card test preparation",
                        "Working at height safety awareness",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="size-5 shrink-0 text-success mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-h2 font-bold mb-4">Who Is This For?</h2>
                    <ul className="space-y-3">
                      {[
                        "Labourers entering the construction industry",
                        "Construction operatives needing CSCS card",
                        "Site workers requiring card renewal",
                        "Anyone needing basic site safety awareness",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <div className="size-5 shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                            ✓
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">No prior qualifications required.</strong> This course is designed for complete beginners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div>
                  <h2 className="text-h2 font-bold mb-6">How It Works</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {HOW_IT_WORKS_STEPS.map((step) => (
                      <div key={step.number} className="text-center p-4 border rounded-lg">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-3">
                          {step.number}
                        </div>
                        <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content">
                <h2 className="text-h2 font-bold mb-4">Course Content</h2>
                <div className="space-y-2">
                  {COURSE_CONTENT.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.module}</p>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="size-4" />
                        {item.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="mb-6 text-center p-6 bg-muted rounded-xl">
                  <StarRating value={4.9} showCount count={1240} variant="full" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      name: "Dave T.",
                      role: "Builder",
                      rating: 5,
                      text: "Very straightforward. Done in under an hour.",
                      date: "2 weeks ago",
                    },
                    {
                      name: "James K.",
                      role: "Operative",
                      rating: 5,
                      text: "Got my CSCS card application done the same day.",
                      date: "1 month ago",
                    },
                    {
                      name: "Lisa P.",
                      role: "Labourer",
                      rating: 5,
                      text: "Clear and easy to follow. Passed first time!",
                      date: "3 weeks ago",
                    },
                    {
                      name: "Marcus W.",
                      role: "Site Worker",
                      rating: 4,
                      text: "Good course. Would recommend to anyone starting out.",
                      date: "1 week ago",
                    },
                  ].map((review) => (
                    <div key={review.name} className="border rounded-lg p-6 bg-white">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                        <StarRating value={review.rating} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">&ldquo;{review.text}&rdquo;</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">Read All 1,240 Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>

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
          </div>

          {/* Right Column - Booking Card (Sticky) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-2 rounded-xl p-6 shadow-level-2 bg-white">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-d6 font-bold text-primary font-mono">£35.00</span>
                <span className="text-sm text-muted-foreground">(incl. VAT)</span>
              </div>

              <div className="mb-4">
                <StarRating value={4.9} showCount count={1240} />
              </div>

              <div className="space-y-3 mb-6">
                <Button size="lg" className="w-full text-base">
                  Add to Cart
                </Button>
                <Button size="lg" variant="secondary" className="w-full text-base">
                  Buy Now →
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <TrustBadge type="cpd" />
                <TrustBadge type="citb" />
              </div>

              <div className="space-y-2 text-sm text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-success" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-success" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="size-4 text-success" />
                  <span>Instant certificate download</span>
                </div>
              </div>
            </div>

            {/* Training 5+ staff banner */}
            <div className="mt-4 p-4 bg-secondary/5 border-2 border-secondary/20 rounded-lg text-center">
              <p className="text-sm font-semibold text-foreground mb-2">
                Training 5+ staff?
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Request Bulk Quote →
              </Button>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-h2 font-bold mb-8">Complete Your Training</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="CSCS Red Card Managers Test"
              price={55}
              rating={4.8}
              reviewCount={520}
              duration="2 hours"
              badges={["cpd", "citb"]}
            />
            <ProductCard
              title="Working at Height"
              price={25}
              rating={4.8}
              reviewCount={890}
              duration="1 hour"
              badges={["cpd"]}
            />
            <ProductCard
              title="First Aid at Work"
              price={40}
              rating={4.9}
              reviewCount={1560}
              duration="2 hours"
              badges={["cpd", "citb"]}
            />
          </div>
        </div>
      </div>

      <StickyCTABar price={35} />
      <Footer />
    </>
  )
}
