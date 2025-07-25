import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getThemeColors = () => {
    if (theme === 'sage') {
      return {
        navbarBg: scrolled ? 'rgba(134, 239, 172, 0.95)' : 'rgba(134, 239, 172, 0.85)',
        borderColor: scrolled ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)',
        textPrimary: '#14532d',
        textSecondary: '#166534',
        mobileBg: '#86efac'
      };
    }
    return {
      navbarBg: scrolled ? 'rgba(237, 201, 175, 0.95)' : 'rgba(237, 201, 175, 0.85)',
      borderColor: scrolled ? 'rgba(176, 158, 126, 0.3)' : 'rgba(176, 158, 126, 0.2)',
      textPrimary: '#3d3629',
      textSecondary: '#5a4f42',
      mobileBg: '#e8dbc7'
    };
  };

  const colors = getThemeColors();

  return (
    <header 
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: colors.navbarBg,
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.15)' : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        borderBottom: `1px solid ${colors.borderColor}`,
        paddingTop: scrolled ? '0.5rem' : '0.75rem',
        paddingBottom: scrolled ? '0.5rem' : '0.75rem'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-16 h-16 mr-3 flex items-center justify-center">
              <img 
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird Logo" 
                className="max-w-16 max-h-16 object-contain opacity-90"
                style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}
              />
            </div>
            <span className="text-4xl font-bold font-script" style={{
              color: colors.textPrimary,
              textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
              letterSpacing: '0.05em',
              lineHeight: '1',
              transform: 'translateY(2px)'
            }}>Blue Bird</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Start" currentPath={location.pathname} colors={colors} />
            <TeaserLink currentPath={location.pathname} colors={colors} />
            <NavLink to="/menu" label="Menü" currentPath={location.pathname} colors={colors} />
            <NavLink to="/about" label="Über uns" currentPath={location.pathname} colors={colors} />
            <NavLink to="/gallery" label="Galerie" currentPath={location.pathname} colors={colors} />
            <NavLink to="/contact" label="Kontakt" currentPath={location.pathname} colors={colors} />
            <SitemapLink currentPath={location.pathname} colors={colors} />
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden transition-colors"
            style={{color: colors.textSecondary}}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = colors.textPrimary}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = colors.textSecondary}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg absolute top-full left-0 right-0" style={{backgroundColor: colors.mobileBg}}>
          <div className="w-full max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" label="Start" colors={colors} />
              <MobileTeaserLink colors={colors} />
              <MobileNavLink to="/menu" label="Menü" colors={colors} />
              <MobileNavLink to="/about" label="Über uns" colors={colors} />
              <MobileNavLink to="/gallery" label="Galerie" colors={colors} />
              <MobileNavLink to="/contact" label="Kontakt" colors={colors} />
              <MobileSitemapLink colors={colors} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
  colors: any;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath, colors }) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className="text-base font-medium transition-colors duration-200"
      style={{
        color: isActive ? colors.textPrimary : colors.textSecondary,
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? colors.textPrimary : colors.textSecondary}
    >
      {label}
    </Link>
  );
};

interface TeaserLinkProps {
  currentPath: string;
  colors: any;
}

const TeaserLink: React.FC<TeaserLinkProps> = ({ currentPath, colors }) => {
  const isActive = currentPath === '/teaser-campaign';
  
  return (
    <Link 
      to="/teaser-campaign" 
      className="flex items-center gap-1 text-base font-medium transition-colors duration-200 relative group"
      style={{
        color: isActive ? colors.textPrimary : colors.textSecondary,
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? colors.textPrimary : colors.textSecondary}
    >
      <Zap className="h-4 w-4 animate-pulse" style={{color: '#3b82f6'}} />
      <span className="relative">
        Teaser
        <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      </span>
    </Link>
  );
};

interface SitemapLinkProps {
  currentPath: string;
  colors: any;
}

const SitemapLink: React.FC<SitemapLinkProps> = ({ currentPath, colors }) => {
  const isActive = currentPath === '/sitemap';
  
  return (
    <Link 
      to="/sitemap" 
      className="flex items-center gap-1 text-base font-medium transition-colors duration-200"
      style={{
        color: isActive ? colors.textPrimary : colors.textSecondary,
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? colors.textPrimary : colors.textSecondary}
    >
      <MapPin className="h-4 w-4" />
      <span>Sitemap</span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  colors: any;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, colors }) => {
  return (
    <Link 
      to={to} 
      className="text-base font-medium py-2 block transition-colors"
      style={{color: colors.textPrimary}}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textSecondary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
    >
      {label}
    </Link>
  );
};

interface MobileTeaserLinkProps {
  colors: any;
}

const MobileTeaserLink: React.FC<MobileTeaserLinkProps> = ({ colors }) => {
  return (
    <Link 
      to="/teaser-campaign" 
      className="flex items-center gap-2 text-base font-medium py-2 block transition-colors"
      style={{color: colors.textPrimary}}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textSecondary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
    >
      <Zap className="h-4 w-4 animate-pulse" style={{color: '#3b82f6'}} />
      <span className="relative">
        Teaser Preview
        <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      </span>
    </Link>
  );
};

interface MobileSitemapLinkProps {
  colors: any;
}

const MobileSitemapLink: React.FC<MobileSitemapLinkProps> = ({ colors }) => {
  return (
    <Link 
      to="/sitemap" 
      className="flex items-center gap-2 text-base font-medium py-2 block transition-colors"
      style={{color: colors.textPrimary}}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.textSecondary}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.textPrimary}
    >
      <MapPin className="h-4 w-4" />
      <span>Sitemap</span>
    </Link>
  );
};

export default Navbar;