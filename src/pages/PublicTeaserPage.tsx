import React, { useEffect, useState } from 'react';

const PublicTeaserPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
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
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{backgroundColor: '#1a1611'}}>
      {/* Static Logo */}
      <div className="mb-16">
        <img 
          src="/blue_bird_clean_transparent.png" 
          alt="Blue Bird" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
          style={{
            filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.4))'
          }}
        />
      </div>

      {/* Timer Display */}
      <div className="grid grid-cols-4 gap-8 md:gap-12">
        {Object.entries(countdown).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl flex items-center justify-center mb-4"
              style={{
                backgroundColor: 'rgba(197, 174, 145, 0.15)',
                border: '1px solid rgba(197, 174, 145, 0.3)'
              }}
            >
              <span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono"
                style={{
                  color: '#c5ae91',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            
            <span 
              className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider"
              style={{color: '#f4f1ed'}}
            >
              {unit === 'days' ? 'Tage' : 
               unit === 'hours' ? 'Stunden' : 
               unit === 'minutes' ? 'Minuten' : 'Sekunden'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicTeaserPage;