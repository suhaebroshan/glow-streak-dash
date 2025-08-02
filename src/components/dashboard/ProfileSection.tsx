import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "./ProgressRing";
import { 
  Settings, 
  Crown, 
  Star,
  TrendingUp,
  Calendar
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const ProfileSection = () => {
  const userLevel = {
    current: 15,
    progress: 75, // percentage to next level
    totalXP: 12450,
    nextLevelXP: 15000
  };

  const badges = [
    { icon: "🏃", name: "Runner", color: "primary" },
    { icon: "💪", name: "Strong", color: "secondary" },
    { icon: "🔥", name: "Streak", color: "accent" },
    { icon: "⭐", name: "Elite", color: "warning" }
  ];

  const stats = [
    { label: "Workouts", value: "127", icon: <TrendingUp className="h-4 w-4" /> },
    { label: "Days Active", value: "45", icon: <Calendar className="h-4 w-4" /> }
  ];

  return (
    <div className="glass-card p-6 space-y-6">
      {/* Profile Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={profileAvatar} 
              alt="Profile Avatar" 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/30 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1 border-2 border-background">
              <Crown className="h-3 w-3 text-accent-foreground" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Alex Rivera</h3>
            <p className="text-muted-foreground text-sm">Fitness Enthusiast</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                Level {userLevel.current}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {userLevel.totalXP.toLocaleString()} XP
              </span>
            </div>
          </div>
        </div>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Level Progress */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Level Progress</span>
          <span className="text-xs text-muted-foreground">
            {userLevel.progress}% to Level {userLevel.current + 1}
          </span>
        </div>
        <div className="relative">
          <div className="h-3 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow progress-glow transition-all duration-1000 ease-out"
              style={{ width: `${userLevel.progress}%` }}
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/20" />
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">Recent Badges</h4>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-border/30 hover:scale-105 transition-all duration-300 min-w-[70px]"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <span className="text-xs font-medium text-foreground">{badge.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm border border-border/30">
            <div className="flex items-center gap-2 mb-1">
              <div className="text-primary">
                {stat.icon}
              </div>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};