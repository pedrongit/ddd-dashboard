import React, { useState } from 'react';
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Paper, Typography, Box, Select, MenuItem } from '@mui/material';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, LineChart, Line, CartesianGrid, Label, ResponsiveContainer } from 'recharts';
import { Delete } from '@mui/icons-material';

const fileData = [
  { id: 7, name: 'File 7', size: '1GB', type: 'PDF', classification: 'Pouco aproveitável', machineId: 2 },
  { id: 8, name: 'File 8', size: '4GB', type: 'Word', classification: 'Altamente aproveitável', machineId: 3 },
  { id: 1, name: 'File 1', size: '1GB', type: 'PDF', classification: 'Pouco aproveitável', machineId: 1 },
  { id: 2, name: 'File 2', size: '500MB', type: 'Excel', classification: 'Possivelmente aproveitável', machineId: 2 },
  { id: 3, name: 'File 3', size: '2GB', type: 'Word', classification: 'Altamente aproveitável', machineId: 3 },
  { id: 4, name: 'File 4', size: '3GB', type: 'PDF', classification: 'Altamente aproveitável', machineId: 1 },
  { id: 5, name: 'File 5', size: '200MB', type: 'Excel', classification: 'Pouco aproveitável', machineId: 2 },
  { id: 6, name: 'File 6', size: '500MB', type: 'Word', classification: 'Altamente aproveitável', machineId: 3 },
  // Adicione mais dados conforme necessário
];

const machineOptions = [
  { id: 1, name: 'Machine 1', freeSpace: '100GB', usedSpace: '900GB' },
  { id: 2, name: 'Machine 2', freeSpace: '300GB', usedSpace: '700GB' },
  { id: 3, name: 'Machine 3', freeSpace: '200GB', usedSpace: '800GB' },
  // Adicione mais opções de máquinas conforme necessário
];

const FilesPage = () => {
  const [selectedMachine, setSelectedMachine] = useState(machineOptions[0].id);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleMachineChange = (event) => {
    setSelectedMachine(event.target.value);
  };

  const handleFileSelection = (event, fileId) => {
    if (event.target.checked) {
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, fileId]);
    } else {
      setSelectedFiles((prevSelectedFiles) => prevSelectedFiles.filter((file) => file !== fileId));
    }
  };

  const filteredFiles = fileData.filter((file) => file.machineId === selectedMachine);

  const selectedMachineData = machineOptions.find((machine) => machine.id === selectedMachine);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const diskChartData = [
    { name: 'Espaço Livre', value: parseInt(selectedMachineData.freeSpace) },
    { name: 'Espaço Ocupado', value: parseInt(selectedMachineData.usedSpace) },
  ];

  const darkDataFiles = fileData.filter((file) => file.classification !== 'Pouco aproveitável');

  const spaceByFileTypeData = [
    { name: 'PDF', value: 200 },
    { name: 'Excel', value: 300 },
    { name: 'Word', value: 150 },
    { name: 'RAR', value: 100 },
    { name: 'Logs', value: 50 },
    { name: 'Emails', value: 120 },
    { name: 'Dados Pequenos', value: 80 },
    // Adicione mais dados conforme necessário
  ];

  const diskUsageTimelineData = [
    { name: 'Jan', usedSpace: 400, freeSpace: 100 },
    { name: 'Feb', usedSpace: 700, freeSpace: 300 },
    // Adicione mais dados conforme necessário
  ];

  const fileClassificationData = [
    { name: 'Pouco aproveitável', value: 2 },
    { name: 'Possivelmente aproveitável', value: 1 },
    { name: 'Altamente aproveitável', value: 3 },
    // Adicione mais dados conforme necessário
  ];

  return (
    <>
      <Typography variant="h4">Visualizar Arquivos</Typography>

      {/* Dropdown para selecionar a máquina */}
      <Select value={selectedMachine} onChange={handleMachineChange}>
        {machineOptions.map((machine) => (
          <MenuItem key={machine.id} value={machine.id}>
            {machine.name}
          </MenuItem>
        ))}
      </Select>

      {/* Tabela de Arquivos */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Nome do Arquivo</TableCell>
                  <TableCell>Tamanho</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Classificação</TableCell>
                  <TableCell>Ações</TableCell> {/* Adicionado coluna para as ações */}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFiles.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell>
                      <Checkbox checked={selectedFiles.includes(file.id)} onChange={(event) => handleFileSelection(event, file.id)} />
                    </TableCell>
                    <TableCell>{file.name}</TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell>{file.type}</TableCell>
                    <TableCell>{file.classification}</TableCell>
                    <TableCell>
                      {selectedFiles.includes(file.id) && <Delete />} {/* Mostra o ícone de lixeira apenas quando o arquivo estiver selecionado */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Gráfico de Espaço Livre e Ocupado */}
          <Typography variant="h6">Espaço Livre e Ocupado</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={diskChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Gráfico de Espaço Ocupado por Tipo de Dado */}
          <Typography variant="h6">Espaço Ocupado por Tipo de Dado</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spaceByFileTypeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Gráfico de Uso de Espaço em Disco ao Longo do Tempo */}
          <Typography variant="h6">Uso de espaço em disco ao longo do tempo</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={diskUsageTimelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value="Meses" offset={-5} position="insideBottom" />
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="usedSpace" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="freeSpace" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Gráfico de Classificação dos Arquivos */}
          <Typography variant="h6">Classificação dos Arquivos</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fileClassificationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default FilesPage;
