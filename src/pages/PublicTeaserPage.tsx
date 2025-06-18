import React, { useEffect, useState } from 'react';
import { Settings, Eye, EyeOff } from 'lucide-react';

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

  // Effect Controls State
  const [showControls, setShowControls] = useState(false);
  const [effects, setEffects] = useState({
    primaryGif: true,
    secondaryGif: true,
    tertiaryGif: true,
    coffeeParticles: true,
    steamEffect: true,
    atmosphericMist: true,
    cinematicVignette: true,
    colorOverlay: true,
    logoGlow: true,
    multipleGlowLayers: true,
    timerGlow: true,
    rippleEffect: true
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

  const toggleEffect = (effectName: keyof typeof effects) => {
    setEffects(prev => ({
      ...prev,
      [effectName]: !prev[effectName]
    }));
  };

  const resetAllEffects = () => {
    setEffects({
      primaryGif: true,
      secondaryGif: true,
      tertiaryGif: true,
      coffeeParticles: true,
      steamEffect: true,
      atmosphericMist: true,
      cinematicVignette: true,
      colorOverlay: true,
      logoGlow: true,
      multipleGlowLayers: true,
      timerGlow: true,
      rippleEffect: true
    });
  };

  const disableAllEffects = () => {
    setEffects({
      primaryGif: true, // Keep primary GIF always on
      secondaryGif: false,
      tertiaryGif: false,
      coffeeParticles: false,
      steamEffect: false,
      atmosphericMist: false,
      cinematicVignette: false,
      colorOverlay: false,
      logoGlow: false,
      multipleGlowLayers: false,
      timerGlow: false,
      rippleEffect: false
    });
  };

  const NumberDisplay = ({ value, previousValue, label }: { value: number; previousValue: number; label: string }) => {
    const hasChanged = value !== previousValue;
    
    return (
      <div className="text-center relative">
        <div 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(197, 174, 145, 0.15)',
            border: '1px solid rgba(197, 174, 145, 0.3)',
            boxShadow: (hasChanged && effects.timerGlow) 
              ? '0 0 30px rgba(197, 174, 145, 0.6), inset 0 0 20px rgba(197, 174, 145, 0.2)' 
              : '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(197, 174, 145, 0.1)'
          }}
        >
          {/* Animated background glow on change */}
          {hasChanged && effects.timerGlow && (
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
              hasChanged && effects.timerGlow ? 'scale-110' : 'scale-100'
            }`}
            style={{
              color: '#c5ae91',
              fontVariantNumeric: 'tabular-nums',
              textShadow: (hasChanged && effects.timerGlow)
                ? '0 0 20px rgba(197, 174, 145, 0.8), 0 0 40px rgba(197, 174, 145, 0.4)' 
                : '0 2px 10px rgba(197, 174, 145, 0.3)'
            }}
          >
            {value.toString().padStart(2, '0')}
          </span>
          
          {/* Ripple effect on change */}
          {hasChanged && effects.rippleEffect && (
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
      {/* Effect Controls Panel */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showControls ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-4 w-80 max-h-[90vh] overflow-y-auto border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Effect Controls</h3>
            <button
              onClick={() => setShowControls(false)}
              className="text-gray-400 hover:text-white"
            >
              <EyeOff className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={resetAllEffects}
              className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
            >
              All On
            </button>
            <button
              onClick={disableAllEffects}
              className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
            >
              Minimal
            </button>
          </div>

          {/* Background Effects */}
          <div className="mb-4">
            <h4 className="text-gray-300 text-sm font-medium mb-2">Background Layers</h4>
            <div className="space-y-2">
              <EffectToggle
                label="Primary GIF (40% opacity)"
                enabled={effects.primaryGif}
                onChange={() => toggleEffect('primaryGif')}
                description="Main background layer"
              />
              <EffectToggle
                label="Secondary GIF (25% opacity)"
                enabled={effects.secondaryGif}
                onChange={() => toggleEffect('secondaryGif')}
                description="Depth layer with blur"
              />
              <EffectToggle
                label="Tertiary GIF (15% opacity)"
                enabled={effects.tertiaryGif}
                onChange={() => toggleEffect('tertiaryGif')}
                description="Atmospheric depth"
              />
            </div>
          </div>

          {/* Particle Effects */}
          <div className="mb-4">
            <h4 className="text-gray-300 text-sm font-medium mb-2">Particle Effects</h4>
            <div className="space-y-2">
              <EffectToggle
                label="Coffee Particles (20 particles)"
                enabled={effects.coffeeParticles}
                onChange={() => toggleEffect('coffeeParticles')}
                description="Floating coffee particles"
              />
              <EffectToggle
                label="Steam Effect (15 wisps)"
                enabled={effects.steamEffect}
                onChange={() => toggleEffect('steamEffect')}
                description="Rising steam animation"
              />
              <EffectToggle
                label="Atmospheric Mist (8 layers)"
                enabled={effects.atmosphericMist}
                onChange={() => toggleEffect('atmosphericMist')}
                description="Drifting mist clouds"
              />
            </div>
          </div>

          {/* Visual Overlays */}
          <div className="mb-4">
            <h4 className="text-gray-300 text-sm font-medium mb-2">Visual Overlays</h4>
            <div className="space-y-2">
              <EffectToggle
                label="Cinematic Vignette"
                enabled={effects.cinematicVignette}
                onChange={() => toggleEffect('cinematicVignette')}
                description="Edge darkening effect"
              />
              <EffectToggle
                label="Color Overlay"
                enabled={effects.colorOverlay}
                onChange={() => toggleEffect('colorOverlay')}
                description="Coffee tone enhancement"
              />
            </div>
          </div>

          {/* Logo Effects */}
          <div className="mb-4">
            <h4 className="text-gray-300 text-sm font-medium mb-2">Logo Effects</h4>
            <div className="space-y-2">
              <EffectToggle
                label="Multiple Glow Layers"
                enabled={effects.multipleGlowLayers}
                onChange={() => toggleEffect('multipleGlowLayers')}
                description="Triple glow effect"
              />
              <EffectToggle
                label="Logo Glow Animation"
                enabled={effects.logoGlow}
                onChange={() => toggleEffect('logoGlow')}
                description="Pulsing glow animation"
              />
            </div>
          </div>

          {/* Timer Effects */}
          <div>
            <h4 className="text-gray-300 text-sm font-medium mb-2">Timer Effects</h4>
            <div className="space-y-2">
              <EffectToggle
                label="Timer Glow"
                enabled={effects.timerGlow}
                onChange={() => toggleEffect('timerGlow')}
                description="Number change glow"
              />
              <EffectToggle
                label="Ripple Effect"
                enabled={effects.rippleEffect}
                onChange={() => toggleEffect('rippleEffect')}
                description="Ripple on number change"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Control Toggle Button */}
      <button
        onClick={() => setShowControls(true)}
        className={`fixed top-4 right-4 z-40 p-3 bg-black bg-opacity-70 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-90 transition-all ${showControls ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Your Custom GIF Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary GIF Background - Your uploaded file */}
        {effects.primaryGif && (
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
        )}
        
        {/* Layered GIF effect for depth */}
        {effects.secondaryGif && (
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
        )}
        
        {/* Third layer for atmospheric depth */}
        {effects.tertiaryGif && (
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
        )}
      </div>

      {/* Enhanced CSS Overlay Effects */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Floating Coffee Particles */}
        {effects.coffeeParticles && (
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
        )}

        {/* Steam Rising Effect */}
        {effects.steamEffect && (
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
        )}

        {/* Atmospheric Mist Layers */}
        {effects.atmosphericMist && (
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
        )}

        {/* Cinematic Vignette with Coffee Theme */}
        {effects.cinematicVignette && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 20%, rgba(26, 22, 17, 0.2) 60%, rgba(26, 22, 17, 0.6) 90%, rgba(26, 22, 17, 0.9) 100%)'
            }}
          />
        )}
        
        {/* Subtle Color Overlay to Enhance Coffee Tones */}
        {effects.colorOverlay && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'linear-gradient(45deg, rgba(197, 174, 145, 0.1) 0%, transparent 50%, rgba(237, 201, 175, 0.1) 100%)'
            }}
          />
        )}
      </div>

      {/* Enhanced Logo with Multiple Glow Effects */}
      <div className="mb-16 relative z-20">
        <div className="relative">
          {/* Multiple glow layers for cinematic depth */}
          {effects.multipleGlowLayers && (
            <>
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
            </>
          )}
          
          {/* Main logo with enhanced effects */}
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain relative z-10"
            style={{
              filter: effects.logoGlow 
                ? 'drop-shadow(0 15px 50px rgba(197, 174, 145, 0.8)) drop-shadow(0 0 100px rgba(197, 174, 145, 0.4)) drop-shadow(0 0 150px rgba(197, 174, 145, 0.2))'
                : 'drop-shadow(0 8px 25px rgba(197, 174, 145, 0.4))',
              animation: effects.logoGlow ? 'logoGlow 6s ease-in-out infinite' : 'none'
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

// Effect Toggle Component
interface EffectToggleProps {
  label: string;
  enabled: boolean;
  onChange: () => void;
  description?: string;
}

const EffectToggle: React.FC<EffectToggleProps> = ({ label, enabled, onChange, description }) => {
  return (
    <div className="flex items-center justify-between p-2 rounded bg-gray-800 bg-opacity-50">
      <div className="flex-1">
        <div className="text-white text-sm font-medium">{label}</div>
        {description && (
          <div className="text-gray-400 text-xs">{description}</div>
        )}
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-blue-600' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default PublicTeaserPage;