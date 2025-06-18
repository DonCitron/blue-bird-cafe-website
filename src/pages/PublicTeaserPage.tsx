import React, { useEffect, useState } from 'react';

const PublicTeaserPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Blue Bird Café - Coming Soon';
    
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
    
    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Minimal Full-Screen Teaser */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: '#3d3629'}}>
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse" style={{backgroundColor: '#b09e7e', filter: 'blur(100px)'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 animate-pulse" style={{backgroundColor: '#c5ae91', filter: 'blur(80px)', animationDelay: '1s'}}></div>
        </div>

        {/* Main Content - Logo and Timer Only */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Café" 
              className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.4))',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Countdown Timer */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {Object.entries(countdown).map(([unit, value], index) => (
                <div key={unit} className="text-center">
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
                    style={{
                      backgroundColor: 'rgba(197, 174, 145, 0.15)',
                      border: '2px solid rgba(197, 174, 145, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono" style={{
                      color: '#c5ae91',
                      textShadow: '0 2px 10px rgba(197, 174, 145, 0.5)'
                    }}>
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-lg md:text-xl lg:text-2xl font-medium capitalize" style={{
                    color: '#f4f1ed',
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)'
                  }}>
                    {unit === 'days' ? 'Tage' : unit === 'hours' ? 'Stunden' : unit === 'minutes' ? 'Minuten' : 'Sekunden'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20"
              style={{
                backgroundColor: '#c5ae91',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 0.4; 
          }
        }
      `}</style>
    </>
  );
};

export default PublicTeaserPage;