import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { Box, Typography, Button, Stack, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Ofertas() {
    const navigate = useNavigate();

    // Estado para manejar los filtros
    const [filters, setFilters] = useState({
        campoLaboral: '',
        ubicacion: '',
        calificacion: '',
        modalidad: '',
    });
    const [openFilterDialog, setOpenFilterDialog] = useState(false);

    // Datos de las ofertas
    const ofertasData = [
        {
            id: 'Oferta 1',
            campoLaboral: 'Tecnología de la Información',
            ubicacion: 'Santiago, Chile',
            calificacion: '4.5/5',
            resumen: 'Desarrollador Frontend',
            modalidad: 'Remoto',
        },
        {
            id: 'Oferta 2',
            campoLaboral: 'Marketing Digital',
            ubicacion: 'Valparaíso, Chile',
            calificacion: '4.8/5',
            resumen: 'Especialista en SEO',
            modalidad: 'Híbrido',

        },
    ];

        // Filtrar ofertas según los criterios establecidos
        const filteredOfertas = ofertasData.filter((oferta) => {
            const normalizeString = (str) => 
                str
                    .toLowerCase()
                    .normalize("NFD") // Normaliza el texto
                    .replace(/[\u0300-\u036f]/g, ""); // Elimina tildes

            return (
                (!filters.campoLaboral || normalizeString(oferta.campoLaboral).includes(normalizeString(filters.campoLaboral))) &&
                (!filters.ubicacion || normalizeString(oferta.ubicacion).includes(normalizeString(filters.ubicacion))) &&
                (!filters.calificacion || normalizeString(oferta.calificacion).includes(normalizeString(filters.calificacion))) &&
                (!filters.modalidad || normalizeString(oferta.modalidad).includes(normalizeString(filters.modalidad)))
            );
        });


    const goToOfferDetails = (offerId) => {
        navigate(`/detalle-oferta/${offerId}`);
    };

    const handleOpenFilterDialog = () => {
        setOpenFilterDialog(true);
    };

    const handleCloseFilterDialog = () => {
        setOpenFilterDialog(false);
    };

    const handleApplyFilters = () => {
        setOpenFilterDialog(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Ofertas
                    </Typography>

                    {/* Botón de Filtrar */}
                    <Box display="flex" justifyContent="flex-end" marginBottom="20px">
                        <Button 
                            variant="contained" 
                            onClick={handleOpenFilterDialog} 
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Filtrar
                        </Button>
                    </Box>

                    {/* Diálogo de Filtros */}
                    <Dialog open={openFilterDialog} onClose={handleCloseFilterDialog}>
                        <DialogTitle>Filtrar Ofertas</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Campo Laboral"
                                type="text"
                                fullWidth
                                name="campoLaboral"
                                value={filters.campoLaboral}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Ubicación"
                                type="text"
                                fullWidth
                                name="ubicacion"
                                value={filters.ubicacion}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Calificación"
                                type="text"
                                fullWidth
                                name="calificacion"
                                value={filters.calificacion}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Modalidad"
                                type="text"
                                fullWidth
                                name="modalidad"
                                value={filters.modalidad}
                                onChange={handleInputChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseFilterDialog} color="secondary">
                                Cancelar
                            </Button>
                            <Button onClick={handleApplyFilters} color="primary">
                                Aplicar
                            </Button>
                        </DialogActions>
                    </Dialog>

                    {/* Lista de Ofertas filtradas */}
                    <Stack spacing={2}>
                        {filteredOfertas.map((oferta, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor: '#333333',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#444444',
                                    },
                                }}
                                onClick={() => goToOfferDetails(oferta.id)} // Redirige usando el ID de la oferta
                            >
                                <Typography variant="h6" sx={{ color: '#FFF', fontWeight: 'bold', textDecoration: 'underline' }}>
                                    {oferta.id}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                                    {oferta.resumen}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                    
                    {/* Botón de "Prácticas" en la esquina inferior derecha */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px">
                        <Button 
                            variant="contained" 
                            onClick={() => navigate('/dashboard')} 
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                width: '150px',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Prácticas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Ofertas;
