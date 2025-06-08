import React, { useEffect } from 'react';

const ColorSchemePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Farbschema - Blue Bird';
  }, []);

  const colors = [
    {
      category: "Hauptfarben",
      colors: [
        { name: "Primary (Warmes Beige)", hex: "#c5ae91", usage: "Haupthintergrund" },
        { name: "Secondary (Helles Pfirsich)", hex: "#EDC9AF", usage: "Sekundäre Bereiche" },
        { name: "Tertiary (Vanilleweiß)", hex: "#f5f2e8", usage: "Helle Bereiche" },
        { name: "Accent (Warmes Braun)", hex: "#b09e7e", usage: "Akzentbereiche" }
      ]
    },
    {
      category: "Textfarben",
      colors: [
        { name: "Primary Text (Dunkelbraun)", hex: "#3d3629", usage: "Haupttext" },
        { name: "Secondary Text (Mittelbraun)", hex: "#5a4f42", usage: "Sekundärtext" },
        { name: "Light Text (Vanille-Creme)", hex: "#f8f5eb", usage: "Text auf dunklem Hintergrund" },
        { name: "Subtle Text (Vanilleweiß)", hex: "#f5f2e8", usage: "Subtiler Text" }
      ]
    },
    {
      category: "Ergänzende Farben",
      colors: [
        { name: "Border (Graubraun)", hex: "#a89180", usage: "Rahmen und Linien" },
        { name: "Coffee Dark (Kaffeebraun)", hex: "#2d1810", usage: "Intensive Akzente" },
        { name: "Sage Green (Salbeigrün)", hex: "#8b9077", usage: "Natürliche Akzente" },
        { name: "Vanilla White (Vanilleweiß)", hex: "#f8f5eb", usage: "Reinste Hintergründe" }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#3d3629'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#f8f5eb'}}>Blue Bird Farbschema</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#f4f1ed'}}>
            Eine warme, einladende Farbpalette inspiriert von Kaffee und Natur
          </p>
        </div>
      </section>

      {/* Color Palette Display */}
      <section className="py-20" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4">
          {colors.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#3d3629'}}>
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="rounded-lg overflow-hidden shadow-lg" style={{backgroundColor: '#f8f5eb'}}>
                    {/* Color Block */}
                    <div 
                      className="h-32 w-full"
                      style={{backgroundColor: color.hex}}
                    ></div>
                    
                    {/* Color Info */}
                    <div className="p-4">
                      <h3 className="font-bold mb-2" style={{color: '#3d3629'}}>
                        {color.name}
                      </h3>
                      <p className="text-sm font-mono mb-2" style={{color: '#5a4f42'}}>
                        {color.hex.toUpperCase()}
                      </p>
                      <p className="text-sm" style={{color: '#5a4f42'}}>
                        {color.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Combinations Example */}
      <section className="py-20" style={{backgroundColor: '#EDC9AF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{color: '#3d3629'}}>
            Farbkombinationen in Aktion
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card 1 */}
            <div className="rounded-lg shadow-lg overflow-hidden" style={{backgroundColor: '#f5f2e8'}}>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full mb-4" style={{backgroundColor: '#b09e7e'}}></div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#3d3629'}}>
                  Helle Kombination
                </h3>
                <p className="mb-4" style={{color: '#5a4f42'}}>
                  Cremefarben mit warmem Braun-Akzent für freundliche, einladende Bereiche.
                </p>
                <button 
                  className="px-4 py-2 rounded-full font-medium"
                  style={{backgroundColor: '#3d3629', color: '#f8f5eb'}}
                >
                  Beispiel Button
                </button>
              </div>
            </div>

            {/* Example Card 2 */}
            <div className="rounded-lg shadow-lg overflow-hidden" style={{backgroundColor: '#b09e7e'}}>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full mb-4" style={{backgroundColor: '#8b9077'}}></div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#f8f5eb'}}>
                  Warme Kombination
                </h3>
                <p className="mb-4" style={{color: '#f4f1ed'}}>
                  Warmes Braun mit Salbeigrün-Akzent für natürliche, erdige Bereiche.
                </p>
                <button 
                  className="px-4 py-2 rounded-full font-medium border-2"
                  style={{borderColor: '#f8f5eb', color: '#f8f5eb', backgroundColor: 'transparent'}}
                >
                  Beispiel Button
                </button>
              </div>
            </div>

            {/* Example Card 3 */}
            <div className="rounded-lg shadow-lg overflow-hidden" style={{backgroundColor: '#2d1810'}}>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full mb-4" style={{backgroundColor: '#c5ae91'}}></div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#f8f5eb'}}>
                  Intensive Kombination
                </h3>
                <p className="mb-4" style={{color: '#f4f1ed'}}>
                  Kaffeebraun mit warmem Beige-Akzent für kraftvolle, elegante Statements.
                </p>
                <button 
                  className="px-4 py-2 rounded-full font-medium"
                  style={{backgroundColor: '#c5ae91', color: '#3d3629'}}
                >
                  Beispiel Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables Display */}
      <section className="py-20" style={{backgroundColor: '#f8f5eb'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#3d3629'}}>
            CSS Variablen
          </h2>
          
          <div className="max-w-4xl mx-auto rounded-lg p-6" style={{backgroundColor: '#3d3629'}}>
            <pre className="text-sm overflow-x-auto" style={{color: '#f8f5eb'}}>
{`:root {
  /* Hauptfarben */
  --primary: #c5ae91;      /* Warmes Beige */
  --secondary: #EDC9AF;    /* Helles Pfirsich */
  --tertiary: #f5f2e8;     /* Creme */
  --accent: #b09e7e;       /* Warmes Braun */
  
  /* Textfarben */
  --text-primary: #3d3629;    /* Dunkelbraun */
  --text-secondary: #5a4f42;  /* Mittelbraun */
  --text-light: #f8f5eb;      /* Cremeweiss */
  --text-subtle: #f4f1ed;     /* Helles Creme */
  
  /* Ergänzende Farben */
  --border: #a89180;       /* Graubraun */
  --coffee-dark: #2d1810;  /* Kaffeebraun */
  --sage-green: #8b9077;   /* Salbeigrün */
  --warm-white: #f8f5eb;   /* Wärmeres Weiss */
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorSchemePage;