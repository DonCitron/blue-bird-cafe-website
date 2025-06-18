import React, { useEffect } from 'react';
import { Gift, Star, Coffee, Award, Download, Printer } from 'lucide-react';
import LoyaltyCard from '../components/LoyaltyCard';
import StampCard from '../components/StampCard';
import { useTheme } from '../contexts/ThemeContext';

const LoyaltyCardsPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = 'Treuekarten & Stempel - Blue Bird';
  }, []);

  const getThemeColors = () => {
    if (theme === 'sage') {
      return {
        primary: '#4ade80',
        secondary: '#86efac',
        tertiary: '#f0fdf4',
        accent: '#22c55e',
        textPrimary: '#14532d',
        textSecondary: '#166534',
        textLight: '#f0fdf4'
      };
    } else if (theme === 'peridot') {
      return {
        primary: '#D8C4A0',
        secondary: '#A8D98B',
        tertiary: '#f8f6f0',
        accent: '#6E9E4B',
        textPrimary: '#2A3B1D',
        textSecondary: '#4D843D',
        textLight: '#f8f6f0'
      };
    } else if (theme === 'ocean') {
      return {
        primary: '#E1D6F5',
        secondary: '#A6C6ED',
        tertiary: '#f8f7fc',
        accent: '#6FB4E2',
        textPrimary: '#1E6FA9',
        textSecondary: '#3E8ECC',
        textLight: '#f8f7fc'
      };
    }
    return {
      primary: '#c5ae91',
      secondary: '#EDC9AF',
      tertiary: '#f5f2e8',
      accent: '#b09e7e',
      textPrimary: '#3d3629',
      textSecondary: '#5a4f42',
      textLight: '#f9f7f4'
    };
  };

  const colors = getThemeColors();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: colors.accent}}>
              <Gift className="h-8 w-8" style={{color: colors.textLight}} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: colors.textPrimary}}>
            Treuekarten & Stempel-Designs
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
            Entdecken Sie unsere Treuekarten und Stempelkarten in allen verfügbaren Themes
          </p>
        </div>
      </section>

      {/* Loyalty Cards Section */}
      <section className="py-16" style={{backgroundColor: colors.secondary}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: colors.textPrimary}}>Blue Bird Treuekarten</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
              Sammeln Sie Punkte und steigen Sie in höhere Mitgliedschaftsstufen auf
            </p>
          </div>

          {/* Current Theme Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
              Aktuelles Theme: {theme === 'sage' ? 'Fresh Green' : theme === 'peridot' ? 'Peridot Dreams' : theme === 'ocean' ? 'Ocean Dreams' : 'Classic'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <div className="text-center">
                <LoyaltyCard variant="bronze" customerName="Max Mustermann" points={85} />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Bronze Member</h4>
                  <p style={{color: colors.textSecondary}}>0-99 Punkte</p>
                </div>
              </div>
              
              <div className="text-center">
                <LoyaltyCard variant="silver" customerName="Anna Schmidt" points={245} />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Silver Member</h4>
                  <p style={{color: colors.textSecondary}}>100-299 Punkte</p>
                </div>
              </div>
              
              <div className="text-center">
                <LoyaltyCard variant="gold" customerName="Thomas Weber" points={456} />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Gold Member</h4>
                  <p style={{color: colors.textSecondary}}>300+ Punkte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg text-center" style={{backgroundColor: colors.tertiary}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#CD7F32'}}>
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Bronze Vorteile</h4>
              <ul className="text-sm space-y-1" style={{color: colors.textSecondary}}>
                <li>• Punkte sammeln</li>
                <li>• Geburtstags-Kaffee</li>
                <li>• Newsletter-Angebote</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg text-center" style={{backgroundColor: colors.tertiary}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#C0C0C0'}}>
                <Award className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Silver Vorteile</h4>
              <ul className="text-sm space-y-1" style={{color: colors.textSecondary}}>
                <li>• Alle Bronze Vorteile</li>
                <li>• 5% Rabatt</li>
                <li>• Exklusive Events</li>
                <li>• Prioritäts-Reservierung</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg text-center" style={{backgroundColor: colors.tertiary}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#FFD700'}}>
                <Gift className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Gold Vorteile</h4>
              <ul className="text-sm space-y-1" style={{color: colors.textSecondary}}>
                <li>• Alle Silver Vorteile</li>
                <li>• 10% Rabatt</li>
                <li>• VIP Events</li>
                <li>• Kostenlose Upgrades</li>
                <li>• Persönlicher Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stamp Cards Section */}
      <section className="py-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: colors.textPrimary}}>Stempelkarten</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
              Sammeln Sie 10 Stempel und erhalten Sie einen kostenlosen Kaffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center">
              <StampCard stamps={3} customerName="Lisa Müller" />
              <div className="mt-4">
                <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Anfänger</h4>
                <p style={{color: colors.textSecondary}}>3/10 Stempel</p>
              </div>
            </div>
            
            <div className="text-center">
              <StampCard stamps={7} customerName="Michael Klein" />
              <div className="mt-4">
                <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Fast geschafft</h4>
                <p style={{color: colors.textSecondary}}>7/10 Stempel</p>
              </div>
            </div>
            
            <div className="text-center">
              <StampCard stamps={10} customerName="Sarah Wagner" />
              <div className="mt-4">
                <h4 className="text-lg font-semibold" style={{color: colors.textPrimary}}>Komplett!</h4>
                <p style={{color: colors.textSecondary}}>Gratis Kaffee bereit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Themes Preview */}
      <section className="py-16" style={{backgroundColor: colors.secondary}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: colors.textPrimary}}>Alle Theme-Varianten</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
              Unsere Karten passen sich automatisch an das aktuelle saisonale Theme an
            </p>
          </div>

          <div className="space-y-16">
            {/* Classic Theme */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
                Classic Theme (Herbst)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(0deg) saturate(1.2)'}}>
                    <LoyaltyCard variant="gold" customerName="Classic Gold" points={350} />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Warme Erdtöne</p>
                </div>
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(0deg) saturate(1.2)'}}>
                    <StampCard stamps={8} customerName="Classic Stamps" />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Gemütliche Atmosphäre</p>
                </div>
              </div>
            </div>

            {/* Fresh Green Theme */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
                Fresh Green Theme (Frühling)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(60deg) saturate(1.5)'}}>
                    <LoyaltyCard variant="silver" customerName="Spring Silver" points={180} />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Frisches Grün</p>
                </div>
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(60deg) saturate(1.5)'}}>
                    <StampCard stamps={5} customerName="Spring Stamps" />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Lebendige Farben</p>
                </div>
              </div>
            </div>

            {/* Ocean Dreams Theme */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
                Ocean Dreams Theme (Winter)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(200deg) saturate(1.3)'}}>
                    <LoyaltyCard variant="bronze" customerName="Ocean Bronze" points={45} />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Beruhigende Blautöne</p>
                </div>
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(200deg) saturate(1.3)'}}>
                    <StampCard stamps={9} customerName="Ocean Stamps" />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Winterliche Eleganz</p>
                </div>
              </div>
            </div>

            {/* Peridot Dreams Theme */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
                Peridot Dreams Theme (Sommer)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(90deg) saturate(1.1)'}}>
                    <LoyaltyCard variant="gold" customerName="Summer Gold" points={420} />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Natürliche Erdtöne</p>
                </div>
                <div className="text-center">
                  <div style={{filter: 'hue-rotate(90deg) saturate(1.1)'}}>
                    <StampCard stamps={6} customerName="Summer Stamps" />
                  </div>
                  <p className="mt-2" style={{color: colors.textSecondary}}>Warme Sommertöne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: colors.textPrimary}}>So funktioniert's</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
              Einfach Punkte sammeln und von exklusiven Vorteilen profitieren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: colors.accent}}>
                <span className="text-2xl font-bold" style={{color: colors.textLight}}>1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Anmelden</h3>
              <p style={{color: colors.textSecondary}}>
                Registrieren Sie sich kostenlos für unser Treueprogramm
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: colors.accent}}>
                <span className="text-2xl font-bold" style={{color: colors.textLight}}>2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Punkte sammeln</h3>
              <p style={{color: colors.textSecondary}}>
                Erhalten Sie 1 Punkt für jeden ausgegebenen Euro
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: colors.accent}}>
                <span className="text-2xl font-bold" style={{color: colors.textLight}}>3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Level aufsteigen</h3>
              <p style={{color: colors.textSecondary}}>
                Erreichen Sie höhere Stufen für bessere Belohnungen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: colors.accent}}>
                <span className="text-2xl font-bold" style={{color: colors.textLight}}>4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>Belohnungen einlösen</h3>
              <p style={{color: colors.textSecondary}}>
                Genießen Sie exklusive Rabatte und kostenlose Artikel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16" style={{backgroundColor: colors.accent, color: colors.textLight}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Karten-Designs herunterladen</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: colors.textLight}}>
            Laden Sie die Designs für Druck und digitale Verwendung herunter
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="flex items-center gap-2 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
              style={{backgroundColor: colors.textLight, color: colors.textPrimary}}
            >
              <Download className="h-5 w-5" />
              Alle Designs (ZIP)
            </button>
            <button 
              className="flex items-center gap-2 border-2 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
              style={{borderColor: colors.textLight, color: colors.textLight, backgroundColor: 'transparent'}}
            >
              <Printer className="h-5 w-5" />
              Druckvorlagen
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoyaltyCardsPage;