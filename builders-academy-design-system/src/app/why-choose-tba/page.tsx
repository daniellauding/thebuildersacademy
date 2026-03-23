import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";
import { Button } from "@/components/ui/button";
import { Award, Clock, Smartphone, TrendingUp } from "lucide-react";

export default function WhyChooseTBAPage() {
  const features = [
    {
      label: "CERTIFICATION",
      title: "Same-Day Results",
      description: "Complete your course and receive your certificate the same day. No waiting weeks for results — start working immediately.",
      icon: Award,
      stats: "92% pass rate on first attempt",
      imagePosition: "right" as const,
      background: "bg-white",
    },
    {
      label: "COMPLETION",
      title: "Flexible Learning at Your Pace",
      description: "Study when it suits you. Our platform works on any device, with bite-sized lessons you can complete during lunch breaks or evenings.",
      icon: Clock,
      stats: "Average completion time: 48 hours",
      imagePosition: "left" as const,
      background: "bg-slate-50",
    },
    {
      label: "MOBILE FIRST",
      title: "Learn Anywhere, Anytime",
      description: "Access your courses on your phone, tablet, or laptop. Progress syncs across devices so you can pick up exactly where you left off.",
      icon: Smartphone,
      stats: "70% of students complete on mobile",
      imagePosition: "right" as const,
      background: "bg-white",
    },
    {
      label: "EMPLOYER TOOLS",
      title: "Team Training Made Simple",
      description: "Bulk enrollment, progress tracking, and compliance dashboards. Train your entire workforce and stay CSCS compliant with ease.",
      icon: TrendingUp,
      stats: "500+ construction firms trust TBA",
      imagePosition: "left" as const,
      background: "bg-slate-50",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The UK's Most Trusted <br />
            Construction Training Provider
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Fast, flexible, and fully accredited. Get certified online with same-day results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#00A651] hover:bg-[#008f45] text-lg px-8 py-6">
              Find Your Course
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
              For Employers
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <section key={index} className={feature.background}>
            <div className="container mx-auto px-4 py-20">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                feature.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className={`space-y-6 ${feature.imagePosition === 'left' ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066CC] uppercase tracking-wide">
                    <Icon className="w-4 h-4" />
                    {feature.label}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    {feature.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-12 h-1 bg-[#00A651]" />
                    <span className="font-semibold">{feature.stats}</span>
                  </div>
                  
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Learn More
                  </Button>
                </div>

                {/* Visual/Mockup */}
                <div className={feature.imagePosition === 'left' ? 'md:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Icon className="w-32 h-32 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Stats Bar */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">15,000+</div>
              <div className="text-slate-300">Students Certified</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">48h</div>
              <div className="text-slate-300">Average Completion Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A651] mb-2">4.9/5</div>
              <div className="text-slate-300">Trustpilot Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of construction professionals who chose TBA for their training.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-6">
            Browse All Courses
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
