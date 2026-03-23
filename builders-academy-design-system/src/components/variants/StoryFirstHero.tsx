import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const FEATURED_STORIES = [
  {
    name: "Emma Thompson",
    role: "Labourer to Site Manager",
    course: "CSCS + SMSTS",
    image: "👤",
    story: "18 months",
  },
  {
    name: "James Mitchell",
    role: "First Aid Officer",
    course: "First Aid at Work",
    image: "👤",
    story: "Career change at 50",
  },
  {
    name: "Sarah Patel",
    role: "H&S Coordinator",
    course: "IOSH Managing Safely",
    image: "👤",
    story: "Changed career at 35",
  },
  {
    name: "David Hughes",
    role: "Site Manager",
    course: "NEBOSH Diploma",
    image: "👤",
    story: "Promoted in 6 months",
  },
]

export function StoryFirstHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-d6 font-bold tracking-tight md:text-d4 text-foreground">
          Their careers finally found the right start
          <br />
          with The Builders Academy.
          <br />
          <span className="text-primary">So can yours.</span>
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          More than 50,000 learners — including site workers, managers, and career changers — 
          started their construction journey here.
        </p>

        {/* Featured Student Stories */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.name}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 transition-all hover:shadow-lg"
            >
              {/* Profile "Image" */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-4xl">
                {story.image}
              </div>

              {/* Name */}
              <h3 className="mb-1 font-bold text-foreground">{story.name.split(" ")[0]}</h3>
              
              {/* Course */}
              <p className="mb-2 text-xs font-medium text-muted-foreground">{story.course}</p>

              {/* Story Highlight */}
              <p className="text-sm font-semibold text-primary">"{story.role}"</p>
              <p className="mt-1 text-xs text-muted-foreground">{story.story}</p>

              {/* Watch Story CTA */}
              <button className="mt-4 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                <Play className="h-3 w-3" />
                Watch Story
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button size="lg" className="px-8">
            Start Your Journey →
          </Button>
        </div>
      </div>
    </section>
  )
}
