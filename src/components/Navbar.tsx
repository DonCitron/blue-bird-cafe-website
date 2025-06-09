import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header 
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(237, 201, 175, 0.95)' : 'rgba(237, 201, 175, 0.85)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.15)' : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        borderBottom: scrolled ? '1px solid rgba(176, 158, 126, 0.3)' : '1px solid rgba(176, 158, 126, 0.2)',
        paddingTop: scrolled ? '0.75rem' : '1rem',
        paddingBottom: scrolled ? '0.75rem' : '1rem'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 mr-3 flex items-center justify-center">
              <img 
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird Logo" 
                className="max-w-12 max-h-12 object-contain"
                style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}
              />
            </div>
            <span className="text-5xl font-bold font-script" style={{
              color: '#3d3629',
              textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
              letterSpacing: '0.05em',
              lineHeight: '1',
              transform: 'translateY(2px)'
            }}>Blue Bird</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Start" currentPath={location.pathname} />
            <NavLink to="/menu" label="Menü" currentPath={location.pathname} />
            <NavLink to="/about" label="Über uns" currentPath={location.pathname} />
            <NavLink to="/gallery" label="Galerie" currentPath={location.pathname} />
            <NavLink to="/contact" label="Kontakt" currentPath={location.pathname} />
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-stone-700 hover:text-emerald-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg absolute top-full left-0 right-0" style={{backgroundColor: '#e8dbc7'}}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" label="Start" />
              <MobileNavLink to="/menu" label="Menü" />
              <MobileNavLink to="/about" label="Über uns" />
              <MobileNavLink to="/gallery" label="Galerie" />
              <MobileNavLink to="/contact" label="Kontakt" />
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
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className="text-base font-medium transition-colors duration-200"
      style={{
        color: isActive ? '#3d3629' : '#5a4f42',
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#3d3629'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? '#3d3629' : '#5a4f42'}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  return (
    <Link 
      to={to} 
      className="text-base font-medium py-2 block transition-colors"
      style={{color: '#3d3629'}}
      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#5a4f42'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#3d3629'}
    >
      {label}
    </Link>
  );
};

export default Navbar;