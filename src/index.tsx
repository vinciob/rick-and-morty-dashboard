import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// CSS
import './global.css';
// Provider
import { GlobalProvider } from './utils/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);