import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Coffee, Users, Camera, Mail, Palette, BarChart3, 
  Shield, FileText, Gift, Zap, Eye, Settings, Lock,
  MapPin, Clock, Phone, Star, Menu, Heart, Leaf
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SiteMapPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = 'Sitemap - Blue Bird Café';
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

  const mainPages = [
    {
      path: '/',
      title: 'Homepage',
      description: 'Hauptseite mit Hero-Bereich, Statistiken, Menü-Vorschau, Events, Testimonials, Instagram Feed und Treueprogramm',
      icon: <Home className="h-6 w-6" />,
      category: 'main'
    },
    {
      path: '/menu',
      title: 'Menü',
      description: 'Vollständiges Menü mit Kategorien: Kaffee & Getränke, Matcha & Spezialitäten, Speisen & Gebäck',
      icon: <Coffee className="h-6 w-6" />,
      category: 'main'
    },
    {
      path: '/about',
      title: 'Über uns',
      description: 'Firmengeschichte, Team-Profile (Lars Fieber, Jose Dah, Pascal Hintermaier), Werte, Behind-the-Scenes, Erfolge',
      icon: <Users className="h-6 w-6" />,
      category: 'main'
    },
    {
      path: '/gallery',
      title: 'Galerie',
      description: 'Foto-Galerie mit Kategorien, Lightbox-Funktion, Instagram-Integration, User-Generated Content',
      icon: <Camera className="h-6 w-6" />,
      category: 'main'
    },
    {
      path: '/contact',
      title: 'Kontakt',
      description: 'Kontaktformular, Standort-Karte, Öffnungszeiten, FAQ-Bereich, Newsletter-Anmeldung',
      icon: <Mail className="h-6 w-6" />,
      category: 'main'
    }
  ];

  const specialPages = [
    {
      path: '/public-teaser',
      title: 'Öffentliche Teaser-Seite',
      description: 'Countdown bis 8. Januar 2025 mit animiertem Hintergrund, Effekt-Kontrollen, Fluid-Animation-System',
      icon: <Eye className="h-6 w-6" />,
      category: 'special'
    },
    {
      path: '/teaser-campaign',
      title: 'Teaser-Kampagne (Geschützt)',
      description: 'Interne Teaser-Seite mit Countdown, minimalistisches Design für Team-Vorschau',
      icon: <Zap className="h-6 w-6" />,
      category: 'special'
    }
  ];

  const designPages = [
    {
      path: '/colors',
      title: 'Farbschema',
      description: 'Vollständige Farbpalette, CSS-Variablen, Farbkombinationen, Theme-Beispiele',
      icon: <Palette className="h-6 w-6" />,
      category: 'design'
    },
    {
      path: '/loyalty-cards',
      title: 'Treuekarten & Stempel',
      description: 'Loyalty-Card-Designs in allen Themes, Stempelkarten, Bronze/Silver/Gold-Varianten',
      icon: <Gift className="h-6 w-6" />,
      category: 'design'
    }
  ];

  const analyticsPages = [
    {
      path: '/analytics',
      title: 'Analytics Dashboard',
      description: 'Umfassendes Dashboard mit Nutzer-Analytics, Foto-Galerie-Metriken, Bewertungen, KI-Empfehlungen',
      icon: <BarChart3 className="h-6 w-6" />,
      category: 'analytics'
    }
  ];

  const legalPages = [
    {
      path: '/privacy',
      title: 'Datenschutzerklärung',
      description: 'DSGVO-konforme Datenschutzerklärung mit allen rechtlichen Bestimmungen',
      icon: <Shield className="h-6 w-6" />,
      category: 'legal'
    },
    {
      path: '/terms',
      title: 'AGB',
      description: 'Allgemeine Geschäftsbedingungen, Hausordnung, Altersbeschränkung (18+), Haftung',
      icon: <FileText className="h-6 w-6" />,
      category: 'legal'
    }
  ];

  const features = [
    {
      title: 'Passwort-Schutz',
      description: 'Hauptwebsite ist passwortgeschützt (bluebird2025, team-access-bb, dev-preview-2025)',
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: 'Saisonale Themes',
      description: 'Automatische Theme-Wechsel: Frühling (Fresh Green), Sommer (Peridot), Herbst (Classic), Winter (Ocean)',
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: 'PWA-Funktionen',
      description: 'Progressive Web App mit Offline-Support, Install-Prompt, Service Worker',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: 'Responsive Design',
      description: 'Vollständig responsive für alle Geräte, Touch-optimiert, Mobile-First',
      icon: <Menu className="h-6 w-6" />
    }
  ];

  const PageCard = ({ page, colors }: { page: any; colors: any }) => (
    <Link 
      to={page.path}
      className="block p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      style={{backgroundColor: colors.tertiary, borderColor: colors.accent}}
    >
      <div className="flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
          style={{backgroundColor: colors.accent}}
        >
          <div style={{color: colors.textLight}}>
            {page.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 group-hover:underline" style={{color: colors.textPrimary}}>
            {page.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{color: colors.textSecondary}}>
            {page.description}
          </p>
          <div className="mt-3 text-xs font-medium" style={{color: colors.accent}}>
            {page.path}
          </div>
        </div>
      </div>
    </Link>
  );

  const FeatureCard = ({ feature, colors }: { feature: any; colors: any }) => (
    <div 
      className="p-6 rounded-lg border"
      style={{backgroundColor: colors.secondary, borderColor: colors.accent}}
    >
      <div className="flex items-start gap-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{backgroundColor: colors.accent}}
        >
          <div style={{color: colors.textLight}}>
            {feature.icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{color: colors.textPrimary}}>
            {feature.title}
          </h3>
          <p className="text-sm" style={{color: colors.textSecondary}}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: colors.accent}}>
              <MapPin className="h-8 w-8" style={{color: colors.textLight}} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: colors.textPrimary}}>
            Blue Bird Café - Sitemap
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: colors.textSecondary}}>
            Vollständige Übersicht aller verfügbaren Seiten und Funktionen unserer Website
          </p>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16" style={{backgroundColor: colors.primary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Hauptseiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <PageCard key={index} page={page} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Pages */}
      <section className="py-16" style={{backgroundColor: colors.secondary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Spezielle Seiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPages.map((page, index) => (
              <PageCard key={index} page={page} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Design & Branding */}
      <section className="py-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Design & Branding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPages.map((page, index) => (
              <PageCard key={index} page={page} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-16" style={{backgroundColor: colors.primary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Analytics & Daten
          </h2>
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {analyticsPages.map((page, index) => (
              <PageCard key={index} page={page} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16" style={{backgroundColor: colors.secondary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Rechtliche Seiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPages.map((page, index) => (
              <PageCard key={index} page={page} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Features & Funktionen */}
      <section className="py-16" style={{backgroundColor: colors.tertiary}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: colors.textPrimary}}>
            Besondere Funktionen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} colors={colors} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16" style={{backgroundColor: colors.accent, color: colors.textLight}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technische Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <h3 className="text-lg font-semibold mb-3">Framework</h3>
              <ul className="space-y-1 text-sm">
                <li>• React 18 mit TypeScript</li>
                <li>• Vite als Build-Tool</li>
                <li>• React Router für Navigation</li>
                <li>• Tailwind CSS für Styling</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-1 text-sm">
                <li>• PWA mit Service Worker</li>
                <li>• Lazy Loading für Performance</li>
                <li>• Responsive Design</li>
                <li>• Theme-System mit Saisonalität</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <h3 className="text-lg font-semibold mb-3">Deployment</h3>
              <ul className="space-y-1 text-sm">
                <li>• Netlify-ready</li>
                <li>• Automatische Redirects</li>
                <li>• Optimierte Build-Pipeline</li>
                <li>• SEO-optimiert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Help */}
      <section className="py-16" style={{backgroundColor: colors.primary}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: colors.textPrimary}}>
            Navigation
          </h2>
          <div className="max-w-2xl mx-auto p-6 rounded-lg" style={{backgroundColor: colors.tertiary}}>
            <p className="mb-4" style={{color: colors.textSecondary}}>
              <strong>Passwort-geschützte Bereiche:</strong> Die Hauptwebsite ist mit einem Passwort geschützt. 
              Verwenden Sie eines der folgenden Passwörter für den Zugang:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <code className="p-2 rounded text-sm" style={{backgroundColor: colors.secondary, color: colors.textPrimary}}>
                bluebird2025
              </code>
              <code className="p-2 rounded text-sm" style={{backgroundColor: colors.secondary, color: colors.textPrimary}}>
                team-access-bb
              </code>
              <code className="p-2 rounded text-sm" style={{backgroundColor: colors.secondary, color: colors.textPrimary}}>
                dev-preview-2025
              </code>
            </div>
            <p className="text-sm" style={{color: colors.textSecondary}}>
              Die <Link to="/public-teaser" className="underline font-medium">öffentliche Teaser-Seite</Link> ist 
              ohne Passwort zugänglich und zeigt den Countdown bis zur Eröffnung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteMapPage;