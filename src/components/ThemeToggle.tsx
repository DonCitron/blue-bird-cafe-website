import React from 'react';
import { Palette, Leaf, Gem } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeInfo = () => {
    switch (theme) {
      case 'sage':
        return {
          icon: <Gem className="h-6 w-6" />,
          bgColor: '#6E9E4B',
          hoverColor: '#4D843D',
          nextTheme: 'Peridot Dreams'
        };
      case 'peridot':
        return {
          icon: <Palette className="h-6 w-6" />,
          bgColor: '#3d3629',
          hoverColor: '#2d251b',
          nextTheme: 'Default'
        };
      default:
        return {
          icon: <Leaf className="h-6 w-6" />,
          bgColor: '#3d3629',
          hoverColor: '#2d251b',
          nextTheme: 'Fresh Green'
        };
    }
  };

  const themeInfo = getThemeInfo();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: themeInfo.bgColor,
        color: '#f9f7f4'
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = themeInfo.hoverColor;
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = themeInfo.bgColor;
      }}
      aria-label={`Switch to ${themeInfo.nextTheme} theme`}
      title={`Switch to ${themeInfo.nextTheme} Theme`}
    >
      {themeInfo.icon}
    </button>
  );
};

export default ThemeToggle;