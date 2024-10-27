import React from 'react';
import { Box, TextField, Button, useMediaQuery, useTheme } from '@mui/material';

function BitacoraForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box 
            component="form" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px', 
                padding: '10px',
                backgroundColor: '#333',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '900px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 auto', // Centra el formulario horizontalmente
            }}
        >
            {/* Sección de horas */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: '10px', 
                    flexDirection: isSmallScreen ? 'column' : 'row', // Cambia la dirección según el tamaño de la pantalla
                }}
            >
                <TextField 
                    label="Hora Inicio" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                    }}
                />
                <TextField 
                    label="Horas Colación" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                    }}
                />
                <TextField 
                    label="Hora Término" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                    }}
                />
            </Box>

            {/* Campo de fecha */}
            <TextField 
                label="Fecha" 
                variant="outlined" 
                fullWidth 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                }}
            />

            {/* Campo de trabajo realizado */}
            <TextField 
                label="Trabajo Realizado" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                }}
            />

            {/* Campo de trabajo por hacer */}
            <TextField 
                label="Trabajo Por Hacer" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                }}
            />

            {/* Botón de guardar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ 
                        backgroundColor: '#FF5722', 
                        ':hover': { backgroundColor: '#E64A19' },
                        padding: '10px 20px',
                    }}
                >
                    GUARDAR BITÁCORA
                </Button>
            </Box>
        </Box>
    );
}

export default BitacoraForm;
