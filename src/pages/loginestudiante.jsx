import React, { useState } from 'react';
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function LoginEstudiante() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // Verificar si el correo tiene el dominio @inf.utfsm.cl
    const validateEmail = (email) => email.endsWith('@inf.utfsm.cl');

    // Manejar cambios en los campos de entrada
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Enviar formulario de inicio de sesión
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            setError('Por favor complete todos los campos para iniciar sesión.');
            return;
        }
        if (!validateEmail(loginData.email)) {
            setError('Por favor ingrese un correo electrónico válido (debe terminar con @inf.utfsm.cl).');
            return;
        }
        setError('');
        // Redirigir al dashboard
        navigate('/dashboard');
    };

    // Mostrar u ocultar la contraseña
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

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
                Ingreso Estudiantes
            </Typography>

            {error && (
                <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
                    {error}
                </Typography>
            )}

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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#FFD700',
                        },
                    }}
                >
                    Iniciar Sesión
                </Button>

                {/* Botón de Regresar */}
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                        backgroundColor: '#FF5722',
                        marginTop: 2,
                        color: '#fff',
                        fontWeight:'bold',
                        '&:hover': {
                            backgroundColor: '#ff7043',
                        },
                    }}
                    onClick={() => navigate('/')}
                >
                    Regresar
                </Button>
            </Box>
        </Box>
    );
}

export default LoginEstudiante;
