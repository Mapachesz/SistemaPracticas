import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Box, Typography, Button, Stack, Menu, MenuItem, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterListIcon from '@mui/icons-material/FilterList';

function HistorialPostulaciones() {
    const navigate = useNavigate();

    const postulacionesData = [
        {
            id: 'Postulacion 1',
            nombreEmpresa: 'Tech Innovations S.A.',
            fechaPostulacion: '10/10/2021',
            estadoPostulacion: 'En Proceso',
            cargoPostulado: 'Desarrollador Full Stack',
            comentarios: 'Esperando respuesta del reclutador',
        },
        {
            id: 'Postulacion 2',
            nombreEmpresa: 'Marketing Solutions Ltd.',
            fechaPostulacion: '15/10/2021',
            estadoPostulacion: 'Rechazado',
            cargoPostulado: 'Analista de Marketing',
            comentarios: 'No se ajusta al perfil solicitado',
        },
        {
            id: 'Postulacion 3',
            nombreEmpresa: 'Finanzas y Consultoría S.A.',
            fechaPostulacion: '20/10/2021',
            estadoPostulacion: 'Aceptado',
            cargoPostulado: 'Analista Financiero',
            comentarios: 'Entrevista agendada para el 25/10',
        },
        {
            id: 'Postulacion 4',
            nombreEmpresa: 'Diseño Creativo Ltd.',
            fechaPostulacion: '25/10/2021',
            estadoPostulacion: 'En Proceso',
            cargoPostulado: 'Diseñador Gráfico',
            comentarios: 'Esperando respuesta del reclutador',
        }
    ];

    const [menuAnchor, setMenuAnchor] = useState(null);
    const [filtros, setFiltros] = useState({
        estado: '',
        mes: '',
    });

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFiltros((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const filteredPostulaciones = postulacionesData.filter((postulacion) => {
        // Convertir fechaPostulacion a un objeto Date
        const postDate = new Date(postulacion.fechaPostulacion.split('/').reverse().join('-')); // Convertir formato dd/mm/yyyy a yyyy-mm-dd
        const postMonth = postDate.getMonth() + 1; // Mes en base a 1 (enero es 1)
        
        // Comparar el estado y el mes
        const stateMatch = filtros.estado ? postulacion.estadoPostulacion === filtros.estado : true;
        const monthMatch = filtros.mes ? postMonth === parseInt(filtros.mes) : true;
        
        return stateMatch && monthMatch;
    });
    

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', background: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: { xs: '10px', md: '20px' }, color: '#FFF', marginLeft: { md: '250px' } }}>
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
                        Historial Postulaciones
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
                                    backgroundColor: '#d0d3d4',
                                    color: '#FFF',
                                    padding: '15px',
                                    borderRadius: '10px',
                                },
                            }}
                        >
                            <TextField
                                label="Estado"
                                select
                                name="estado"
                                value={filtros.estado}
                                onChange={handleFilterChange}
                                sx={{
                                    backgroundColor: '#FFF',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                    width: '100%',
                                    color: '#333',
                                }}
                            >
                                <MenuItem value="">Todos</MenuItem>
                                <MenuItem value="En Proceso">En Proceso</MenuItem>
                                <MenuItem value="Rechazado">Rechazado</MenuItem>
                                <MenuItem value="Aceptado">Aceptado</MenuItem>
                            </TextField>

                            <TextField
                                label="Mes"
                                select
                                name="mes"
                                value={filtros.mes}
                                onChange={handleFilterChange}
                                sx={{
                                    backgroundColor: '#FFF',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                    width: '100%',
                                    color: '#333',
                                }}
                            >
                                <MenuItem value="">Todos</MenuItem>
                                <MenuItem value="1">Enero</MenuItem>
                                <MenuItem value="2">Febrero</MenuItem>
                                <MenuItem value="3">Marzo</MenuItem>
                                <MenuItem value="4">Abril</MenuItem>
                                <MenuItem value="5">Mayo</MenuItem>
                                <MenuItem value="6">Junio</MenuItem>
                                <MenuItem value="7">Julio</MenuItem>
                                <MenuItem value="8">Agosto</MenuItem>
                                <MenuItem value="9">Septiembre</MenuItem>
                                <MenuItem value="10">Octubre</MenuItem>
                                <MenuItem value="11">Noviembre</MenuItem>
                                <MenuItem value="12">Diciembre</MenuItem>
                            </TextField>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#FF5722',
                                    color: '#FFF',
                                    marginTop: '10px',
                                }}
                                onClick={handleMenuClose}
                            >
                                Aplicar Filtros
                            </Button>
                        </Menu>
                    </Box>

                    {/* Lista de Postulaciones filtradas */}
                    <Stack spacing={2}>
                        {filteredPostulaciones.map((postulacion) => (
                            <Box
                                key={postulacion.id}
                                sx={{
                                    background: '#333',
                                    padding: { xs: '16px', md: '20px' },
                                    borderRadius: '10px',
                                    maxWidth: { xs: '100%', md: 'auto' },
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                                    {postulacion.nombreEmpresa}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Fecha Postulación: {postulacion.fechaPostulacion}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Estado Postulación: {postulacion.estadoPostulacion}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Cargo Postulado: {postulacion.cargoPostulado}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Comentarios: {postulacion.comentarios}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>

                    {/* Botón de "Ofertas" */}
                    <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} marginTop="20px">
                        <Box sx={{
                            position: 'sticky',
                            bottom: '20px',
                            zIndex: 10, // Asegura que el botón esté sobre otros elementos
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center', // Centra el botón en pantallas pequeñas
                        }}>
                            <Button
                                variant="contained"
                                onClick={() => navigate('/ofertas')}
                                sx={{
                                    backgroundColor: '#FF5722',
                                    color: '#FFF',
                                    '&:hover': { backgroundColor: '#ff7043' },
                                    padding: '10px 20px',
                                    width: 'auto',
                                }}
                            >
                                Ver todas las ofertas
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HistorialPostulaciones;
