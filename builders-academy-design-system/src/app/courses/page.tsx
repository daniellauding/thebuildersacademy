import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";

export default function CoursesPage() {
  const categories = [
    {
      title: "CSCS Cards",
      description: "Get site-ready with industry-standard certification",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
      courses: 12,
    },
    {
      title: "Health & Safety",
      description: "Essential training for construction site safety",
      icon: Shield,
      color: "text-success",
      bgColor: "bg-success/10",
      courses: 18,
    },
    {
      title: "Fire Safety",
      description: "Fire prevention and emergency response training",
      icon: TrendingUp,
      color: "text-warning",
      bgColor: "bg-warning/10",
      courses: 8,
    },
    {
      title: "First Aid",
      description: "Workplace first aid and emergency care",
      icon: Users,
      color: "text-error",
      bgColor: "bg-error/10",
      courses: 6,
    },
  ];

  const popularCourses = [
    {
      title: "CSCS Green Card",
      category: "CSCS Cards",
      duration: "4 hours",
      level: "Beginner",
      price: "£65",
      rating: 4.9,
      students: 2453,
      badge: "Most Popular",
    },
    {
      title: "CITB Health & Safety Awareness",
      category: "Health & Safety",
      duration: "6 hours",
      level: "All Levels",
      price: "£85",
      rating: 4.8,
      students: 1876,
      badge: "CPD Accredited",
    },
    {
      title: "Fire Marshal Training",
      category: "Fire Safety",
      duration: "3 hours",
      level: "Intermediate",
      price: "£55",
      rating: 4.7,
      students: 945,
      badge: "New",
    },
    {
      title: "First Aid at Work",
      category: "First Aid",
      duration: "8 hours",
      level: "All Levels",
      price: "£120",
      rating: 4.9,
      students: 1234,
      badge: "CPD Accredited",
    },
    {
      title: "SMSTS Site Manager Safety",
      category: "Health & Safety",
      duration: "12 hours",
      level: "Advanced",
      price: "£180",
      rating: 4.8,
      students: 678,
      badge: "CITB Approved",
    },
    {
      title: "Asbestos Awareness",
      category: "Health & Safety",
      duration: "2 hours",
      level: "Beginner",
      price: "£45",
      rating: 4.6,
      students: 1567,
      badge: null,
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Mindpath style */}
      <section className="relative bg-gradient-to-br from-muted via-background to-primary/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            250+ Accredited Courses
          </Badge>
          
          <h1 className="text-d6 font-bold tracking-tight md:text-d4 text-foreground">
            Your path to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">construction mastery</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0"></span>
            </span>
            , guided by experts
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            From CSCS cards to advanced safety training — all CPD accredited, all online, all same-day certification.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border-2 border-background">C</div>
              <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center text-xs font-bold border-2 border-background">I</div>
              <div className="h-8 w-8 rounded-full bg-info/20 flex items-center justify-center text-xs font-bold border-2 border-background">T</div>
            </div>
            <span>★ 4.9 Trustindex | 15,234 Students</span>
          </div>
        </div>
      </section>

      {/* Category Cards - Mindpath style large CTAs */}
      <section className="px-4 py-12 -mt-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.title}
                className="group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${category.bgColor} mb-3`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-h5 mb-1">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.courses} courses</p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-h2 font-bold mb-2">Popular Courses</h2>
              <p className="text-muted-foreground">Start with these industry favorites</p>
            </div>
            <Button variant="outline">View All Courses</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.title} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  {course.badge && (
                    <Badge variant={course.badge === "Most Popular" ? "default" : "outline"} className="mb-3">
                      {course.badge}
                    </Badge>
                  )}
                  
                  <h3 className="font-bold text-h4 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">{course.category}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="text-h4 font-bold text-primary">{course.price}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs">
                        <span>★</span>
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-muted-foreground">({course.students})</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">View Course</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter/Search Section */}
      <section className="px-4 py-16 bg-muted">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-h2 font-bold mb-4">Can't find what you need?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our advanced search to find the perfect course for your requirements
          </p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="Search courses..."
              className="flex-1 rounded-full border bg-background px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg">Search</Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-h2 font-bold mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <div className="text-h4 font-bold">CITB</div>
            <div className="text-h4 font-bold">CPD</div>
            <div className="text-h4 font-bold">IOSH</div>
            <div className="text-h4 font-bold">NEBOSH</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
