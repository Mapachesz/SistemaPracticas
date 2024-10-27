import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import BitacoraForm from '../components/bitacoraform';
import { Box, Typography } from '@mui/material';

function BitacoraPage() {
    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px', color: '#FFF' }}>
                <Header />
                <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                    Mis Prácticas
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'calc(100vh - 160px)', // Ajusta la altura para que se tenga en cuenta el header y padding
                        marginTop: '20px'
                    }}
                >
                    <BitacoraForm />
                </Box>
            </div>
        </div>
    );
}

export default BitacoraPage;
