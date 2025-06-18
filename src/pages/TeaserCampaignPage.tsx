import React, { useEffect, useState } from 'react';
import { Calendar, Eye, Share2, Video, Download, Clock, Zap, Target } from 'lucide-react';

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
          {/* Large Blue Bird Logo */}
          <div className="mb-12">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto opacity-90 filter drop-shadow-2xl animate-pulse"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(197, 174, 145, 0.3))',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
          </div>
          
          {/* Mysterious Date */}
          <div className="mb-16">
            <div 
              className="text-6xl md:text-8xl font-bold mb-4 tracking-wider"
              style={{
                color: '#c5ae91',
                textShadow: '0 0 30px rgba(197, 174, 145, 0.5)',
                fontFamily: 'serif'
              }}
            >
              01.08.25
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto">
            {!isCountdownFinished ? (
              <>
                <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit} className="relative">
                      <div 
                        className="rounded-lg p-4 md:p-6 border-2 backdrop-blur-sm"
                        style={{
                          backgroundColor: 'rgba(197, 174, 145, 0.1)',
                          borderColor: '#c5ae91',
                          boxShadow: '0 8px 32px rgba(197, 174, 145, 0.2)'
                        }}
                      >
                        <div 
                          className="text-3xl md:text-5xl font-bold mb-2"
                          style={{color: '#c5ae91'}}
                        >
                          {value.toString().padStart(2, '0')}
                        </div>
                        <div 
                          className="text-sm md:text-base capitalize tracking-wider"
                          style={{color: '#b09e7e'}}
                        >
                          {unit === 'days' ? 'Tage' : 
                           unit === 'hours' ? 'Stunden' : 
                           unit === 'minutes' ? 'Minuten' : 'Sekunden'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Subtle hint */}
                <div className="text-center">
                  <div 
                    className="text-lg md:text-xl tracking-widest opacity-70"
                    style={{
                      color: '#b09e7e',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    . . .
                  </div>
                </div>
              </>
            ) : (
              /* When countdown finishes */
              <div className="text-center">
                <div 
                  className="text-4xl md:text-6xl font-bold mb-8 animate-pulse"
                  style={{
                    color: '#c5ae91',
                    textShadow: '0 0 40px rgba(197, 174, 145, 0.8)'
                  }}
                >
                  Es ist Zeit...
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-30"
              style={{
                backgroundColor: '#c5ae91',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
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
                    <li>• Minimal design maintains mystery</li>
                    <li>• Classic Blue Bird colors for brand recognition</li>
                    <li>• Real-time countdown creates urgency</li>
                    <li>• No explanatory text keeps speculation alive</li>
                    <li>• Large logo ensures brand visibility</li>
                  </ul>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Technical Details</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Countdown updates every second</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Subtle animations and effects</li>
                    <li>• Classic color palette (#3d3629, #c5ae91)</li>
                    <li>• Optimized for social sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </>
  );
};

export default TeaserCampaignPage;