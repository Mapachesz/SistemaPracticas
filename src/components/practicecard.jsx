import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PracticeCard({ title, status, statusColor }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (status === 'En Proceso') {
            navigate('/bitacora'); // Redirigir a la bitácora
        } else if (status === 'No Iniciada') {
            alert('La práctica no está iniciada'); // Mostrar alerta
        }
    };

    return (
        <Box
            onClick={handleClick} // Agregar el manejador de clics
            sx={{
                padding: '16px',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column', // Colocar elementos en columna
                alignItems: 'flex-start', // Alinear a la izquierda
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#333', // Cambia el color de fondo al pasar el cursor
                },
            }}
        >
            <Typography 
                variant="h6" 
                sx={{ 
                    fontWeight: 'bold',
                    '&:hover': {
                        textDecoration: 'underline', // Subrayar al pasar el cursor
                    },
                }}
            >
                {title}
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ color: statusColor, marginTop: '6px' }} // Espacio entre título y estado
            >
                Estado: {status}
            </Typography>
        </Box>
    );
}

export default PracticeCard;
