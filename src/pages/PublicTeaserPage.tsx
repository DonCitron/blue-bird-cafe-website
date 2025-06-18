import React, { useEffect, useState } from 'react';

const PublicTeaserPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [previousCountdown, setPreviousCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = 'Blue Bird Café';
    
    // Countdown to January 8, 2025
    const targetDate = new Date('2025-01-08T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        const newCountdown = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
        
        setPreviousCountdown(countdown);
        setCountdown(newCountdown);
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [countdown]);

  const NumberDisplay = ({ value, previousValue, label }: { value: number; previousValue: number; label: string }) => {
    const hasChanged = value !== previousValue;
    
    return (
      <div className="text-center relative">
        <div 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(197, 174, 145, 0.15)',
            border: '1px solid rgba(197, 174, 145, 0.3)',
            boxShadow: hasChanged ? '0 0 30px rgba(197, 174, 145, 0.6), inset 0 0 20px rgba(197, 174, 145, 0.2)' : '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(197, 174, 145, 0.1)'
          }}
        >
          {/* Animated background glow on change */}
          {hasChanged && (
            <div 
              className="absolute inset-0 rounded-xl animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(197, 174, 145, 0.3) 0%, transparent 70%)',
                animation: 'pulse 0.8s ease-out'
              }}
            />
          )}
          
          <span 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono relative z-10 transition-all duration-300 ${
              hasChanged ? 'scale-110' : 'scale-100'
            }`}
            style={{
              color: '#c5ae91',
              fontVariantNumeric: 'tabular-nums',
              textShadow: hasChanged 
                ? '0 0 20px rgba(197, 174, 145, 0.8), 0 0 40px rgba(197, 174, 145, 0.4)' 
                : '0 2px 10px rgba(197, 174, 145, 0.3)'
            }}
          >
            {value.toString().padStart(2, '0')}
          </span>
          
          {/* Ripple effect on change */}
          {hasChanged && (
            <div 
              className="absolute inset-0 rounded-xl border-2 animate-ping"
              style={{
                borderColor: 'rgba(197, 174, 145, 0.6)',
                animation: 'ripple 1s ease-out'
              }}
            />
          )}
        </div>
        
        <span 
          className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider"
          style={{color: '#f4f1ed'}}
        >
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: '#1a1611'}}>
      {/* Cinematic Video-Like Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Clouds/Mist Effect */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`cloud-${i}`}
              className="absolute opacity-10"
              style={{
                left: `${-20 + i * 25}%`,
                top: `${10 + i * 15}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 150}px`,
                background: 'radial-gradient(ellipse, rgba(197, 174, 145, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                animation: `drift ${20 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Cinematic Light Rays */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute opacity-5"
              style={{
                left: `${10 + i * 12}%`,
                top: '-10%',
                width: '2px',
                height: '120%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(197, 174, 145, 0.6) 30%, rgba(197, 174, 145, 0.3) 70%, transparent 100%)',
                transform: `rotate(${-15 + Math.random() * 30}deg)`,
                animation: `lightRay ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Floating Coffee Steam */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`steam-${i}`}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 30}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${40 + Math.random() * 60}px`,
                background: 'linear-gradient(180deg, transparent 0%, rgba(197, 174, 145, 0.4) 50%, transparent 100%)',
                borderRadius: '50%',
                filter: 'blur(3px)',
                animation: `steam ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Organic Coffee Bean Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`bean-${i}`}
              className="absolute opacity-15"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${6 + Math.random() * 8}px`,
                height: `${10 + Math.random() * 12}px`,
                background: 'radial-gradient(ellipse, #8B4513 0%, #A0522D 50%, transparent 80%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            >
              {/* Coffee bean crack */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-3/4 opacity-60"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, #654321 50%, transparent 100%)',
                  borderRadius: '1px'
                }}
              />
            </div>
          ))}
        </div>

        {/* Atmospheric Depth Layers */}
        <div className="absolute inset-0">
          {/* Far background layer */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(197, 174, 145, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(237, 201, 175, 0.2) 0%, transparent 50%)',
              animation: 'breathe 12s ease-in-out infinite'
            }}
          />
          
          {/* Mid layer */}
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              background: 'radial-gradient(ellipse at 50% 80%, rgba(176, 158, 126, 0.2) 0%, transparent 60%)',
              animation: 'breathe 8s ease-in-out infinite reverse'
            }}
          />
          
          {/* Near layer */}
          <div 
            className="absolute inset-0 opacity-12"
            style={{
              background: 'radial-gradient(circle at 50% 20%, rgba(197, 174, 145, 0.15) 0%, transparent 40%)',
              animation: 'breathe 6s ease-in-out infinite'
            }}
          />
        </div>

        {/* Cinematic Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26, 22, 17, 0.3) 70%, rgba(26, 22, 17, 0.8) 100%)'
          }}
        />
      </div>

      {/* Much Bigger Logo with Enhanced Effects */}
      <div className="mb-16 relative z-20">
        <div className="relative">
          {/* Multiple glow layers for depth */}
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(197, 174, 145, 0.4) 0%, rgba(197, 174, 145, 0.2) 40%, transparent 70%)',
              filter: 'blur(30px)',
              animationDuration: '4s'
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(237, 201, 175, 0.3) 0%, transparent 50%)',
              filter: 'blur(20px)',
              animationDuration: '3s',
              animationDelay: '1s'
            }}
          />
          
          {/* Main logo */}
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain relative z-10"
            style={{
              filter: 'drop-shadow(0 12px 40px rgba(197, 174, 145, 0.6)) drop-shadow(0 0 80px rgba(197, 174, 145, 0.3)) drop-shadow(0 0 120px rgba(197, 174, 145, 0.1))',
              animation: 'logoGlow 5s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Enhanced Timer Display */}
      <div className="grid grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-20">
        <NumberDisplay 
          value={countdown.days} 
          previousValue={previousCountdown.days}
          label="Tage" 
        />
        <NumberDisplay 
          value={countdown.hours} 
          previousValue={previousCountdown.hours}
          label="Stunden" 
        />
        <NumberDisplay 
          value={countdown.minutes} 
          previousValue={previousCountdown.minutes}
          label="Minuten" 
        />
        <NumberDisplay 
          value={countdown.seconds} 
          previousValue={previousCountdown.seconds}
          label="Sekunden" 
        />
      </div>

      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translateX(-100px) translateY(0px);
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-20px);
          }
        }
        
        @keyframes lightRay {
          0%, 100% {
            opacity: 0.05;
            transform: rotate(-15deg) scaleY(0.8);
          }
          50% {
            opacity: 0.15;
            transform: rotate(-10deg) scaleY(1.2);
          }
        }
        
        @keyframes steam {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-60px) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.15; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.25; 
          }
        }
        
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.05;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }
        
        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 12px 40px rgba(197, 174, 145, 0.6)) drop-shadow(0 0 80px rgba(197, 174, 145, 0.3)) drop-shadow(0 0 120px rgba(197, 174, 145, 0.1));
          }
          50% {
            filter: drop-shadow(0 12px 40px rgba(197, 174, 145, 0.8)) drop-shadow(0 0 80px rgba(197, 174, 145, 0.5)) drop-shadow(0 0 120px rgba(197, 174, 145, 0.2));
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default PublicTeaserPage;