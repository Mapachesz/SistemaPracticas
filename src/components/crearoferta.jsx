// OfertaForm.jsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useOfertas } from '../OfertasContext';  // Importa el contexto

function OfertaForm() {
    const navigate = useNavigate();
    const { agregarOferta } = useOfertas();  // Usa la función para agregar ofertas al contexto
    const [formValues, setFormValues] = useState({
        nombreOferta: '',
        fechaInicio: '',
        fechaFin: '',
        tipoOferta: '',
        duracion: '',
        modalidad: '',
        horarios: '',
        remuneracion: '',
        descripcion: '',
    });

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [openCancelDialog, setOpenCancelDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si todos los campos están completos
        if (Object.values(formValues).includes('')) {
            setOpenErrorSnackbar(true); // Si falta algún campo, mostrar alerta de error
            return;
        }

        agregarOferta(formValues);  // Agregar la oferta al contexto
        setOpenConfirmDialog(true); // Si todos los campos están llenos, mostrar diálogo de confirmación
    };

    const handleConfirmPublish = () => {
        setOpenConfirmDialog(false);
        setOpenSnackbar(true); // Mostrar mensaje de éxito
        navigate('/ofertas_empresas');  // Redirige a la página de ofertas
    };

    const handleCancelPublish = () => {
        setOpenConfirmDialog(false);
    };

    const handleOpenCancelDialog = () => setOpenCancelDialog(true);
    const handleCloseCancelDialog = () => setOpenCancelDialog(false);

    const handleConfirmCancel = () => {
        // Eliminar los datos del formulario
        setFormValues({
            nombreOferta: '',
            fechaInicio: '',
            fechaFin: '',
            tipoOferta: '',
            duracion: '',
            modalidad: '',
            horarios: '',
            remuneracion: '',
            descripcion: '',
        });
    
        // Cerrar el diálogo de cancelación
        setOpenCancelDialog(false);
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleCloseErrorSnackbar = () => setOpenErrorSnackbar(false);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#333',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '900px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 auto',
                border: '2px solid #d0d3d4', // Borde
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#FFF' }}>
                Crear Oferta
            </Typography>
            <Grid container spacing={2}>
                {/* Nombre de la oferta */}
                <Grid item xs={12}>
                    <TextField
                        label="Nombre de la oferta"
                        variant="outlined"
                        fullWidth
                        name="nombreOferta"
                        value={formValues.nombreOferta}
                        onChange={handleChange}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />
                </Grid>

                {/* Fecha de inicio, fecha de fin, tipo de oferta y duración */}
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Fecha de inicio"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true, sx: { color: '#FFF' } }}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        name="fechaInicio"
                        value={formValues.fechaInicio}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Fecha de fin"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true, sx: { color: '#FFF' } }}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        name="fechaFin"
                        value={formValues.fechaFin}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: '#FFF' }}>Tipo de oferta</InputLabel>
                        <Select
                            name="tipoOferta"
                            value={formValues.tipoOferta}
                            onChange={handleChange}
                            label="Tipo de oferta"
                            sx={{
                                backgroundColor: '#121212',
                                color: '#FFF',
                                '& .MuiSvgIcon-root': { color: '#FFF' },
                            }}
                        >
                            <MenuItem value="practicaIndustrial">Práctica Industrial</MenuItem>
                            <MenuItem value="practicaProfesional">Práctica Profesional</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Duración en meses"
                        type="number"
                        fullWidth
                        name="duracion"
                        value={formValues.duracion}
                        onChange={handleChange}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />
                </Grid>

                {/* Modalidad, horarios y remuneración en la misma fila */}
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: '#FFF' }}>Modalidad</InputLabel>
                        <Select
                            name="modalidad"
                            value={formValues.modalidad}
                            onChange={handleChange}
                            label="Modalidad"
                            sx={{
                                backgroundColor: '#121212',
                                color: '#FFF',
                                '& .MuiSvgIcon-root': { color: '#FFF' },
                            }}
                        >
                            <MenuItem value="remoto">Remoto</MenuItem>
                            <MenuItem value="hibrido">Híbrido</MenuItem>
                            <MenuItem value="presencial">Presencial</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Horarios"
                        variant="outlined"
                        fullWidth
                        name="horarios"
                        value={formValues.horarios}
                        onChange={handleChange}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Remuneración"
                        type="number"
                        variant="outlined"
                        fullWidth
                        name="remuneracion"
                        value={formValues.remuneracion}
                        onChange={handleChange}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />
                </Grid>

                {/* Descripción de la oferta */}
                <Grid item xs={12}>
                    <TextField
                        label="Descripción de la oferta"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={handleChange}
                        InputProps={{
                            style: { backgroundColor: '#121212', color: '#FFF' },
                        }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{backgroundColor: '#d32f2f', fontWeight: 'bold', color: '#FFF', padding: '10px 20px'}}
                    onClick={handleOpenCancelDialog}
                >
                    Borrar
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{backgroundColor: '#478a0a', fontWeight: 'bold', color: '#FFF', padding: '10px 20px'}}
                >
                    Crear Oferta
                </Button>
            </Box>
            {/* Diálogo de confirmación */}
            <Dialog open={openConfirmDialog} onClose={handleCancelPublish}>
                <DialogTitle>Confirmar Publicación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que deseas publicar esta oferta?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelPublish} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmPublish} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Snackbar para mostrar mensaje de éxito */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Oferta creada con éxito"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
            {/* Snackbar para mostrar mensaje de error */}
            <Snackbar
                open={openErrorSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseErrorSnackbar}
                message="Por favor, complete todos los campos."
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    );
}

export default OfertaForm;
