import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Tabs, Tab, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function LoginEmpresa() {
    const [tabValue, setTabValue] = useState(0);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ companyName: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setError('');
    };

    const handleInputChange = (event, formType) => {
        const { name, value } = event.target;
        formType === 'login'
            ? setLoginData({ ...loginData, [name]: value })
            : setRegisterData({ ...registerData, [name]: value });
    };

    const validateEmail = (email) => email.includes('@');

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            setError('Por favor complete todos los campos para iniciar sesión.');
            return;
        }
        if (!validateEmail(loginData.email)) {
            setError('Por favor ingrese un correo electrónico válido.');
            return;
        }
        setError('');
        alert('Inicio de sesión exitoso.');
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (!registerData.companyName || !registerData.email || !registerData.password) {
            setError('Todos los campos son obligatorios para registrarse.');
            return;
        }
        if (!validateEmail(registerData.email)) {
            setError('Por favor ingrese un correo electrónico válido.');
            return;
        }
        setError('');
        navigate('/datos_empresa');
    };

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleRegisterPasswordVisibility = () => setShowRegisterPassword((prev) => !prev);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#000',
                color: '#FFF',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#FFF',
                    textShadow: '2px 2px 5px #000',
                }}
            >
                Acceso Empresas
            </Typography>

            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                sx={{
                    marginBottom: 3,
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#FFD700',
                    },
                    '& .MuiTab-root': {
                        color: '#FFF',
                        '&.Mui-selected': {
                            color: '#FFA500',
                        },
                    },
                }}
            >
                <Tab label="Iniciar Sesión" />
                <Tab label="Registrarse" />
            </Tabs>

            {error && (
                <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
                    {error}
                </Typography>
            )}

            {tabValue === 0 ? (
                <Box
                    component="form"
                    onSubmit={handleLoginSubmit}
                    sx={{
                        width: '300px',
                        backgroundColor: '#333',
                        borderRadius: 2,
                        padding: 3,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={loginData.email}
                        onChange={(e) => handleInputChange(e, 'login')}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: '#FFF',
                                },
                                '& fieldset': {
                                    borderColor: '#FFA500',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFD700',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD700',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        margin="normal"
                        value={loginData.password}
                        onChange={(e) => handleInputChange(e, 'login')}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                        sx={{ color: '#FFF' }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: '#FFF',
                                },
                                '& fieldset': {
                                    borderColor: '#FFA500',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFD700',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD700',
                                },
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#FFA500',
                            color: '#000',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#FFD700',
                            },
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            ) : (
                <Box
                    component="form"
                    onSubmit={handleRegisterSubmit}
                    sx={{
                        width: '300px',
                        backgroundColor: '#333',
                        borderRadius: 2,
                        padding: 3,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <TextField
                        label="Nombre de la Empresa"
                        variant="outlined"
                        name="companyName"
                        fullWidth
                        margin="normal"
                        value={registerData.companyName}
                        onChange={(e) => handleInputChange(e, 'register')}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: '#FFF',
                                },
                                '& fieldset': {
                                    borderColor: '#FFA500',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFD700',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD700',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={registerData.email}
                        onChange={(e) => handleInputChange(e, 'register')}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: '#FFF',
                                },
                                '& fieldset': {
                                    borderColor: '#FFA500',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFD700',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD700',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        name="password"
                        type={showRegisterPassword ? 'text' : 'password'}
                        fullWidth
                        margin="normal"
                        value={registerData.password}
                        onChange={(e) => handleInputChange(e, 'register')}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={toggleRegisterPasswordVisibility}
                                        edge="end"
                                        sx={{ color: '#FFF' }}
                                    >
                                        {showRegisterPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: '#FFF',
                                },
                                '& fieldset': {
                                    borderColor: '#FFA500',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFD700',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD700',
                                },
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#FFA500',
                            color: '#000',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#FFD700',
                            },
                        }}
                    >
                        Registrarse
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default LoginEmpresa;
