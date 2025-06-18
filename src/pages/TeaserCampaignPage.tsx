import React, { useEffect, useState } from 'react';

const TeaserCampaignPage: React.FC = () => {
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
    document.title = 'Blue Bird - Coming Soon';
    
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
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden">
          <div 
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold font-mono leading-none transition-all duration-500 ${
              hasChanged ? 'animate-pulse' : ''
            }`}
            style={{
              color: '#c5ae91',
              textShadow: '0 0 40px rgba(197, 174, 145, 0.8), 0 0 80px rgba(197, 174, 145, 0.4), 0 0 120px rgba(197, 174, 145, 0.2)',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {value.toString().padStart(2, '0')}
          </div>
          
          {/* Glow effect on change */}
          {hasChanged && (
            <div 
              className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold font-mono leading-none animate-ping opacity-75"
              style={{
                color: '#EDC9AF',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {value.toString().padStart(2, '0')}
            </div>
          )}
        </div>
        
        <div 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-2 sm:mt-4 uppercase tracking-wider"
          style={{color: '#f4f1ed'}}
        >
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: '#1a1611'}}>
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 animate-pulse" style={{backgroundColor: '#c5ae91', filter: 'blur(100px)', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 animate-pulse" style={{backgroundColor: '#EDC9AF', filter: 'blur(120px)', animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full opacity-3 animate-pulse" style={{backgroundColor: '#b09e7e', filter: 'blur(150px)', animationDuration: '8s', animationDelay: '1s'}}></div>
      </div>

      {/* Main countdown display */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo positioned prominently in center */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90"
            style={{
              filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.6)) drop-shadow(0 0 60px rgba(197, 174, 145, 0.3))',
            }}
          />
        </div>

        {/* Countdown timer grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <NumberDisplay 
            value={countdown.days} 
            previousValue={previousCountdown.days}
            label="Days" 
          />
          <NumberDisplay 
            value={countdown.hours} 
            previousValue={previousCountdown.hours}
            label="Hours" 
          />
          <NumberDisplay 
            value={countdown.minutes} 
            previousValue={previousCountdown.minutes}
            label="Minutes" 
          />
          <NumberDisplay 
            value={countdown.seconds} 
            previousValue={previousCountdown.seconds}
            label="Seconds" 
          />
        </div>

        {/* Subtle logo beneath timer */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-center">
            <div 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-script font-bold mb-2 opacity-60"
              style={{
                color: '#c5ae91',
                textShadow: '0 2px 20px rgba(197, 174, 145, 0.4)',
                letterSpacing: '0.05em'
              }}
            >
              Blue Bird
            </div>
            <div 
              className="text-sm sm:text-base md:text-lg lg:text-xl opacity-40 tracking-wider"
              style={{color: '#f4f1ed'}}
            >
              COMING SOON
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles for atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: '#c5ae91',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-60px) rotate(180deg); 
            opacity: 0.4; 
          }
        }
        
        @media (max-width: 640px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeaserCampaignPage;