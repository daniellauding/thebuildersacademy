import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { SearchBar } from "@/components/primitives/search-bar"
import { StarRating } from "@/components/primitives/star-rating"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { CategoryCard } from "@/components/primitives/category-card"
import { ProductCard } from "@/components/primitives/product-card"
import { Button } from "@/components/ui/button"
import { POPULAR_COURSES, EMPLOYER_LOGOS } from "@/lib/constants"
import { ShoppingCart, BookOpen, Award } from "lucide-react"

const HOW_IT_WORKS_STEPS = [
  { number: 1, title: "Choose & Pay", description: "Select your course and complete secure checkout" },
  { number: 2, title: "Complete Online", description: "Study at your own pace with instant access" },
  { number: 3, title: "Get Your Cert Same Day", description: "Download your certificate immediately" },
]

export function Homepage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-d6 font-bold tracking-tight md:text-d5 text-foreground">
            Start Your Construction Career Today
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Get CSCS Certified Online — Same-Day Results
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            <SearchBar placeholder='Search courses, e.g. "CSCS Green Card"...' variant="hero" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="px-8">
              Find Course
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              For Employers
            </Button>
          </div>

          {/* Trust Signals ABOVE FOLD */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <StarRating value={4.8} showCount count={2340} variant="compact" />
            <div className="flex items-center gap-2">
              <TrustBadge type="cpd" />
              <TrustBadge type="citb" />
              <TrustBadge type="iosh" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-h3 font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Entry Points */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-8">What Do You Need?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CategoryCard
              title="CSCS Card"
              subtitle="Green / Red"
              priceFrom={30}
              icon="cscs"
            />
            <CategoryCard
              title="Working at Height"
              subtitle="Safety Training"
              priceFrom={25}
              icon="safety"
            />
            <CategoryCard
              title="For My Business"
              subtitle="Bulk Training"
              cta="Request Quote"
              icon="employer"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-h2 font-bold mb-8">Popular Courses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_COURSES.slice(0, 6).map((course) => (
              <ProductCard
                key={course.id}
                title={course.title}
                price={course.price}
                rating={course.rating}
                reviewCount={course.reviewCount}
                duration={course.duration}
                badges={[...course.badges]}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="px-8">
              View All Courses →
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y bg-background px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Trusted By Leading Construction Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {EMPLOYER_LOGOS.map((company) => (
              <div
                key={company}
                className="text-lg font-bold text-muted-foreground/60"
              >
                {company}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground italic">
                "We trained 120 staff in 3 months"
              </p>
              <cite className="text-sm font-semibold text-foreground not-italic">— Skanska</cite>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground italic">
                "Great dashboard for tracking team progress"
              </p>
              <cite className="text-sm font-semibold text-foreground not-italic">— Kier Group</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-h2 font-bold mb-2">What Our Learners Say</h2>
          <div className="mb-8">
            <StarRating value={4.8} showCount count={2340} variant="full" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Dave T.",
                role: "Builder",
                rating: 5,
                text: "Quick and easy to complete. Highly recommend.",
              },
              {
                name: "Sarah M.",
                role: "Site Manager",
                rating: 5,
                text: "Got my cert the same day. Very clear instructions.",
              },
              {
                name: "Marcus J.",
                role: "Electrician",
                rating: 5,
                text: "Best value for training I've found online.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-xl border bg-white p-6 text-left shadow-level-1 hover:shadow-level-2 transition-shadow"
              >
                <div className="mb-3">
                  <StarRating value={review.rating} />
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="outline" size="lg">
              Read All Reviews →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
