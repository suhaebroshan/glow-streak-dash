import { Button } from "@/components/ui/button";
import { 
  Play, 
  Apple, 
  Smartphone, 
  Plus,
  Dumbbell,
  Target
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      icon: <Play className="h-5 w-5" />,
      label: "Start Workout",
      variant: "default" as const,
      size: "lg" as const
    },
    {
      icon: <Apple className="h-5 w-5" />,
      label: "Log Food",
      variant: "secondary" as const,
      size: "lg" as const
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      label: "Sync Device",
      variant: "accent" as const,
      size: "lg" as const
    },
    {
      icon: <Plus className="h-4 w-4" />,
      label: "Quick Add",
      variant: "glass" as const,
      size: "default" as const
    }
  ];

  const miniActions = [
    {
      icon: <Dumbbell className="h-5 w-5" />,
      label: "Workouts",
      variant: "ghost" as const
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: "Goals", 
      variant: "ghost" as const
    }
  ];

  return (
    <div className="glass-card p-6 space-y-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      
      {/* Main Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.slice(0, 3).map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            size={action.size}
            className="w-full"
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </div>

      {/* Secondary Actions */}
      <div className="flex gap-3">
        <Button variant="glass" size="default" className="flex-1">
          <Plus className="h-4 w-4" />
          Quick Add
        </Button>
        
        <div className="flex gap-2">
          {miniActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="icon"
              className="aspect-square"
            >
              {action.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};