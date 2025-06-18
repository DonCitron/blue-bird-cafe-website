import React, { useEffect, useState } from 'react';

const TeaserCampaignPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = 'Something\'s Brewing... - Blue Bird';
    
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
        // When countdown reaches zero
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Clean Mysterious Teaser */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: '#3d3629'}}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{backgroundColor: '#b09e7e', filter: 'blur(100px)'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" style={{backgroundColor: '#c5ae91', filter: 'blur(80px)'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Blue Bird Logo - Normal proportions like in navbar */}
          <div className="mb-12">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto opacity-90 filter drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.3))',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Big Countdown Timer */}
          <div className="mb-12">
            <div 
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wider font-mono"
              style={{
                color: '#c5ae91',
                textShadow: '0 0 30px rgba(197, 174, 145, 0.8), 0 0 60px rgba(197, 174, 145, 0.4)'
              }}
            >
              {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes {countdown.seconds} Seconds Left
            </div>
          </div>
          
          {/* Opening Date */}
          <div>
            <div 
              className="text-2xl md:text-4xl font-bold tracking-wider opacity-80"
              style={{
                color: '#c5ae91',
                textShadow: '0 0 20px rgba(197, 174, 145, 0.3)',
                fontFamily: 'serif'
              }}
            >
              Opening Date: 01.08.2025
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20"
              style={{
                backgroundColor: '#c5ae91',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
        }
      `}</style>
    </>
  );
};

export default TeaserCampaignPage;