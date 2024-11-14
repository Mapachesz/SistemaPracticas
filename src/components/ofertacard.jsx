import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OfertCard({ title }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (title === 'Ofertas de práctica') {
            navigate('/opracticaform'); 
        } else if (title === 'Ofertas de trabajo') {
            navigate('/olaboralform');
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
        </Box>
    );
}

export default OfertCard;
