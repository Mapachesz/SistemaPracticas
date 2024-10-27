import React from 'react';
import CustomButton from '../components/button';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const handleStudentClick = () => {
      navigate('/dashboard');
    };

    const handleCompanyClick = () => {
        alert('Iniciar sesión como Empresa');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#121212', color: '#FFF' }}>
            <Stack direction="row" spacing={2} marginTop={2}>
                <CustomButton 
                    text="INICIAR SESIÓN ESTUDIANTE DI" 
                    onClick={handleStudentClick} 
                    color="primary" 
                    sx={{ width: '250px' }} 
                />
                <CustomButton 
                    text="INICIAR SESIÓN EMPRESA OFERTANTE" 
                    onClick={handleCompanyClick} 
                    color="secondary" 
                    sx={{ width: '250px' }} 
                />
            </Stack>
        </div>
    );
}

export default HomePage;
