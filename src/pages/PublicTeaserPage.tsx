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
      {/* Your Custom GIF Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary GIF Background - Your uploaded file */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/Download-ezgif.com-crop.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(80%) hue-rotate(25deg) saturate(1.2) brightness(0.7) contrast(1.1)'
          }}
        />
        
        {/* Layered GIF effect for depth */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url("/Download-ezgif.com-crop.gif")',
            backgroundSize: '120%',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(100%) hue-rotate(30deg) saturate(0.8) brightness(0.5) blur(2px)',
            animation: 'slowDrift 25s ease-in-out infinite'
          }}
        />
        
        {/* Third layer for atmospheric depth */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url("/Download-ezgif.com-crop.gif")',
            backgroundSize: '150%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(100%) hue-rotate(20deg) saturate(0.6) brightness(0.4) blur(4px)',
            animation: 'slowFloat 30s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Enhanced CSS Overlay Effects */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Floating Coffee Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                background: 'radial-gradient(circle, rgba(197, 174, 145, 0.8) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(1px)',
                animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Steam Rising Effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`steam-${i}`}
              className="absolute opacity-25"
              style={{
                left: `${20 + Math.random() * 60}%`,
                bottom: `${Math.random() * 40}%`,
                width: `${6 + Math.random() * 10}px`,
                height: `${30 + Math.random() * 50}px`,
                background: 'linear-gradient(180deg, transparent 0%, rgba(197, 174, 145, 0.6) 40%, rgba(197, 174, 145, 0.3) 70%, transparent 100%)',
                borderRadius: '50%',
                filter: 'blur(2px)',
                animation: `steam ${5 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Atmospheric Mist Layers */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`mist-${i}`}
              className="absolute opacity-10"
              style={{
                left: `${-10 + i * 15}%`,
                top: `${5 + i * 12}%`,
                width: `${150 + Math.random() * 200}px`,
                height: `${80 + Math.random() * 120}px`,
                background: 'radial-gradient(ellipse, rgba(197, 174, 145, 0.4) 0%, rgba(197, 174, 145, 0.2) 50%, transparent 80%)',
                borderRadius: '50%',
                filter: 'blur(25px)',
                animation: `drift ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 15}s`
              }}
            />
          ))}
        </div>

        {/* Cinematic Vignette with Coffee Theme */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(26, 22, 17, 0.2) 60%, rgba(26, 22, 17, 0.6) 90%, rgba(26, 22, 17, 0.9) 100%)'
          }}
        />
        
        {/* Subtle Color Overlay to Enhance Coffee Tones */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(197, 174, 145, 0.1) 0%, transparent 50%, rgba(237, 201, 175, 0.1) 100%)'
          }}
        />
      </div>

      {/* Enhanced Logo with Multiple Glow Effects */}
      <div className="mb-16 relative z-20">
        <div className="relative">
          {/* Multiple glow layers for cinematic depth */}
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(197, 174, 145, 0.5) 0%, rgba(197, 174, 145, 0.3) 30%, rgba(197, 174, 145, 0.1) 60%, transparent 80%)',
              filter: 'blur(40px)',
              animationDuration: '4s'
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(237, 201, 175, 0.4) 0%, rgba(237, 201, 175, 0.2) 40%, transparent 70%)',
              filter: 'blur(25px)',
              animationDuration: '3s',
              animationDelay: '1s'
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(176, 158, 126, 0.3) 0%, transparent 50%)',
              filter: 'blur(15px)',
              animationDuration: '5s',
              animationDelay: '2s'
            }}
          />
          
          {/* Main logo with enhanced effects */}
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain relative z-10"
            style={{
              filter: 'drop-shadow(0 15px 50px rgba(197, 174, 145, 0.8)) drop-shadow(0 0 100px rgba(197, 174, 145, 0.4)) drop-shadow(0 0 150px rgba(197, 174, 145, 0.2))',
              animation: 'logoGlow 6s ease-in-out infinite'
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
            transform: translateX(-50px) translateY(0px);
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-30px);
          }
        }
        
        @keyframes slowDrift {
          0%, 100% {
            transform: translateX(0px) translateY(0px) scale(1);
          }
          50% {
            transform: translateX(20px) translateY(-15px) scale(1.02);
          }
        }
        
        @keyframes slowFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.03);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes steam {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-40px) scale(1.3);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-80px) scale(0.7);
            opacity: 0;
          }
        }
        
        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 15px 50px rgba(197, 174, 145, 0.8)) drop-shadow(0 0 100px rgba(197, 174, 145, 0.4)) drop-shadow(0 0 150px rgba(197, 174, 145, 0.2));
          }
          50% {
            filter: drop-shadow(0 15px 50px rgba(197, 174, 145, 1)) drop-shadow(0 0 100px rgba(197, 174, 145, 0.6)) drop-shadow(0 0 150px rgba(197, 174, 145, 0.3));
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