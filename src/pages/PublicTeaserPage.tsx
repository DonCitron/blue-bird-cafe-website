import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

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
      {/* Full-Screen Teaser Landing */}
      <section className="min-h-screen flex flex-col relative overflow-hidden" style={{backgroundColor: '#3d3629'}}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#b09e7e', filter: 'blur(100px)'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 animate-pulse" style={{backgroundColor: '#c5ae91', filter: 'blur(80px)', animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 animate-pulse" style={{backgroundColor: '#EDC9AF', filter: 'blur(120px)', animationDelay: '2s'}}></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
          {/* Logo Section */}
          <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Café" 
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-6"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.4))',
                objectFit: 'contain'
              }}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 font-script" style={{
              color: '#c5ae91',
              textShadow: '0 4px 20px rgba(197, 174, 145, 0.6)',
              letterSpacing: '0.05em'
            }}>
              Blue Bird
            </h1>
            <p className="text-xl md:text-2xl text-center font-light" style={{color: '#f9f7f4'}}>
              Premium Kaffee & Spezialitäten
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{color: '#EDC9AF'}}>
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{color: '#f4f1ed'}}>
              Ein einzigartiges Café-Erlebnis erwartet Sie. Wo Kaffeekultur und Gemütlichkeit in einer warmen, einladenden Atmosphäre aufeinandertreffen.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className={`mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {Object.entries(countdown).map(([unit, value], index) => (
                <div key={unit} className="text-center">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center mb-2 shadow-lg"
                    style={{
                      backgroundColor: 'rgba(197, 174, 145, 0.2)',
                      border: '1px solid rgba(197, 174, 145, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <span className="text-2xl md:text-3xl font-bold font-mono" style={{color: '#c5ae91'}}>
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-medium capitalize" style={{color: '#f4f1ed'}}>
                    {unit === 'days' ? 'Tage' : unit === 'hours' ? 'Stunden' : unit === 'minutes' ? 'Minuten' : 'Sekunden'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Opening Date */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6" style={{color: '#c5ae91'}} />
              <span className="text-lg font-semibold" style={{color: '#f9f7f4'}}>Eröffnung</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold" style={{
              color: '#EDC9AF',
              textShadow: '0 2px 10px rgba(237, 201, 175, 0.5)'
            }}>
              08. Januar 2025
            </div>
          </div>
        </div>

        {/* Footer Information */}
        <div className={`relative z-10 py-8 px-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            {/* Location & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" style={{color: '#c5ae91'}} />
                  <span className="font-semibold" style={{color: '#f9f7f4'}}>Standort</span>
                </div>
                <p style={{color: '#f4f1ed'}}>
                  Langstraße 19<br />
                  68169 Mannheim
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5" style={{color: '#c5ae91'}} />
                  <span className="font-semibold" style={{color: '#f9f7f4'}}>Öffnungszeiten</span>
                </div>
                <p style={{color: '#f4f1ed'}}>
                  Mo-Do: 8:00-22:00<br />
                  Fr-Sa: 8:00-24:00<br />
                  So: 10:00-20:00
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-semibold" style={{color: '#f9f7f4'}}>Kontakt</span>
                </div>
                <p style={{color: '#f4f1ed'}}>
                  +49 621 123 4567<br />
                  BlueBirdMannheim@gmail.com
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <p className="mb-4 font-semibold" style={{color: '#f9f7f4'}}>
                Folgen Sie uns für Updates
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://instagram.com/BlueBird_Mannheim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  style={{color: '#c5ae91'}}
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a 
                  href="https://facebook.com/BlueBirdMannheim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  style={{color: '#c5ae91'}}
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a 
                  href="https://twitter.com/BlueBirdMannheim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  style={{color: '#c5ae91'}}
                >
                  <Twitter className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-30"
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
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-40px) rotate(180deg); 
            opacity: 0.6; 
          }
        }
      `}</style>
    </>
  );
};

export default PublicTeaserPage;