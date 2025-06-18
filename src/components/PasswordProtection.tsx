import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Team access passwords
  const validPasswords = [
    'bluebird2025',
    'team-access-bb',
    'dev-preview-2025'
  ];

  useEffect(() => {
    // Check if already authenticated in this session
    const isAuth = sessionStorage.getItem('bb-team-access') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (validPasswords.includes(password.toLowerCase())) {
      setIsAuthenticated(true);
      sessionStorage.setItem('bb-team-access', 'true');
    } else {
      setError('Ungültiges Passwort. Nur für Team-Mitglieder.');
      setPassword('');
    }
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{backgroundColor: '#3d3629'}}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{backgroundColor: '#b09e7e', filter: 'blur(100px)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" style={{backgroundColor: '#c5ae91', filter: 'blur(80px)'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-24 h-24 mx-auto mb-4 opacity-90"
            style={{filter: 'drop-shadow(0 4px 16px rgba(197, 174, 145, 0.3))'}}
          />
          <h1 className="text-2xl font-bold mb-2" style={{color: '#c5ae91'}}>
            Team-Zugang
          </h1>
          <p className="text-sm" style={{color: '#b09e7e'}}>
            Nur für autorisierte Team-Mitglieder
          </p>
        </div>

        {/* Access Form */}
        <div className="rounded-lg p-6 shadow-2xl border" style={{backgroundColor: 'rgba(197, 174, 145, 0.1)', borderColor: 'rgba(197, 174, 145, 0.2)'}}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6" style={{color: '#c5ae91'}} />
            <h2 className="text-lg font-semibold" style={{color: '#f9f7f4'}}>
              Entwicklungsvorschau
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{color: '#f9f7f4'}}>
                Team-Passwort
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 focus:outline-none transition-all"
                  style={{
                    backgroundColor: 'rgba(249, 247, 244, 0.1)',
                    borderColor: 'rgba(197, 174, 145, 0.3)',
                    color: '#f9f7f4',
                    focusRingColor: '#c5ae91'
                  }}
                  placeholder="Passwort eingeben..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{color: '#b09e7e'}}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg border" style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#fca5a5'}}>
                <p className="text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#c5ae91',
                color: '#3d3629',
                boxShadow: '0 4px 15px rgba(197, 174, 145, 0.3)'
              }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Überprüfung...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Zugang gewähren
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t" style={{borderColor: 'rgba(197, 174, 145, 0.2)'}}>
            <p className="text-xs text-center" style={{color: '#b09e7e'}}>
              Für Zugang wenden Sie sich an das Entwicklungsteam
            </p>
          </div>
        </div>

        {/* Public Access Link */}
        <div className="mt-6 text-center">
          <a 
            href="/public-teaser"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:underline"
            style={{color: '#b09e7e'}}
          >
            Zur öffentlichen Teaser-Seite
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;