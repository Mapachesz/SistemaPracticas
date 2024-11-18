import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from '../components/header';
import { Box, Typography, Grid, Card, CardContent, Fab, Button, Menu, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useOfertas } from '../OfertasContext';
import WorkIcon from '@mui/icons-material/Work';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';

function OfertasEmpresas() {
    const { ofertas } = useOfertas(); // Obtén las ofertas del contexto
    const [filtros, setFiltros] = useState({
        estado: '',
        tipoOferta: '',
        modalidad: '',
        nombre: '',
    });
    const [menuAnchor, setMenuAnchor] = useState(null); // Controla la apertura del menú
    const navigate = useNavigate();
    const fechaActual = new Date();

    // Función para manejar los filtros
    const handleFiltrar = () => {
        return ofertas.filter(oferta => {
            const fechaTermino = new Date(oferta.fechaFin);
            const estado = fechaTermino >= fechaActual ? 'Vigente' : 'Finalizada';

            return (
                (filtros.estado === '' || estado === filtros.estado) &&
                (filtros.tipoOferta === '' || oferta.tipoOferta === filtros.tipoOferta) &&
                (filtros.modalidad === '' || oferta.modalidad === filtros.modalidad) &&
                (filtros.nombre === '' || oferta.nombreOferta.toLowerCase().includes(filtros.nombre.toLowerCase()))
            );
        });
    };

    const ofertasFiltradas = handleFiltrar();

    // Manejo del menú desplegable
    const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
    const handleMenuClose = () => setMenuAnchor(null);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212', position: 'relative' }}>
            <SidebarEmpresa />
            <Box sx={{ flex: 1, padding: { xs: '20px', md: '40px' }, marginLeft: { md: '250px' } }}>
                <Header />
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2.125rem' },
                        textAlign: { xs: 'center', md: 'left' },
                        color: '#FFF',
                        marginBottom: '20px',
                    }}
                >
                    Ofertas Publicadas
                </Typography>

                {/* Botón de filtros compactos */}
                <Box sx={{ marginBottom: '20px', textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        startIcon={<FilterListIcon />}
                        sx={{ 
                            backgroundColor: '#FF5722', 
                            color: '#FFF',
                            '&:hover': { backgroundColor: '#ff7043' }
                        }}
                        onClick={handleMenuOpen}
                    >
                        Filtrar
                    </Button>
                    <Menu
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={handleMenuClose}
                        sx={{
                            '& .MuiPaper-root': {
                                backgroundColor: '#d0d3d4 ',
                                color: '#FFF',
                                padding: '15px',
                                borderRadius: '10px',
                            },
                        }}
                    >
                        <TextField
                            label="Estado"
                            select
                            value={filtros.estado}
                            onChange={(e) => setFiltros({ ...filtros, estado: e.target.value })}
                            sx={{ backgroundColor: '#FFF', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                        >
                            <MenuItem value="">Todos</MenuItem>
                            <MenuItem value="Vigente">Vigente</MenuItem>
                            <MenuItem value="Finalizada">Finalizada</MenuItem>
                        </TextField>
                        <TextField
                            label="Tipo de Oferta"
                            select
                            value={filtros.tipoOferta}
                            onChange={(e) => setFiltros({ ...filtros, tipoOferta: e.target.value })}
                            sx={{ backgroundColor: '#FFF', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                        >
                            <MenuItem value="">Todos</MenuItem>
                            <MenuItem value="practicaIndustrial">Práctica Industrial</MenuItem>
                            <MenuItem value="practicaProfesional">Práctica Profesional</MenuItem>
                        </TextField>
                        <TextField
                            label="Modalidad"
                            select
                            value={filtros.modalidad}
                            onChange={(e) => setFiltros({ ...filtros, modalidad: e.target.value })}
                            sx={{ backgroundColor: '#FFF', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                        >
                            <MenuItem value="">Todos</MenuItem>
                            <MenuItem value="remoto">Remoto</MenuItem>
                            <MenuItem value="hibrido">Híbrido</MenuItem>
                            <MenuItem value="presencial">Presencial</MenuItem>
                        </TextField>
                        <TextField
                            label="Nombre"
                            value={filtros.nombre}
                            onChange={(e) => setFiltros({ ...filtros, nombre: e.target.value })}
                            sx={{ backgroundColor: '#FFF', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: '#FF5722', color: '#FFF', marginTop: '10px' }}
                            onClick={handleMenuClose}
                        >
                            Aplicar Filtros
                        </Button>
                    </Menu>
                </Box>

                {/* Ofertas */}
                <Grid container spacing={4}>
                    {ofertasFiltradas.length === 0 ? (
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: 'center',
                                color: '#FFF',
                                width: '100%',
                                marginTop: '40px',
                            }}
                        >
                            No hay ofertas disponibles.
                        </Typography>
                    ) : (
                        ofertasFiltradas.map((oferta, index) => {
                            const fechaTermino = new Date(oferta.fechaFin);
                            const estado = fechaTermino >= fechaActual ? 'Vigente' : 'Finalizada';

                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: '#1E1E1E',
                                            color: '#FFF',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                                {oferta.nombreOferta}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                                            >
                                                <WorkIcon sx={{ marginRight: '5px', color: '#FFA500' }} />
                                                Tipo: {oferta.tipoOferta}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                                            >
                                                <EventAvailableIcon sx={{ marginRight: '5px', color: '#FFA500' }} />
                                                Fecha Inicio: {oferta.fechaInicio}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                                            >
                                                <EventAvailableIcon sx={{ marginRight: '5px', color: '#FFA500' }} />
                                                Fecha Término: {oferta.fechaFin}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                                            >
                                                <LocationOnIcon sx={{ marginRight: '5px', color: '#FFA500' }} />
                                                Modalidad: {oferta.modalidad}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                                            >
                                                <TodayIcon
                                                    sx={{
                                                        marginRight: '5px',
                                                        color: estado === 'Vigente' ? '#4CAF50' : '#F44336',
                                                    }}
                                                />
                                                Estado: {estado}
                                            </Typography>
                                            <Typography variant="body2">
                                                Duración: {oferta.duracion} meses
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })
                    )}
                </Grid>

                {/* Botón flotante para crear oferta */}
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: '#FF5722',
                        '&:hover': { backgroundColor: '#FF8700' },
                    }}
                    onClick={() => navigate('/dashboard_empresas')}
                >
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    );
}

export default OfertasEmpresas;
