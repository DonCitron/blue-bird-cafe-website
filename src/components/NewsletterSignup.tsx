import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16" style={{backgroundColor: '#b09e7e'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(249, 247, 244, 0.2)'}}>
              <Mail className="h-8 w-8" style={{color: '#f9f7f4'}} />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4" style={{color: '#f9f7f4'}}>
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-lg mb-8" style={{color: '#f4f1ed'}}>
            Erhalten Sie Updates zu neuen Menüpunkten, besonderen Events und exklusiven Angeboten direkt in Ihr Postfach.
          </p>
          
          {isSubmitted ? (
            <div className="flex items-center justify-center space-x-2 text-green-300">
              <Check className="h-6 w-6" />
              <span className="text-lg font-medium">Vielen Dank für Ihre Anmeldung!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
                style={{backgroundColor: '#f9f7f4', color: '#3d3629'}}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50"
                style={{backgroundColor: '#3d3629', color: '#f9f7f4'}}
                onMouseEnter={(e) => !isLoading && ((e.target as HTMLButtonElement).style.backgroundColor = '#2d251b')}
                onMouseLeave={(e) => !isLoading && ((e.target as HTMLButtonElement).style.backgroundColor = '#3d3629')}
              >
                {isLoading ? 'Wird gesendet...' : 'Anmelden'}
              </button>
            </form>
          )}
          
          <p className="text-sm mt-4" style={{color: '#f4f1ed'}}>
            Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;