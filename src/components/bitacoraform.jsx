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
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                />
                <TextField 
                    label="Horas Colación" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                />
                <TextField 
                    label="Hora Término" 
                    variant="outlined" 
                    fullWidth 
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                />
            </Box>

            <TextField 
                label="Fecha" 
                variant="outlined" 
                fullWidth 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
            />

            <TextField 
                label="Trabajo Realizado" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
            />

            <TextField 
                label="Trabajo Por Hacer" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
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