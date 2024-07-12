// src/components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton ,Box} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/ddd_1x.png';

const Layout = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" component={Link} to="/">
          <img
            src={logo}
            alt="DDD logo"
            style={{ width: '150px', height: '75px'}}
          />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" component={Link} to="/data">Dados</Button>
        <Box m={2} />
        <Button color="inherit" component={Link} to="/files">Arquivos</Button>
        <Box m={2} />  
        <Button color="inherit" component={Link} to="/governance">Governança</Button>
        <Box m={2} /> 
        <Button color="inherit" component={Link} to="/user">Usuário</Button>
        <Box m={2} /> 
        <Button color="inherit" component={Link} to="/settings">Configurações</Button>
        <Box m={2} /> 
      </Toolbar>
    </AppBar>
    {children}
  </>
);

export default Layout;
