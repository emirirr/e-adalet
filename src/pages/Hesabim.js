import React from 'react';
import { useUser } from '../contexts/UserContext';
import './Hesabim.css';

const Hesabim = () => {
  const user = useUser();
  
  return (
    <div className="bilgilerim-page">
      <div className="bilgilerim-content">
        <div className="info-section">
          <h3 className="info-label">T.C. Kimlik No</h3>
          <p className="info-value">{user.tcKimlikNo}</p>
        </div>
        
        <div className="info-section">
          <h3 className="info-label">Ad Soyad</h3>
          <p className="info-value">{user.adSoyad}</p>
        </div>
        
        <div className="info-section">
          <h3 className="info-label">Adres</h3>
          <p className="info-value">{user.adres}</p>
        </div>
      </div>
      
      <div className="bottom-navigation">
        <div className="nav-item active">
          <div className="nav-icon bilgilerim-icon"></div>
          <span>Bilgilerim</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon iletisim-icon"></div>
          <span>İletişim</span>
        </div>
      </div>
    </div>
  );
};

export default Hesabim;
