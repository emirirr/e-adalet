import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './RandevuAlma.css';

const RandevuAlma = () => {
  const [selectedFilter, setSelectedFilter] = useState('bugun');
  const [selectedDateRange, setSelectedDateRange] = useState('20.10.2025 - 20.10.2025');

  const dateFilters = [
    { id: 'bugun', label: 'Bugün' },
    { id: '1hafta', label: '1 hafta' },
    { id: '2hafta', label: '2 hafta' },
    { id: '1ay', label: '1 Ay' },
    { id: 'tarihsec', label: 'Tarih Seç' }
  ];

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    // Tarih aralığını güncelle
    const today = new Date(2025, 9, 20); // 20 Ekim 2025
    let endDate = new Date(today);
    
    switch (filterId) {
      case 'bugun':
        endDate = new Date(today);
        break;
      case '1hafta':
        endDate = new Date(today);
        endDate.setDate(today.getDate() + 7);
        break;
      case '2hafta':
        endDate = new Date(today);
        endDate.setDate(today.getDate() + 14);
        break;
      case '1ay':
        endDate = new Date(today);
        endDate.setMonth(today.getMonth() + 1);
        break;
      default:
        endDate = new Date(today);
    }
    
    const formatDate = (date) => {
      return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    };
    
    setSelectedDateRange(`${formatDate(today)} - ${formatDate(endDate)}`);
  };

  const handleSearch = () => {
    // Arama işlemi burada yapılacak
    console.log('Arama yapılıyor:', selectedFilter, selectedDateRange);
  };


  return (
    <div className="durusmalarim-page">
      <div className="date-filters">
        <div className="filter-tabs">
          {dateFilters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-tab ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="date-range-section">
        <p className="date-range-label">Seçili Tarih Aralığı :</p>
        <p className="date-range-value">{selectedDateRange}</p>
      </div>

      <div className="search-section">
        <button className="search-button" onClick={handleSearch}>
          <Search size={20} />
          <span>Sorgula</span>
        </button>
      </div>
    </div>
  );
};

export default RandevuAlma;
