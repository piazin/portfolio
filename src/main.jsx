import './i18n';
import App from './App';
import React from 'react';
import './styles/globalStyles.css';
import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';

inject();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
