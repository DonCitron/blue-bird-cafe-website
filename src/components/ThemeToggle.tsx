import React, { useState } from 'react';
import { Palette, Leaf, Gem, Waves, Calendar, Settings, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, enableSeasonalMode, disableSeasonalMode, isSeasonalMode, currentSeason } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

  const getThemeInfo = () => {
    switch (theme) {
      case 'sage':
        return {
          icon: <Leaf className="h-6 w-6" />,
          bgColor: '#22c55e',
          hoverColor: '#16a34a',
          nextTheme: 'Peridot Dreams',
          name: 'Fresh Green'
        };
      case 'peridot':
        return {
          icon: <Gem className="h-6 w-6" />,
          bgColor: '#6E9E4B',
          hoverColor: '#4D843D',
          nextTheme: 'Ocean Dreams',
          name: 'Peridot Dreams'
        };
      case 'ocean':
        return {
          icon: <Waves className="h-6 w-6" />,
          bgColor: '#6FB4E2',
          hoverColor: '#3E8ECC',
          nextTheme: 'Default',
          name: 'Ocean Dreams'
        };
      default:
        return {
          icon: <Palette className="h-6 w-6" />,
          bgColor: '#3d3629',
          hoverColor: '#2d251b',
          nextTheme: 'Fresh Green',
          name: 'Classic'
        };
    }
  };

  const themeInfo = getThemeInfo();

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed top-20 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: themeInfo.bgColor,
          color: '#f9f7f4',
          boxShadow: theme === 'ocean' ? '0 4px 15px rgba(111, 180, 226, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = themeInfo.hoverColor;
          if (theme === 'ocean') {
            target.style.boxShadow = '0 6px 20px rgba(62, 142, 204, 0.4)';
            target.style.transform = 'scale(1.15) translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = themeInfo.bgColor;
          if (theme === 'ocean') {
            target.style.boxShadow = '0 4px 15px rgba(111, 180, 226, 0.3)';
            target.style.transform = 'scale(1.1)';
          }
        }}
        aria-label="Theme Settings"
        title="Theme Settings"
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Theme Settings Panel */}
      {showSettings && (
        <div className="fixed top-20 right-20 z-50 bg-white rounded-lg shadow-xl p-6 w-80 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Theme Einstellungen</h3>
            <button
              onClick={() => setShowSettings(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Current Theme Info */}
          <div className="mb-6 p-3 rounded-lg" style={{backgroundColor: '#f8f9fa'}}>
            <div className="flex items-center mb-2">
              {themeInfo.icon}
              <span className="ml-2 font-semibold text-gray-800">{themeInfo.name}</span>
            </div>
            {isSeasonalMode && (
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Saisonal: {currentSeason.name}</span>
              </div>
            )}
          </div>

          {/* Seasonal Mode Toggle */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-800">Saisonaler Modus</span>
              <button
                onClick={isSeasonalMode ? disableSeasonalMode : enableSeasonalMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isSeasonalMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isSeasonalMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              {isSeasonalMode 
                ? `Automatisch ${currentSeason.description.toLowerCase()}`
                : 'Themes automatisch je nach Jahreszeit wechseln'
              }
            </p>
          </div>

          {/* Manual Theme Selection */}
          {!isSeasonalMode && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-3">Theme wählen</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'default', name: 'Classic', color: '#3d3629', icon: <Palette className="h-4 w-4" /> },
                  { key: 'sage', name: 'Fresh Green', color: '#22c55e', icon: <Leaf className="h-4 w-4" /> },
                  { key: 'peridot', name: 'Peridot Dreams', color: '#6E9E4B', icon: <Gem className="h-4 w-4" /> },
                  { key: 'ocean', name: 'Ocean Dreams', color: '#6FB4E2', icon: <Waves className="h-4 w-4" /> }
                ].map((themeOption) => (
                  <button
                    key={themeOption.key}
                    onClick={() => {
                      // Manually set theme by cycling to the desired one
                      while (theme !== themeOption.key) {
                        toggleTheme();
                      }
                    }}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme === themeOption.key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1" style={{color: themeOption.color}}>
                      {themeOption.icon}
                    </div>
                    <div className="text-xs font-medium text-gray-700">{themeOption.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Seasonal Preview */}
          {isSeasonalMode && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-800 mb-3">Saisonaler Kalender</h4>
              <div className="space-y-2 text-sm">
                {[
                  { season: 'Frühling', theme: 'Fresh Green', dates: '20. März - 20. Juni' },
                  { season: 'Sommer', theme: 'Peridot Dreams', dates: '21. Juni - 22. September' },
                  { season: 'Herbst', theme: 'Classic', dates: '23. September - 20. Dezember' },
                  { season: 'Winter', theme: 'Ocean Dreams', dates: '21. Dezember - 19. März' }
                ].map((item) => (
                  <div 
                    key={item.season}
                    className={`p-2 rounded ${currentSeason.name === item.season ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50'}`}
                  >
                    <div className="font-medium">{item.season} - {item.theme}</div>
                    <div className="text-gray-600">{item.dates}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ThemeToggle;