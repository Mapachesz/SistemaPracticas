import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MenuIconButton() {
    return (
        <IconButton
            color="inherit" // Asegúrate de que herede el color blanco del AppBar
            aria-label="open drawer"
            sx={{ color: '#FFFFFF' }} // Ajuste de color blanco para el ícono
        >
            <MenuIcon />
        </IconButton>
    );
}

export default MenuIconButton;
