import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

    return (
        <Box sx={{ display: 'flex' , minHeight: '100vh', background: '#121212'}}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: {md: '250px'} }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Historial Postulaciones
                    </Typography>

                    {/* Lista de Postulaciones */}
                    <Stack spacing={2}>
                        {postulacionesData.map((postulacion) => (
                            <Box 
                                key={postulacion.id}
                                sx={{ background: '#333', 
                                      padding: '20px', 
                                      borderRadius: '10px' 
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

                    {/* Botón de "Ofertas" en la esquina inferior derecha */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px">
                        <Button
                            variant="contained"
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                width: '150px',
                                '&:hover': { backgroundColor: '#ff7043' }
                            }}
                        >
                            Ofertas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HistorialPostulaciones;