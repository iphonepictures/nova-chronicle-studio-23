import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('INITIALIZING');

  const loadingTexts = [
    'INITIALIZING SYSTEMS...',
    'LOADING NEURAL NETWORKS...',
    'CONNECTING TO MAINFRAME...',
    'CYBER PROTOCOLS ACTIVATED...',
    'WELCOME TO THE FUTURE'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        if (newProgress <= 25) {
          setCurrentText(loadingTexts[0]);
        } else if (newProgress <= 50) {
          setCurrentText(loadingTexts[1]);
        } else if (newProgress <= 75) {
          setCurrentText(loadingTexts[2]);
        } else if (newProgress <= 95) {
          setCurrentText(loadingTexts[3]);
        } else {
          setCurrentText(loadingTexts[4]);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary opacity-20 animate-matrix-rain font-mono text-sm"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="text-center z-10 space-y-8">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold hologram-text tracking-wider">
            NOVA
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent animate-glow-pulse"></div>
        </div>

        {/* Loading bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="cyber-border bg-card/20 h-4 rounded-lg overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out animate-glow-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="text-muted-foreground">{currentText}</span>
            <span className="text-primary">{progress}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;