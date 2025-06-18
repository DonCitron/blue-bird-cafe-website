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

  const isCountdownFinished = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

  return (
    <>
      {/* Mysterious Hero Section with Classic Blue Bird Colors */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{backgroundColor: '#3d3629'}}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{backgroundColor: '#b09e7e', filter: 'blur(100px)'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" style={{backgroundColor: '#c5ae91', filter: 'blur(80px)'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Centered Logo with Timer Overlay */}
          <div className="relative flex items-center justify-center">
            {/* Large Blue Bird Logo - Centered */}
            <div className="relative">
              <img 
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird" 
                className="w-80 h-80 md:w-96 md:h-96 opacity-90 filter drop-shadow-2xl animate-pulse"
                style={{
                  filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.3))',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
              
              {/* Timer Overlay - Positioned over the logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-20">
                  {!isCountdownFinished ? (
                    <div className="text-center">
                      {/* Large Timer Display */}
                      <div 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-wider font-mono"
                        style={{
                          color: '#c5ae91',
                          textShadow: '0 0 30px rgba(197, 174, 145, 0.8), 0 0 60px rgba(197, 174, 145, 0.4)',
                          background: 'rgba(61, 54, 41, 0.8)',
                          padding: '20px 30px',
                          borderRadius: '20px',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(197, 174, 145, 0.3)'
                        }}
                      >
                        {countdown.days.toString().padStart(2, '0')}:
                        {countdown.hours.toString().padStart(2, '0')}:
                        {countdown.minutes.toString().padStart(2, '0')}:
                        {countdown.seconds.toString().padStart(2, '0')}
                      </div>
                      
                      {/* Timer Labels */}
                      <div 
                        className="text-sm md:text-base lg:text-lg tracking-widest opacity-80"
                        style={{
                          color: '#b09e7e',
                          textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                        }}
                      >
                        TAGE : STUNDEN : MINUTEN : SEKUNDEN
                      </div>
                    </div>
                  ) : (
                    /* When countdown finishes */
                    <div 
                      className="text-4xl md:text-6xl font-bold animate-pulse"
                      style={{
                        color: '#c5ae91',
                        textShadow: '0 0 40px rgba(197, 174, 145, 0.8)',
                        background: 'rgba(61, 54, 41, 0.9)',
                        padding: '20px 40px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      Es ist Zeit...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mysterious Date - Below the logo */}
          <div className="mt-12">
            <div 
              className="text-3xl md:text-5xl font-bold tracking-wider opacity-70"
              style={{
                color: '#c5ae91',
                textShadow: '0 0 20px rgba(197, 174, 145, 0.3)',
                fontFamily: 'serif'
              }}
            >
              01.08.25
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

      {/* Hidden development section - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Development Preview</h2>
              <p className="text-gray-300">This section is only visible in development mode</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Campaign Strategy</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Centered logo with timer overlay</li>
                    <li>• Large countdown format: DD:HH:MM:SS</li>
                    <li>• Classic Blue Bird colors for recognition</li>
                    <li>• Mysterious date below logo</li>
                    <li>• No explanatory text maintains mystery</li>
                    <li>• Perfect for social media sharing</li>
                  </ul>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Visual Design</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Large logo (320x320 to 384x384px)</li>
                    <li>• Timer positioned over center of logo</li>
                    <li>• Glowing text effects with shadows</li>
                    <li>• Semi-transparent background for timer</li>
                    <li>• Floating particles for mystique</li>
                    <li>• Responsive design for all devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </>
  );
};

export default TeaserCampaignPage;