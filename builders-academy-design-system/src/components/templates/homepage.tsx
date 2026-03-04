import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { SearchBar } from "@/components/primitives/search-bar"
import { StarRating } from "@/components/primitives/star-rating"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { CategoryCard } from "@/components/primitives/category-card"
import { ProductCard } from "@/components/primitives/product-card"
import { HowItWorks } from "@/components/primitives/how-it-works"
import { Button } from "@/components/ui/button"
import { POPULAR_COURSES, EMPLOYER_LOGOS } from "@/lib/constants"

const HOW_IT_WORKS_STEPS = [
  { number: 1, title: "Choose Your Course", description: "Browse our CPD accredited training courses" },
  { number: 2, title: "Complete Online", description: "Study at your own pace with instant access" },
  { number: 3, title: "Get Certified", description: "Download your certificate immediately" },
]

export function Homepage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-d6 font-bold tracking-tight md:text-d5">
            Find Your Construction Training
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Get CSCS Certified Online — Same-Day Results
          </p>

          <div className="mt-8">
            <SearchBar placeholder="Search courses, e.g. 'CSCS Green Card'..." variant="hero" />
          </div>

          {/* Trust Signals ABOVE FOLD */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <StarRating value={4.8} showCount count={2340} variant="compact" />
            <TrustBadge type="cpd" />
            <TrustBadge type="citb" />
            <TrustBadge type="trustpilot" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <h2 className="text-center text-h2 font-bold mb-10">How It Works</h2>
        <HowItWorks steps={HOW_IT_WORKS_STEPS} />
      </section>

      {/* Category Entry Points (5-7 max → 3 shown) */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-8">What Do You Need?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CategoryCard
              title="I need a CSCS Card"
              subtitle="Green, Blue, Gold & more"
              priceFrom={30}
              icon="cscs"
            />
            <CategoryCard
              title="I need Safety Training"
              subtitle="Health & Safety courses"
              priceFrom={25}
              icon="safety"
            />
            <CategoryCard
              title="For My Business"
              subtitle="Bulk training & dashboard"
              cta="Request Quote"
              icon="employer"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
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
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">View All Courses</Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y bg-muted px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            Trusted By Leading Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {EMPLOYER_LOGOS.map((company) => (
              <span
                key={company}
                className="text-lg font-bold text-muted-foreground/50"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-h2 font-bold mb-2">What Our Students Say</h2>
          <div className="mb-8">
            <StarRating value={4.8} showCount count={2340} variant="full" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: "Dave M.", role: "Construction Worker", text: "Got my CSCS green card sorted in one afternoon. Dead easy and the certificate was instant." },
              { name: "Sarah P.", role: "HR Manager, Kier Group", text: "We trained 50 staff in under a month. The dashboard makes tracking compliance simple." },
              { name: "Terry W.", role: "Labourer", text: "I was worried about doing it online but it was really straightforward. Passed first time." },
            ].map((review) => (
              <div key={review.name} className="rounded-xl border bg-white p-6 text-left shadow-level-1">
                <p className="text-sm text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
