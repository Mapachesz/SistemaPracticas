import React from 'react';
import CustomButton from '../components/button';
import { Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleStudentClick = () => {
        navigate('/dashboard');
    };

    const handleCompanyClick = () => {
        alert('Iniciar sesión como Empresa');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#121212',
                color: '#FFF',
                padding: 2, // Añadir padding para que no quede pegado en móviles
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }} // En pantallas pequeñas, se convierte en columna
                spacing={2}
                marginTop={2}
                alignItems="center" // Centra los botones en pantallas pequeñas
                sx={{
                    width: '100%', // Se ajusta al ancho de la pantalla
                    maxWidth: '600px', // Limita el ancho en pantallas grandes
                }}
            >
                <CustomButton 
                    text="INICIAR SESIÓN ESTUDIANTE DI" 
                    onClick={handleStudentClick} 
                    color="primary" 
                    sx={{
                        width: { xs: '100%', md: '250px' }, // 100% en móviles, fijo en desktop
                    }} 
                />
                <CustomButton 
                    text="INICIAR SESIÓN EMPRESA OFERTANTE" 
                    onClick={handleCompanyClick} 
                    color="secondary" 
                    sx={{
                        width: { xs: '100%', md: '250px' }, // 100% en móviles, fijo en desktop
                    }} 
                />
            </Stack>
        </Box>
    );
}

export default HomePage;
