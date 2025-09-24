import React, { createContext, useState } from 'react';

// Création du contexte
export const MonContexte = createContext();

// Provider qui va envelopper votre application
export function MonContexteProvider({ children }) {
  const [valeur, setValeur] = useState('valeur initiale');

  return (
    <MonContexte.Provider value={{ valeur, setValeur }}>
      {children}
    </MonContexte.Provider>
  );
}
