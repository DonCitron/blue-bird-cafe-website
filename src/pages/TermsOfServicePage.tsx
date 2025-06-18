import React, { useEffect } from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Allgemeine Geschäftsbedingungen - Blue Bird';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
              <Scale className="h-8 w-8" style={{color: '#f9f7f4'}} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Unsere Geschäftsbedingungen regeln die Nutzung unserer Dienstleistungen und Website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12 p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
            <h2 className="text-2xl font-bold mb-4" style={{color: '#3d3629'}}>§ 1 Geltungsbereich</h2>
            <p className="mb-4" style={{color: '#5a4f42'}}>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen dem 
              Blue Bird Café (nachfolgend "Anbieter") und seinen Kunden (nachfolgend "Kunde") über die Inanspruchnahme 
              der Leistungen des Anbieters.
            </p>
            <p style={{color: '#5a4f42'}}>
              Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer 
              Geltung ausdrücklich schriftlich zu.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 2 Leistungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Café-Dienstleistungen</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Bereitstellung von Speisen und Getränken</li>
                  <li>• Nutzung der Café-Räumlichkeiten</li>
                  <li>• WLAN-Zugang</li>
                  <li>• Veranstaltungen und Events</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6" style={{color: '#b09e7e'}} />
                  <h3 className="text-lg font-semibold" style={{color: '#3d3629'}}>Online-Services</h3>
                </div>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Website und Online-Präsenz</li>
                  <li>• Newsletter-Service</li>
                  <li>• Bewertungs- und Kommentarfunktionen</li>
                  <li>• Foto-Upload und Community-Features</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age Restriction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 3 Altersbeschränkung und Zugang</h2>
            <div className="p-6 rounded-lg border-l-4" style={{backgroundColor: '#e8dbc7', borderColor: '#b09e7e'}}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 mt-1" style={{color: '#b09e7e'}} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#3d3629'}}>Wichtiger Hinweis</h3>
                  <p className="mb-4" style={{color: '#5a4f42'}}>
                    Der Zugang zu unserem Café ist ausschließlich Personen ab 18 Jahren gestattet. 
                    Dies dient der Einhaltung gesetzlicher Bestimmungen und der Gewährleistung einer 
                    angemessenen Atmosphäre für alle Gäste.
                  </p>
                  <ul className="space-y-2" style={{color: '#5a4f42'}}>
                    <li>• Gültiger Lichtbildausweis ist beim Betreten vorzuzeigen</li>
                    <li>• Personen unter 18 Jahren wird der Zutritt verwehrt</li>
                    <li>• Kein Aufenthalt für Minderjährige, auch nicht in Begleitung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prices and Payment */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 4 Preise und Zahlung</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Preise</h3>
                <p style={{color: '#5a4f42'}}>
                  Es gelten die zum Zeitpunkt der Bestellung aktuellen Preise. Alle Preise verstehen sich 
                  inklusive der gesetzlichen Mehrwertsteuer.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Zahlungsmethoden</h3>
                <ul className="space-y-2" style={{color: '#5a4f42'}}>
                  <li>• Barzahlung</li>
                  <li>• EC-Karte/Girocard</li>
                  <li>• Kreditkarte (Visa, Mastercard)</li>
                  <li>• Kontaktlose Zahlung (NFC)</li>
                  <li>• Mobile Payment (Apple Pay, Google Pay)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* House Rules */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 5 Hausordnung</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <h3 className="text-lg font-semibold mb-4" style={{color: '#3d3629'}}>Verhaltensregeln</h3>
              <ul className="space-y-3" style={{color: '#5a4f42'}}>
                <li>• Respektvoller Umgang mit anderen Gästen und Personal</li>
                <li>• Einhaltung der Ruhezeiten und angemessene Lautstärke</li>
                <li>• Sauberhaltung der Räumlichkeiten</li>
                <li>• Beachtung der Nichtraucherbereiche</li>
                <li>• Befolgen der Anweisungen des Personals</li>
                <li>• Keine Mitnahme von eigenen Speisen und Getränken</li>
                <li>• Verantwortungsvoller Umgang mit bereitgestellten Materialien</li>
              </ul>
            </div>
          </div>

          {/* Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 6 Haftung</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Haftungsausschluss</h3>
                <p className="mb-3" style={{color: '#5a4f42'}}>
                  Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. 
                  Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der Verletzung 
                  des Lebens, des Körpers oder der Gesundheit resultieren.
                </p>
                <p style={{color: '#5a4f42'}}>
                  Für den Verlust oder die Beschädigung von Gegenständen der Gäste übernimmt der Anbieter keine Haftung, 
                  es sei denn, diese wurden zur besonderen Verwahrung übergeben.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Kundenhaftung</h3>
                <p style={{color: '#5a4f42'}}>
                  Der Kunde haftet für alle Schäden, die er vorsätzlich oder fahrlässig am Eigentum des Anbieters 
                  oder Dritter verursacht. Dies umfasst auch Schäden durch Verstöße gegen die Hausordnung.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 7 Datenschutz</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden nur im Rahmen der 
                geltenden Datenschutzbestimmungen. Einzelheiten sind in der Datenschutzerklärung geregelt.
              </p>
              <p style={{color: '#5a4f42'}}>
                Mit der Nutzung unserer Dienstleistungen erklärt sich der Kunde mit der Verarbeitung seiner 
                Daten gemäß unserer Datenschutzerklärung einverstanden.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 8 Hausverbot und Kündigung</h2>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
              <p className="mb-4" style={{color: '#5a4f42'}}>
                Der Anbieter behält sich das Recht vor, Kunden bei Verstößen gegen diese AGB oder die Hausordnung 
                des Lokals zu verweisen oder mit einem Hausverbot zu belegen.
              </p>
              <p style={{color: '#5a4f42'}}>
                Ein Hausverbot kann insbesondere ausgesprochen werden bei:
              </p>
              <ul className="mt-3 space-y-2" style={{color: '#5a4f42'}}>
                <li>• Störung des Betriebsablaufs</li>
                <li>• Belästigung anderer Gäste oder des Personals</li>
                <li>• Sachbeschädigung</li>
                <li>• Verstößen gegen gesetzliche Bestimmungen</li>
                <li>• Wiederholten Verstößen gegen die Hausordnung</li>
              </ul>
            </div>
          </div>

          {/* Final Provisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#3d3629'}}>§ 9 Schlussbestimmungen</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Anwendbares Recht</h3>
                <p style={{color: '#5a4f42'}}>
                  Auf alle Rechtsbeziehungen zwischen dem Anbieter und dem Kunden findet deutsches Recht Anwendung 
                  unter Ausschluss des UN-Kaufrechts.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Gerichtsstand</h3>
                <p style={{color: '#5a4f42'}}>
                  Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit Verträgen zwischen dem Anbieter 
                  und dem Kunden ist Mannheim, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts 
                  oder öffentlich-rechtliches Sondervermögen ist.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: '#e8dbc7'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#3d3629'}}>Salvatorische Klausel</h3>
                <p style={{color: '#5a4f42'}}>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, 
                  so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Updates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
              <h2 className="text-xl font-bold mb-4">Kontakt</h2>
              <p className="mb-4">
                Bei Fragen zu diesen AGB können Sie sich jederzeit an uns wenden:
              </p>
              <div className="space-y-2">
                <p>Blue Bird Café</p>
                <p>Langstraße 19, 68169 Mannheim</p>
                <p>BlueBirdMannheim@gmail.com</p>
                <p>+49 621 123 4567</p>
              </div>
            </div>
            
            <div className="p-6 rounded-lg" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
              <h2 className="text-xl font-bold mb-4">Änderungen</h2>
              <p className="mb-4">
                Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. 
                Die jeweils aktuelle Fassung ist auf unserer Website einsehbar.
              </p>
              <p>
                <strong>Stand:</strong> Januar 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;