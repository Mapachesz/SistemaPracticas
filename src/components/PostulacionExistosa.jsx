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
            <Box 
                sx={{ 
                    flex: 1, 
                    padding: { xs: '20px', md: '40px' }, 
                    color: '#FFF', 
                    marginLeft: { md: '250px' } 
                }}
            >
                <Header />
                <Box 
                    sx={{ 
                        flex: 1, 
                        padding: { xs: '20px', md: '40px' }, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        textAlign: 'center' // Alinea el texto en el centro en todas las pantallas
                    }}
                >
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            marginBottom: '20px', 
                            fontWeight: 'bold', 
                            fontSize: { xs: '1.8rem', md: '2.125rem' } 
                        }}
                    >
                        Postulación
                    </Typography>
                    <Box 
                        sx={{
                            backgroundColor: '#333333',
                            padding: { xs: '12px', md: '16px' },
                            borderRadius: '8px',
                            textAlign: 'center',
                            marginBottom: '20px',
                            width: '100%',
                            maxWidth: '600px'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Has postulado exitosamente 😁👍.
                        </Typography>
                    </Box>
                    <Box 
                        display="flex" 
                        justifyContent="center" 
                        width="100%" 
                        maxWidth="600px" 
                        gap={2} 
                        flexDirection={{ xs: 'column', sm: 'row' }} // Columnas en pantallas pequeñas, fila en medianas y grandes
                    >
                        <Button 
                            variant="contained" 
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                fontWeight: 'bold',
                                width: { xs: '100%', sm: 'auto' }, // Botones a ancho completo en pantallas pequeñas
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
                                fontWeight: 'bold',
                                width: { xs: '100%', sm: 'auto' },
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
