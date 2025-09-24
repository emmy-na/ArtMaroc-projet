import React, { useContext } from 'react';
import { MonContexte } from './MonContexte.jsx'; // importez le contexte créé

function MonComposant() {
  const { valeur, setValeur } = useContext(MonContexte);

  return (
    <div>
      <p>Valeur du contexte : {valeur}</p>
      <button onClick={() => setValeur('Nouvelle valeur')}>
        Changer la valeur
      </button>
    </div>
  );
}

export default MonComposant;