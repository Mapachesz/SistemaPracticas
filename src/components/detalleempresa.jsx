import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { Box, Typography, Button } from '@mui/material';
import Header from '../components/header';

// Datos de ejemplo
const empresasData = [
    {
        id: 'Empresa 1',
        nombreEmpresa: 'Tech Innovations S.A.',
        tamañoEmpresa: 'Mediana',
        antiguedad: '5 años',
        campoLaboral: 'Tecnología de la Información',
        ubicacion: 'Santiago, Chile',
        alcance: 'Nacional',
        remuneracionProm: '$1.200,000 CLP',
        ofertasVigentes: 3,
        numeroContacto: '+56 9 1234 5678',
        correo: 'contacto.techinnovations.cl',
        calificacion: '4.6/5'
    },
    {
        id: 'Empresa 2',
        nombreEmpresa: 'Marketing Solutions Ltd.',
        tamañoEmpresa: 'Grande',
        antiguedad: '8 años',
        campoLaboral: 'Marketing Digital',
        ubicacion: 'Valparaíso, Chile',
        alcance: 'Internacional',
        remuneracionProm: '$500,000 CLP',
        ofertasVigentes: 5,
        numeroContacto: '+56 9 2345 6789',
        correo: 'info.marketingsolutions.cl',
        calificacion: '4.8/5'
    },
    {
        id: 'Empresa 3',
        nombreEmpresa: 'Finanzas y Consultoría S.A.',
        tamañoEmpresa: 'Pequeña',
        antiguedad: '3 años',
        campoLaboral: 'Finanzas',
        ubicacion: 'Concepción, Chile',
        alcance: 'Nacional',
        remuneracionProm: '$1.000,000 CLP',
        ofertasVigentes: 2,
        numeroContacto: '+56 9 3456 7890', 
        correo: 'contacto@finanzasyconsultoria.cl', 
        calificacion: '4.3/5',
    },
    {
        id: 'Empresa 4',
        nombreEmpresa: 'Diseño Creativo Ltd.',
        tamañoEmpresa: 'Mediana',
        antiguedad: '4 años',
        campoLaboral: 'Diseño Gráfico',
        ubicacion: 'La Serena, Chile',
        alcance: 'Regional',
        remuneracionProm: '$900,000 CLP',
        ofertasVigentes: 1,
        numeroContacto: '+56 9 4567 8901', 
        correo: 'info@disenocreativo.cl', 
        calificacion: '4.5/5', 
    },
    {
        id: 'Empresa 5',
        nombreEmpresa: 'Salud Digital S.A.',
        tamañoEmpresa: 'Grande',
        antiguedad: '10 años',
        campoLaboral: 'Tecnología de la Información',
        ubicacion: 'Santiago, Chile',
        alcance: 'Nacional',
        remuneracionProm: '$1.800,000 CLP',
        ofertasVigentes: 4, 
        numeroContacto: '+56 9 5678 9012', 
        correo: 'contacto@saluddigital.cl', 
        calificacion: '4.9/5', 
    },
];

function DetalleEmpresa() {
    const { empresaId } = useParams(); // Captura el ID de la empresa de la URL
    const navigate = useNavigate();

    // Busca la empresa correspondiente, asegurando que coincida con la ID
    const empresa = empresasData.find(empresa => empresa.id === empresaId);

    // Manejo de caso si la empresa no se encuentra
    if (!empresa) {
        return (
            <Box sx={{ padding: 40, color: '#FFF' }}>
                <Typography variant="h4" gutterBottom>
                    Empresa no encontrada
                </Typography>
                <Button variant="contained" onClick={() => navigate('/empresas')}>
                    Regresar
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: { xs: '20px', md: '40px' }, color: '#FFF' }}>
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        sx={{ 
                            fontWeight: 'bold', 
                            fontSize: { xs: '1.8rem', md: '2.125rem' }, 
                            maxWidth: { xs: '100%', md: 'auto' },
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >                   
                        Detalles de {empresa.nombreEmpresa} {/* Usar nombre de la empresa para mostrar */}
                    </Typography>

                    {/* Detalles Empresa Ofertante */}
                    <Box sx={{
                            backgroundColor: '#333',
                            padding: { xs: '16px', md: '20px' },
                            borderRadius: '8px',
                            marginBottom: '20px',
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFF' }}>
                            Detalles Empresa
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Nombre Empresa: {empresa.nombreEmpresa}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Tamaño de la empresa: {empresa.tamañoEmpresa}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Años de antigüedad: {empresa.antiguedad}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Área o campo laboral: {empresa.campoLaboral}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Ubicación demográfica: {empresa.ubicacion}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Alcance: {empresa.alcance}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Remuneración Promedio: {empresa.remuneracionProm}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Ofertas vigentes: {empresa.ofertasVigentes}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Número de contacto: {empresa.numeroContacto}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Correo: {empresa.correo}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Calificación: {empresa.calificacion}
                        </Typography>
                    </Box>

                    {/* Botones de navegación */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px" gap={2}>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/empresas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff7043',
                                },
                                width: { xs: '100%', sm: '150px' },
                            }}
                        >
                            Regresar
                        </Button>

                        {/* Botón para buscar ofertas */}
                        <Button
                            variant="contained"
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff7043',
                                },
                                width: { xs: '100%', sm: '200px' },
                            }}
                        >
                            Buscar Ofertas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DetalleEmpresa;