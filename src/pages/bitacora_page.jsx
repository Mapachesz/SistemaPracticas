import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import BitacoraForm from '../components/bitacoraform';
import { Box, Typography } from '@mui/material';

function BitacoraPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '20px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Typography variant="h5" gutterBottom sx={{ marginTop: '20px', textAlign: 'left' }}>
                    Bitácora
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'calc(100vh - 160px)', // Ajusta la altura para que se tenga en cuenta el header y padding
                        marginTop: '20px',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '1200px', // Limita el ancho en pantallas grandes
                            height: '100%',
                            padding: '20px',
                            backgroundColor: '#333',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            overflow: 'auto', // Permite scroll si el contenido excede la altura
                        }}
                    >
                        <BitacoraForm />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BitacoraPage;
