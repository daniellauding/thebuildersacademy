import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Shield, Target, Heart, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";

export default function AboutPage() {
  const stats = [
    { value: "15,000+", label: "Workers Certified" },
    { value: "92%", label: "Pass Rate" },
    { value: "250+", label: "Courses Available" },
    { value: "500+", label: "Partner Companies" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We're obsessed with construction site safety. Every course is designed to reduce accidents and save lives.",
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Same-day certification isn't a gimmick — it's a promise. Workers need cards fast, sites can't wait.",
    },
    {
      icon: Heart,
      title: "People Over Profit",
      description: "We keep prices low because training shouldn't be a barrier to employment. Everyone deserves a shot.",
    },
    {
      icon: Target,
      title: "Quality, Not Quantity",
      description: "CPD accredited, CITB approved. We don't cut corners on course content or certification standards.",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former site manager with 15 years in construction. Built TBA after seeing too many good workers held back by slow, expensive training.",
      initial: "S",
    },
    {
      name: "James Chen",
      role: "Head of Training",
      bio: "NEBOSH-certified safety consultant. Designed our entire course library with input from 200+ industry experts.",
      initial: "J",
    },
    {
      name: "Emma Roberts",
      role: "Customer Success Lead",
      bio: "Helps 500+ employers manage their training programs. Known for answering emails at 11pm.",
      initial: "E",
    },
  ];

  const timeline = [
    { year: "2018", event: "Founded with 3 courses and a vision" },
    { year: "2019", event: "Certified first 1,000 workers" },
    { year: "2020", event: "Pivoted fully online during pandemic" },
    { year: "2021", event: "Partnered with CITB for accreditation" },
    { year: "2022", event: "Launched employer dashboard" },
    { year: "2023", event: "Hit 10,000 students milestone" },
    { year: "2024", event: "Expanded to 250+ courses" },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-muted via-background to-primary/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            Our Story
          </Badge>
          
          <h1 className="text-d6 font-bold tracking-tight md:text-d4 text-foreground mb-6">
            We're here to make{" "}
            <span className="relative inline-block">
              <span className="relative z-10">construction training</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0"></span>
            </span>{" "}
            actually work
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto mb-8">
            Too many skilled workers sit idle waiting for cards. Too many employers pay ridiculous prices for basic training. 
            We built The Builders Academy to fix both problems.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-12 border-b bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-d5 font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make professional construction training accessible, affordable, and actually useful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-none bg-muted">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-h4 mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">
              Built by people who've actually worked on site
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-d5 font-bold text-primary mx-auto mb-4">
                    {member.initial}
                  </div>
                  <h3 className="font-bold text-h4 mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-h2 font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary border-4 border-background relative z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-lg font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">Accreditations & Partnerships</h2>
            <p className="text-muted-foreground">
              Trusted by industry leaders and certification bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "CITB", badge: "Approved Centre" },
              { name: "CPD", badge: "Accredited" },
              { name: "IOSH", badge: "Certified Partner" },
              { name: "NEBOSH", badge: "Gold Learning Partner" },
            ].map((partner) => (
              <div key={partner.name} className="text-center">
                <div className="h-24 flex items-center justify-center mb-3">
                  <div className="text-h3 font-bold text-muted-foreground">{partner.name}</div>
                </div>
                <Badge variant="outline" className="border-success/30 bg-success/10 text-success">
                  {partner.badge}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-d6 font-bold mb-4">Join 15,000+ Certified Workers</h2>
          <p className="text-lg mb-8 opacity-90">
            Whether you're starting your first site job or managing a crew of 50, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse Courses
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              For Employers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
