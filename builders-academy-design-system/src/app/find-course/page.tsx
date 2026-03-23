import { Navbar } from "@/components/primitives/navbar";
import { Footer } from "@/components/primitives/footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Briefcase, GraduationCap, HardHat, Shield, Users } from "lucide-react";

export default function FindCoursePage() {
  const goals = [
    { id: "career", label: "Start my construction career", icon: Briefcase },
    { id: "cscs", label: "Get my CSCS Green Card", icon: HardHat },
    { id: "health-safety", label: "Learn health & safety compliance", icon: Shield },
    { id: "upskill", label: "Upskill for a promotion", icon: GraduationCap },
    { id: "team-training", label: "Train my team (employer)", icon: Users },
    { id: "explore", label: "Just exploring options", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Quiz Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                What brings you to The Builders Academy today?
              </h1>
              <p className="text-xl text-slate-300">
                Select all that apply to find your perfect course match.
              </p>
            </div>

            <form className="space-y-4">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <label
                    key={goal.id}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer group"
                  >
                    <Checkbox id={goal.id} className="w-5 h-5" />
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-lg flex-1">{goal.label}</span>
                  </label>
                );
              })}
            </form>

            <Button 
              size="lg" 
              className="w-full bg-[#00A651] hover:bg-[#008f45] text-white text-lg py-6"
            >
              Show Me My Courses
            </Button>

            <p className="text-sm text-slate-400 text-center">
              No commitment required • Browse courses tailored to your goals
            </p>
          </div>

          {/* Right: Instructor/Student Mosaic */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold">92%</div>
                  <div className="text-sm mt-2 text-blue-200">Pass Rate</div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold">48h</div>
                  <div className="text-sm mt-2 text-green-200">Avg. Completion</div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold">15K+</div>
                  <div className="text-sm mt-2 text-orange-200">Students</div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold">4.9</div>
                  <div className="text-sm mt-2 text-purple-200">★ Rating</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
