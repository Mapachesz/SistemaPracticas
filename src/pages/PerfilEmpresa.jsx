import React, { useState } from 'react';
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Grid, TextField, Button } from '@mui/material';

function PerfilEmpresa() {
    const location = useLocation();
    const {
        companyName, years, area, country, city, companySize,
        scope, email, contactNumber, averageSalary
    } = location.state || {};

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        companyName: companyName || '',
        years: years || '',
        area: area || '',
        country: country || '',
        city: city || '',
        companySize: companySize || '',
        scope: scope || '',
        email: email || '',
        contactNumber: contactNumber || '',
        averageSalary: averageSalary || ''
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Función para manejar la actualización de los datos
    const handleSave = () => {
        localStorage.setItem('empresaData', JSON.stringify(formData));
        console.log('Datos guardados en localStorage:', formData);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <SidebarEmpresa />
            <Box sx={{ flex: 1, marginLeft: { md: '250px' }, padding: '20px' }}>
                <Header />
                <Paper 
                    elevation={3} 
                    sx={{
                        padding: '20px',
                        backgroundColor: '#333',
                        borderRadius: '10px',
                        border: '2px solid #d0d3d4', // Borde gris
                        color: '#FFF',
                        maxWidth: '900px', // Reduce el tamaño del contenedor
                        margin: '0 auto', // Centra el contenedor horizontalmente
                    }}
                >
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ color: '#FFF', textAlign: 'center', marginBottom: '20px', fontWeight:'bold' }}
                >
                    Perfil de la Empresa
                </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Nombre Empresa/Institución"
                                variant="outlined"
                                fullWidth
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Años de Antigüedad"
                                variant="outlined"
                                fullWidth
                                name="years"
                                value={formData.years}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Área o Campo Laboral"
                                variant="outlined"
                                fullWidth
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="País"
                                variant="outlined"
                                fullWidth
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Ciudad"
                                variant="outlined"
                                fullWidth
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Tamaño Empresa"
                                variant="outlined"
                                fullWidth
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Alcance"
                                variant="outlined"
                                fullWidth
                                name="scope"
                                value={formData.scope}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Correo Electrónico"
                                variant="outlined"
                                fullWidth
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Número de Contacto"
                                variant="outlined"
                                fullWidth
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Salario Promedio"
                                variant="outlined"
                                fullWidth
                                name="averageSalary"
                                value={formData.averageSalary}
                                onChange={handleChange}
                                InputProps={{
                                    style: { backgroundColor: '#121212', color: '#FFF' },
                                }}
                                InputLabelProps={{ sx: { color: '#FFF' } }}
                                sx={{ backgroundColor: '#FFF', borderRadius: '5px' }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button 
                            variant="contained" 
                            sx={{ backgroundColor: '#478a0a' }}
                            onClick={handleSave}
                        >
                            Guardar Cambios
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default PerfilEmpresa;
