import React, { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import MenuIconButton from './menuiconbutton';
import logoinf from '../assets/logoinf.png';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessIcon from '@mui/icons-material/Business';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
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
        { text: 'Prácticas', icon: <SchoolIcon sx={{ color: '#FFF' }} />, path: '/dashboard' },
        { text: 'Mi Perfil', icon: <AccountCircleIcon sx={{ color: '#FFF' }} /> },
        { text: 'Ofertas', icon: <BusinessCenterIcon sx={{ color: '#FFF' }} />, path: '/ofertas' },
        { text: 'Empresas', icon: <BusinessIcon sx={{ color: '#FFF' }} />, path: '/empresas' },
        { text: 'Estadísticas', icon: <BarChartIcon sx={{ color: '#FFF' }} /> },
        { text: 'Historial Postulaciones', icon: <HistoryIcon sx={{ color: '#FFF' }} />, path: '/historial' },
    ];

    const renderSidebarContent = () => (
        <Box sx={{ width: '250px', padding: '16px', marginTop: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                <Box
                    component="img"
                    src={logoinf}
                    alt="Logo del departamento"
                    sx={{
                        width: { xs: '30px', md: '30px' },
                        height: 'auto',
                    }}
                />
                <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.1rem', md: '1.1rem' },
                        fontWeight: 'bold',
                        color: '#FFF'
                    }}>
                    Sistema de Prácticas
                </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.9rem', md: '0.9rem' }, color: '#BBB', marginBottom: 2 }}>
                Departamento de Informática USM
            </Typography>
            <Box sx={{ marginBottom: 3 }} />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={index}
                        component={Link}
                        to={item.path}
                        onClick={handleClose}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#ff5757',
                            },
                        }}
                    >
                        {item.icon}
                        <ListItemText primary={item.text} sx={{ color: '#FFF', marginLeft: 1 }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {!isSmallScreen ? (
                <Box sx={{ width: '250px', backgroundColor: '#1a1a1a', color: '#FFF', height: '100vh', position: 'fixed' }}>
                    {renderSidebarContent()}
                </Box>
            ) : (
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={handleClose}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': { width: '250px', backgroundColor: '#1a1a1a', color: '#FFF' },
                    }}
                >
                    {renderSidebarContent()}
                </Drawer>
            )}

            {isSmallScreen && (
                <Box
                    sx={{
                        position: 'sticky',
                        marginTop: '20px',
                        left: '20px',
                        zIndex: 1300,
                    }}
                >
                    <MenuIconButton open={isOpen} onClick={handleToggle} />
                </Box>
            )}
        </>
    );
}

export default Sidebar;
