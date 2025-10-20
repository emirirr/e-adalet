import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import DosyaSorgulama from './pages/DosyaSorgulama';
import DavaTakip from './pages/DavaTakip';
import BelgeYukleme from './pages/BelgeYukleme';
import RandevuAlma from './pages/RandevuAlma';
import Hesabim from './pages/Hesabim';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header onMenuToggle={toggleMenu} />
          <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          
          <main className="main-content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dosya-sorgulama" element={<DosyaSorgulama />} />
                <Route path="/dava-takip" element={<DavaTakip />} />
                <Route path="/belge-yukleme" element={<BelgeYukleme />} />
                <Route path="/randevu-alma" element={<RandevuAlma />} />
                <Route path="/hesabim" element={<Hesabim />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
