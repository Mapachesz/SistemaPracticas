import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import BitacoraForm from '../components/bitacoraform';
import { Box, Typography } from '@mui/material';

function BitacoraPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
            <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold'}}>
                    Bitácora
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Alineamos el formulario en la parte superior
                        minHeight: 'calc(100vh - 160px)', // Ajusta la altura para que se tenga en cuenta el header
                        //marginTop: '20px',
                        paddingX: '10px', // Añade padding lateral para pantallas pequeñas
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '1280px', // Limita el ancho en pantallas grandes
                            marginTop: { xs: '10px', md: '10px' }, // Ajuste de margen superior para evitar que se tape
                            padding: '0',
                            borderRadius: '0',
                            boxShadow: 'none',
                            overflow: 'auto', // Permite scroll si el contenido excede la altura
                            display: 'flex',
                            justifyContent: 'center', // Centra el formulario
                            alignItems: 'center', // Centra verticalmente en el contenedor
                            padding: { xs: '10px', md: '0' }, // Añade padding en pantallas pequeñas para que no se corte
                        }}
                    >
                        <BitacoraForm />
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BitacoraPage;
