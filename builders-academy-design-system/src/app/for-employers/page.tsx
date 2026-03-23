import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  FileText,
  Headphones
} from "lucide-react"

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Reduce Site Risk",
    description: "Ensure every worker is properly certified and compliant with current safety regulations."
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Well-trained teams work faster and make fewer costly mistakes."
  },
  {
    icon: Clock,
    title: "Minimize Downtime",
    description: "Online training means no travel time — workers train on their schedule."
  },
  {
    icon: Users,
    title: "Scale Your Workforce",
    description: "Onboard new hires quickly with standardized, accredited training."
  }
]

const PRICING_TIERS = [
  {
    name: "Team",
    price: "£199",
    period: "/month",
    description: "Perfect for small contractors",
    features: [
      "Up to 10 staff accounts",
      "All CPD & CITB courses",
      "Basic progress dashboard",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Business",
    price: "£449",
    period: "/month",
    description: "For growing construction companies",
    features: [
      "Up to 50 staff accounts",
      "All CPD & CITB courses",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "Bulk certificate downloads",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Large contractors & multi-site operations",
    features: [
      "Unlimited staff accounts",
      "All CPD & CITB courses",
      "Custom reporting & API access",
      "Dedicated success team",
      "Onboarding & training",
      "24/7 phone support",
      "Volume discounts"
    ],
    popular: false
  }
]

const CASE_STUDY = {
  company: "Midlands Building Ltd",
  size: "150 employees",
  challenge: "Needed to certify 85 workers for a new contract in under 3 weeks",
  result: "All staff certified in 12 days. £8,400 saved vs in-person training",
  quote: "The dashboard made compliance tracking effortless. We won the contract because we could prove our entire team was certified.",
  person: "Sarah Mitchell",
  role: "H&S Manager"
}

const FAQS = [
  {
    question: "How does bulk pricing work?",
    answer: "You pay per seat (active user). Unused seats don't count. Upgrade or downgrade anytime."
  },
  {
    question: "Can we track progress and compliance?",
    answer: "Yes — your admin dashboard shows who's completed which courses, certificate expiry dates, and compliance status in real-time."
  },
  {
    question: "What if we need custom training content?",
    answer: "Enterprise plans include custom course development. Contact us to discuss your requirements."
  },
  {
    question: "Do you offer site-specific training?",
    answer: "Yes — we can create custom induction modules with your site plans, hazards, and procedures (Enterprise only)."
  }
]

export default function ForEmployersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            For Employers
          </Badge>
          <h1 className="text-d6 font-bold tracking-tight md:text-d4 text-foreground">
            Train Your Team.
            <br />
            <span className="text-primary">Stay Compliant.</span>
            <br />
            Win More Work.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Give your workforce the certifications they need — fast, affordable, and tracked in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Book a Demo</Button>
            <Button size="lg" variant="outline">See Pricing</Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Trusted by 500+ UK contractors • 15,000+ workers certified
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-12 border-b bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-d5 font-bold text-primary">92%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
            <div className="text-center">
              <p className="text-d5 font-bold text-primary">48h</p>
              <p className="text-sm text-muted-foreground">Avg. Certification Time</p>
            </div>
            <div className="text-center">
              <p className="text-d5 font-bold text-primary">£65</p>
              <p className="text-sm text-muted-foreground">Avg. Cost Per Worker</p>
            </div>
            <div className="text-center">
              <p className="text-d5 font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Employer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-4">Why Employers Choose Us</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Online training that actually works for construction teams
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-h4 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border bg-background p-8 md:p-12 shadow-sm">
            <Badge variant="outline" className="mb-4 border-success/30 bg-success/10 text-success">
              Case Study
            </Badge>
            <h2 className="text-h2 font-bold mb-6">{CASE_STUDY.company}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Company Size</p>
                <p className="text-lg font-semibold">{CASE_STUDY.size}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Challenge</p>
                <p className="text-lg font-semibold">{CASE_STUDY.challenge}</p>
              </div>
            </div>
            <div className="rounded-lg bg-primary/5 p-6 mb-6">
              <p className="text-lg font-semibold text-primary mb-2">Result</p>
              <p className="text-foreground">{CASE_STUDY.result}</p>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "{CASE_STUDY.quote}"
            </blockquote>
            <p className="mt-4 font-semibold">
              — {CASE_STUDY.person}, <span className="text-muted-foreground">{CASE_STUDY.role}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-h2 font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pay per seat. Cancel anytime. All plans include unlimited courses.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <Card 
                key={tier.name}
                className={tier.popular ? "border-primary shadow-lg relative" : ""}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="text-h3 font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-d5 font-bold text-primary font-mono">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={tier.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include 14-day free trial • No credit card required
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-12">Everything You Need to Manage Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Compliance Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  See who's certified, who needs renewal, and export audit-ready reports in one click.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Bulk Enrollment</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a CSV, assign courses to 100+ workers at once. They get email invites automatically.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Multi-Site Management</h3>
                <p className="text-sm text-muted-foreground">
                  Organize workers by site, project, or team. Track compliance per location.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Your account manager helps with onboarding, reporting, and any training questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-h2 font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-lg border bg-background p-6">
                <h3 className="font-bold text-h5 mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-d6 font-bold mb-4">Ready to Train Your Team?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book a 15-minute demo and see how we can help you stay compliant, save time, and win more work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Start Free Trial
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • 14-day trial • Setup in 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
