import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'default' | 'sage' | 'peridot' | 'ocean';
  toggleTheme: () => void;
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
  const [theme, setTheme] = useState<'default' | 'sage' | 'peridot' | 'ocean'>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('bluebird-theme') as 'default' | 'sage' | 'peridot' | 'ocean' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bluebird-theme', theme);
    
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
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'default') return 'sage';
      if (prev === 'sage') return 'peridot';
      if (prev === 'peridot') return 'ocean';
      return 'default';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};