// src/components/Header.jsx

import React from 'react';
import { Typography, Link } from '@mui/material';

function Header() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#121212', color: '#FFF' }}>
            <Typography variant="h6">Sistema de Prácticas</Typography>
            <Link href="#" underline="hover" color="inherit">
                CERRAR SESIÓN
            </Link>
        </div>
    );
}

export default Header;
