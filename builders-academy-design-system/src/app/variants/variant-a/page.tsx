import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { TrustFirstHero } from "@/components/variants/TrustFirstHero"
import { CategoryCard } from "@/components/primitives/category-card"
import { ProductCard } from "@/components/primitives/product-card"
import { POPULAR_COURSES } from "@/lib/constants"
import { BookOpen, Shield, Building2 } from "lucide-react"

const HOW_IT_WORKS_STEPS = [
  { number: 1, title: "Choose & Pay", description: "Select your course and complete secure checkout" },
  { number: 2, title: "Complete Online", description: "Study at your own pace with instant access" },
  { number: 3, title: "Get Your Cert Same Day", description: "Download your certificate immediately" },
]

const CATEGORIES = [
  {
    title: "CSCS Cards",
    subtitle: "Get site access",
    icon: BookOpen,
  },
  {
    title: "Health & Safety",
    subtitle: "Comply with law",
    icon: Shield,
  },
  {
    title: "Management Training",
    subtitle: "Lead teams safely",
    icon: Building2,
  },
]

export default function VariantAPage() {
  return (
    <>
      <Navbar />

      {/* Variant A: Trust-First Hero */}
      <TrustFirstHero />

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

      {/* What Do You Need? */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-8">What Do You Need?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-h2 font-bold mb-8">Popular Courses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {POPULAR_COURSES.slice(0, 6).map((course) => (
              <ProductCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
