import React from 'react';
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function PerfilEmpresa() {
    const location = useLocation();
    const {
        companyName, years, area, country, city, companySize,
        scope, email, contactNumber, averageSalary
    } = location.state || {};

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
        <SidebarEmpresa />
        <Box sx={{ flex: 1, padding: { xs: '0px', md: '20px' }, color: '#FFF', marginLeft: { md: '250px' } }}>
            <Header />
            <Typography variant="h4" gutterBottom>Perfil de la Empresa</Typography>
            <Typography>Nombre Empresa/Institución: {companyName}</Typography>
            <Typography>Años de Antigüedad: {years}</Typography>
            <Typography>Área o Campo Laboral: {area}</Typography>
            <Typography>País: {country}</Typography>
            <Typography>Ciudad: {city}</Typography>
            <Typography>Tamaño Empresa: {companySize}</Typography>
            <Typography>Alcance: {scope}</Typography>
            <Typography>Correo Electrónico: {email}</Typography>
            <Typography>Número de Contacto: {contactNumber}</Typography>
            <Typography>Salario Promedio: ${averageSalary}</Typography>
        </Box>
        </Box>
    );
}

export default PerfilEmpresa;
