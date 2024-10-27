// src/components/header.jsx

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function Header({ onLogout }) {
    return (
        <AppBar 
            position="static" 
            sx={{ backgroundColor: '#121212', boxShadow: 'none' }} // Quita la sombra con 'boxShadow: none'
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                    color="inherit"
                    onClick={onLogout}
                    sx={{ fontWeight: 'bold' }}
                >
                    Cerrar Sesión
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
