import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en', 
  fallbackLng: 'en',
  resources: {
    en: {
      translation: require('./locales/en.json'), 
    },
    zh: {
      translation: require('./locales/zh.json'), 
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
);

