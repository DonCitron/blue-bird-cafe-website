import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, MapPin, ArrowRight, Users, Award, Heart, Leaf, Star, Target } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import AnimatedCounter from '../components/AnimatedCounter';
import ImageWithFallback from '../components/ImageWithFallback';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blue Bird - Kaffee & Spezialitäten';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#f5f2e8'}}>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center h-80 md:h-96 mb-2">
              <ImageWithFallback
                src="/blue_bird_clean_transparent.png" 
                alt="Blue Bird Logo" 
                className="max-w-96 max-h-80 md:max-w-[30rem] md:max-h-96 object-contain animate-fade-in"
              />
            </div>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-slide-up" style={{color: '#3d3629'}}>
              Premium Kaffee und Spezialitäten in gemütlicher, einladender Atmosphäre.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Link 
              to="/menu" 
              className="font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d251b'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3d3629'}
            >
              Menü entdecken
            </Link>
            <Link 
              to="/contact" 
              className="border-2 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: 'transparent', borderColor: '#3d3629', color: '#3d3629'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#3d3629'; e.target.style.color = '#f9f7f4'}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#3d3629'}}
            >
              Uns finden
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#b09e7e'}}>
                <Coffee className="h-8 w-8" style={{color: '#f9f7f4'}} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p style={{color: '#5a4f42'}}>Verschiedene Kaffeesorten</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#b09e7e'}}>
                <Star className="h-8 w-8" style={{color: '#f9f7f4'}} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p style={{color: '#5a4f42'}}>Leidenschaft für Qualität</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#b09e7e'}}>
                <Target className="h-8 w-8" style={{color: '#f9f7f4'}} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{color: '#3d3629'}}>
                <AnimatedCounter end={2025} />
              </div>
              <p style={{color: '#5a4f42'}}>Unser Gründungsjahr</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6" style={{color: '#3d3629'}}>Willkommen im BlueBird Café</h2>
              <p className="text-xl font-medium mb-6" style={{color: '#4a4238'}}>
                Dein Wohlfühlort für Kaffee, Genuss & Community – mit einem Hauch Freiheit.
              </p>
              <p className="text-lg mb-8" style={{color: '#5a4f42'}}>
                Mitten im Herzen der Neckarstadt, nicht weit von der Alten Feuerwache findest du unser Café: ein Ort zum Ankommen, Durchatmen und Sein. Inspiriert von der entspannten Kultur Amsterdams und den sonnigen Vibes Spaniens, verbinden wir gemütliches Scandi-Boho-Ambiente mit liebevoll zubereiteten Drinks, süßen & herzhaften Kleinigkeiten – und einem diskreten Augenzwinkern Richtung Cannabis-Genuss.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Mehr über uns erfahren
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <ImageWithFallback
                src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Unsere Menü-Highlights</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Entdecken Sie unsere Auswahl an Premium-Kaffees, Spezialitäten und köstlichen Speisen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee */}
            <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                  alt="Coffee selection" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Premium Kaffee</h3>
                <p className="mb-4" style={{color: '#5a4f42'}}>
                  Meisterhaft zubereitete Kaffeespezialitäten aus ethisch bezogenen Bohnen aus aller Welt.
                </p>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  Kaffee-Menü ansehen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Matcha & Specials */}
            <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/4828333/pexels-photo-4828333.jpeg" 
                  alt="Matcha drinks" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Matcha & Spezialitäten</h3>
                <p className="mb-4" style={{color: '#5a4f42'}}>
                  Traditioneller Matcha und unsere einzigartigen Spezialitäten, liebevoll zubereitet.
                </p>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  Spezialitäten-Menü ansehen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Food */}
            <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group" style={{backgroundColor: '#f5f2e8'}}>
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg" 
                  alt="Food options" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Speisen & Gebäck</h3>
                <p className="mb-4" style={{color: '#5a4f42'}}>
                  Köstliche Speisen, von frischem Gebäck bis hin zu herzhaften Snacks, perfekt für jede Tageszeit.
                </p>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  Speise-Menü ansehen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#f9f7f4'}}>Kommende Veranstaltungen</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#f4f1ed'}}>
              Begleiten Sie uns bei besonderen Events, Verkostungen und Gemeinschaftstreffen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{backgroundColor: 'rgba(176, 158, 126, 0.8)'}}>
              <div className="font-bold text-center py-2 px-4 rounded mb-4" style={{backgroundColor: 'rgba(61, 54, 41, 0.2)', color: '#f9f7f4'}}>
                <span className="block text-2xl">15</span>
                <span>June</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Kaffee-Verkostungs-Workshop</h3>
              <p className="mb-4" style={{color: '#f4f1ed'}}>
                Lernen Sie in diesem interaktiven Workshop verschiedene Kaffee-Herkünfte und Braumethoden kennen.
              </p>
              <div className="flex items-center mb-1" style={{color: '#f4f1ed'}}>
                <Clock className="h-4 w-4 mr-2" />
                <span>18:00 - 20:00</span>
              </div>
              <div className="flex items-center" style={{color: '#f4f1ed'}}>
                <MapPin className="h-4 w-4 mr-2" />
                <span>Hauptcafé-Bereich</span>
              </div>
            </div>

            {/* Event 2 */}
            <div className="rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{backgroundColor: 'rgba(176, 158, 126, 0.8)'}}>
              <div className="font-bold text-center py-2 px-4 rounded mb-4" style={{backgroundColor: 'rgba(61, 54, 41, 0.2)', color: '#f9f7f4'}}>
                <span className="block text-2xl">22</span>
                <span>June</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Matcha-Zeremonie Abend</h3>
              <p className="mb-4" style={{color: '#f4f1ed'}}>
                Expertengeleitete Sitzung über traditionelle Matcha-Zubereitung und -Kultur.
              </p>
              <div className="flex items-center mb-1" style={{color: '#f4f1ed'}}>
                <Clock className="h-4 w-4 mr-2" />
                <span>19:00 - 21:00</span>
              </div>
              <div className="flex items-center" style={{color: '#f4f1ed'}}>
                <MapPin className="h-4 w-4 mr-2" />
                <span>Privater Veranstaltungsraum</span>
              </div>
            </div>

            {/* Event 3 */}
            <div className="rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{backgroundColor: 'rgba(176, 158, 126, 0.8)'}}>
              <div className="font-bold text-center py-2 px-4 rounded mb-4" style={{backgroundColor: 'rgba(61, 54, 41, 0.2)', color: '#f9f7f4'}}>
                <span className="block text-2xl">29</span>
                <span>June</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Live Musik Freitag</h3>
              <p className="mb-4" style={{color: '#f4f1ed'}}>
                Genießen Sie lokale Akustik-Künstler während Sie bei Ihrem Lieblingsgetränk entspannen.
              </p>
              <div className="flex items-center mb-1" style={{color: '#f4f1ed'}}>
                <Clock className="h-4 w-4 mr-2" />
                <span>20:00 - 23:00</span>
              </div>
              <div className="flex items-center" style={{color: '#f4f1ed'}}>
                <MapPin className="h-4 w-4 mr-2" />
                <span>Hauptcafé-Bereich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Was unsere Kunden sagen</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
              Glauben Sie nicht nur uns - hier ist, was Besucher am Blue Bird lieben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-lg p-6 shadow-sm border transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-stone-800">Jamie Davis</h4>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Die perfekte Mischung aus Kaffeekultur und gemütlicher Atmosphäre. Das Ambiente ist so einladend und das Personal ist unglaublich kompetent bei Kaffee und Spezialitäten."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg p-6 shadow-sm border transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl">
                  SP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-stone-800">Sarah Parker</h4>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Ich liebe das Innendesign mit all dem Holz und den Pflanzen. Es schafft eine so beruhigende Umgebung zum Arbeiten oder Sozialisieren. Die Kaffeespezialitäten sind fantastisch und ihre Matcha-Auswahl ist erstklassig."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg p-6 shadow-sm border transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e8dbc7', borderColor: '#a89180'}}>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl">
                  MK
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-stone-800">Michael Klein</h4>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Als jemand, der remote arbeitet, habe ich viele Cafés ausprobiert, aber dieses sticht hervor. Die Kombination aus exzellentem Kaffee und entspannter Atmosphäre macht es perfekt zum Arbeiten und Entspannen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Folgen Sie uns auf Instagram</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6" style={{color: '#5a4f42'}}>
              Sehen Sie mehr Fotos und bleiben Sie über unsere neuesten Angebote und Events informiert.
            </p>
            <a 
              href="https://instagram.com/BlueBird_Mannheim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium transition-all duration-300 hover:scale-105"
              style={{color: '#3d3629'}}
              onMouseEnter={(e) => e.target.style.color = '#5a4f42'}
              onMouseLeave={(e) => e.target.style.color = '#3d3629'}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @BlueBird_Mannheim
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Mock Instagram Posts */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <a 
                key={index}
                href="https://instagram.com/BlueBird_Mannheim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4c1a6 0%, #b09e7e 100%)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{color: '#3d3629'}}>
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-xs">Blue Bird</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Bird Card Loyalty Program */}
      <section className="py-20" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl" style={{backgroundColor: '#f5f2e8'}}>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/blue_bird_clean_transparent.png" 
                    alt="Blue Bird Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4" style={{color: '#3d3629'}}>Blue Bird Card</h2>
              <p className="text-xl mb-8" style={{color: '#5a4f42'}}>
                Unser Treueprogramm belohnt Ihre Treue mit besonderen Vorteilen
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#3d3629'}}>Punkte sammeln</h3>
                  <p style={{color: '#5a4f42'}}>1€ = 1 Punkt bei jedem Einkauf</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#3d3629'}}>Exklusive Angebote</h3>
                  <p style={{color: '#5a4f42'}}>Spezielle Rabatte nur für Mitglieder</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#3d3629'}}>Geburtstagstorte</h3>
                  <p style={{color: '#5a4f42'}}>Kostenloser Kaffee an Ihrem Geburtstag</p>
                </div>
              </div>
              
              <div className="rounded-xl p-6 mb-8" style={{backgroundColor: '#EDC9AF'}}>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#3d3629'}}>Belohnungsstufen</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Bronze: 0-99 Punkte</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Silber: 100-299 Punkte</span>
                  <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">Gold: 300+ Punkte</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Jetzt anmelden
                </button>
                <button className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#b09e7e'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#f9f7f4'}}>Bereit für einen Besuch?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#f4f1ed'}}>
            Erleben Sie die einladende Atmosphäre des Blue Bird. Wir freuen uns darauf, Sie zu begrüßen!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d251b'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3d3629'}
            >
              Unseren Standort finden
            </Link>
            <Link 
              to="/menu" 
              className="border-2 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: 'transparent', borderColor: '#3d3629', color: '#3d3629'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#3d3629'; e.target.style.color = '#f9f7f4'}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#3d3629'}}
            >
              Menü ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;