import { ProgressRing } from './ProgressRing';
import { Flame, Target, TrendingUp } from 'lucide-react';

export const LiveCalories = () => {
  const caloriesBurned = 2350;
  const caloriesConsumed = 1890;
  const calorieGoal = 2200;
  const netCalories = caloriesConsumed - caloriesBurned;
  const burnProgress = (caloriesBurned / calorieGoal) * 100;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Live Calories</h3>
        <div className="p-2 rounded-lg bg-destructive/20 border border-destructive/30">
          <Flame className="w-4 h-4 text-destructive" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Calories Burned Progress Ring */}
        <div className="flex flex-col items-center">
          <ProgressRing
            percentage={burnProgress}
            size={120}
            strokeWidth={8}
            color="primary"
            className="mb-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">
                {caloriesBurned.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">burned</div>
            </div>
          </ProgressRing>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground mb-1">Calories Burned</p>
            <p className="text-xs text-muted-foreground">Goal: {calorieGoal.toLocaleString()}</p>
          </div>
        </div>

        {/* Calories Consumed vs Burned */}
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Consumed</span>
              <span className="text-sm font-semibold text-accent">
                {caloriesConsumed.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-border/30 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-accent to-accent-glow"
                style={{ width: `${(caloriesConsumed / calorieGoal) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Burned</span>
              <span className="text-sm font-semibold text-primary">
                {caloriesBurned.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-border/30 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${burnProgress}%` }}
              />
            </div>
          </div>

          {/* Net Calories */}
          <div className="p-3 glass-button rounded-lg border border-border/30">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Net Calories</span>
            </div>
            <div className={`text-lg font-bold ${
              netCalories < 0 ? 'text-primary' : 'text-warning'
            }`}>
              {netCalories > 0 ? '+' : ''}{netCalories}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">On track for weight loss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};