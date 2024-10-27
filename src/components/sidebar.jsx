import React, { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MenuIconButton from './menuiconbutton'; // Asegúrate de que esta importación esté correcta.

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const menuItems = [
        'Prácticas',
        'Mi Perfil',
        'Ofertas',
        'Empresas',
        'Estadísticas',
        'Historial Postulaciones'
    ];

    // Función que renderiza el contenido del sidebar
    const renderSidebarContent = () => (
        <Box sx={{ width: '250px', padding: '16px' }}>
            <Typography variant="h6" gutterBottom>
                Sistema de Prácticas
            </Typography>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={handleClose}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {isLargeScreen ? (
                // Sidebar fijo para pantallas grandes
                <Box sx={{ width: '250px', backgroundColor: '#333', color: '#FFF', height: '100vh', position: 'fixed' }}>
                    {renderSidebarContent()}
                </Box>
            ) : (
                // Drawer para pantallas pequeñas
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={handleClose}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': { width: '250px', backgroundColor: '#333', color: '#FFF' },
                    }}
                >
                    {renderSidebarContent()}
                </Drawer>
            )}

            {/* Botón de menú para pantallas pequeñas */}
            {!isLargeScreen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '20px',
                        left: '20px',
                        zIndex: 1300,
                    }}
                    onClick={handleToggle}
                >
                    <MenuIconButton />
                </Box>
            )}
        </>
    );
}

export default Sidebar;
