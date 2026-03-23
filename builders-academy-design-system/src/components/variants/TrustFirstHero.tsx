import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const ACCREDITATIONS = [
  { name: "CPD", logo: "🎓" },
  { name: "CITB", logo: "🏗️" },
  { name: "IOSH", logo: "⚠️" },
]

const EMPLOYER_LOGOS = [
  "Balfour Beatty",
  "Laing O'Rourke", 
  "Kier Group",
]

export function TrustFirstHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-d6 font-bold tracking-tight md:text-d5 text-foreground">
          Start Your Construction Career Today
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Get CSCS Certified Online — Same-Day Results
        </p>

        {/* Trust Signals - Above Fold */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Trustpilot Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-bold">4.8</span>
            <span className="text-muted-foreground">(2,340 reviews)</span>
          </div>

          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.name}
                className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2 shadow-sm"
              >
                <span className="text-2xl">{acc.logo}</span>
                <span className="font-semibold">{acc.name} Accredited</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="px-8">
            Find Course
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            For Employers
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Trusted by 50,000+ learners • 98% pass rate
          </p>
          
          {/* Employer Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {EMPLOYER_LOGOS.map((employer) => (
              <div
                key={employer}
                className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {employer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
