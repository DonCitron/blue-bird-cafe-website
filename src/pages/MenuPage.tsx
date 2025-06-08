import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  useEffect(() => {
    document.title = 'Menü - Blue Bird';
    
    // Scroll to top when menu page loads
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Small delay to ensure page is rendered
    setTimeout(scrollToTop, 100);
  }, []);

  const categories = [
    { id: 'coffee', name: 'Kaffee & Getränke', icon: <Coffee className="h-5 w-5" /> },
    { id: 'matcha', name: 'Matcha & Spezialitäten', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.252 8.252 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg> },
    { id: 'food', name: 'Speisen & Gebäck', icon: 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.75 15.75h-1.5m1.5 3h-1.5" />
      </svg>
    },
    { id: 'specialties', name: 'Spezialitäten', icon: 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    }
  ];

  const menuItems = {
    coffee: [
      {
        name: "Espresso",
        description: "Reichhaltiger und intensiver Kaffee-Shot",
        price: "€2.50",
        tags: ["Klassisch"]
      },
      {
        name: "Americano",
        description: "Espresso mit heißem Wasser verdünnt",
        price: "€3.00",
        tags: ["Klassisch"]
      },
      {
        name: "Cappuccino",
        description: "Espresso mit gedämpfter Milch und Schaum",
        price: "€3.50",
        tags: ["Klassisch", "Beliebt"]
      },
      {
        name: "Flat White",
        description: "Doppelter Espresso mit Mikroschaum-Milch",
        price: "€3.80",
        tags: ["Klassisch", "Beliebt"]
      },
      {
        name: "Latte Macchiato",
        description: "Geschichtetes Getränk mit gedämpfter Milch und Espresso",
        price: "€4.00",
        tags: ["Klassisch"]
      },
      {
        name: "Sahne Spice Latte",
        description: "Gewürzter Latte mit Sahne",
        price: "€4.50",
        tags: ["Spezial"]
      },
      {
        name: "Chai + Ingwer",
        description: "Chai-Tee mit frischem Ingwer",
        price: "€4.20",
        tags: ["Spezial"]
      },
      {
        name: "Zimt/Kardamom/Vanilla",
        description: "Gewürzter Kaffee mit Zimt, Kardamom oder Vanille",
        price: "€4.00",
        tags: ["Spezial"]
      },
      {
        name: "Iced Espresso",
        description: "Erfrischender kalter Espresso",
        price: "€3.00",
        tags: ["Kalt"]
      },
      {
        name: "Iced Macchiato",
        description: "Kaltes geschichtetes Kaffeegetränk",
        price: "€4.20",
        tags: ["Kalt"]
      },
      {
        name: "Cold Brew - Lavendel Tonic",
        description: "Cold Brew mit Lavendel und Tonic",
        price: "€4.50",
        tags: ["Kalt", "Spezial"]
      },
      {
        name: "Eistee - Grüne Minze",
        description: "Eistee mit frischer grüner Minze",
        price: "€3.50",
        tags: ["Kalt"]
      }
    ],
    matcha: [
      {
        name: "Vanilla Matcha",
        description: "Traditioneller Matcha mit einem Hauch von Vanille",
        price: "€4.50",
        tags: ["Matcha", "Popular"]
      },
      {
        name: "CBD Matcha",
        description: "Beruhigender Matcha mit entspannenden Eigenschaften",
        price: "€5.50",
        tags: ["Matcha", "CBD", "Special"]
      }
    ],
    food: [
      {
        name: "Avocado-Brot",
        description: "Frisches Brot mit reifer Avocado und Gewürzen",
        price: "€7.50",
        tags: ["Gesund", "Vegan", "Beliebt"]
      },
      {
        name: "Green Banana",
        description: "Frische grüne Bananen-Smoothie Bowl",
        price: "€6.50",
        tags: ["Gesund", "Vegan"]
      },
      {
        name: "Mini-Wraps mit Spinat, Ei",
        description: "Kleine Wraps mit frischem Spinat und Ei",
        price: "€5.50",
        tags: ["Snack", "Protein"]
      },
      {
        name: "Kulinarien-Hummus Bowl",
        description: "Gourmet-Hummus-Bowl mit frischem Gemüse",
        price: "€8.00",
        tags: ["Gesund", "Vegan"]
      },
      {
        name: "Overnight Oats mit Früchten",
        description: "Overnight Oats mit saisonalen Früchten",
        price: "€6.00",
        tags: ["Frühstück", "Gesund"]
      }
    ],
    specialties: [
      {
        name: "Blue Bird Special",
        description: "Unsere charakteristische Kaffeemischung mit einzigartigen Geschmacksnoten",
        price: "€5.50",
        tags: ["Charakteristisch", "Beliebt"]
      },
      {
        name: "Matcha Moments",
        description: "Traditionelle Matcha-Zeremonie Erlebnis",
        price: "€6.00",
        tags: ["Matcha", "Erlebnis"]
      },
      {
        name: "Seasonal Fruit Smoothie",
        description: "Mischung aus frischen saisonalen Früchten",
        price: "€5.50",
        tags: ["Gesund", "Saisonal"]
      },
      {
        name: "House Special Latte",
        description: "Unsere einzigartige Interpretation des klassischen Latte",
        price: "€4.80",
        tags: ["Charakteristisch"]
      }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Unser Menü</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Entdecken Sie unsere sorgfältig kuratierte Auswahl an Premium-Kaffee, Spezialitäten und köstlichen Speisen.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu-categories" className="py-8 sticky top-16 z-10" style={{backgroundColor: '#EDC9AF', scrollMarginTop: '120px'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id ? '#b09e7e' : '#e8dbc7',
                  color: activeCategory === category.id ? '#f9f7f4' : '#3d3629'
                }}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div 
                key={index} 
                className="p-6 border rounded-lg hover:shadow-md transition-shadow" style={{backgroundColor: 'rgba(232, 219, 199, 0.7)', borderColor: '#a89180'}}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold" style={{color: '#3d3629'}}>{item.name}</h3>
                  <span className="text-lg font-medium" style={{color: '#b09e7e'}}>{item.price}</span>
                </div>
                <p className="mb-3" style={{color: '#5a4f42'}}>{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        tag === 'Beliebt' ? 'bg-amber-100 text-amber-800' :
                        tag === 'Matcha' ? 'bg-green-100 text-green-800' :
                        tag === 'CBD' ? 'bg-emerald-100 text-emerald-800' :
                        tag === 'Kalt' ? 'bg-blue-100 text-blue-800' :
                        tag === 'Spezial' ? 'bg-purple-100 text-purple-800' :
                        tag === 'Gesund' ? 'bg-lime-100 text-lime-800' :
                        tag === 'Vegan' ? 'bg-green-100 text-green-800' :
                        tag === 'Klassisch' ? 'bg-stone-100 text-stone-800' :
                        tag === 'Charakteristisch' ? 'bg-indigo-100 text-indigo-800' :
                        tag === 'Frühstück' ? 'bg-orange-100 text-orange-800' :
                        tag === 'Saisonal' ? 'bg-teal-100 text-teal-800' :
                        tag === 'Erlebnis' ? 'bg-rose-100 text-rose-800' :
                        'bg-stone-100 text-stone-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergies Note */}
      <section className="py-8" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-6 border rounded-lg" style={{backgroundColor: 'rgba(237, 201, 175, 0.8)', borderColor: '#a89180'}}>
            <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>Allergien & Informationen</h3>
            <p style={{color: '#5a4f42'}}>
              Falls Sie Allergien oder besondere Ernährungsanforderungen haben, informieren Sie bitte unser Personal. 
              Wir können auf Anfrage detaillierte Informationen über Zutaten bereitstellen.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16" style={{backgroundColor: '#b09e7e', color: '#f9f7f4'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#f9f7f4'}}>Bereit für das Blue Bird Erlebnis?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#f4f1ed'}}>
            Besuchen Sie uns heute für ein perfektes Kaffee-Erlebnis in unserer einladenden Atmosphäre.
          </p>
          <a 
            href="/contact" 
            className="inline-block font-medium py-3 px-8 rounded-full transition-colors" style={{backgroundColor: '#e8dbc7', color: '#3d3629'}}
          >
            Uns finden
          </a>
        </div>
      </section>
    </>
  );
};

export default MenuPage;