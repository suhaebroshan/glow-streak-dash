import { DailyActivity } from "@/components/dashboard/DailyActivity";
import { WeeklyProgress } from "@/components/dashboard/WeeklyProgress";
import { StreakCounter } from "@/components/dashboard/StreakCounter";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Search, 
  Menu,
  Sun,
  Moon
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">F</span>
                </div>
                <h1 className="text-xl font-bold text-foreground">FitTracker Pro</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background" />
              </Button>
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Daily Activity */}
            <DailyActivity />
            
            {/* Weekly Progress & Quick Actions */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <WeeklyProgress />
              <QuickActions />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <ProfileSection />
            <StreakCounter />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          variant="default" 
          size="icon" 
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow"
        >
          <span className="text-2xl">💪</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
