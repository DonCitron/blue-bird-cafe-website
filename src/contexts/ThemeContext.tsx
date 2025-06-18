import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentSeason, SeasonalTheme } from '../utils/seasonalThemes';

interface ThemeContextType {
  theme: 'default' | 'sage' | 'peridot' | 'ocean';
  toggleTheme: () => void;
  enableSeasonalMode: () => void;
  disableSeasonalMode: () => void;
  isSeasonalMode: boolean;
  currentSeason: SeasonalTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'default' | 'sage' | 'peridot' | 'ocean'>('ocean');
  const [isSeasonalMode, setIsSeasonalMode] = useState(false);
  const [currentSeason, setCurrentSeason] = useState<SeasonalTheme>(getCurrentSeason());

  useEffect(() => {
    const savedTheme = localStorage.getItem('bluebird-theme') as 'default' | 'sage' | 'peridot' | 'ocean' | null;
    const savedSeasonalMode = localStorage.getItem('bluebird-seasonal-mode') === 'true';
    
    setIsSeasonalMode(savedSeasonalMode);
    
    if (savedSeasonalMode) {
      // Use seasonal theme
      const season = getCurrentSeason();
      setCurrentSeason(season);
      setTheme(season.theme);
    } else if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to ocean theme
      setTheme('ocean');
    }
  }, []);

  useEffect(() => {
    if (!isSeasonalMode) {
      localStorage.setItem('bluebird-theme', theme);
    }
    localStorage.setItem('bluebird-seasonal-mode', isSeasonalMode.toString());
    
    // Apply theme to document root
    const root = document.documentElement;
    root.classList.remove('sage-theme', 'peridot-theme', 'ocean-theme');
    
    if (theme === 'sage') {
      root.classList.add('sage-theme');
    } else if (theme === 'peridot') {
      root.classList.add('peridot-theme');
    } else if (theme === 'ocean') {
      root.classList.add('ocean-theme');
    }
  }, [theme, isSeasonalMode]);

  // Check for seasonal changes every hour
  useEffect(() => {
    if (!isSeasonalMode) return;

    const checkSeasonalChange = () => {
      const newSeason = getCurrentSeason();
      if (newSeason.theme !== currentSeason.theme) {
        setCurrentSeason(newSeason);
        setTheme(newSeason.theme);
        
        // Show notification about seasonal change
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Blue Bird - Saisonales Theme', {
            body: `Das Theme wurde automatisch auf ${newSeason.name} umgestellt!`,
            icon: '/blue_bird_clean_transparent.png'
          });
        }
      }
    };

    const interval = setInterval(checkSeasonalChange, 60 * 60 * 1000); // Check every hour
    return () => clearInterval(interval);
  }, [isSeasonalMode, currentSeason]);

  const toggleTheme = () => {
    if (isSeasonalMode) return; // Don't allow manual toggle in seasonal mode
    
    setTheme(prev => {
      if (prev === 'default') return 'sage';
      if (prev === 'sage') return 'peridot';
      if (prev === 'peridot') return 'ocean';
      return 'default';
    });
  };

  const enableSeasonalMode = () => {
    setIsSeasonalMode(true);
    const season = getCurrentSeason();
    setCurrentSeason(season);
    setTheme(season.theme);
  };

  const disableSeasonalMode = () => {
    setIsSeasonalMode(false);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      enableSeasonalMode, 
      disableSeasonalMode, 
      isSeasonalMode, 
      currentSeason 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};