import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Muestra un cuadro de confirmación
        const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
        if (confirmLogout) {
            // Si el usuario confirma, redirige a la página de inicio o de cierre de sesión
            navigate('/');
        }
        // Si el usuario cancela, no hace nada
    };

    return (
        <AppBar 
            position="static" 
            sx={{ backgroundColor: '#121212', boxShadow: 'none' }} // Quita la sombra con 'boxShadow: none'
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button
                    color="inherit"
                    onClick={handleClick}
                    sx={{ fontWeight: 'bold' }}
                >
                    Cerrar Sesión
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
