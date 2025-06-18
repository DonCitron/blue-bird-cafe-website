import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const getThemeColors = () => {
    if (theme === 'sage') {
      return {
        footerBg: '#22c55e',
        textLight: '#f0fdf4',
        textSubtle: '#ecfdf5',
        accentColor: '#86efac',
        borderColor: '#16a34a'
      };
    }
    return {
      footerBg: '#b09e7e',
      textLight: '#f9f7f4',
      textSubtle: '#f4f1ed',
      accentColor: '#e8dbc7',
      borderColor: '#a89180'
    };
  };

  const colors = getThemeColors();

  return (
    <footer style={{backgroundColor: colors.footerBg, color: colors.textLight}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird Logo" 
                className="w-8 h-8 object-contain mr-2"
              />
              <span className="text-xl font-bold" style={{color: colors.textLight}}>Blue Bird</span>
            </Link>
            <p className="mb-4" style={{color: colors.textSubtle}}>
              Ein einzigartiges Café-Erlebnis mit Premium-Kaffee und Spezialitäten in entspannter, einladender Atmosphäre.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/BlueBird_Mannheim" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: colors.textLight}}>Schnelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Start</Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Menü</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Über uns</Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Galerie</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: colors.textLight}}>Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: colors.accentColor}} />
                <div>
                  <p className="font-medium">Montag - Donnerstag</p>
                  <p style={{color: colors.textSubtle}}>8:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: colors.accentColor}} />
                <div>
                  <p className="font-medium">Freitag - Samstag</p>
                  <p style={{color: colors.textSubtle}}>8:00 - 24:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: colors.accentColor}} />
                <div>
                  <p className="font-medium">Sonntag</p>
                  <p style={{color: colors.textSubtle}}>10:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: colors.textLight}}>Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: colors.accentColor}} />
                <p>Langstraße 19, 68169 Mannheim</p>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" style={{color: colors.accentColor}} />
                <p>+49 621 123 4567</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" style={{color: colors.accentColor}} />
                <p>info@bluebird-mannheim.de</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{borderTop: `1px solid ${colors.borderColor}`}}>
          <p>© {new Date().getFullYear()} Blue Bird. Alle Rechte vorbehalten.</p>
          <p className="mt-2 text-sm text-stone-400">
            <Link to="/privacy" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>Datenschutz</Link>
            {' • '}
            <Link to="/terms" className="transition-colors" style={{color: colors.textSubtle}} onMouseEnter={(e) => e.target.style.color = colors.accentColor} onMouseLeave={(e) => e.target.style.color = colors.textSubtle}>AGB</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;