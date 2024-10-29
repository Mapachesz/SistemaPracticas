import React from 'react';
import CustomButton from '../components/button';
import { Stack, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logoinf from '../assets/logoinf.png'; // Importa la imagen desde tu carpeta de assets

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
                backgroundColor: '#1a1a1a',
                color: '#FFF',
                textAlign: 'center',
            }}
        >
            {/*Contenedor Principal: Titulo-Imagen */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2, // Espacio entre imagen y texto
                    marginBottom: 1,
                    ml: { xs: '-20px', md: '-40px' }
                }}
            >
                {/*logo depto Inf */}
                <Box
                    component="img"
                    src={logoinf}
                    alt="Logo del departamento"
                    sx={{
                        width: { xs: '40px', md: '50px' }, // Tamaño adaptable de la imagen
                        height: 'auto',
                    }}
                />
                {/* Título */}
                <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2.125rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Sistema de Prácticas
                </Typography>
            </Box>

            {/* Subtitulo */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontSize: { xs: '1.0rem', md: '1rem' }, // Tamaño más pequeño
                    fontWeight: '300', // Fuente más ligera
                    marginBottom: 4, // Separación del texto de bienvenida y la imagen
                }}
            >
                Departamento de Informática USM
            </Typography>

            {/* Imagen central */}
            <Box
                component="img"
                src="https://guiadelempresario.com/wp-content/uploads/2021/02/Creative-team-pana-500x500.png"
                alt="Imagen de bienvenida"
                sx={{
                    width: { xs: '80%', md: '300px' },
                    height: 'auto',
                    marginBottom: 2,
                }}
            />

            {/* Botones */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                marginTop={2}
                alignItems="center"
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                <CustomButton 
                    text="INICIAR SESIÓN ESTUDIANTE DI" 
                    onClick={handleStudentClick} 
                    color="primary"
                    sx={{
                        width: { xs: '100%', md: '250px' },
                    }} 
                />
                <CustomButton 
                    text="INICIAR SESIÓN EMPRESA OFERTANTE" 
                    onClick={handleCompanyClick} 
                    color="secondary" 
                    sx={{
                        width: { xs: '100%', md: '250px' },
                    }} 
                />
            </Stack>
        </Box>
    );
}

export default HomePage;
