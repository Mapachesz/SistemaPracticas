import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import PracticeCard from '../components/practicecard';
import CustomButton from '../components/button';
import { Box, Typography, Stack } from '@mui/material';

function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            {/* Sidebar para pantallas grandes */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '250px' }}>
                <Sidebar />
            </Box>

            {/* Drawer para pantallas pequeñas */}
            <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />

            <Box sx={{ flex: 1, padding: '20px', color: '#FFF' }}>
                <Header onMenuClick={handleSidebarToggle} />
                <Typography variant="h5" gutterBottom sx={{ marginTop: '20px' }}>
                    Mis Prácticas
                </Typography>
                <Stack
                    spacing={2}
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ marginTop: '10px' }}
                >
                    <Box sx={{ flex: 1 }}>
                        <PracticeCard title="Práctica Industrial" status="En Proceso" statusColor="#FFF" />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <PracticeCard title="Práctica Profesional" status="No Iniciada" statusColor="#FF5722" />
                    </Box>
                </Stack>
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <CustomButton 
                        text="OFERTAS" 
                        onClick={() => alert('Ir a Ofertas')} 
                        color="primary" 
                        sx={{ 
                            width: { xs: '100%', sm: '150px' }, 
                            marginTop: { xs: '20px', md: '0' },
                        }} 
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
