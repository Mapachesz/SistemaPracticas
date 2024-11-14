import React, { useState } from 'react';
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from '../components/header';
import { Box, Typography, TextField, Button, Stack, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DashboardEmpresa() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        nombreOferta: '',
        fechaInicio: '',
        fechaFin: '',
        tipoOferta: '',
        duracion: '',
        modalidad: '',
        horarios: '',
        remuneracion: '',
        descripcion: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <SidebarEmpresa />
            <Box sx={{ flex: 1, padding: '20px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '20px',
                        backgroundColor: '#333',
                        borderRadius: '8px',
                        width: '100%',
                        maxWidth: '900px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        margin: '0 auto',
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 4 }}>
                        Crear Oferta
                    </Typography>
                    <Stack spacing={3} direction="column">
                        <TextField
                            label="Nombre de la oferta"
                            variant="outlined"
                            fullWidth
                            name="nombreOferta"
                            value={formValues.nombreOferta}
                            onChange={handleChange}
                            InputProps={{
                                style: { backgroundColor: '#121212', color: '#FFF' },
                                endAdornment: <span style={{ color: '#FFF' }} />,
                            }}
                            InputLabelProps={{ sx: { color: '#FFF' } }}
                        />
                        <Box display="flex" gap={2}>
                            <TextField
                                label="Fecha de inicio"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true, sx: { color: '#FFF' } }}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                    sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                                }}
                                name="fechaInicio"
                                value={formValues.fechaInicio}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Fecha de fin"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true, sx: { color: '#FFF' } }}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                    sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                                }}
                                name="fechaFin"
                                value={formValues.fechaFin}
                                onChange={handleChange}
                            />
                        </Box>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#FFF' }}>Tipo de oferta</InputLabel>
                            <Select
                                name="tipoOferta"
                                value={formValues.tipoOferta}
                                onChange={handleChange}
                                label="Tipo de oferta"
                                sx={{
                                    backgroundColor: '#121212',
                                    color: '#FFF',
                                    '& .MuiSvgIcon-root': { color: '#FFF' },
                                }}
                            >
                                <MenuItem value="practicaIndustrial">Práctica Industrial</MenuItem>
                                <MenuItem value="practicaProfesional">Práctica Profesional</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Duración en meses"
                            type="number"
                            fullWidth
                            name="duracion"
                            value={formValues.duracion}
                            onChange={handleChange}
                            InputProps={{
                                style: { backgroundColor: '#121212', color: '#FFF' },
                                sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                            }}
                            InputLabelProps={{ sx: { color: '#FFF' } }}
                        />
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#FFF' }}>Modalidad</InputLabel>
                            <Select
                                name="modalidad"
                                value={formValues.modalidad}
                                onChange={handleChange}
                                label="Modalidad"
                                sx={{
                                    backgroundColor: '#121212',
                                    color: '#FFF',
                                    '& .MuiSvgIcon-root': { color: '#FFF' },
                                }}
                            >
                                <MenuItem value="remoto">Remoto</MenuItem>
                                <MenuItem value="hibrido">Híbrido</MenuItem>
                                <MenuItem value="presencial">Presencial</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Horarios"
                            variant="outlined"
                            fullWidth
                            name="horarios"
                            value={formValues.horarios}
                            onChange={handleChange}
                            InputProps={{
                                style: { backgroundColor: '#121212', color: '#FFF' },
                                sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                            }}
                            InputLabelProps={{ sx: { color: '#FFF' } }}
                        />
                        <TextField
                            label="Remuneración"
                            type="number"
                            variant="outlined"
                            fullWidth
                            name="remuneracion"
                            value={formValues.remuneracion}
                            onChange={handleChange}
                            InputProps={{
                                style: { backgroundColor: '#121212', color: '#FFF' },
                                sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                            }}
                            InputLabelProps={{ sx: { color: '#FFF' } }}
                        />
                        <TextField
                            label="Descripción de la oferta"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            name="descripcion"
                            value={formValues.descripcion}
                            onChange={handleChange}
                            InputProps={{
                                style: { backgroundColor: '#121212', color: '#FFF' },
                                sx: { '& .MuiSvgIcon-root': { color: '#FFF' } },
                            }}
                            InputLabelProps={{ sx: { color: '#FFF' } }}
                        />
                    </Stack>
                    <Box display="flex" justifyContent="flex-end" marginTop="20px">
                        <Button 
                            variant="contained" 
                            type="submit"
                            sx={{
                                backgroundColor: '#FF5722',
                                fontWeight: 'bold',
                                color: '#FFF',
                                padding: '10px 20px',
                                ':hover': { backgroundColor: '#ff7043' },
                            }}
                        >
                            Crear Oferta
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardEmpresa;
