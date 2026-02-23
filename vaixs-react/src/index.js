// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // O './App.js' según cual conserves
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);