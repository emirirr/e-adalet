import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './DosyaSorgulama.css';

const DosyaSorgulama = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    'Ceza',
    'Hukuk',
    'İcra',
    'Adli Tıp',
    'İdari Yargı',
    'Danıştay',
    'Satış Memurluğu',
    'Arabuluculuk'
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dosya-sorgulama">
      <div className="search-container">
        <div className="dropdown-container">
          <div 
            className="dropdown-field"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className={selectedOption ? 'selected-text' : 'placeholder-text'}>
              {selectedOption || 'Seçiniz'}
            </span>
            <ChevronDown 
              className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`}
              size={20}
            />
          </div>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="separator-line"></div>
        
        <div className="content-area">
          {/* Bu alan seçilen seçeneğe göre dinamik içerik gösterecek */}
        </div>
      </div>
    </div>
  );
};

export default DosyaSorgulama;
