import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Heart, Watch, Smartphone, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [smartwatchSync, setSmartwatch] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login with loading animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Background ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="glass-card p-8 w-full max-w-md relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4 glow-primary">
            <Heart className="w-8 h-8 text-white pulse-heartbeat" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">FitAI Pro</h1>
          <p className="text-muted-foreground">Next-generation fitness tracking</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email/Username */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email or Username</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              className="glass-button border-border/30 focus:border-primary/50 focus:ring-primary/20"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="glass-button border-border/30 focus:border-primary/50 focus:ring-primary/20"
              required
            />
          </div>

          {/* Smartwatch Connect */}
          <div className="flex items-center justify-between p-4 glass-button rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20 border border-accent/30">
                <Watch className="w-4 h-4 text-accent" />
              </div>
              <div>
                <Label htmlFor="smartwatch" className="text-sm font-medium text-foreground">Connect Smartwatch</Label>
                <p className="text-xs text-muted-foreground">Apple Watch / WearOS</p>
              </div>
            </div>
            <Switch
              id="smartwatch"
              checked={smartwatchSync}
              onCheckedChange={setSmartwatch}
              className="data-[state=checked]:bg-accent"
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full btn-3d relative overflow-hidden group"
            size="lg"
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full loading-ring" />
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span>Enter FitAI Pro</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </Button>
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary-glow transition-colors text-sm">
            Forgot password?
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground mb-4">
            Connect your devices for real-time tracking
          </p>
          <div className="flex justify-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Smartphone className="w-4 h-4 text-primary" />
            </div>
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Watch className="w-4 h-4 text-accent" />
            </div>
            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
              <Heart className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;