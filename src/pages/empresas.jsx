import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Empresas() {
    const navigate = useNavigate();

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
            ofertasVigentes: 3, // Número de ofertas vigentes
            numeroContacto: '+56 9 1234 5678', // Número de contacto
            correo: 'contacto@techinnovations.cl', // Correo electrónico
            calificacion: '4.6/5', // Calificación de la empresa
        },
        {
            id: 'Empresa 2',
            nombreEmpresa: 'Marketing Solutions Ltd.',
            tamañoEmpresa: 'Grande',
            antiguedad: '8 años',
            campoLaboral: 'Marketing Digital',
            ubicacion: 'Valparaíso, Chile',
            alcance: 'Internacional',
            remuneracionProm: '$1.500,000 CLP',
            ofertasVigentes: 5, // Número de ofertas vigentes
            numeroContacto: '+56 9 2345 6789', // Número de contacto
            correo: 'info@marketingsolutions.cl', // Correo electrónico
            calificacion: '4.8/5', // Calificación de la empresa
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
            ofertasVigentes: 2, // Número de ofertas vigentes
            numeroContacto: '+56 9 3456 7890', // Número de contacto
            correo: 'contacto@finanzasyconsultoria.cl', // Correo electrónico
            calificacion: '4.3/5', // Calificación de la empresa
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
            ofertasVigentes: 1, // Número de ofertas vigentes
            numeroContacto: '+56 9 4567 8901', // Número de contacto
            correo: 'info@disenocreativo.cl', // Correo electrónico
            calificacion: '4.5/5', // Calificación de la empresa
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
            ofertasVigentes: 4, // Número de ofertas vigentes
            numeroContacto: '+56 9 5678 9012', // Número de contacto
            correo: 'contacto@saluddigital.cl', // Correo electrónico
            calificacion: '4.9/5', // Calificación de la empresa
        },
    ];
    

    const goToempresaDetails = (empresaId) => {
        navigate(`/detalle-empresa/${empresaId}`);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Listado Empresas
                    </Typography>

                    {/* Lista de Empresas */}
                    <Stack spacing={2}>
                        {empresasData.map((empresa) => (
                            <Box
                                key={empresa.id}
                                sx={{
                                    backgroundColor: '#333333',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#444444',
                                    },
                                }}
                                onClick={() => goToempresaDetails(empresa.id)} // Asegúrate de que sea empresa.id
                            >
                                <Typography variant="h6" sx={{ color: '#FFF', fontWeight: 'bold', textDecoration: 'underline' }}>
                                    {empresa.nombreEmpresa}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>

                    {/* Botón de "Ofertas" en la esquina inferior derecha */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px">
                        <Button
                            variant="contained"
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                width: '150px',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Ofertas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Empresas;
