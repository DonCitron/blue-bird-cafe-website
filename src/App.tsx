import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ColorSchemePage from './pages/ColorSchemePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col" style={{backgroundColor: '#c5ae91'}}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/colors" element={<ColorSchemePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;