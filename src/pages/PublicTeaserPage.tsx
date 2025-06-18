import React, { useEffect, useState } from 'react';

const PublicTeaserPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [logoPhase, setLogoPhase] = useState(0);

  useEffect(() => {
    document.title = 'Blue Bird Café - Bald verfügbar';
    
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
    
    // Logo animation phases
    const logoInterval = setInterval(() => {
      setLogoPhase(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearInterval(logoInterval);
    };
  }, []);

  return (
    <>
      {/* Full-Screen German Brand Experience */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{backgroundColor: '#1a1611'}}>
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full opacity-15 animate-pulse" style={{backgroundColor: '#c5ae91', filter: 'blur(120px)', animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-12 animate-pulse" style={{backgroundColor: '#EDC9AF', filter: 'blur(100px)', animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full opacity-8 animate-pulse" style={{backgroundColor: '#b09e7e', filter: 'blur(150px)', animationDuration: '8s', animationDelay: '1s'}}></div>
        </div>

        {/* Prominent Central Logo Animation */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
          
          {/* Dominant Logo Display */}
          <div className={`mb-12 md:mb-16 lg:mb-20 transition-all duration-2000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative flex flex-col items-center">
              
              {/* Main Logo with Dynamic Animation */}
              <div className="relative mb-8">
                <img 
                  src="/blue_bird_clean_transparent.png" 
                  alt="Blue Bird Café" 
                  className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-contain transition-all duration-1000 ${
                    logoPhase === 0 ? 'animate-pulse' :
                    logoPhase === 1 ? 'animate-bounce' :
                    logoPhase === 2 ? 'animate-spin' :
                    'animate-pulse'
                  }`}
                  style={{
                    filter: `drop-shadow(0 0 60px rgba(197, 174, 145, 0.8)) drop-shadow(0 0 120px rgba(197, 174, 145, 0.4)) drop-shadow(0 0 180px rgba(197, 174, 145, 0.2))`,
                    animationDuration: logoPhase === 2 ? '8s' : logoPhase === 1 ? '2s' : '3s'
                  }}
                />
                
                {/* Rotating Glow Ring */}
                <div 
                  className="absolute inset-0 rounded-full animate-spin opacity-30"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, #c5ae91, transparent, #EDC9AF, transparent)',
                    filter: 'blur(20px)',
                    animationDuration: '10s'
                  }}
                />
                
                {/* Pulsing Inner Glow */}
                <div 
                  className="absolute inset-8 sm:inset-12 md:inset-16 lg:inset-20 xl:inset-24 rounded-full animate-pulse opacity-20"
                  style={{
                    backgroundColor: '#c5ae91',
                    filter: 'blur(40px)',
                    animationDuration: '2s'
                  }}
                />
              </div>

              {/* German Brand Text with Dynamic Typography */}
              <div className="text-center space-y-4">
                <h1 
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-script font-bold transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    color: '#c5ae91',
                    textShadow: '0 0 40px rgba(197, 174, 145, 0.8), 0 0 80px rgba(197, 174, 145, 0.4), 0 0 120px rgba(197, 174, 145, 0.2)',
                    letterSpacing: '0.05em',
                    lineHeight: '0.9'
                  }}
                >
                  Blue Bird
                </h1>
                
                <div 
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider transition-all duration-1000 delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    color: '#EDC9AF',
                    textShadow: '0 0 30px rgba(237, 201, 175, 0.6)',
                    letterSpacing: '0.1em'
                  }}
                >
                  CAFÉ
                </div>
                
                <div 
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-widest transition-all duration-1000 delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    color: '#f4f1ed',
                    textShadow: '0 0 20px rgba(244, 241, 237, 0.4)',
                    letterSpacing: '0.2em'
                  }}
                >
                  BALD VERFÜGBAR
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Countdown Display */}
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
              {Object.entries(countdown).map(([unit, value], index) => (
                <div key={unit} className="text-center">
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center mb-3 shadow-2xl relative overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(197, 174, 145, 0.15)',
                      border: '2px solid rgba(197, 174, 145, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Animated Background */}
                    <div 
                      className="absolute inset-0 opacity-20 animate-pulse"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(197, 174, 145, 0.3), transparent)',
                        animationDuration: '3s',
                        animationDelay: `${index * 0.5}s`
                      }}
                    />
                    
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono relative z-10" style={{
                      color: '#c5ae91',
                      textShadow: '0 2px 15px rgba(197, 174, 145, 0.6)'
                    }}>
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium uppercase tracking-wider" style={{
                    color: '#f4f1ed',
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)'
                  }}>
                    {unit === 'days' ? 'Tage' : unit === 'hours' ? 'Stunden' : unit === 'minutes' ? 'Minuten' : 'Sekunden'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* German Location Information */}
          <div className={`mt-12 md:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2"
              style={{
                color: '#b09e7e',
                textShadow: '0 1px 10px rgba(176, 158, 126, 0.4)',
                letterSpacing: '0.05em'
              }}
            >
              Langstraße 19, Mannheim
            </div>
            <div 
              className="text-sm sm:text-base md:text-lg lg:text-xl opacity-70"
              style={{
                color: '#f4f1ed',
                letterSpacing: '0.1em'
              }}
            >
              Premium Kaffee & Spezialitäten
            </div>
          </div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                backgroundColor: i % 3 === 0 ? '#c5ae91' : i % 3 === 1 ? '#EDC9AF' : '#b09e7e',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
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
            transform: translateY(-40px) rotate(180deg); 
            opacity: 0.4; 
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-15px,0);
          }
          70% {
            transform: translate3d(0,-7px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
      `}</style>
    </>
  );
};

export default PublicTeaserPage;