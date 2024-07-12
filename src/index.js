// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Normaliza o CSS em todos os navegadores e adiciona alguns estilos básicos */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
