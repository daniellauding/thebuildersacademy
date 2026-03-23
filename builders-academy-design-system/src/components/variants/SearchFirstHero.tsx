import { SearchBar } from "@/components/primitives/search-bar"
import { Star } from "lucide-react"

const POPULAR_COURSES = [
  "CSCS Green Card",
  "CSCS Black Card",
  "SMSTS",
]

const ACCREDITATIONS = [
  { name: "CPD", logo: "🎓" },
  { name: "CITB", logo: "🏗️" },
  { name: "IOSH", logo: "⚠️" },
]

export function SearchFirstHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-d6 font-bold tracking-tight md:text-d5 text-foreground">
          Get CSCS Certified Online
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Same-Day Results • 98% Pass Rate
        </p>

        {/* Large Search Bar - Primary Action */}
        <div className="mt-8 max-w-2xl mx-auto">
          <SearchBar placeholder='Search courses, e.g. "CSCS Green Card"...' variant="hero" />
        </div>

        {/* Popular Quick Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {POPULAR_COURSES.map((course) => (
            <button
              key={course}
              className="text-sm font-medium text-primary hover:underline"
            >
              {course}
            </button>
          ))}
        </div>

        {/* Trust Signals - Compact */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Trustpilot Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1 font-bold">4.8</span>
            <span className="text-sm text-muted-foreground">(2,340)</span>
          </div>

          {/* Accreditation Badges - Compact */}
          <div className="flex items-center gap-3">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.name}
                className="flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm shadow-sm"
              >
                <span className="text-lg">{acc.logo}</span>
                <span className="font-semibold">{acc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
