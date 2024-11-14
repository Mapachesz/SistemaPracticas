import React, { useState } from 'react';
import { Box, TextField, Typography, Button, MenuItem } from '@mui/material';
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

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/perfil_empresa', { state: { ...formData } }); // Redirige y pasa datos
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Detalles de la Empresa</Typography>
            <TextField label="Nombre Empresa/Institución" name="companyName" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Años de antigüedad" name="years" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Área o Campo Laboral" name="area" select fullWidth margin="normal" onChange={handleInputChange}>
                {areaOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <TextField label="País" name="country" select fullWidth margin="normal" onChange={handleInputChange}>
                {countryOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <TextField label="Ciudad" name="city" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Tamaño empresa" name="companySize" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Alcance" name="scope" select fullWidth margin="normal" onChange={handleInputChange}>
                <MenuItem value="Nacional">Nacional</MenuItem>
                <MenuItem value="Internacional">Internacional</MenuItem>
            </TextField>
            <TextField label="Correo Electrónico" name="email" type="email" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Número de Contacto" name="contactNumber" fullWidth margin="normal" onChange={handleInputChange} />
            <TextField label="Salario Promedio" name="averageSalary" type="number" fullWidth margin="normal" onChange={handleInputChange} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>Guardar</Button>
        </Box>
    );
}

export default DatosEmpresa;
