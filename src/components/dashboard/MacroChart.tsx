import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const macroData = [
  { name: 'Protein', value: 35, color: '#00E4FF', grams: 175 },
  { name: 'Carbs', value: 40, color: '#6D28D9', grams: 200 },
  { name: 'Fat', value: 25, color: '#10B981', grams: 65 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, name
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-xs font-semibold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const MacroChart = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Daily Macros</h3>
        <div className="text-xs text-muted-foreground">
          Today's Split
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={macroData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                className="drop-shadow-lg"
              >
                {macroData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    className="macro-segment"
                    style={{
                      filter: `drop-shadow(0 0 8px ${entry.color}40)`
                    }}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Macro Breakdown */}
        <div className="space-y-4">
          {macroData.map((macro, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ 
                      backgroundColor: macro.color,
                      boxShadow: `0 0 8px ${macro.color}40`
                    }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {macro.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">
                    {macro.grams}g
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {macro.value}%
                  </div>
                </div>
              </div>
              <div className="w-full bg-border/30 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${macro.value}%`,
                    backgroundColor: macro.color,
                    boxShadow: `0 0 8px ${macro.color}40`,
                  }}
                />
              </div>
            </div>
          ))}

          {/* Calorie Info */}
          <div className="mt-6 p-3 glass-button rounded-lg border border-border/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">
                1,890
              </div>
              <div className="text-xs text-muted-foreground">
                Total Calories Consumed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};