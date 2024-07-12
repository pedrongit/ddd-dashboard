// src/components/SettingsPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';

const SettingsPage = () => {
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Container maxWidth="xs">
      <Box m={6} />
      <Typography variant="h5">Configurações</Typography>
      <form>
        <TextField label="Nova senha" type="password" variant="outlined" margin="normal" fullWidth />

        <FormControlLabel control={<Switch />} label="Habilitar notificações" />

        <TextField label="Email de contato" type="email" variant="outlined" margin="normal" fullWidth />

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="language-select-label">Idioma</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            label="Idioma"
          >
            <MenuItem value="en">Inglês</MenuItem>
            <MenuItem value="es">Espanhol</MenuItem>
            <MenuItem value="pt">Português</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="theme-select-label">Tema</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={theme}
            onChange={handleThemeChange}
            label="Tema"
          >
            <MenuItem value="light">Claro</MenuItem>
            <MenuItem value="dark">Escuro</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Salvar
        </Button>
      </form>
    </Container>
  );
};

export default SettingsPage;
