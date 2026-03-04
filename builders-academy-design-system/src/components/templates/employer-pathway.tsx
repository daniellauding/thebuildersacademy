import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { HowItWorks } from "@/components/primitives/how-it-works"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EMPLOYER_LOGOS, EMPLOYER_PACKAGES } from "@/lib/constants"
import {
  CheckCircle,
  Phone,
  Users,
  BarChart3,
  FileText,
  Shield,
  HardHat,
  ClipboardCheck,
  Briefcase,
  UserCheck,
} from "lucide-react"

const EMPLOYER_STEPS = [
  { number: 1, title: "Request a Quote", description: "Tell us about your team size and training needs" },
  { number: 2, title: "We Set You Up", description: "Company dashboard configured with your courses" },
  { number: 3, title: "Team Gets Certified", description: "Your team completes training & gets certified" },
]

const VALUE_PROPS = [
  { icon: <BarChart3 className="size-5" />, text: "Company training dashboard" },
  { icon: <Users className="size-5" />, text: "Bulk pricing discounts" },
  { icon: <FileText className="size-5" />, text: "Invoice & PO payment" },
  { icon: <ClipboardCheck className="size-5" />, text: "Compliance tracking" },
  { icon: <Shield className="size-5" />, text: "All accreditations included" },
]

const ROLE_PACKAGES = [
  { icon: <HardHat className="size-6" />, role: "Labourer", card: "CSCS Green", courses: 4, price: 90 },
  { icon: <UserCheck className="size-6" />, role: "Supervisor", card: "CSCS Red", courses: 5, price: 140 },
  { icon: <Briefcase className="size-6" />, role: "Manager", card: "SMSTS/SSSTS", courses: 6, price: 180 },
  { icon: <Users className="size-6" />, role: "All Site Staff", card: "H&S Bundle", courses: 3, price: 60 },
]

export function EmployerPathway() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary px-4 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-d6 font-bold md:text-d5 text-white">
              Train Your Construction Team
            </h1>
            <ul className="mt-6 space-y-3">
              {VALUE_PROPS.map((prop) => (
                <li key={prop.text} className="flex items-center gap-3 text-white/90">
                  <span className="text-secondary">{prop.icon}</span>
                  {prop.text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" size="xl">
                Request a Quote
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Phone className="size-4" />
                0800 123 4567
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Trusted by 500+ companies across the UK
            </p>
          </div>

          {/* Dashboard preview mock */}
          <div className="rounded-xl bg-white/10 backdrop-blur p-6 border border-white/20">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Team Dashboard Preview
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <p className="text-2xl font-bold">45/50</p>
                <p className="text-xs text-white/60">Staff Enrolled</p>
              </div>
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <p className="text-2xl font-bold">60%</p>
                <p className="text-xs text-white/60">Completed</p>
              </div>
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <p className="text-2xl font-bold">38/45</p>
                <p className="text-xs text-white/60">Certs Valid</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>✓ John completed CSCS Green Card</p>
              <p>✓ Sarah completed Working at Height</p>
              <p className="text-warning">⚠ 3 certificates expiring soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Logos */}
      <section className="border-b bg-white px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8">
          {EMPLOYER_LOGOS.map((company) => (
            <span key={company} className="text-lg font-bold text-muted-foreground/50">
              {company}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <h2 className="text-center text-h2 font-bold mb-10">How It Works</h2>
        <HowItWorks steps={EMPLOYER_STEPS} />
      </section>

      {/* Training Packages */}
      <section className="bg-muted px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-2">Training Packages</h2>
          <p className="text-center text-muted-foreground mb-10">Pre-built bundles with volume discounts</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {EMPLOYER_PACKAGES.map((pkg) => (
              <Card key={pkg.id} className={pkg.id === "supervisor" ? "border-primary shadow-level-2" : ""}>
                {pkg.id === "supervisor" && (
                  <div className="bg-primary text-center py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-h3">{pkg.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">{pkg.courses} courses per person</p>
                    {pkg.pricePerPerson ? (
                      <>
                        <p className="mt-2 text-d6 font-bold text-primary font-mono">
                          £{pkg.pricePerPerson}
                        </p>
                        <p className="text-xs text-muted-foreground">per person</p>
                        {pkg.savings && (
                          <Badge variant="secondary" className="mt-2">
                            Save {pkg.savings}
                          </Badge>
                        )}
                      </>
                    ) : (
                      <p className="mt-2 text-h3 font-bold text-primary">Custom Pricing</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" variant={pkg.id === "custom" ? "outline" : "default"}>
                    {pkg.pricePerPerson ? "Request Quote" : "Contact Us"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training by Role */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-10">Training by Role</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_PACKAGES.map((pkg) => (
              <Card key={pkg.role} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-accent text-primary">
                    {pkg.icon}
                  </div>
                  <h3 className="font-bold">{pkg.role}</h3>
                  <p className="text-xs text-muted-foreground">{pkg.card}</p>
                  <p className="mt-2 text-sm">{pkg.courses} courses</p>
                  <p className="text-h3 font-bold text-primary font-mono mt-1">
                    from £{pkg.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-h2 font-bold mb-10">What Employers Say</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { quote: "Trained 120 staff in 3 months, saved over £2,000 compared to classroom courses.", company: "Skanska", person: "HR Director" },
              { quote: "The dashboard makes tracking compliance for audits incredibly simple. A game-changer.", company: "Kier Group", person: "Training Manager" },
            ].map((t) => (
              <Card key={t.company}>
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-semibold">{t.company}</p>
                    <p className="text-sm text-muted-foreground">{t.person}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="px-4 py-16" id="quote">
        <div className="mx-auto max-w-lg">
          <h2 className="text-center text-h2 font-bold mb-2">Request a Quote</h2>
          <p className="text-center text-muted-foreground mb-8">
            Get a custom quote for your team in under 24 hours
          </p>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="emp-company">Company Name *</Label>
                <Input id="emp-company" placeholder="Your company" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="emp-name">Your Name *</Label>
                <Input id="emp-name" placeholder="Full name" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="emp-email">Email *</Label>
                <Input id="emp-email" type="email" placeholder="work@company.com" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="emp-phone">Phone *</Label>
                <Input id="emp-phone" type="tel" placeholder="07700 900000" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="emp-staff">Number of Staff *</Label>
                <Select>
                  <SelectTrigger className="mt-1.5 h-12">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5–10 staff</SelectItem>
                    <SelectItem value="11-25">11–25 staff</SelectItem>
                    <SelectItem value="26-50">26–50 staff</SelectItem>
                    <SelectItem value="51-100">51–100 staff</SelectItem>
                    <SelectItem value="100+">100+ staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="emp-notes">Training Needed (optional)</Label>
                <Textarea id="emp-notes" placeholder="Tell us about your training requirements..." className="mt-1.5" rows={3} />
              </div>
              <Button className="w-full" size="xl">
                Submit Quote Request
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Or call us directly: <a href="tel:08001234567" className="text-primary font-semibold">0800 123 4567</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}
