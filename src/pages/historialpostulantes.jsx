import React, { useState } from "react";
import SidebarEmpresa from '../components/sidebar_empresas';
import Header from "../components/header";
import { Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HistorialPostulantes() {
    const navigate = useNavigate();

    const postulacionesData = [
        {
            id: 'Estudiante 1',
            nombreEstudiante: 'Eric Pulgar',
            fechaPostulacion: '10/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'ericpulgar@usm.cl',
        },
        {
            id: 'Estudiante 2',
            nombreEstudiante: 'Guillermo Maripan',
            fechaPostulacion: '15/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'guillermomaripan@usm.cl',
        },
        {
            id: 'Estudiante 3',
            nombreEstudiante: 'Paulo Diaz',
            fechaPostulacion: '20/10/2021',
            experiencia: 'Sin experiencia',
            mail: 'paulodiaz@usm.cl',
        },
        {
            id: 'Estudiante 4',
            nombreEstudiante: 'Marcelino Nuñez',
            fechaPostulacion: '25/10/2021',
            experiencia: '1 año',
            mail: 'marcelinonunez@usm.cl',
        }
    ];

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
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default HistorialPostulantes;
