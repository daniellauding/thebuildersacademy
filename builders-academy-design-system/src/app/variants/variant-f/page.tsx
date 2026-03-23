import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  Briefcase,
  Clock,
  FileText,
  GraduationCap,
  HardHat,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function VariantFPage() {
  const categories = [
    {
      section: "Certification",
      items: [
        {
          icon: HardHat,
          title: "CSCS Green Card",
          description: "Site operative certification — most popular course",
          href: "/courses/cscs-green-card",
          badge: "Popular",
        },
        {
          icon: Award,
          title: "CSCS Gold Card",
          description: "Skilled worker advanced certification",
          href: "/courses/cscs-gold-card",
        },
        {
          icon: Briefcase,
          title: "CSCS Black Manager",
          description: "Site management and supervisor qualification",
          href: "/courses/cscs-black-manager",
        },
      ],
    },
    {
      section: "Health & Safety",
      items: [
        {
          icon: Shield,
          title: "CITB Health & Safety",
          description: "Core health and safety awareness training",
          href: "/courses/health-safety",
          badge: "CPD",
        },
        {
          icon: TrendingUp,
          title: "SMSTS Manager Safety",
          description: "Site management safety training scheme",
          href: "/courses/smsts",
        },
        {
          icon: FileText,
          title: "Asbestos Awareness",
          description: "Identify and handle asbestos safely on site",
          href: "/courses/asbestos",
        },
      ],
    },
    {
      section: "Employer Training",
      items: [
        {
          icon: Users,
          title: "Bulk Enrollment",
          description: "Train your entire team with group discounts",
          href: "/for-employers",
          badge: "New",
        },
        {
          icon: GraduationCap,
          title: "Custom Courses",
          description: "Tailored training programs for your business",
          href: "/custom-training",
        },
        {
          icon: BookOpen,
          title: "Compliance Dashboard",
          description: "Track team progress and certifications",
          href: "/employers/dashboard",
        },
      ],
    },
  ];

  const quickStats = [
    { label: "Available Courses", value: "250+" },
    { label: "Active Students", value: "15K+" },
    { label: "Completion Rate", value: "92%" },
    { label: "Avg. Time", value: "48h" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero - Search First (Vimeo-style) */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                Trusted by 500+ Construction Companies
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Find Your Perfect <br />
                Construction Course
              </h1>
              
              <p className="text-xl text-slate-300">
                CSCS cards, health & safety, and specialist training — all CPD
                accredited with same-day certification
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-2xl p-2 flex gap-2 max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search courses... (e.g. CSCS Green Card, Health & Safety)"
                className="flex-1 border-0 focus-visible:ring-0 text-base text-slate-900"
              />
              <Button
                size="lg"
                className="bg-[#0066CC] hover:bg-[#0052a3] text-white rounded-full px-8"
              >
                Search
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6 pt-8">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#00A651]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid - Vimeo Mega Menu Style */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
                <p className="text-slate-600">
                  Organized for easy navigation — find exactly what you need
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {categories.map((category) => (
                  <div key={category.section}>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                      {category.section}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block p-4 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                    {item.title}
                                  </h4>
                                  {item.badge && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs py-0"
                                    >
                                      {item.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t text-center">
                <a
                  href="/courses"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                >
                  See all 250+ courses
                  <span>→</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose TBA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Why Choose TBA
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Fast, Flexible, Fully Accredited
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get certified and start working
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Same-Day Certification",
                description:
                  "Complete your course and receive your certificate the same day. No waiting weeks for results.",
              },
              {
                icon: Shield,
                title: "CPD Accredited",
                description:
                  "All courses are CPD certified and recognized by CITB, IOSH, and industry bodies.",
              },
              {
                icon: Users,
                title: "Employer Trusted",
                description:
                  "500+ construction firms use TBA to train their teams and stay compliant.",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 15,000+ construction professionals training with TBA
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg"
            >
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
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
