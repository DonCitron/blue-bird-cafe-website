import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LoyaltyCardProps {
  variant?: 'bronze' | 'silver' | 'gold';
  customerName?: string;
  points?: number;
  className?: string;
}

const LoyaltyCard: React.FC<LoyaltyCardProps> = ({ 
  variant = 'bronze', 
  customerName = 'Max Mustermann',
  points = 150,
  className = ''
}) => {
  const { theme } = useTheme();

  const getCardColors = () => {
    const baseColors = {
      bronze: {
        primary: '#CD7F32',
        secondary: '#B8860B',
        accent: '#DAA520',
        text: '#2C1810',
        textLight: '#FFFFFF'
      },
      silver: {
        primary: '#C0C0C0',
        secondary: '#A8A8A8',
        accent: '#E5E5E5',
        text: '#2C2C2C',
        textLight: '#FFFFFF'
      },
      gold: {
        primary: '#FFD700',
        secondary: '#FFA500',
        accent: '#FFFF99',
        text: '#2C1810',
        textLight: '#FFFFFF'
      }
    };

    if (theme === 'sage') {
      return {
        bronze: { ...baseColors.bronze, primary: '#22c55e', secondary: '#16a34a', accent: '#86efac' },
        silver: { ...baseColors.silver, primary: '#4ade80', secondary: '#22c55e', accent: '#bbf7d0' },
        gold: { ...baseColors.gold, primary: '#10b981', secondary: '#059669', accent: '#d1fae5' }
      };
    } else if (theme === 'peridot') {
      return {
        bronze: { ...baseColors.bronze, primary: '#6E9E4B', secondary: '#4D843D', accent: '#A8D98B' },
        silver: { ...baseColors.silver, primary: '#8FBC8F', secondary: '#6E9E4B', accent: '#D8C4A0' },
        gold: { ...baseColors.gold, primary: '#9ACD32', secondary: '#6E9E4B', accent: '#F0F8E8' }
      };
    } else if (theme === 'ocean') {
      return {
        bronze: { ...baseColors.bronze, primary: '#6FB4E2', secondary: '#3E8ECC', accent: '#A6C6ED' },
        silver: { ...baseColors.silver, primary: '#87CEEB', secondary: '#6FB4E2', accent: '#E1D6F5' },
        gold: { ...baseColors.gold, primary: '#4169E1', secondary: '#1E6FA9', accent: '#E6F3FF' }
      };
    }

    return {
      bronze: { ...baseColors.bronze, primary: '#b09e7e', secondary: '#a89180', accent: '#e8dbc7' },
      silver: { ...baseColors.silver, primary: '#c5ae91', secondary: '#b09e7e', accent: '#f5f2e8' },
      gold: { ...baseColors.gold, primary: '#EDC9AF', secondary: '#c5ae91', accent: '#f9f7f4' }
    };
  };

  const cardColors = getCardColors()[variant];

  const getStatusText = () => {
    switch (variant) {
      case 'bronze': return 'Bronze Member';
      case 'silver': return 'Silver Member';
      case 'gold': return 'Gold Member';
      default: return 'Bronze Member';
    }
  };

  const getNextTierPoints = () => {
    switch (variant) {
      case 'bronze': return 300 - points;
      case 'silver': return 500 - points;
      case 'gold': return 'Max Level';
      default: return 300 - points;
    }
  };

  return (
    <div className={`relative w-80 h-48 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl ${className}`}>
      {/* Card Background with Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${cardColors.primary} 0%, ${cardColors.secondary} 50%, ${cardColors.primary} 100%)`
        }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border-2 border-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Logo" 
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
            <div>
              <h3 className="text-lg font-bold">Blue Bird</h3>
              <p className="text-sm opacity-90">{getStatusText()}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{points}</div>
            <div className="text-xs opacity-90">Punkte</div>
          </div>
        </div>

        {/* Customer Name */}
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wider">{customerName}</h2>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs opacity-90">Gültig bis</div>
            <div className="text-sm font-semibold">12/2025</div>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-90">
              {variant !== 'gold' ? `Bis ${variant === 'bronze' ? 'Silver' : 'Gold'}:` : 'Max Level'}
            </div>
            <div className="text-sm font-semibold">
              {variant !== 'gold' ? `${getNextTierPoints()} Punkte` : '🏆'}
            </div>
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-1000"></div>
    </div>
  );
};

export default LoyaltyCard;