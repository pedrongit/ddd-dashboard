// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import LoginPage from './components/LoginPage';
import DataPage from './components/DataPage';
import UserPage from './components/UserPage';
import SettingsPage from './components/SettingsPage';
import Layout from './components/Layout';
import GovernancePage from './components/GovernancePage';
import FilesPage from './components/FilesPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#303030', // Preto mais escuro
      dark: '#121212', // Preto escuro
      light: '#484848', // Preto mais claro
    },
    secondary: {
      main: '#FF5722', // Laranja
      dark: '#D84315', // Laranja mais escuro
      light: '#FF8A65', // Laranja mais claro
    },
    background: {
      default: '#1E1E1E', // Fundo escuro principal
      paper: '#242424', // Fundo escuro para áreas de conteúdo
    },
    text: {
      primary: '#E0E0E0', // Texto principal (branco)
      secondary: '#9E9E9E', // Texto secundário (cinza)
    },
    error: {
      main: '#FF3D00', // Vermelho para erros
    },
    success: {
      main: '#00E676', // Verde para sucesso
    },
    warning: {
      main: '#FFB300', // Amarelo para avisos
    },
  },
});

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/data" element={<Layout><DataPage /></Layout>} />
        <Route path="/governance" element={<Layout><GovernancePage /></Layout>} />
        <Route path="/files" element={<Layout><FilesPage /></Layout>} />
        <Route path="/user" element={<Layout><UserPage /></Layout>} />

        <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
      </Routes>
    </ThemeProvider>
  </Router>
);

export default App;
