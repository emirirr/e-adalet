import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './DavaTakip.css';

const DavaTakip = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="danistay-dosya-sorgulama">
      <div className="search-container">
        <div className="dropdown-container">
          <div 
            className="dropdown-field"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className={selectedOption ? 'selected-text' : 'placeholder-text'}>
              {selectedOption || 'Danıştay Dairesi Seçiniz.'}
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
          {/* Bu alan seçilen daireye göre dinamik içerik gösterecek */}
        </div>
      </div>
    </div>
  );
};

export default DavaTakip;
