import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  PlayCircle,
  FileText,
  Download,
  Shield,
  Star,
  Zap
} from "lucide-react";
import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";

export default function CSCSGreenCardPage() {
  const courseFeatures = [
    "Same-day certificate delivery",
    "CPD accredited training",
    "Mobile-friendly platform",
    "24/7 course access",
    "Expert tutor support",
    "Money-back guarantee",
  ];

  const modules = [
    {
      title: "Introduction to Construction Safety",
      duration: "45 min",
      lessons: 4,
      completed: false,
    },
    {
      title: "Health & Hazards on Site",
      duration: "1 hour",
      lessons: 6,
      completed: false,
    },
    {
      title: "Working at Height",
      duration: "30 min",
      lessons: 3,
      completed: false,
    },
    {
      title: "Manual Handling",
      duration: "40 min",
      lessons: 5,
      completed: false,
    },
    {
      title: "Final Assessment",
      duration: "30 min",
      lessons: 1,
      completed: false,
    },
  ];

  const faqs = [
    {
      question: "How long does the course take?",
      answer: "Most students complete the CSCS Green Card course in 3-4 hours. You can work at your own pace.",
    },
    {
      question: "Is this the official CITB test?",
      answer: "Yes, this course prepares you for and includes the official CITB Health, Safety and Environment test.",
    },
    {
      question: "When will I get my certificate?",
      answer: "Certificates are issued immediately upon passing. You can download it right away or receive it by email.",
    },
    {
      question: "What if I fail the test?",
      answer: "You can retake the test for free within 30 days. Most students pass on their first attempt (92% pass rate).",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/courses" className="hover:text-primary">Courses</a>
            <span>/</span>
            <a href="/courses" className="hover:text-primary">CSCS Cards</a>
            <span>/</span>
            <span className="text-foreground">Green Card</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-12 bg-gradient-to-br from-muted via-background to-primary/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default">Most Popular</Badge>
                <Badge variant="outline">CPD Accredited</Badge>
              </div>
              
              <h1 className="text-d6 font-bold mb-4">CSCS Green Card Training</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Get your construction site access card with this comprehensive CITB-approved online course. 
                Pass the test and receive your certificate the same day.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(2,453 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>15,234 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>4 hours average</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Start Learning Now
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText className="h-5 w-5" />
                  Download Syllabus
                </Button>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-d5 font-bold text-primary">£65</span>
                      <span className="text-sm text-muted-foreground line-through">£89</span>
                    </div>
                    <Badge variant="outline" className="border-success/30 bg-success/10 text-success">
                      Save 27% today
                    </Badge>
                  </div>

                  <Button className="w-full mb-4" size="lg">Enroll Now</Button>
                  <p className="text-xs text-center text-muted-foreground mb-4">30-day money-back guarantee</p>

                  <div className="border-t pt-4 space-y-3">
                    <h3 className="font-bold text-sm mb-3">This course includes:</h3>
                    {courseFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 shrink-0 text-success mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-4 py-16 border-b">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-h2 font-bold mb-8">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Identify common construction site hazards",
              "Understand health and safety legislation",
              "Implement safe working practices",
              "Recognize and report dangerous situations",
              "Use personal protective equipment correctly",
              "Follow emergency procedures",
              "Work safely at height",
              "Handle materials and equipment properly",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-h2 font-bold">Course Content</h2>
            <p className="text-sm text-muted-foreground">5 modules • 19 lessons • 4h total</p>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-h5 mb-2">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {module.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <PlayCircle className="h-3 w-3" />
                            {module.lessons} lessons
                          </div>
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <Button variant="ghost" size="sm" className="gap-2">
                        <PlayCircle className="h-4 w-4" />
                        Preview
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-16 border-b">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-h3 font-bold mb-4">Requirements</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>No prior construction experience needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Basic understanding of English</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Computer, tablet, or smartphone with internet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Valid ID for certification</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-h3 font-bold mb-4">Who This Course is For</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Construction site workers (labourers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Anyone starting a career in construction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Workers needing CSCS card renewal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>Employers training new hires</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-h2 font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-h5 mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-12 border-t">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">CITB Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-success" />
              <span className="font-medium">CPD Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-warning" />
              <span className="font-medium">Same-Day Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-info" />
              <span className="font-medium">15,000+ Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-d6 font-bold mb-4">Ready to Get Your CSCS Card?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join 15,000+ construction workers who've passed with The Builders Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Enroll Now - £65
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Try Free Preview
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">30-day money-back guarantee • Same-day certificate</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
