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
      {/* Jungle/Woody Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Tree Trunks */}
        <div 
          className="absolute left-0 top-0 w-32 h-full opacity-20"
          style={{
            background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 30%, #8B4513 60%, transparent 100%)',
            clipPath: 'polygon(0 0, 80% 0, 60% 100%, 0 100%)'
          }}
        />
        <div 
          className="absolute right-0 top-0 w-24 h-full opacity-15"
          style={{
            background: 'linear-gradient(270deg, #654321 0%, #8B4513 40%, transparent 100%)',
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 40% 100%)'
          }}
        />

        {/* Hanging Vines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`vine-${i}`}
            className="absolute opacity-25"
            style={{
              left: `${10 + i * 12}%`,
              top: '0',
              width: '2px',
              height: `${60 + Math.random() * 40}%`,
              background: 'linear-gradient(180deg, #228B22 0%, #32CD32 50%, #228B22 100%)',
              transform: `rotate(${-5 + Math.random() * 10}deg)`,
              animation: `sway ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {/* Vine leaves */}
            <div
              className="absolute w-3 h-2 rounded-full opacity-80"
              style={{
                backgroundColor: '#32CD32',
                top: '20%',
                left: '-6px',
                transform: 'rotate(45deg)'
              }}
            />
            <div
              className="absolute w-2 h-3 rounded-full opacity-70"
              style={{
                backgroundColor: '#228B22',
                top: '60%',
                right: '-5px',
                transform: 'rotate(-30deg)'
              }}
            />
          </div>
        ))}

        {/* Large Tropical Leaves */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${30 + Math.random() * 40}px`,
              background: `linear-gradient(45deg, #228B22 0%, #32CD32 50%, #228B22 100%)`,
              clipPath: 'ellipse(50% 80% at 50% 20%)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}

        {/* Fern Fronds */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`fern-${i}`}
            className="absolute opacity-25"
            style={{
              left: `${5 + i * 15}%`,
              bottom: '0',
              width: '60px',
              height: '120px',
              background: `
                radial-gradient(ellipse 2px 8px at 10px 20px, #228B22 0%, transparent 50%),
                radial-gradient(ellipse 2px 8px at 20px 40px, #32CD32 0%, transparent 50%),
                radial-gradient(ellipse 2px 8px at 15px 60px, #228B22 0%, transparent 50%),
                radial-gradient(ellipse 2px 8px at 25px 80px, #32CD32 0%, transparent 50%),
                radial-gradient(ellipse 2px 8px at 18px 100px, #228B22 0%, transparent 50%),
                linear-gradient(180deg, transparent 0%, #228B22 20%, #228B22 80%, transparent 100%)
              `,
              backgroundSize: '100% 100%',
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
              animation: `sway ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Wooden Branches */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`branch-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 20}%`,
              width: `${80 + Math.random() * 60}px`,
              height: '6px',
              background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
              borderRadius: '3px',
              transform: `rotate(${-30 + Math.random() * 60}deg)`,
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {/* Small twigs */}
            <div
              className="absolute w-4 h-1 bg-gradient-to-r from-transparent to-amber-800 rounded-full"
              style={{
                top: '-2px',
                left: '30%',
                transform: 'rotate(45deg)'
              }}
            />
            <div
              className="absolute w-3 h-1 bg-gradient-to-r from-transparent to-amber-700 rounded-full"
              style={{
                bottom: '-2px',
                right: '40%',
                transform: 'rotate(-30deg)'
              }}
            />
          </div>
        ))}

        {/* Moss Patches */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`moss-${i}`}
            className="absolute opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${10 + Math.random() * 15}px`,
              background: 'radial-gradient(ellipse, #228B22 0%, #32CD32 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Enhanced atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-8 animate-pulse" style={{backgroundColor: '#c5ae91', filter: 'blur(100px)', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-6 animate-pulse" style={{backgroundColor: '#EDC9AF', filter: 'blur(120px)', animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full opacity-4 animate-pulse" style={{backgroundColor: '#b09e7e', filter: 'blur(150px)', animationDuration: '8s', animationDelay: '1s'}}></div>
      </div>

      {/* Much Bigger Logo with Enhanced Effects */}
      <div className="mb-16 relative z-20">
        <div className="relative">
          {/* Glow effect behind logo */}
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(197, 174, 145, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
              animationDuration: '3s'
            }}
          />
          
          {/* Main logo */}
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain relative z-10 animate-pulse"
            style={{
              filter: 'drop-shadow(0 12px 40px rgba(197, 174, 145, 0.6)) drop-shadow(0 0 80px rgba(197, 174, 145, 0.3))',
              animationDuration: '4s'
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
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
            opacity: 0.5; 
          }
        }
        
        @keyframes sway {
          0%, 100% { 
            transform: rotate(-2deg); 
          }
          50% { 
            transform: rotate(2deg); 
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