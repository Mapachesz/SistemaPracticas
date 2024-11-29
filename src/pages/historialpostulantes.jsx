import React, { useState } from "react";
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from "../components/header";
import { Box, Typography, Stack, Button, Dialog, DialogTitle, DialogActions, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HistorialPostulantes() {
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState(null); // 'select', 'discard', o 'reset'
    const [currentPostulante, setCurrentPostulante] = useState(null);

    const [postulacionesData, setPostulacionesData] = useState([
        {
            id: 'Estudiante 1',
            nombreEstudiante: 'Eric Pulgar',
            fechaPostulacion: '10/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'ericpulgar@usm.cl',
            estado: 'Por definir'
        },
        {
            id: 'Estudiante 2',
            nombreEstudiante: 'Guillermo Maripan',
            fechaPostulacion: '15/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'guillermomaripan@usm.cl',
            estado: 'Por definir'
        },
        {
            id: 'Estudiante 3',
            nombreEstudiante: 'Paulo Diaz',
            fechaPostulacion: '20/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'paulodiaz@usm.cl',
            estado: 'Por definir'
        },
        {
            id: 'Estudiante 4',
            nombreEstudiante: 'Marcelino Nuñez',
            fechaPostulacion: '25/10/2021',
            experiencia: '1 año',
            mail: 'marcelinonunez@usm.cl',
            estado: 'Por definir'
        }
    ]);

    const handleOpenDialog = (postulante, type) => {
        setCurrentPostulante(postulante);
        setDialogType(type); // 'select', 'discard', o 'reset'
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setCurrentPostulante(null);
        setDialogType(null);
    };

    const handleAction = () => {
        if (dialogType === 'select') {
            setPostulacionesData((prevData) =>
                prevData.map((postulacion) =>
                    postulacion.id === currentPostulante.id
                        ? { ...postulacion, estado: 'Seleccionado' }
                        : postulacion
                )
            );
        } else if (dialogType === 'discard') {
            setPostulacionesData((prevData) =>
                prevData.map((postulacion) =>
                    postulacion.id === currentPostulante.id
                        ? { ...postulacion, estado: 'Descartado' }
                        : postulacion
                )
            );
        } else if (dialogType === 'reset') {
            setPostulacionesData((prevData) =>
                prevData.map((postulacion) =>
                    postulacion.id === currentPostulante.id
                        ? { ...postulacion, estado: 'Por definir' }
                        : postulacion
                )
            );
        }
        handleCloseDialog();
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', background: '#121212' }}>
            <SidebarEmpresa />
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
                        Historial Postulantes
                    </Typography>

                    {/* Lista de Postulaciones */}
                    <Stack spacing={2}>
                        {postulacionesData.map((postulacion) => (
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
                                    {postulacion.nombreEstudiante}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Fecha Postulación: {postulacion.fechaPostulacion}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Experiencia: {postulacion.experiencia}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#BBB' }}>
                                    Email: {postulacion.mail}
                                </Typography>
                                <Chip
                                    label={`Estado: ${postulacion.estado}`}
                                    sx={{
                                        marginTop: '10px',
                                        backgroundColor: 
                                            postulacion.estado === 'Seleccionado'
                                                ? '#4caf50' // Color verde para seleccionado
                                                : postulacion.estado === 'Descartado'
                                                ? '#f44336' // Color rojo para descartado
                                                : '#fff', // Color blanco para "Por definir"
                                        color: postulacion.estado === 'Por definir' ? '#000' : '#fff' // Texto negro en "Por definir", blanco en otros estados
                                    }}
                                />
                                <Stack direction="row" spacing={2} sx={{ marginTop: '10px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/detalles/${postulacion.id}`)}
                                    >
                                        Ver Detalles
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => handleOpenDialog(postulacion, 'select')}
                                    >
                                        Seleccionar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleOpenDialog(postulacion, 'discard')}
                                    >
                                        Descartar
                                    </Button>
                                    {postulacion.estado !== 'Por definir' && (
                                        <Button
                                            variant="contained"
                                            color="warning"
                                            onClick={() => handleOpenDialog(postulacion, 'reset')}
                                        >
                                            Restablecer
                                        </Button>
                                    )}
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>

            {/* Diálogo de Confirmación */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>
                    {dialogType === 'select'
                        ? `¿Estás seguro que deseas seleccionar a ${currentPostulante?.nombreEstudiante}?`
                        : dialogType === 'discard'
                        ? `¿Estás seguro que deseas descartar a ${currentPostulante?.nombreEstudiante}?`
                        : `¿Estás seguro que deseas restablecer el estado de ${currentPostulante?.nombreEstudiante}?`}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAction} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default HistorialPostulantes;
