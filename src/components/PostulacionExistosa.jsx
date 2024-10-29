// src/pages/PostulacionExitosa.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

function PostulacionExitosa() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '40px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                        Postulación
                    </Typography>
                    <Box sx={{
                        backgroundColor: '#333333',
                        padding: '16px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        width: '100%',
                        maxWidth: '600px'
                    }}>
                        <Typography variant="h6">Postulación Exitosa.</Typography>
                    </Box>
                    {/* Contenedor para los botones centrados */}
                    <Box display="flex" justifyContent="center" width="100%" maxWidth="600px" gap={2}>
                        <Button 
                            variant="contained" 
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Ofertas
                        </Button>
                        <Button 
                            variant="contained" 
                            onClick={() => navigate('/historial')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Historial Postulaciones
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PostulacionExitosa;
