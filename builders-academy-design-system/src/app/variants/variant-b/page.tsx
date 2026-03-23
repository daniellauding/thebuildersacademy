import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { SearchFirstHero } from "@/components/variants/SearchFirstHero"
import { CategoryCard } from "@/components/primitives/category-card"
import { ProductCard } from "@/components/primitives/product-card"
import { POPULAR_COURSES } from "@/lib/constants"
import { BookOpen, Shield, Building2 } from "lucide-react"

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

export default function VariantBPage() {
  return (
    <>
      <Navbar />

      {/* Variant B: Search-First Hero */}
      <SearchFirstHero />

      {/* What Do You Need? - Entry Points */}
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

      {/* For Employers - Quick CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-h2 font-bold mb-4">Training for Your Team?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Bulk discounts for 10+ learners • Custom compliance dashboards • Dedicated support
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition">
            Request Demo →
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
