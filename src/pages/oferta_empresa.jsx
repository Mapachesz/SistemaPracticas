// OfertasEmpresas.jsx
import React from 'react';
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from '../components/header';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useOfertas } from '../OfertasContext';  // Importa el contexto

function OfertasEmpresas() {
    const { ofertas } = useOfertas();  // Obtén las ofertas del contexto

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <SidebarEmpresa />
            <Box sx={{ flex: 1, padding: { xs: '0px', md: '20px' }, color: '#FFF', marginLeft: { md: '250px' } }}>
            <Header />
            <Box sx={{ flex: 1, padding: { xs: '20px', md: '40px' }, color: '#FFF' }}>
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        sx={{ 
                            fontWeight: 'bold', 
                            fontSize: { xs: '1.8rem', md: '2.125rem' }, 
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                Ofertas Publicadas
            </Typography>
                    
            <Grid container spacing={2}>
                {ofertas.length === 0 ? (
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#FFF' }}>
                        No hay ofertas publicadas aún.
                    </Typography>
                ) : (
                    ofertas.map((oferta, index) => (
                        <Grid item xs={12} sm={6} md={12} key={index}>
                            <Card sx={{                             
                                backgroundColor: '#333',
                                color: '#FFF',
                                padding: { xs: '16px', md: '20px' },
                                maxWidth: { xs: '100%', md: 'auto' },
                                borderRadius: '8px',
                                marginBottom: '20px', }}>
                                <CardContent>
                                    <Typography variant="h6">{oferta.nombreOferta}</Typography>
                                    <Typography variant="body2">Fecha de inicio: {oferta.fechaInicio}</Typography>
                                    <Typography variant="body2">Fecha de fin: {oferta.fechaFin}</Typography>
                                    <Typography variant="body2">Tipo: {oferta.tipoOferta}</Typography>
                                    <Typography variant="body2">Modalidad: {oferta.modalidad}</Typography>
                                    <Typography variant="body2">Duración: {oferta.duracion} meses</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
        </Box>
        </Box>
    );
}

export default OfertasEmpresas;
