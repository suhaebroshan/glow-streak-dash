import { StatCard } from "./StatCard";
import { ProgressRing } from "./ProgressRing";
import { 
  Footprints, 
  MapPin, 
  Zap, 
  Flame,
  Clock,
  Heart
} from "lucide-react";

export const DailyActivity = () => {
  const activities = [
    {
      title: "Steps Today",
      value: "8,247",
      subtitle: "/ 10,000",
      icon: <Footprints className="h-5 w-5 text-primary" />,
      trend: { value: "+12%", isPositive: true },
      glowColor: "primary" as const
    },
    {
      title: "Distance",
      value: "3.2",
      subtitle: "miles",
      icon: <MapPin className="h-5 w-5 text-secondary" />,
      trend: { value: "+8%", isPositive: true },
      glowColor: "secondary" as const
    },
    {
      title: "Active Minutes",
      value: "47",
      subtitle: "/ 60 min",
      icon: <Zap className="h-5 w-5 text-accent" />,
      trend: { value: "+15%", isPositive: true },
      glowColor: "accent" as const
    }
  ];

  const circularMetrics = [
    {
      label: "Calories",
      value: "420",
      target: "500",
      percentage: 84,
      color: "primary" as const,
      icon: <Flame className="h-4 w-4" />
    },
    {
      label: "Exercise",
      value: "25",
      target: "30",
      percentage: 83,
      color: "secondary" as const,
      icon: <Clock className="h-4 w-4" />
    },
    {
      label: "Heart Rate",
      value: "72",
      target: "bpm",
      percentage: 65,
      color: "accent" as const,
      icon: <Heart className="h-4 w-4" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Daily Activity</h2>
        <div className="text-sm text-muted-foreground">Today, Dec 15</div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <StatCard
            key={index}
            {...activity}
          />
        ))}
      </div>

      {/* Circular Progress Metrics */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Today's Progress</h3>
        <div className="grid grid-cols-3 gap-6">
          {circularMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <ProgressRing 
                percentage={metric.percentage} 
                color={metric.color}
                size={100}
                strokeWidth={6}
              >
                <div className="text-center">
                  <div className={`mb-1 ${
                    metric.color === 'primary' ? 'text-primary' :
                    metric.color === 'secondary' ? 'text-secondary' : 'text-accent'
                  }`}>
                    {metric.icon}
                  </div>
                  <div className="text-lg font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.target}</div>
                </div>
              </ProgressRing>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.percentage}% complete</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};