import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import PracticeCard from '../components/practicecard';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
            <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 4}}>
                    Mis Prácticas
                </Typography>
                <Stack spacing={2} direction="column" sx={{ marginTop: '10px' }}>
                    <PracticeCard title="Práctica Industrial" status="En Proceso" statusColor="#c1ff72"/>
                    <PracticeCard title="Práctica Profesional" status="No Iniciada" statusColor="#FF5722" />
                </Stack>
                
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <Button 
                        variant="contained" 
                        onClick={() => navigate('/ofertas')} 
                        sx={{
                            backgroundColor: '#FF5722',
                            fontWeight: 'bold',
                            color: '#FFF',
                            width: '150px',
                            '&:hover': { backgroundColor: '#ff7043' }
                        }}
                    >
                        Ofertas
                    </Button>
                </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
