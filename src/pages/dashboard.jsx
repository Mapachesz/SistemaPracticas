import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import PracticeCard from '../components/practicecard';
import CustomButton from '../components/button';
import { Box, Typography } from '@mui/material';

function Dashboard() {
    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px', color: '#FFF' }}>
                <Header />
                <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                    Mis Prácticas
                </Typography>
                <PracticeCard title="Práctica Industrial" status="En Proceso" statusColor="#FFF" />
                <PracticeCard title="Práctica Profesional" status="No Iniciada" statusColor="#FF5722" />
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <CustomButton 
                        text="OFERTAS" 
                        onClick={() => alert('Ir a Ofertas')} 
                        color="primary" 
                        sx={{ width: '150px' }} 
                    />
                </Box>
            </div>
        </div>
    );
}

export default Dashboard;
