import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Download } from 'lucide-react';

interface TeaserVideoPlayerProps {
  className?: string;
}

const TeaserVideoPlayer: React.FC<TeaserVideoPlayerProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const videoRef = useRef<HTMLDivElement>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Simulate video playback with phases
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          
          // Update animation phase based on time
          if (newTime <= 2) setAnimationPhase(0); // Dark screen
          else if (newTime <= 8) setAnimationPhase(1); // Logo reveal
          else if (newTime <= 12) setAnimationPhase(2); // Date reveal
          else if (newTime <= 15) setAnimationPhase(3); // Tagline
          else {
            setIsPlaying(false);
            setCurrentTime(0);
            setAnimationPhase(0);
            return 0;
          }
          
          return newTime;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const seconds = Math.floor(time);
    const milliseconds = Math.floor((time % 1) * 10);
    return `${seconds}.${milliseconds}s`;
  };

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${className}`}>
      {/* Video Content Area */}
      <div 
        ref={videoRef}
        className="relative w-full h-64 md:h-96 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
        style={{
          background: animationPhase === 0 ? '#000000' : 
                     animationPhase === 1 ? 'radial-gradient(circle, #1e3a8a 0%, #000000 70%)' :
                     animationPhase === 2 ? 'radial-gradient(circle, #1e40af 0%, #000000 70%)' :
                     'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)'
        }}
      >
        {/* Dark Screen Phase */}
        {animationPhase === 0 && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            {!isPlaying && (
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            )}
          </div>
        )}

        {/* Logo Reveal Phase */}
        {animationPhase === 1 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <img 
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird Logo" 
                className="w-32 h-32 object-contain animate-pulse"
                style={{
                  filter: 'brightness(0) invert(1) sepia(1) hue-rotate(200deg) saturate(3)',
                  opacity: Math.min((currentTime - 2) / 2, 1)
                }}
              />
              {/* Steam Animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-16 bg-gradient-to-t from-blue-400 to-transparent opacity-60 animate-pulse"></div>
              </div>
              <div className="absolute -top-6 left-1/3 transform -translate-x-1/2">
                <div className="w-1 h-12 bg-gradient-to-t from-blue-300 to-transparent opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute -top-10 right-1/3 transform translate-x-1/2">
                <div className="w-1 h-20 bg-gradient-to-t from-blue-500 to-transparent opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Date Reveal Phase */}
        {animationPhase === 2 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Logo" 
              className="w-24 h-24 object-contain mb-8 opacity-80"
              style={{filter: 'brightness(0) invert(1) sepia(1) hue-rotate(200deg) saturate(3)'}}
            />
            <div 
              className="text-6xl md:text-8xl font-bold text-blue-400 animate-pulse"
              style={{
                textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                opacity: Math.min((currentTime - 8) / 2, 1)
              }}
            >
              05.15.24
            </div>
          </div>
        )}

        {/* Tagline Phase */}
        {animationPhase === 3 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div 
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                opacity: Math.min((currentTime - 12) / 2, 1)
              }}
            >
              Something's brewing...
            </div>
            <div className="flex space-x-4 mt-4">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                #BlueBirdMystery
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                #WhatsBrewing
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            <div 
              className="h-2 bg-gray-600 rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-100"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
          </div>

          <span className="text-white text-sm font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Format Indicators */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
          1080x1920
        </span>
        <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
          MP4
        </span>
      </div>
    </div>
  );
};

export default TeaserVideoPlayer;