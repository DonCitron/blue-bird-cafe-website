import React from 'react';
import { Palette, Leaf, Gem, Waves } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeInfo = () => {
    switch (theme) {
      case 'sage':
        return {
          icon: <Gem className="h-6 w-6" />,
          bgColor: '#22c55e',
          hoverColor: '#16a34a',
          nextTheme: 'Peridot Dreams'
        };
      case 'peridot':
        return {
          icon: <Waves className="h-6 w-6" />,
          bgColor: '#6E9E4B',
          hoverColor: '#4D843D',
          nextTheme: 'Ocean Dreams'
        };
      case 'ocean':
        return {
          icon: <Palette className="h-6 w-6" />,
          bgColor: '#6FB4E2',
          hoverColor: '#3E8ECC',
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
      aria-label={`Switch to ${themeInfo.nextTheme} theme`}
      title={`Switch to ${themeInfo.nextTheme} Theme`}
    >
      {themeInfo.icon}
    </button>
  );
};

export default ThemeToggle;