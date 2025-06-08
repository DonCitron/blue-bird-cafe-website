import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery - CannaBrewCafé';
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg",
      alt: "Cozy seating area with plants",
      category: "interior"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg",
      alt: "Café interior with wooden furnishings",
      category: "interior"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg",
      alt: "Coffee preparation area",
      category: "coffee"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
      alt: "Cappuccino with latte art",
      category: "coffee"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg",
      alt: "Coffee beans",
      category: "coffee"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg",
      alt: "Cannabis buds",
      category: "cannabis"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/9628147/pexels-photo-9628147.jpeg",
      alt: "Cannabis edibles",
      category: "cannabis"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg",
      alt: "Pastries and baked goods",
      category: "food"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/5082658/pexels-photo-5082658.jpeg",
      alt: "Community event at café",
      category: "events"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      alt: "Outdoor seating area",
      category: "interior"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg",
      alt: "Coffee brewing demonstration",
      category: "events"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg",
      alt: "Avocado toast breakfast",
      category: "food"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'cannabis', name: 'Cannabis' },
    { id: 'food', name: 'Food' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Galerie</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Entdecken Sie unser Café, unsere Produkte und unsere Gemeinschaftsveranstaltungen.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-8 bg-stone-100 sticky top-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-emerald-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Follow Us on Instagram</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
            See more photos and stay updated on our latest offerings and events.
          </p>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @CannaBrewCafé
          </a>
        </div>
      </section>

      {/* User Generated Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Share Your Experience</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Tag us in your photos on social media with #CannaBrewCafé for a chance to be featured on our website and social channels.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* These would be user-generated content in a real application */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                <div className="bg-stone-200 h-48 flex items-center justify-center">
                  <span className="text-stone-500 text-sm">User Photo #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience It In Person</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Photos can only capture so much. Visit us to experience the warm atmosphere, delicious offerings, and unique concept of CannaBrewCafé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-emerald-700 hover:bg-stone-100 font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Find Our Location
            </a>
            <a 
              href="/menu" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;