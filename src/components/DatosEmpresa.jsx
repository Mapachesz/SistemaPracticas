import React, { useState } from 'react';
import { Box, TextField, Typography, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const areaOptions = [
    'Abogacía', 'Atención al Cliente', 'Administración de Bases de Datos', 'Ciudadanía', 'Comunicación',
    'Diseño UX/UI', 'Enseñanza y Formación', 'Estrategia y Planificación', 'Evaluación / Análisis de Datos',
    'Investigación', 'Marketing digital', 'Desarrollo Web'
];

const countryOptions = [
    'Argentina', 'Bolivia', 'Brasil', 'Canadá', 'Chile', 'Colombia', 'Ecuador', 'España', 'Estados Unidos', 'Francia', 'México', 'Paraguay',
    'Perú', 'Uruguay'
];

const companySizeOptions = ['Pequeño', 'Mediano', 'Grande'];
const scopeOptions = ['Nacional', 'Internacional'];
const averageSalaryOptions = ['$0 - $550.000', '$551.000 - $2.087.000', '$2.087.000 - $2.335.000', '$3.000.000 o más'];

function DatosEmpresa() {
    const [formData, setFormData] = useState({
        companyName: '',
        years: '',
        area: '',
        country: '',
        city: '',
        companySize: '',
        scope: '',
        email: '',
        contactNumber: '',
        averageSalary: '',
    });

    const [openConfirmSave, setOpenConfirmSave] = useState(false);
    const [openConfirmCancel, setOpenConfirmCancel] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setOpenConfirmSave(true);
    };

    const handleCancel = () => {
        setOpenConfirmCancel(true);
    };

    const handleConfirmSave = () => {
        // Aquí puedes redirigir a la página de perfil
        navigate('/perfil_empresa', { state: { ...formData } });
    };

    const handleConfirmCancel = () => {
        // Redirige al login en caso de cancelar el registro
        navigate('/login_empresa');
    };

    const handleCloseSaveDialog = () => {
        setOpenConfirmSave(false);
    };

    const handleCloseCancelDialog = () => {
        setOpenConfirmCancel(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSave();
    };

    return (
        <Box
            sx={{
                backgroundColor: '#000',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: 4,
                    backgroundColor: '#333',
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
                    marginY: 'auto',
                    marginX: 'auto',
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        color: '#FFF',
                        textShadow: '2px 2px 5px #000',
                        textAlign: 'center',
                    }}
                >
                    Detalles de la Empresa
                </Typography>

                <TextField
                    label="Nombre Empresa/Institución"
                    name="companyName"
                    fullWidth
                    margin="normal"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    InputLabelProps={{
                        style: { color: '#FFF' },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& input': { color: '#FFF' },
                            '& fieldset': { borderColor: '#FFA500' },
                            '&:hover fieldset': { borderColor: '#FFD700' },
                            '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                        },
                    }}
                />

                {/* Contenedor para Años de antigüedad y Tamaño de empresa */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginY: 2 }}>
                    <TextField
                        label="Años de antigüedad"
                        name="years"
                        type="number"
                        fullWidth
                        value={formData.years}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    />

                    <TextField
                        label="Tamaño empresa"
                        name="companySize"
                        select
                        fullWidth
                        value={formData.companySize}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& select': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    >
                        {companySizeOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Salario Promedio"
                        name="averageSalary"
                        select
                        fullWidth
                        value={formData.averageSalary}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    >
                        {averageSalaryOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                
                {/* Contenedor para Área y Alcance */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginY: 2 }}>
                    <TextField
                        label="Área Laboral"
                        name="area"
                        select
                        fullWidth
                        value={formData.area}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& select': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    >
                        {areaOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Alcance"
                        name="scope"
                        select
                        fullWidth
                        value={formData.scope}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    >
                        {scopeOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                {/* Contenedor para País y Ciudad */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginY: 2 }}>
                    <TextField
                        label="País"
                        name="country"
                        select
                        fullWidth
                        margin="normal"
                        value={formData.country}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    >
                        {countryOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Ciudad"
                        name="city"
                        fullWidth
                        margin="normal"
                        value={formData.city}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    />
                </Box>

                {/* Contenedor para Correo Electrónico y Número de Contacto */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginY: 2 }}>
                    <TextField
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    />

                    <TextField
                        label="Número de Contacto"
                        name="contactNumber"
                        type="tel"
                        fullWidth
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            style: { color: '#FFF' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& input': { color: '#FFF' },
                                '& fieldset': { borderColor: '#FFA500' },
                                '&:hover fieldset': { borderColor: '#FFD700' },
                                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                            },
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#FFA500',
                            fontWeight:'bold',
                            '&:hover': {
                                backgroundColor: '#FFC065',
                            },
                            flex: 1,  // Esto hace que el botón de guardar ocupe el mismo espacio
                            marginRight: 2, // Añade un pequeño espacio entre los botones
                        }}
                    >
                        Guardar
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCancel}
                        sx={{
                            backgroundColor: '#FF5722',
                            color: '#fff',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#ff7043',
                            },
                            flex: 1,  // Esto hace que el botón de cancelar ocupe el mismo espacio
                        }}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>

            {/* Dialogo de Confirmación para Guardar */}
            <Dialog
                open={openConfirmSave}
                onClose={handleCloseSaveDialog}
            >
                <DialogTitle>Confirmar Registro</DialogTitle>
                <DialogContent>
                    <Typography>¿Estás seguro que deseas registrar estos datos en el portal?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSaveDialog} color="primary">Cancelar</Button>
                    <Button onClick={handleConfirmSave} color="primary">Aceptar</Button>
                </DialogActions>
            </Dialog>

            {/* Dialogo de Confirmación para Cancelar */}
            <Dialog
                open={openConfirmCancel}
                onClose={handleCloseCancelDialog}
            >
                <DialogTitle>Confirmar Cancelación</DialogTitle>
                <DialogContent>
                    <Typography>¿Estás seguro que deseas cancelar tu registro?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCancelDialog} color="primary">Cancelar</Button>
                    <Button onClick={handleConfirmCancel} color="primary">Aceptar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default DatosEmpresa;
