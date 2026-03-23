import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { StoryFirstHero } from "@/components/variants/StoryFirstHero"
import { CategoryCard } from "@/components/primitives/category-card"
import { ProductCard } from "@/components/primitives/product-card"
import { POPULAR_COURSES } from "@/lib/constants"
import { Play, BookOpen, Shield, Building2 } from "lucide-react"

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

const FEATURED_STORY = {
  title: "From Labourer to Site Manager in 18 Months",
  name: "Emma Thompson",
  thumbnail: "👤",
  duration: "3:24",
}

const INSTRUCTOR_FEATURED = {
  name: "Mark Davidson",
  role: "SMSTS Lead Instructor",
  experience: "20 years on construction sites",
  thumbnail: "👨‍🏫",
  credentials: ["CITB-certified", "5,000+ students trained"],
}

export default function VariantCPage() {
  return (
    <>
      <Navbar />

      {/* Variant C: Story-First Hero */}
      <StoryFirstHero />

      {/* Featured Story Section */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-8">Featured Stories</h2>
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-lg bg-muted flex items-center justify-center group cursor-pointer">
                <div className="text-8xl">{FEATURED_STORY.thumbnail}</div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                  <div className="rounded-full bg-primary p-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 rounded-md bg-black/80 px-2 py-1 text-sm text-white">
                  {FEATURED_STORY.duration}
                </div>
              </div>

              {/* Story Text */}
              <div>
                <h3 className="text-h3 font-bold mb-4">{FEATURED_STORY.title}</h3>
                <p className="text-muted-foreground mb-4">
                  "I started as a general labourer with no qualifications. The Builders Academy 
                  made it easy to get my CSCS card, then SMSTS. Now I'm running my own team of 15 people."
                </p>
                <p className="font-semibold text-primary">— {FEATURED_STORY.name}</p>
                <button className="mt-6 flex items-center gap-2 text-primary font-medium hover:underline">
                  <Play className="h-5 w-5" />
                  Watch Emma's Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Instructors */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-8">Meet Your Instructors</h2>
          
          <div className="rounded-2xl border bg-background p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
              {/* Instructor Photo */}
              <div className="flex justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-6xl">
                  {INSTRUCTOR_FEATURED.thumbnail}
                </div>
              </div>

              {/* Instructor Info */}
              <div className="md:col-span-2">
                <h3 className="text-h3 font-bold mb-2">{INSTRUCTOR_FEATURED.name}</h3>
                <p className="text-primary font-semibold mb-4">{INSTRUCTOR_FEATURED.role}</p>
                
                <p className="text-muted-foreground mb-4">
                  "I've spent {INSTRUCTOR_FEATURED.experience} before teaching. I know exactly 
                  what you'll face on the job — and how to prepare you for it."
                </p>

                <ul className="space-y-2">
                  {INSTRUCTOR_FEATURED.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      {cred}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 text-primary font-medium hover:underline">
                  Watch Mark's Story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Need? */}
      <section className="px-4 py-16 bg-muted">
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
      <section className="px-4 py-16">
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
