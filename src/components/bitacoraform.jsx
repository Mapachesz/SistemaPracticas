import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

function BitacoraForm() {
    return (
        <Box 
            component="form" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px', 
                padding: '20px', 
                backgroundColor: '#333', 
                borderRadius: '5px',
                width: '100%',
                maxWidth: '600px'
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>Bitácora</Typography>
            
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <TextField 
                    label="Hora Inicio" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ 
                        style: { backgroundColor: '#121212', color: '#FFF' }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF', // Cambia el color del label
                        },
                    }}
                    placeholder="Hora Inicio"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&::placeholder': {
                                color: '#FFF', // Placeholder blanco
                                opacity: 1,
                            },
                        },
                    }}
                />
                <TextField 
                    label="Horas Colación" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ 
                        style: { backgroundColor: '#121212', color: '#FFF' }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF', // Cambia el color del label
                        },
                    }}
                    placeholder="Horas Colación"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&::placeholder': {
                                color: '#FFF', // Placeholder blanco
                                opacity: 1,
                            },
                        },
                    }}
                />
                <TextField 
                    label="Hora Término" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ 
                        style: { backgroundColor: '#121212', color: '#FFF' }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF', // Cambia el color del label
                        },
                    }}
                    placeholder="Hora Término"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&::placeholder': {
                                color: '#FFF', // Placeholder blanco
                                opacity: 1,
                            },
                        },
                    }}
                />
            </Box>

            <TextField 
                label="Fecha" 
                variant="outlined" 
                fullWidth 
                InputProps={{ 
                    style: { backgroundColor: '#121212', color: '#FFF' }
                }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
                    },
                }}
                placeholder="Fecha"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&::placeholder': {
                            color: '#FFF', // Placeholder blanco
                            opacity: 1,
                        },
                    },
                }}
            />

            <TextField 
                label="Trabajo Realizado" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ 
                    style: { backgroundColor: '#121212', color: '#FFF' }
                }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
                    },
                }}
                placeholder="Trabajo Realizado"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&::placeholder': {
                            color: '#FFF', // Placeholder blanco
                            opacity: 1,
                        },
                    },
                }}
            />

            <TextField 
                label="Trabajo Por Hacer" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ 
                    style: { backgroundColor: '#121212', color: '#FFF' }
                }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
                    },
                }}
                placeholder="Trabajo Por Hacer"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&::placeholder': {
                            color: '#FFF', // Placeholder blanco
                            opacity: 1,
                        },
                    },
                }}
            />

            <Button 
                variant="contained" 
                color="primary" 
                sx={{ alignSelf: 'flex-end', backgroundColor: '#FF5722', ':hover': { backgroundColor: '#E64A19' } }}
            >
                GUARDAR BITÁCORA
            </Button>
        </Box>
    );
}

export default BitacoraForm;
