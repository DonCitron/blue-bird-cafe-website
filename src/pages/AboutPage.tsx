import React, { useEffect } from 'react';
import { ArrowRight, Award, Star, Trophy, AlignCenterVertical as Certificate, Users, Target, Camera, Clock, Coffee, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Über uns - Blue Bird';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Über Blue Bird</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Wo Kaffeekultur und Gemütlichkeit in einer warmen, einladenden Atmosphäre aufeinandertreffen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-stone-600 mb-4">
                Blue Bird wurde aus einer einfachen Idee geboren: einen Raum zu schaffen, wo die Kunst des Kaffees und gemütliche Atmosphäre in Harmonie koexistieren können.
              </p>
              <p className="text-lg text-stone-600 mb-4">
                2025 von einem Team aus Kaffee-Enthusiasten gegründet, machten wir uns daran, ein Café zu bauen, das beide Erfahrungen auf neue Höhen hebt.
              </p>
              <p className="text-lg text-stone-600">
                Unser Café ist als Gemeinschaftszentrum konzipiert, wo Menschen sich verbinden, entspannen und Premium-Produkte in einer raffinierten und dennoch einladenden Atmosphäre genießen können.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg" 
                alt="Cozy café interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{color: '#3d3629'}}>Unsere Grundwerte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="p-8 rounded-lg shadow-sm border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 text-center">Qualität</h3>
              <p className="text-stone-600 text-center">
                Wir beziehen die feinsten Kaffeebohnen und Spezialitäten und stellen sicher, dass jede Erfahrung im Blue Bird außergewöhnlich ist. Wir machen nie Kompromisse bei der Qualität.
              </p>
            </div>

            {/* Community */}
            <div className="p-8 rounded-lg shadow-sm border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 text-center">Gemeinschaft</h3>
              <p className="text-stone-600 text-center">
                Wir bauen mehr als nur ein Café auf – wir schaffen eine Gemeinschaft, in der sich Menschen willkommen, geschätzt und frei fühlen, sie selbst zu sein.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-8 rounded-lg shadow-sm border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 text-center">Nachhaltigkeit</h3>
              <p className="text-stone-600 text-center">
                Von kompostierbaren Verpackungen bis hin zu energieeffizienten Geräten und lokal bezogenen Zutaten bemühen wir uns, unseren ökologischen Fußabdruck zu minimieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Space */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Unser Raum</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Wir haben eine warme, einladende Umgebung geschaffen, die von der Natur inspiriert ist und Holzelemente sowie üppiges Pflanzenleben aufweist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <img 
                src="https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg" 
                alt="Café interior with plants" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <img 
                src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg" 
                alt="Cozy seating area" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <img 
                src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" 
                alt="Coffee preparation area" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/gallery" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Sehen Sie mehr von unserem Raum in unserer Galerie
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Lernen Sie unser Team kennen</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Unser leidenschaftliches Team aus Kaffee-Experten und Gastronomen ist darauf spezialisiert, Ihnen das beste Erlebnis zu bieten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Lars Fieber */}
            <div className="rounded-lg overflow-hidden shadow-md" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lars-fieber.1024x1024.jpg" 
                  alt="Lars Fieber - CEO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1" style={{color: '#3d3629'}}>Lars Fieber</h3>
                <p className="font-medium mb-3" style={{color: '#b09e7e'}}>CEO</p>
                <p style={{color: '#5a4f42'}}>
                  Als CEO des Blue Bird verantwortet Lars Fieber die strategische Ausrichtung und das operative Tagesgeschäft. Mit einem scharfen Blick für Marktentwicklungen und einem klaren Fokus auf nachhaltiges Wachstum führt er das Unternehmen in eine erfolgreiche Zukunft. Seine umfassende Erfahrung im Management und seine Leidenschaft für außergewöhnliche Gastfreundschaft machen ihn zu einer inspirierenden Führungskraft. Unter seiner Leitung entwickelt sich Blue Bird kontinuierlich weiter, ohne dabei die ursprüngliche Vision aus den Augen zu verlieren.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Jose Dah */}
            <div className="rounded-lg overflow-hidden shadow-md" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="/jose-dah.256x256.jpg" 
                  alt="Jose Dah - Gründer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1" style={{color: '#3d3629'}}>Jose Dah</h3>
                <p className="font-medium mb-3" style={{color: '#b09e7e'}}>Gründer</p>
                <p style={{color: '#5a4f42'}}>
                  Jose Dah ist nicht nur der visionäre Gründer des Blue Bird, sondern auch die treibende Kraft hinter der einzigartigen Atmosphäre, die unsere Gäste schätzen. Mit jahrzehntelanger Erfahrung in der Kaffeebranche hat er ein tiefes Verständnis für Qualitätskaffee entwickelt. Seine Reisen zu Kaffeeplantagen weltweit und sein Engagement für faire Handelsbeziehungen spiegeln sich in jedem Schluck wider. Sein Motto 'Jede Tasse erzählt eine Geschichte' prägt die Philosophie des Hauses und schafft eine Verbindung zwischen Kaffeebauern und Gästen.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Pascal Hintermaier */}
            <div className="rounded-lg overflow-hidden shadow-md" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Pascal Hintermaier" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1" style={{color: '#3d3629'}}>Pascal Hintermaier</h3>
                <p className="font-medium mb-3" style={{color: '#b09e7e'}}>Webdesign & IT</p>
                <p style={{color: '#5a4f42'}}>
                  Verantwortlich für die digitale Präsenz von Blue Bird. Mit langjähriger Erfahrung in der Gastronomie und als Experte für Webdesign und IT-Infrastruktur sorgt er nicht nur für ein nahtloses digitales Erlebnis unserer Gäste, sondern berät auch bei der Optimierung von Arbeitsprozessen und Logistik. Sein umfassendes Know-how macht ihn zu einem wertvollen Allrounder im Team.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Behind-the-Scenes Section */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#b09e7e'}}>
                <Camera className="h-8 w-8" style={{color: '#f9f7f4'}} />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Hinter den Kulissen</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Erleben Sie die Leidenschaft und Hingabe unseres Teams bei der täglichen Arbeit im Blue Bird
            </p>
          </div>

          {/* Daily Operations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Morning Preparation */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg" 
                  alt="Jose preparing coffee beans in the morning" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6" style={{backgroundColor: '#e8dbc7'}}>
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2" style={{color: '#b09e7e'}} />
                    <span className="font-semibold" style={{color: '#3d3629'}}>6:30 Uhr - Morgenvorbereitung</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Jose bereitet die Kaffeebohnen vor</h3>
                  <p style={{color: '#5a4f42'}}>
                    Jeden Morgen beginnt Jose mit der sorgfältigen Auswahl und Röstung unserer Premium-Kaffeebohnen. 
                    Seine jahrzehntelange Erfahrung zeigt sich in jedem Detail - von der Temperaturkontrolle bis zur 
                    perfekten Timing für jede Bohnenart.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg" 
                  alt="Team working together during busy hours" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6" style={{backgroundColor: '#e8dbc7'}}>
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 mr-2" style={{color: '#b09e7e'}} />
                    <span className="font-semibold" style={{color: '#3d3629'}}>Teamwork in Aktion</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Perfekte Koordination</h3>
                  <p style={{color: '#5a4f42'}}>
                    Unser Team arbeitet wie ein Uhrwerk zusammen. Lars koordiniert den Service, während Jose die 
                    Qualität jeder Tasse überwacht und Pascal sicherstellt, dass alle technischen Systeme reibungslos laufen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Coffee Crafting */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                  alt="Barista crafting the perfect latte art" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-3">
                <Coffee className="h-8 w-8" style={{color: '#b09e7e'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#3d3629'}}>Kaffee-Kunstwerk</h3>
              <p style={{color: '#5a4f42'}}>
                Jede Tasse ist ein Kunstwerk. Unser Team perfektioniert täglich die Latte Art und 
                experimentiert mit neuen Geschmackskombinationen.
              </p>
            </div>

            {/* Quality Control */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/4828333/pexels-photo-4828333.jpeg" 
                  alt="Jose testing matcha quality" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-3">
                <Target className="h-8 w-8" style={{color: '#b09e7e'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#3d3629'}}>Qualitätskontrolle</h3>
              <p style={{color: '#5a4f42'}}>
                Jose testet persönlich jeden Matcha-Batch und stellt sicher, dass nur die beste 
                Qualität unsere Gäste erreicht.
              </p>
            </div>

            {/* Customer Connection */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/5082658/pexels-photo-5082658.jpeg" 
                  alt="Lars interacting with customers" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex justify-center mb-3">
                <Heart className="h-8 w-8" style={{color: '#b09e7e'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#3d3629'}}>Gäste-Verbindung</h3>
              <p style={{color: '#5a4f42'}}>
                Lars nimmt sich Zeit für jeden Gast, hört zu und sorgt dafür, dass sich jeder 
                im Blue Bird willkommen und geschätzt fühlt.
              </p>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="rounded-lg p-8 shadow-xl" style={{backgroundColor: '#EDC9AF'}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#3d3629'}}>Unsere Arbeitsphilosophie</h3>
              <p className="text-lg" style={{color: '#5a4f42'}}>
                "Jeder Tag im Blue Bird ist eine neue Chance, jemandem ein Lächeln zu schenken"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Leidenschaft</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>
                  Wir leben und atmen Kaffeekultur - jede Tasse wird mit Liebe zubereitet
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Teamgeist</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>
                  Zusammenarbeit und gegenseitiger Respekt sind die Grundlage unseres Erfolgs
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Exzellenz</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>
                  Wir streben täglich nach Perfektion in allem, was wir tun
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#3d3629'}}>Erleben Sie unser Team live</h3>
            <p className="text-lg mb-6" style={{color: '#5a4f42'}}>
              Besuchen Sie uns und sehen Sie selbst, wie viel Herzblut in jeder Tasse steckt
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#2d251b'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#3d3629'}
            >
              Uns besuchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Achievements Section */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Team-Erfolge & Auszeichnungen</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Unser Team bringt jahrelange Erfahrung, Zertifizierungen und Auszeichnungen mit, die unsere Expertise und unser Engagement für Exzellenz unterstreichen.
            </p>
          </div>

          {/* Individual Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Lars Fieber Achievements */}
            <div className="rounded-lg p-8 shadow-lg" style={{backgroundColor: '#e8dbc7'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/lars-fieber.1024x1024.jpg" 
                    alt="Lars Fieber" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#3d3629'}}>Lars Fieber</h3>
                  <p className="text-sm" style={{color: '#b09e7e'}}>CEO</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>MBA in Hospitality Management</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Universität Mannheim, 2018</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Trophy className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Gastronomy Excellence Award</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Baden-Württemberg Gastronomie Verband, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Certificate className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Sustainable Business Leadership</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>IHK Rhein-Neckar Zertifizierung, 2022</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>15+ Jahre Führungserfahrung</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>In der Gastronomie- und Hospitality-Branche</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jose Dah Achievements */}
            <div className="rounded-lg p-8 shadow-lg" style={{backgroundColor: '#e8dbc7'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/jose-dah.256x256.jpg" 
                    alt="Jose Dah" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#3d3629'}}>Jose Dah</h3>
                  <p className="text-sm" style={{color: '#b09e7e'}}>Gründer & Kaffee-Experte</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Certificate className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Q Grader Zertifizierung</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Coffee Quality Institute, 2019</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Specialty Coffee Association</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Barista Professional Zertifizierung, 2020</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Trophy className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Fair Trade Ambassador</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Fairtrade Deutschland e.V., 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>20+ Jahre Kaffee-Expertise</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Direkter Handel mit Kaffeebauern weltweit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pascal Hintermaier Achievements */}
            <div className="rounded-lg p-8 shadow-lg" style={{backgroundColor: '#e8dbc7'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Pascal Hintermaier" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{color: '#3d3629'}}>Pascal Hintermaier</h3>
                  <p className="text-sm" style={{color: '#b09e7e'}}>Webdesign & IT</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Certificate className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Certified Web Developer</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Full-Stack Development Zertifizierung, 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>UX/UI Design Excellence</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Adobe Certified Expert, 2022</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Trophy className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>Digital Innovation Award</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Mannheim Digital Hub, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{color: '#b09e7e'}} />
                  <div>
                    <h4 className="font-semibold" style={{color: '#3d3629'}}>10+ Jahre Gastronomie-IT</h4>
                    <p className="text-sm" style={{color: '#5a4f42'}}>Spezialisiert auf Restaurant-Technologie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Collective Achievements */}
          <div className="rounded-lg p-8 shadow-xl" style={{backgroundColor: '#EDC9AF'}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#3d3629'}}>Gemeinsame Team-Erfolge</h3>
              <p className="text-lg" style={{color: '#5a4f42'}}>
                Zusammen haben wir bedeutende Meilensteine erreicht und Auszeichnungen erhalten
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(232, 219, 199, 0.7)'}}>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Best New Café 2025</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Mannheim Gastronomy Awards</p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(232, 219, 199, 0.7)'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Sustainability Champion</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Green Business Certification</p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(232, 219, 199, 0.7)'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>5-Sterne Bewertung</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Google & TripAdvisor Durchschnitt</p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: 'rgba(232, 219, 199, 0.7)'}}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2" style={{color: '#3d3629'}}>Community Choice</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Lieblingscafé der Neckarstadt</p>
              </div>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8" style={{color: '#3d3629'}}>Professionelle Mitgliedschaften</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-lg border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
                <h4 className="font-semibold mb-2" style={{color: '#3d3629'}}>Specialty Coffee Association</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Internationale Mitgliedschaft</p>
              </div>
              
              <div className="p-4 rounded-lg border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
                <h4 className="font-semibold mb-2" style={{color: '#3d3629'}}>DEHOGA Baden-Württemberg</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Gastronomie-Verband</p>
              </div>
              
              <div className="p-4 rounded-lg border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
                <h4 className="font-semibold mb-2" style={{color: '#3d3629'}}>Fair Trade Deutschland</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Zertifizierter Partner</p>
              </div>
              
              <div className="p-4 rounded-lg border" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
                <h4 className="font-semibold mb-2" style={{color: '#3d3629'}}>IHK Rhein-Neckar</h4>
                <p className="text-sm" style={{color: '#5a4f42'}}>Handelskammer Mitglied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Responsibility */}
      <section className="py-16" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#f9f7f4'}}>Unser Engagement für Bildung & Qualität</h2>
            <p className="text-lg mb-8" style={{color: '#f4f1ed'}}>
              Im Blue Bird setzen wir uns dafür ein, Kaffee-Wertschätzung und Wellness durch Bildung zu fördern.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(176, 158, 126, 0.7)'}}>
                <h3 className="text-xl font-bold mb-4">Matcha & Tee-Bildung</h3>
                <p className="mb-4" style={{color: '#f4f1ed'}}>
                  Wir bieten regelmäßige Workshops und Informationsressourcen über Matcha-Zubereitung, Tee-Sorten und deren Wirkungen.
                </p>
                <p style={{color: '#f4f1ed'}}>
                  Unser Personal ist umfassend geschult, um Anleitung zu geben und Fragen zu beantworten, besonders für Matcha-Neulinge.
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(176, 158, 126, 0.7)'}}>
                <h3 className="text-xl font-bold mb-4">Kaffee-Wertschätzung</h3>
                <p className="mb-4" style={{color: '#f4f1ed'}}>
                  Entdecken Sie die Welt des Spezialitätenkaffees durch unsere Verkostungen und Brüh-Demonstrationen.
                </p>
                <p style={{color: '#f4f1ed'}}>
                  Lernen Sie über Kaffee-Herkünfte, Verarbeitungsmethoden und wie man Geschmacksnoten in verschiedenen Bohnen identifiziert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5082658/pexels-photo-5082658.jpeg" 
                alt="Community event at café" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#3d3629'}}>Gemeinschaft & Events</h2>
              <p className="text-lg text-stone-600 mb-4">
                Wir glauben an die Kraft der Gemeinschaft. Blue Bird veranstaltet regelmäßig Events, die Menschen zusammenbringen, von Bildungsworkshops bis hin zu Live-Musikabenden und Kunstausstellungen.
              </p>
              <p className="text-lg text-stone-600 mb-6">
                Unser Raum steht auch für private Veranstaltungen und Gemeinschaftstreffen zur Verfügung. Wir lieben es, ein Zentrum zu sein, wo Verbindungen geknupft und Ideen geteilt werden.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Anfrage für Veranstaltung stellen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Café Experience */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg mb-6" style={{color: '#5a4f42'}}>
              🌱 Vegane Alternativen, 💧 CBD-Infusionen, samtige Matchas und aromatische Kaffee-Kreationen warten auf dich – genauso wie unsere handverlesenen Snacks, hausgemachten Kuchen und immer wieder neue Tagesempfehlungen.
            </p>
            
            <p className="text-lg mb-6" style={{color: '#5a4f42'}}>
              Ob du alleine entspannst, dich mit Freund:innen triffst oder neue Leute aus der Community kennenlernst – bei uns zählt der Moment. Und dein gutes Gefühl.
            </p>
            
            <div className="border-l-4 border-amber-600 pl-4 my-8">
              <p className="text-lg italic" style={{color: '#5a4f42'}}>
                Hinweis: Unser Zugang ist ausschließlich für Erwachsene (ab 18 Jahren) – für deine Sicherheit und ein entspanntes Miteinander sorgen wir mit einem dezenten Klingelsystem am Eingang.
              </p>
            </div>
            
            <p className="text-xl font-medium text-center mt-10" style={{color: '#3d3629'}}>
              Wir freuen uns auf deinen Besuch!
              <br />
              <span className="text-amber-700">Stay grounded, feel lifted – im Café BlueBird</span>
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16" style={{backgroundColor: '#b09e7e'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#f9f7f4'}}>Erleben Sie Blue Bird selbst</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#f4f1ed'}}>
            Wir laden Sie ein, uns zu besuchen und unsere einzigartige Mischung aus Kaffeekultur und Gemeinschaftsgefühl zu erleben.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="font-medium py-3 px-8 rounded-full transition-colors duration-300"
              style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#2d251b'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#3d3629'}
            >
              Unseren Standort finden
            </a>
            <a 
              href="/menu" 
              className="border-2 font-medium py-3 px-8 rounded-full transition-colors duration-300"
              style={{backgroundColor: 'transparent', borderColor: '#3d3629', color: '#3d3629'}}
              onMouseEnter={(e) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = '#3d3629';
                target.style.color = '#f9f7f4';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = '#3d3629';
              }}
            >
              Unser Menü ansehen
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;