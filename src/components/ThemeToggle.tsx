import React from 'react';
import { Palette, Leaf } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme === 'sage' ? '#8b9077' : '#3d3629',
        color: '#f9f7f4'
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = theme === 'sage' ? '#6b7059' : '#2d251b';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = theme === 'sage' ? '#8b9077' : '#3d3629';
      }}
      aria-label={`Switch to ${theme === 'sage' ? 'default' : 'sage green'} theme`}
      title={`Switch to ${theme === 'sage' ? 'Default' : 'Sage Green'} Theme`}
    >
      {theme === 'sage' ? (
        <Palette className="h-6 w-6" />
      ) : (
        <Leaf className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;