import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MenuIconButton({ open, onClick }) {
    return (
        <>
            {!open && ( // Muestra el botón solo si `open` es `false`
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ color: '#FFFFFF' }}
                    onClick={onClick} // Llama a la función `onClick` pasada como prop
                >
                    <MenuIcon />
                </IconButton>
            )}
        </>
    );
}

export default MenuIconButton;
