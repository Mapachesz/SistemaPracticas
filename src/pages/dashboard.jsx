import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import PracticeCard from '../components/practicecard';
import CustomButton from '../components/button';
import { Box, Typography, Stack } from '@mui/material';

function Dashboard() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '20px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Typography variant="h5" gutterBottom sx={{ marginTop: '20px' }}>
                    Mis Prácticas
                </Typography>
                <Stack
                    spacing={2}
                    direction="column"
                    sx={{ marginTop: '10px' }}
                >
                    <PracticeCard title="Práctica Industrial" status="En Proceso" statusColor="#FFF" />
                    <PracticeCard title="Práctica Profesional" status="No Iniciada" statusColor="#FF5722" />
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
