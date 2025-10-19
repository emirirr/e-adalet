import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Upload, 
  Calendar, 
  User,
  X,
  LogOut,
  Settings,
  Folder,
  Building,
  Briefcase,
  Bell,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import './Navigation.css';

const Navigation = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Ana Sayfa' },
    { path: '/dosya-sorgulama', icon: Folder, label: 'Dosya Sorgulama' },
    { path: '/dava-takip', icon: Building, label: 'Danıştay Dosya Sorgulama' },
    { path: '/randevu-alma', icon: Briefcase, label: 'Duruşmalarım' },
    { path: '/randevu-alma', icon: Calendar, label: 'Ajandam' },
    { path: '/hesabim', icon: Bell, label: 'Bildirimlerim' },
    { path: '/hesabim', icon: Settings, label: 'Bildirim Ayarları' },
    { path: '/hesabim', icon: CreditCard, label: 'Bilgilerim' }
  ];

  return (
    <>
      {isOpen && <div className="nav-overlay open" onClick={onClose} />}
      
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <div className="nav-header">
          <h2>e-Adalet Vatandaş</h2>
          <button className="close-button" onClick={onClose} aria-label="Menüyü kapat">
            <X size={24} />
          </button>
        </div>
        
        <div className="nav-content">
          <div className="user-info">
            <div className="user-avatar">
              <User size={32} />
            </div>
            <div className="user-details">
              <h3>İSMAİL EMİR TİRYAKİ</h3>
              <p>e-Adalet Vatandaş</p>
            </div>
          </div>
          
          <ul className="nav-menu">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="nav-footer">
            <button className="logout-button">
              <ArrowRight size={20} />
              <span>Güvenli Çıkış</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
