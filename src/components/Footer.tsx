import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
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
              <span className="text-xl font-bold" style={{color: '#f9f7f4'}}>Blue Bird</span>
            </Link>
            <p className="mb-4" style={{color: '#f4f1ed'}}>
              Ein einzigartiges Café-Erlebnis mit Premium-Kaffee und Spezialitäten in entspannter, einladender Atmosphäre.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/BlueBird_Mannheim" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: '#f9f7f4'}}>Schnelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Start</Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Menü</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Über uns</Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Galerie</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: '#f9f7f4'}}>Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: '#e8dbc7'}} />
                <div>
                  <p className="font-medium">Montag - Donnerstag</p>
                  <p style={{color: '#f4f1ed'}}>8:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: '#e8dbc7'}} />
                <div>
                  <p className="font-medium">Freitag - Samstag</p>
                  <p style={{color: '#f4f1ed'}}>8:00 - 24:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: '#e8dbc7'}} />
                <div>
                  <p className="font-medium">Sonntag</p>
                  <p style={{color: '#f4f1ed'}}>10:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{color: '#f9f7f4'}}>Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: '#e8dbc7'}} />
                <p>Langstraße 19, 68169 Mannheim</p>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" style={{color: '#e8dbc7'}} />
                <p>+49 621 123 4567</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" style={{color: '#e8dbc7'}} />
                <p>info@bluebird-mannheim.de</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{borderTop: '1px solid #a89180'}}>
          <p>© {new Date().getFullYear()} Blue Bird. Alle Rechte vorbehalten.</p>
          <p className="mt-2 text-sm text-stone-400">
            <Link to="/privacy" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>Datenschutz</Link>
            {' • '}
            <Link to="/terms" className="transition-colors" style={{color: '#f4f1ed'}} onMouseEnter={(e) => e.target.style.color = '#e8dbc7'} onMouseLeave={(e) => e.target.style.color = '#f4f1ed'}>AGB</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;