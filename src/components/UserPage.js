import React from 'react';
import avatar from '../images/img_avatar.png';
import { Container, Typography, Avatar, Box, List, ListItem, ListItemText } from '@mui/material';

const UserPage = () => (
  <Container>
    <Box m={6} />
    <Typography variant="h5">Informações do Usuário</Typography>
    <Avatar alt="Avatar do Usuário" src={avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
    <Typography>Nome: João Silva</Typography>
    <Typography>Email: joao@example.com</Typography>
    <Typography>Empresa: XYZ Corp</Typography>

    <Box mt={4}>
      <Typography variant="h6">Permissões do Usuário</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Visualizar Relatórios" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Editar Dados" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Configurar Notificações" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Aprovar Solicitações" />
        </ListItem>
      </List>
    </Box>

    <Typography variant="body2" style={{ marginTop: '20px' }}>
      Esta página está em conformidade com a LGPD (Lei Geral de Proteção de Dados).
    </Typography>
  </Container>
);

export default UserPage;
