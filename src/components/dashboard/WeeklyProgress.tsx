import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { day: 'Mon', weight: 175, calories: 2200, workouts: 1 },
  { day: 'Tue', weight: 174.8, calories: 2400, workouts: 0 },
  { day: 'Wed', weight: 174.5, calories: 2100, workouts: 1 },
  { day: 'Thu', weight: 174.3, calories: 2300, workouts: 1 },
  { day: 'Fri', weight: 174.1, calories: 2500, workouts: 0 },
  { day: 'Sat', weight: 173.9, calories: 2800, workouts: 1 },
  { day: 'Sun', weight: 173.7, calories: 2600, workouts: 1 },
];

export const WeeklyProgress = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Weekly Progress</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Weight</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-muted-foreground">Calories</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Weight Chart */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Weight (lbs)</h4>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calories Chart */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Calories Burned</h4>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis hide />
                <ReferenceLine y={2200} stroke="hsl(var(--accent))" strokeDasharray="2 2" opacity={0.5} />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--secondary))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workout Sessions */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Workout Sessions</h4>
          <div className="flex gap-2">
            {data.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    day.workouts > 0 
                      ? 'bg-accent text-accent-foreground glow-accent' 
                      : 'bg-muted/30 text-muted-foreground border border-border/50'
                  }`}
                >
                  {day.workouts}
                </div>
                <span className="text-xs text-muted-foreground">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};