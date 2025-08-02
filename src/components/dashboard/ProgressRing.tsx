import { cn } from "@/lib/utils";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: "primary" | "secondary" | "accent";
  children?: React.ReactNode;
}

export const ProgressRing = ({ 
  percentage, 
  size = 120, 
  strokeWidth = 8,
  className,
  color = "primary",
  children 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorClasses = {
    primary: "stroke-primary",
    secondary: "stroke-secondary", 
    accent: "stroke-accent"
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-border opacity-30"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={cn(
            "transition-all duration-1000 ease-out drop-shadow-lg",
            colorClasses[color]
          )}
          style={{
            filter: `drop-shadow(0 0 8px hsl(var(--${color})))`,
          }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};