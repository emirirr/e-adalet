import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './RandevuAlma.css';

const RandevuAlma = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 19)); // Ekim 2025, 19. gün

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay() + 1); // Pazartesi'den başla
    
    const days = [];
    const currentDay = new Date(startDate);
    
    for (let i = 0; i < 42; i++) { // 6 hafta x 7 gün
      days.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
  };

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date) => {
    const today = new Date(2025, 9, 19); // Bugün 19 Ekim 2025
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Pazar veya Cumartesi
  };


  return (
    <div className="ajandam-page">
      <div className="calendar-container">
        <div className="calendar-header">
          <button 
            className="nav-button"
            onClick={() => navigateMonth('prev')}
          >
            <ChevronLeft size={20} />
          </button>
          
          <h2 className="month-year">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          
          <button 
            className="nav-button"
            onClick={() => navigateMonth('next')}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="calendar-grid">
          <div className="day-names">
            {dayNames.map((day, index) => (
              <div 
                key={index} 
                className={`day-name ${index >= 5 ? 'weekend' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
          
          <div className="calendar-days">
            {getCalendarDays().map((date, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  !isCurrentMonth(date) ? 'other-month' : ''
                } ${isToday(date) ? 'today' : ''} ${
                  isWeekend(date) ? 'weekend' : ''
                }`}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandevuAlma;
