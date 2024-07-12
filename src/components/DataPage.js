import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Grid } from '@mui/material';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import SearchBar from './SearchBar.js';

const tableData = [
  { id: 1, name: 'File 1', size: '1GB', lastAccessed: '2023-05-17', canBeDeleted: 'Yes', darkData: '100MB' },
  { id: 2, name: 'File 2', size: '2GB', lastAccessed: '2023-05-16', canBeDeleted: 'No', darkData: '500MB' },
  { id: 3, name: 'File 3', size: '500MB', lastAccessed: '2023-05-15', canBeDeleted: 'Yes', darkData: '50MB' },
  // Adicione mais dados conforme necessário
];

const chartDataSize = [
  { name: 'Files > 1GB', value: 400 },
  { name: 'Files < 1GB', value: 300 },
  { name: 'Files < 500MB', value: 200 },
  // Adicione mais dados conforme necessário
];

const chartDataAccess = [
  { name: 'Acessado Recentemente', value: 250 },
  { name: 'Não Acessado Recentemente', value: 200 },
  // Adicione mais dados conforme necessário
];

const DataPage = () => (
  <>
    <h2>Gerenciamento de Dados</h2>

    <SearchBar placeholder="Buscar dados..." />

    {/* Tabela */}
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Tamanho</TableCell>
            <TableCell>Último Acesso</TableCell>
            <TableCell>Pode ser excluído?</TableCell>
            <TableCell>Dark Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.lastAccessed}</TableCell>
              <TableCell>{row.canBeDeleted}</TableCell>
              <TableCell>{row.darkData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Gráficos de Tamanho e Acesso aos Arquivos */}
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h3>Tamanho dos Arquivos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartDataSize}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
      <Grid item xs={6}>
        <h3>Acesso aos Arquivos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartDataAccess}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>

    {/* Botão para imprimir relatórios */}
    <Button variant="contained" color="primary" onClick={() => window.print()}>
      Imprimir Relatório
    </Button>
  </>
);

export default DataPage;
