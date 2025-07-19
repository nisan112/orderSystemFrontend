import React, { createContext, useState } from 'react';

// Create the context
export const OrderObject = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    tableNumber: '',
    guestNumber: '',
    items: [],
  });

  return (
    <OrderObject.Provider value={{ order, setOrder }}>
      {children}
    </OrderObject.Provider>
  );
};
