import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/primitives/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function VariantEPage() {
  const trustLogos = [
    "Selco Builders Warehouse",
    "Clarion Housing",
    "BBC Studios",
    "Skanska",
    "SMAS Worksafe",
    "G&S Construction",
  ];

  const popularCourses = [
    {
      title: "CSCS Green Card",
      category: "CSCS",
      price: "£65",
      duration: "4 hours",
      badge: "Most Popular",
    },
    {
      title: "Health & Safety Awareness",
      category: "Health & Safety",
      price: "£85",
      duration: "6 hours",
      badge: "CPD Accredited",
    },
    {
      title: "Fire Marshal Training",
      category: "Fire Safety",
      price: "£55",
      duration: "3 hours",
      badge: "New",
    },
    {
      title: "First Aid at Work",
      category: "First Aid",
      price: "£120",
      duration: "8 hours",
      badge: "CPD Accredited",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Zendesk Style */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Get CSCS Certified Online —{" "}
                  <span className="text-[#00A651]">Same-Day Results</span>
                </h1>
                <p className="text-xl text-slate-600">
                  Fast, flexible construction training with instant certification.
                  Join 15,000+ workers who chose TBA.
                </p>
              </div>

              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Work email"
                  className="flex-1 h-12 text-base"
                />
                <Button
                  size="lg"
                  className="bg-[#00A651] hover:bg-[#008f45] text-white px-8"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
                <span>
                  <strong>14-day money back guarantee.</strong> No credit card
                  required.
                </span>
              </div>
            </div>

            {/* Right: Testimonial */}
            <div className="lg:pt-8">
              <TestimonialCard
                quote="Completed my CSCS Green Card in one day while on a break between jobs. The platform was easy to use, and I got my certificate emailed the same evening. Couldn't be happier!"
                author="John Smith"
                role="Site Manager"
                company="Midlands Building Ltd"
                badge="Verified Student"
                stats={[
                  { label: "Pass Rate", value: "92%", subtext: "First attempt" },
                  { label: "Avg. Time", value: "48h", subtext: "To complete" },
                  { label: "Students", value: "2.1K", subtext: "This course" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Bar */}
      <section className="bg-white py-8 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-slate-500 mb-6 uppercase tracking-wide">
            Trusted by 100+ Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="text-slate-400 font-semibold text-sm hover:text-slate-600 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Most Popular
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Start Your Training Today</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose from our most popular construction courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularCourses.map((course) => (
              <Card
                key={course.title}
                className="group hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {course.badge && (
                    <Badge
                      variant={
                        course.badge === "Most Popular" ? "default" : "outline"
                      }
                      className="mb-3"
                    >
                      {course.badge}
                    </Badge>
                  )}

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {course.category}
                  </p>

                  <div className="flex items-baseline justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">From</span>
                      <p className="text-2xl font-bold text-primary">
                        {course.price}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {course.duration}
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    View Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">92%</div>
              <div className="text-slate-300">Pass Rate</div>
              <div className="text-xs text-slate-400 mt-1">First attempt</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">48h</div>
              <div className="text-slate-300">Avg. Completion</div>
              <div className="text-xs text-slate-400 mt-1">Flexible learning</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">
                15K+
              </div>
              <div className="text-slate-300">Students Trained</div>
              <div className="text-xs text-slate-400 mt-1">Since 2018</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">4.9</div>
              <div className="text-slate-300">Trustpilot Rating</div>
              <div className="text-xs text-slate-400 mt-1">1,234 reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to get started with TBA?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join construction professionals across the UK who trust The Builders
            Academy for their training needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-[#00A651] hover:bg-[#008f45] text-white px-8 py-6 text-lg"
            >
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              For Employers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
