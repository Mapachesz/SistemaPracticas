import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Header from '../components/header';

const ofertasData = [
    {
        id: 'Oferta 1',
        nombreEmpresa: 'Tech Innovations S.A.',
        antiguedad: '5 años',
        campoLaboral: 'Tecnología de la Información',
        ubicacion: 'Santiago, Chile',
        calificacion: '4.5/5',
        resumen: 'Desarrollador Frontend',
        duracion: '3 meses',
        modalidad: 'Remoto',
        horarios: 'Lunes a Viernes, 9:00 a 17:00',
        remuneracion: '$500,000 CLP',
        fechaPublicacion: '01/10/2024',
    },
    {
        id: 'Oferta 2',
        nombreEmpresa: 'Marketing Solutions Ltd.',
        antiguedad: '3 años',
        campoLaboral: 'Marketing Digital',
        ubicacion: 'Valparaíso, Chile',
        calificacion: '4.8/5',
        resumen: 'Especialista en SEO',
        duracion: '3 meses',
        modalidad: 'Híbrido',
        horarios: 'Lunes a Viernes, 10:00 a 16:00',
        remuneracion: '$100,000 CLP',
        fechaPublicacion: '15/10/2024',
    },
];

function DetalleOferta() {
    const { offerId } = useParams(); // Captura el ID de la oferta de la URL
    console.log(offerId);
    const navigate = useNavigate(); 

    const oferta = ofertasData.find(oferta => oferta.id === offerId); // Busca la oferta correspondiente

    // Estado para manejar la apertura del diálogo de confirmación
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleConfirmPostular = () => {
        setOpenDialog(false);
        navigate('/postulacion-exitosa'); // Redirige a la página de postulación exitosa
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 4 }}>
                        Detalles de {oferta.id}
                    </Typography>

                    {/* Detalles Empresa Ofertante */}
                    <Box sx={{
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFF' }}>
                            Detalles Empresa Ofertante
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Nombre Empresa: {oferta.nombreEmpresa}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Años de antigüedad: {oferta.antiguedad}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Área o campo laboral: {oferta.campoLaboral}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Ubicación demográfica: {oferta.ubicacion}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Calificación: {oferta.calificacion}
                        </Typography>
                    </Box>

                    {/* Detalles de la Oferta */}
                    <Box sx={{
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFF' }}>
                            Detalles de la Oferta
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Resumen de oferta: {oferta.resumen}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Duración: {oferta.duracion}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Tipo de modalidad de trabajo: {oferta.modalidad}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Horarios: {oferta.horarios}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Remuneración: {oferta.remuneracion}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Fecha de publicación: {oferta.fechaPublicacion}
                        </Typography>
                    </Box>

                    {/* Botones de navegación */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px" gap={2}>
                        {/* Botón para regresar */}
                        <Button
                            variant="contained"
                            onClick={() => navigate('/ofertas')} // Navega a la página de Ofertas
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff7043',
                                },
                                width: { xs: '100%', sm: '150px' },
                            }}
                        >
                            Regresar
                        </Button>

                        {/* Botón para postular */}
                        <Button
                            variant="contained"
                            onClick={handleOpenDialog} // Abre el diálogo de confirmación
                            sx={{
                                backgroundColor: '#ff4500',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff5722',
                                },
                                width: { xs: '100%', sm: '150px' },
                            }}
                        >
                            Postular
                        </Button>
                    </Box>

                    {/* Confirmar acción */}
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Confirmación de Postulación</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                ¿Estás segur@ que quieres postular a esta oferta?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="secondary">
                                Cancelar
                            </Button>
                            <Button onClick={handleConfirmPostular} color="primary">
                                Postular
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        </Box>
    );
}

export default DetalleOferta;
