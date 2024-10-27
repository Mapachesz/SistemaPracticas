import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function BitacoraForm() {
    return (
        <Box 
            component="form" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px', 
                width: '100%', 
            }}
        >
            <TextField 
                label="Hora Inicio" 
                variant="outlined" 
                fullWidth 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
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
                        color: '#FFF', // Cambia el color del label
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
                        color: '#FFF', // Cambia el color del label
                    },
                }}
            />
            <TextField 
                label="Fecha" 
                variant="outlined" 
                fullWidth 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
                    },
                }}
            />
            <TextField 
                label="Trabajo Realizado" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
                    },
                }}
            />
            <TextField 
                label="Trabajo Por Hacer" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF', // Cambia el color del label
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
