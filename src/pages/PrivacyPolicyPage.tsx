import React, { useEffect } from 'react';
import { Shield, Eye, Cookie, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung - Blue Bird';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
              <Shield className="h-8 w-8" style={{color: '#f9f7f4'}} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Datenschutzerklärung</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir Ihre Daten schützen und verwenden.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12 p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
            <h2 className="text-2xl font-bold mb-4" style={{color: '#3d3629'}}>Einleitung</h2>
            <p className="mb-4" style={{color: '#5a4f42'}}>
              Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten 
              (nachfolgend kurz „Daten") im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineauftritts und der mit 
              ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile 
              (nachfolgend gemeinsam bezeichnet als „Onlineauftritt").
            </p>
            <p style={{color: '#5a4f42'}}>
              Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die 
              Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
            </p>
          </div>

          {/* Responsible Party */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Verantwortlicher</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Blue Bird Café</h3>
              <div className="space-y-2" style={{color: '#5a4f42'}}>
                <p>Langstraße 19</p>
                <p>68169 Mannheim</p>
                <p>Deutschland</p>
                <div className="flex items-center gap-2 mt-4">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:BlueBirdMannheim@gmail.com" className="hover:underline">
                    BlueBirdMannheim@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+49 621 123 4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Collection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Arten der verarbeiteten Daten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Bestandsdaten</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Namen</li>
                  <li>• Kontaktdaten (E-Mail, Telefonnummer)</li>
                  <li>• Kundennummer</li>
                  <li>• Adressdaten</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Nutzungsdaten</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Besuchte Webseiten</li>
                  <li>• Verweildauer</li>
                  <li>• Häufigkeit der Nutzung</li>
                  <li>• IP-Adresse</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Meta-/Kommunikationsdaten</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Geräte-Kennungen</li>
                  <li>• Browser-Informationen</li>
                  <li>• Betriebssystem</li>
                  <li>• Zeitstempel</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Inhaltsdaten</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Texteingaben</li>
                  <li>• Fotografien</li>
                  <li>• Bewertungen</li>
                  <li>• Kommentare</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purposes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Zwecke der Verarbeitung</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <ul className="space-y-3" style={{color: '#5a4f42'}}>
                <li>• Erbringung vertraglicher Leistungen und Kundenservice</li>
                <li>• Kontaktanfragen und Kommunikation</li>
                <li>• Sicherheitsmaßnahmen</li>
                <li>• Reichweitenmessung/Marketing</li>
                <li>• Verwaltung und Beantwortung von Anfragen</li>
                <li>• Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                <li>• Bewertungen und Feedback-Management</li>
                <li>• Newsletter und Marketing-Kommunikation</li>
              </ul>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Rechtsgrundlagen</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Art. 6 Abs. 1 lit. a DSGVO - Einwilligung</h3>
                <p style={{color: '#5a4f42'}}>
                  Verarbeitung auf Grundlage Ihrer Einwilligung (z.B. Newsletter-Anmeldung, Cookie-Einstellungen).
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Art. 6 Abs. 1 lit. b DSGVO - Vertragserfüllung</h3>
                <p style={{color: '#5a4f42'}}>
                  Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Art. 6 Abs. 1 lit. f DSGVO - Berechtigte Interessen</h3>
                <p style={{color: '#5a4f42'}}>
                  Verarbeitung zur Wahrung berechtigter Interessen (z.B. Analyse der Website-Nutzung, Sicherheit).
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Cookies und ähnliche Technologien</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen eine bessere Nutzererfahrung zu bieten. 
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
              </p>
              <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Arten von Cookies:</h3>
              <ul className="space-y-2" style={{color: '#5a4f42'}}>
                <li>• <strong>Notwendige Cookies:</strong> Für die Grundfunktionen der Website</li>
                <li>• <strong>Funktionale Cookies:</strong> Für erweiterte Funktionen und Personalisierung</li>
                <li>• <strong>Analytische Cookies:</strong> Zur Analyse der Website-Nutzung</li>
                <li>• <strong>Marketing-Cookies:</strong> Für personalisierte Werbung</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Weitergabe von Daten</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken 
                findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="space-y-2" style={{color: '#5a4f42'}}>
                <li>• Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>• Die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
                <li>• Die Weitergabe zur Erfüllung eines Vertrags erforderlich ist</li>
                <li>• Eine gesetzliche Verpflichtung zur Weitergabe besteht</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Ihre Rechte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Auskunftsrecht</h3>
                <p style={{color: '#5a4f42'}}>
                  Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Berichtigungsrecht</h3>
                <p style={{color: '#5a4f42'}}>
                  Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung richtiger Daten zu verlangen.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Löschungsrecht</h3>
                <p style={{color: '#5a4f42'}}>
                  Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Widerspruchsrecht</h3>
                <p style={{color: '#5a4f42'}}>
                  Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Datensicherheit</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Wir verwenden angemessene technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen 
                zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder 
                gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
              <p style={{color: '#5a4f42'}}>
                Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>Kontakt bei Datenschutzfragen</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Bei Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder zu dieser Datenschutzerklärung 
                können Sie sich jederzeit an uns wenden:
              </p>
              <div className="space-y-2" style={{color: '#5a4f42'}}>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:BlueBirdMannheim@gmail.com" className="hover:underline">
                    BlueBirdMannheim@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+49 621 123 4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="p-6 rounded-lg" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
            <h2 className="text-2xl font-bold mb-4">Änderungen der Datenschutzerklärung</h2>
            <p className="mb-4">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
            <p>
              <strong>Stand:</strong> Januar 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;