import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './Header.css';

const Header = ({ onMenuToggle }) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Vatandaş Mobil Bilgi Sistemi';
      case '/dosya-sorgulama':
        return 'Dosyalarım';
      case '/dava-takip':
        return 'Danıştay Dosyalarım';
      case '/belge-yukleme':
        return 'Belge Yükleme';
      case '/randevu-alma':
        return 'Ajandam';
      case '/hesabim':
        return 'Uyap Bilgilerim';
      case '/bildirimlerim':
        return 'Bildirimlerim';
      default:
        return 'Vatandaş Mobil Bilgi Sistemi';
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-button" onClick={onMenuToggle} aria-label="Menüyü aç">
          <Menu size={24} />
        </button>
        
        <div className="header-logo">
          <h1>{getPageTitle()}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
