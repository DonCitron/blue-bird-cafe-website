import React from 'react';
import { Coffee, Star, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface StampCardProps {
  stamps?: number;
  maxStamps?: number;
  customerName?: string;
  className?: string;
}

const StampCard: React.FC<StampCardProps> = ({ 
  stamps = 7, 
  maxStamps = 10,
  customerName = 'Max Mustermann',
  className = ''
}) => {
  const { theme } = useTheme();

  const getThemeColors = () => {
    if (theme === 'sage') {
      return {
        cardBg: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        stampFilled: '#10b981',
        stampEmpty: 'rgba(255, 255, 255, 0.3)',
        text: '#ffffff',
        accent: '#86efac'
      };
    } else if (theme === 'peridot') {
      return {
        cardBg: 'linear-gradient(135deg, #6E9E4B 0%, #4D843D 100%)',
        stampFilled: '#A8D98B',
        stampEmpty: 'rgba(255, 255, 255, 0.3)',
        text: '#ffffff',
        accent: '#D8C4A0'
      };
    } else if (theme === 'ocean') {
      return {
        cardBg: 'linear-gradient(135deg, #6FB4E2 0%, #3E8ECC 100%)',
        stampFilled: '#A6C6ED',
        stampEmpty: 'rgba(255, 255, 255, 0.3)',
        text: '#ffffff',
        accent: '#E1D6F5'
      };
    }
    return {
      cardBg: 'linear-gradient(135deg, #b09e7e 0%, #a89180 100%)',
      stampFilled: '#EDC9AF',
      stampEmpty: 'rgba(255, 255, 255, 0.3)',
      text: '#ffffff',
      accent: '#e8dbc7'
    };
  };

  const colors = getThemeColors();
  const isComplete = stamps >= maxStamps;

  return (
    <div className={`relative w-80 h-48 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${className}`}>
      {/* Card Background */}
      <div 
        className="absolute inset-0"
        style={{ background: colors.cardBg }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2 w-20 h-20 rounded-full border border-white"></div>
          <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full border border-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between" style={{ color: colors.text }}>
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Logo" 
              className="w-8 h-8 object-contain filter brightness-0 invert"
            />
            <div>
              <h3 className="text-lg font-bold">Blue Bird</h3>
              <p className="text-sm opacity-90">Stempelkarte</p>
            </div>
          </div>
          {isComplete && (
            <div className="flex items-center gap-1 bg-green-500 px-2 py-1 rounded-full">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-semibold">Komplett!</span>
            </div>
          )}
        </div>

        {/* Customer Name */}
        <div className="text-center">
          <h2 className="text-lg font-bold">{customerName}</h2>
          <p className="text-sm opacity-90">{stamps}/{maxStamps} Stempel</p>
        </div>

        {/* Stamps Grid */}
        <div className="grid grid-cols-5 gap-2 justify-center">
          {Array.from({ length: maxStamps }, (_, index) => {
            const isFilled = index < stamps;
            return (
              <div
                key={index}
                className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white transition-all duration-300"
                style={{
                  backgroundColor: isFilled ? colors.stampFilled : colors.stampEmpty,
                  transform: isFilled ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isFilled ? '0 2px 8px rgba(0,0,0,0.3)' : 'none'
                }}
              >
                {isFilled && (
                  <Coffee className="h-4 w-4" style={{ color: colors.text }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          {isComplete ? (
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">Gratis Kaffee einlösen!</span>
              <Star className="h-5 w-5 text-yellow-300" />
            </div>
          ) : (
            <p className="text-xs opacity-90">
              Noch {maxStamps - stamps} Stempel bis zum gratis Kaffee
            </p>
          )}
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-1000"></div>
    </div>
  );
};

export default StampCard;