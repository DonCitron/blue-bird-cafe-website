import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'default' | 'sage';
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
  const [theme, setTheme] = useState<'default' | 'sage'>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('bluebird-theme') as 'default' | 'sage' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bluebird-theme', theme);
    
    // Apply theme to document root
    const root = document.documentElement;
    if (theme === 'sage') {
      root.classList.add('sage-theme');
    } else {
      root.classList.remove('sage-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'sage' : 'default');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};