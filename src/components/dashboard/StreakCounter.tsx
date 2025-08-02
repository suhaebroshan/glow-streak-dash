import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Flame, 
  Trophy, 
  Award,
  Star,
  Zap
} from "lucide-react";

export const StreakCounter = () => {
  const streaks = [
    {
      label: "Workout Streak",
      count: 12,
      unit: "days",
      icon: <Flame className="h-5 w-5" />,
      color: "primary",
      isActive: true
    },
    {
      label: "Step Goal",
      count: 7,
      unit: "days",
      icon: <Target className="h-5 w-5" />,
      color: "secondary", 
      isActive: true
    },
    {
      label: "Water Goal",
      count: 3,
      unit: "days",
      icon: <Zap className="h-5 w-5" />,
      color: "accent",
      isActive: false
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      label: "First Week",
      description: "Complete 7 workouts",
      earned: true
    },
    {
      icon: <Award className="h-6 w-6" />,
      label: "Step Master",
      description: "10,000 steps daily",
      earned: true
    },
    {
      icon: <Star className="h-6 w-6" />,
      label: "Consistency",
      description: "14 day streak",
      earned: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Streak Counters */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Current Streaks</h3>
        <div className="space-y-4">
          {streaks.map((streak, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/10 backdrop-blur-sm border border-border/30">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${
                  streak.color === 'primary' ? 'from-primary/20 to-primary/10 text-primary' :
                  streak.color === 'secondary' ? 'from-secondary/20 to-secondary/10 text-secondary' :
                  'from-accent/20 to-accent/10 text-accent'
                } backdrop-blur-sm`}>
                  {streak.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{streak.label}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">{streak.count}</span>
                    <span className="text-muted-foreground text-sm">{streak.unit}</span>
                    {streak.isActive && (
                      <Badge variant="outline" className="bg-success/20 text-success border-success/30 text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              {streak.isActive && (
                <div className="text-2xl pulse-glow">🔥</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                achievement.earned 
                  ? 'bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 glow-accent' 
                  : 'bg-muted/20 border-border/30 opacity-60'
              }`}
            >
              <div className={`flex justify-center mb-3 ${
                achievement.earned ? 'text-accent' : 'text-muted-foreground'
              }`}>
                {achievement.icon}
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground text-sm mb-1">{achievement.label}</h4>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
              {achievement.earned && (
                <div className="text-center mt-2">
                  <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30 text-xs">
                    Earned
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};