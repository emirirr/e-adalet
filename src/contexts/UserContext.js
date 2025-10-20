import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const userData = {
    tcKimlikNo: '16043865916',
    adSoyad: 'FARUK KANATLI',
    adres: 'BAĞLARÇEŞME MAH. BAĞLARÇEŞME CAD. NO:3 İÇ KAPI NO:4'
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
