import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  glowColor?: "primary" | "secondary" | "accent";
}

export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend, 
  className,
  glowColor = "primary"
}: StatCardProps) => {
  const glowClass = {
    primary: "glow-primary",
    secondary: "glow-secondary", 
    accent: "glow-accent"
  }[glowColor];

  return (
    <div className={cn("glass-card p-6 hover:scale-105 transition-all duration-300 float-animation", glowClass, className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm">
          {icon}
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
            trend.isPositive 
              ? "bg-success/20 text-success border border-success/30" 
              : "bg-destructive/20 text-destructive border border-destructive/30"
          )}>
            <span>{trend.isPositive ? "↗" : "↘"}</span>
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      
      <h3 className="text-muted-foreground text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {subtitle && (
          <span className="text-muted-foreground text-sm mb-1">{subtitle}</span>
        )}
      </div>
    </div>
  );
};