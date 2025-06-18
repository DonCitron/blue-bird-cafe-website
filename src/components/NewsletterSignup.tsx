import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

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

  const getThemeColors = () => {
    if (theme === 'sage') {
      return {
        sectionBg: '#22c55e',
        textLight: '#f0fdf4',
        textSubtle: '#ecfdf5',
        buttonBg: '#14532d',
        buttonHover: '#0f3f26',
        inputBg: '#f0fdf4',
        inputText: '#14532d'
      };
    }
    return {
      sectionBg: '#b09e7e',
      textLight: '#f9f7f4',
      textSubtle: '#f4f1ed',
      buttonBg: '#3d3629',
      buttonHover: '#2d251b',
      inputBg: '#f9f7f4',
      inputText: '#3d3629'
    };
  };

  const colors = getThemeColors();

  return (
    <section className="py-16" style={{backgroundColor: colors.sectionBg}}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(249, 247, 244, 0.2)'}}>
              <Mail className="h-8 w-8" style={{color: colors.textLight}} />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4" style={{color: colors.textLight}}>
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-lg mb-8" style={{color: colors.textSubtle}}>
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
                style={{backgroundColor: colors.inputBg, color: colors.inputText}}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50"
                style={{
                  backgroundColor: colors.buttonBg, 
                  color: colors.textLight,
                  backgroundImage: theme === 'sage' ? 'linear-gradient(135deg, #14532d 0%, #0f3f26 100%)' : 'none',
                  boxShadow: theme === 'sage' ? '0 4px 15px rgba(20, 83, 45, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = colors.buttonHover;
                    if (theme === 'sage') {
                      target.style.backgroundImage = 'linear-gradient(135deg, #0f3f26 0%, #0a2e1a 100%)';
                      target.style.boxShadow = '0 6px 20px rgba(15, 63, 38, 0.4)';
                      target.style.transform = 'translateY(-2px) scale(1.02)';
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = colors.buttonBg;
                    if (theme === 'sage') {
                      target.style.backgroundImage = 'linear-gradient(135deg, #14532d 0%, #0f3f26 100%)';
                      target.style.boxShadow = '0 4px 15px rgba(20, 83, 45, 0.3)';
                      target.style.transform = 'translateY(0) scale(1)';
                    }
                  }
                }}
              >
                {isLoading ? 'Wird gesendet...' : 'Anmelden'}
              </button>
            </form>
          )}
          
          <p className="text-sm mt-4" style={{color: colors.textSubtle}}>
            Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;