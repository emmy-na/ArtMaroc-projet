import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { MonContexte } from './MonContexte.jsx';

function Root() {
  const [valeur, setValeur] = useState(null); // or any initial value

  return (
    <StrictMode>
      <BrowserRouter>
        <MonContexte.Provider value={{ valeur, setValeur }}>
          <App />
        </MonContexte.Provider>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);