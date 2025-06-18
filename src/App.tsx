import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';
import NotificationPermissionPrompt from './components/NotificationPermissionPrompt';
import PasswordProtection from './components/PasswordProtection';
import './index.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ColorSchemePage = lazy(() => import('./pages/ColorSchemePage'));
const AnalyticsDashboardPage = lazy(() => import('./pages/AnalyticsDashboardPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const LoyaltyCardsPage = lazy(() => import('./pages/LoyaltyCardsPage'));
const TeaserCampaignPage = lazy(() => import('./pages/TeaserCampaignPage'));
const PublicTeaserPage = lazy(() => import('./pages/PublicTeaserPage'));

function App() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Add manifest link if not already present
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = '/manifest.json';
      document.head.appendChild(manifestLink);
    }

    // Add theme-color meta tag
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      themeColorMeta.content = '#3d3629';
      document.head.appendChild(themeColorMeta);
    }

    // Add apple-mobile-web-app-capable for iOS
    if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      const appleMeta = document.createElement('meta');
      appleMeta.name = 'apple-mobile-web-app-capable';
      appleMeta.content = 'yes';
      document.head.appendChild(appleMeta);
    }

    // Add apple-mobile-web-app-status-bar-style
    if (!document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')) {
      const appleStatusMeta = document.createElement('meta');
      appleStatusMeta.name = 'apple-mobile-web-app-status-bar-style';
      appleStatusMeta.content = 'default';
      document.head.appendChild(appleStatusMeta);
    }

    // Add apple-touch-icon
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = '/blue_bird_clean_transparent.png';
      document.head.appendChild(appleTouchIcon);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Teaser Page - No Protection */}
          <Route path="/public-teaser" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PublicTeaserPage />
            </Suspense>
          } />
          
          {/* Protected Main Website */}
          <Route path="/*" element={
            <PasswordProtection>
              <div className="font-sans min-h-screen flex flex-col theme-bg-primary">
                <ScrollToTop />
                <Navbar />
                <ThemeToggle />
                <OfflineIndicator />
                <PWAInstallPrompt />
                <NotificationPermissionPrompt />
                <main className="flex-grow">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/menu" element={<MenuPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/colors" element={<ColorSchemePage />} />
                      <Route path="/analytics" element={<AnalyticsDashboardPage />} />
                      <Route path="/privacy" element={<PrivacyPolicyPage />} />
                      <Route path="/terms" element={<TermsOfServicePage />} />
                      <Route path="/loyalty-cards" element={<LoyaltyCardsPage />} />
                      <Route path="/teaser-campaign" element={<TeaserCampaignPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
                <BackToTop />
              </div>
            </PasswordProtection>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;