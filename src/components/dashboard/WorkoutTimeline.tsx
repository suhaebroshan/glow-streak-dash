import { Calendar, Clock, Trophy, Zap, Target } from 'lucide-react';

const workoutHistory = [
  {
    id: 1,
    date: 'Today',
    time: '6:30 AM',
    type: 'Push Day',
    duration: '75 min',
    exercises: [
      { name: 'Bench Press', sets: '4x8', weight: '225 lbs', pr: true },
      { name: 'Overhead Press', sets: '3x10', weight: '135 lbs' },
      { name: 'Incline DB Press', sets: '3x12', weight: '80 lbs' },
    ],
    volume: '12,450 lbs',
    calories: 450,
  },
  {
    id: 2,
    date: 'Yesterday',
    time: '7:00 AM',
    type: 'Pull Day',
    duration: '68 min',
    exercises: [
      { name: 'Deadlift', sets: '5x5', weight: '315 lbs', pr: true },
      { name: 'Pull-ups', sets: '4x12', weight: 'BW+25' },
      { name: 'Barbell Rows', sets: '4x8', weight: '185 lbs' },
    ],
    volume: '15,200 lbs',
    calories: 520,
  },
  {
    id: 3,
    date: '2 days ago',
    time: '6:45 AM',
    type: 'Legs',
    duration: '82 min',
    exercises: [
      { name: 'Squat', sets: '4x6', weight: '275 lbs' },
      { name: 'Romanian DL', sets: '3x10', weight: '225 lbs' },
      { name: 'Bulgarian Split', sets: '3x12', weight: '50 lbs' },
    ],
    volume: '18,750 lbs',
    calories: 680,
  },
];

export const WorkoutTimeline = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Workout Timeline</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>Last 7 days</span>
        </div>
      </div>

      <div className="space-y-6">
        {workoutHistory.map((workout, index) => (
          <div key={workout.id} className="timeline-item">
            <div className="glass-button p-4 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group">
              {/* Workout Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 group-hover:glow-primary transition-all duration-300">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{workout.type}</h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{workout.date}</span>
                      <span>•</span>
                      <span>{workout.time}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{workout.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workout Stats */}
                <div className="flex gap-4 text-right">
                  <div>
                    <div className="text-sm font-semibold text-accent">{workout.volume}</div>
                    <div className="text-xs text-muted-foreground">Volume</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-secondary">{workout.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                </div>
              </div>

              {/* Exercise List */}
              <div className="space-y-2">
                {workout.exercises.map((exercise, exerciseIndex) => (
                  <div
                    key={exerciseIndex}
                    className="flex items-center justify-between p-2 rounded-lg bg-background/30 border border-border/20"
                  >
                    <div className="flex items-center gap-3">
                      {exercise.pr && (
                        <div className="p-1 rounded bg-warning/20 border border-warning/30">
                          <Trophy className="w-3 h-3 text-warning" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground">
                        {exercise.name}
                      </span>
                      {exercise.pr && (
                        <span className="text-xs text-warning font-semibold">PR!</span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-foreground">{exercise.sets}</div>
                      <div className="text-xs text-muted-foreground">{exercise.weight}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mt-4">
                <button className="text-xs text-primary hover:text-primary-glow transition-colors">
                  View Details
                </button>
                <span className="text-xs text-muted-foreground">•</span>
                <button className="text-xs text-accent hover:text-accent-glow transition-colors">
                  Repeat Workout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center pt-4">
        <button className="text-sm text-primary hover:text-primary-glow transition-colors flex items-center gap-2 mx-auto">
          <Target className="w-3 h-3" />
          View Complete History
        </button>
      </div>
    </div>
  );
};