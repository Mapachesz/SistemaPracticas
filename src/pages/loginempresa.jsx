import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginEmpresa() {
    const [tabValue, setTabValue] = useState(0);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ companyName: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setError(''); // Limpiar el error al cambiar de tab
    };

    const handleInputChange = (event, formType) => {
        const { name, value } = event.target;
        formType === 'login'
            ? setLoginData({ ...loginData, [name]: value })
            : setRegisterData({ ...registerData, [name]: value });
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (!registerData.companyName || !registerData.email || !registerData.password) {
            setError('Todos los campos son obligatorios para registrarse');
            return;
        }
        navigate('/datos_empresa'); // Redirige a la nueva página de detalles de la empresa
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#1a1a1a',
                color: '#FFF',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Acceso Empresas
            </Typography>

            <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ marginBottom: 3}}>
                <Tab label="Iniciar Sesión" />
                <Tab label="Registrarse" />
            </Tabs>

            {error && (
                <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
                    {error}
                </Typography>
            )}

            {tabValue === 0 ? (
                <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ width: '300px' }}>

<TextField
                        label="Correo electrónico"
                        variant="outlined"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={loginData.email}
                        onChange={(e) => handleInputChange(e, 'login')}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        name="password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={loginData.password}
                        onChange={(e) => handleInputChange(e, 'login')}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            ) : (
                <Box component="form" onSubmit={handleRegisterSubmit} sx={{ width: '300px' }}>
                    <TextField
                        label="Nombre de la Empresa"
                        variant="outlined"
                        name="companyName"
                        fullWidth
                        margin="normal"
                        value={registerData.companyName}
                        onChange={(e) => handleInputChange(e, 'register')}
                    />
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={registerData.email}
                        onChange={(e) => handleInputChange(e, 'register')}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        name="password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={registerData.password}
                        onChange={(e) => handleInputChange(e, 'register')}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Registrarse
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default LoginEmpresa;
