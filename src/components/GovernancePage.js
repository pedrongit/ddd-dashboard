import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Grid } from '@mui/material';
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import SearchBar from './SearchBar.js';

const tableData = [
  { id: 1, name: 'Machine 1', storage: '1TB', consumed: '500GB', lastAudit: '2023-05-17', compliance: 'Compliant', darkData: '100GB' },
  { id: 2, name: 'Machine 2', storage: '2TB', consumed: '1.5TB', lastAudit: '2023-05-16', compliance: 'Non-compliant', darkData: '500GB' },
  { id: 3, name: 'Machine 3', storage: '500GB', consumed: '200GB', lastAudit: '2023-05-15', compliance: 'Compliant', darkData: '50GB' },
  // Adicione mais dados conforme necessário
];

const chartData = [
  { name: 'Compliant', value: 500 },
  { name: 'Non-compliant', value: 300 },
  // Adicione mais dados conforme necessário
];

const barChartData = [
  { name: 'Machine 1', consumed: 500, darkData: 100 },
  { name: 'Machine 2', consumed: 1500, darkData: 500 },
  { name: 'Machine 3', consumed: 200, darkData: 50 },
  // Adicione mais dados conforme necessário
];

const generateIndividualReports = () => {
  // Lógica para gerar relatórios individuais para cada máquina
};

const GovernancePage = () => (
  <>
    <h2>Governança de Máquinas</h2>

    <SearchBar placeholder="Buscar máquinas..." />

    {/* Tabela */}
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Armazenamento Total</TableCell>
            <TableCell>Consumido</TableCell>
            <TableCell>Última Auditoria</TableCell>
            <TableCell>Conformidade</TableCell>
            <TableCell>Dark Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.storage}</TableCell>
              <TableCell>{row.consumed}</TableCell>
              <TableCell>{row.lastAudit}</TableCell>
              <TableCell>{row.compliance}</TableCell>
              <TableCell>{row.darkData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Gráficos */}
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h3>Conformidade das Máquinas</h3>
        <PieChart width={400} height={300}>
          <Pie dataKey="value" isAnimationActive={false} data={chartData} cx={200} cy={150} outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </Grid>
      <Grid item xs={6}>
        <h3>Consumo e Dark Data das Máquinas</h3>
        <BarChart width={400} height={300} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="consumed" stackId="a" fill="#8884d8" name="Consumido" />
          <Bar dataKey="darkData" stackId="a" fill="#82ca9d" name="Dark Data" />
        </BarChart>
      </Grid>
    </Grid>

    {/* Botão para gerar relatórios individuais */}
    <Button variant="contained" color="primary" onClick={generateIndividualReports}>
      Gerar Relatórios Individuais
    </Button>
  </>
);

export default GovernancePage;
