import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import logo from '../images/ddd_1x.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsAcceptance = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box m={6} />
      <img src={logo} alt="DDD Logo" style={{ width: '300px', height: 'auto' }} />
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Usuário" variant="outlined" margin="normal" fullWidth />
        <TextField label="Senha" type="password" variant="outlined" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary" fullWidth component={Link} to="/data" disabled={!termsAccepted}>
          Entrar
        </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '20px' }}>
        {`Ao clicar em "Entrar", você está aceitando os termos de uso e a declaração de privacidade.`}
      </Typography>
      <Typography variant="body2">
        {`Esta página está em conformidade com a LGPD (Lei Geral de Proteção de Dados).`}
      </Typography>
      <Typography variant="body2">
        {`Link para os termos de uso: `}
        <a href="/termos">Termos de Uso</a>
      </Typography>
      <Typography variant="body2">
        {`Link para a declaração de privacidade: `}
        <a href="/privacidade">Declaração de Privacidade</a>
      </Typography>
      <div>
        <input type="checkbox" checked={termsAccepted} onChange={handleTermsAcceptance} />
        <label htmlFor="termsAccepted">Eu aceito os termos de uso e a declaração de privacidade</label>
      </div>
    </Container>
  );
};

export default LoginPage;

