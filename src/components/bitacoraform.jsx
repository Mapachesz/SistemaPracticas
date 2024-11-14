import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    useMediaQuery,
    useTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BitacoraForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [openCancelDialog, setOpenCancelDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const [horaInicio, setHoraInicio] = useState('');
    const [horasColacion, setHorasColacion] = useState('');
    const [horaTermino, setHoraTermino] = useState('');
    const [fecha, setFecha] = useState('');
    const [trabajoRealizado, setTrabajoRealizado] = useState('');
    const [trabajoPorHacer, setTrabajoPorHacer] = useState('');

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);
    const handleCloseErrorSnackbar = () => setOpenErrorSnackbar(false);
    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const handleConfirmSave = () => {
        if (!horaInicio || !horasColacion || !horaTermino || !fecha || !trabajoRealizado || !trabajoPorHacer) {
            setOpenErrorSnackbar(true);
            return;
        }
        setHoraInicio('');
        setHorasColacion('');
        setHoraTermino('');
        setFecha('');
        setTrabajoRealizado('');
        setTrabajoPorHacer('');
        setOpenDialog(false);
        setOpenSnackbar(true);
    };

    const handleOpenCancelDialog = () => setOpenCancelDialog(true);
    const handleCloseCancelDialog = () => setOpenCancelDialog(false);
    const handleConfirmCancel = () => {
        // Restablecer los valores de todos los campos a su estado inicial (vacíos)
        setHoraInicio('');
        setHorasColacion('');
        setHoraTermino('');
        setFecha('');
        setTrabajoRealizado('');
        setTrabajoPorHacer('');

        // Cerrar el diálogo de cancelación
        setOpenCancelDialog(false);

    };

    return (
        <Box
            component="form"
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
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#FFF' }}>
                Bitácora
            </Typography>

            {/* Sección de horas */}
            <Grid container spacing={2}>
                {/* Hora Inicio */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Hora Inicio"
                        variant="outlined"
                        type="time"
                        fullWidth
                        value={horaInicio}
                        onChange={(e) => setHoraInicio(e.target.value)}
                        InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                        InputLabelProps={{ sx: { color: '#FFF' }, shrink: true }}
                    />
                </Grid>
                {/* Horas de Colación */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Horas de Colación"
                        variant="outlined"
                        fullWidth
                        value={horasColacion}
                        onChange={(e) => setHorasColacion(e.target.value)}
                        InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                        InputLabelProps={{ sx: { color: '#FFF' } }}
                    />

                </Grid>
                {/* Hora Término */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Hora Término"
                        variant="outlined"
                        type="time"
                        fullWidth
                        value={horaTermino}
                        onChange={(e) => setHoraTermino(e.target.value)}
                        InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                        InputLabelProps={{ sx: { color: '#FFF' }, shrink: true }}
                    />
                </Grid>
                {/* Fecha */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Fecha"
                        variant="outlined"
                        type="date"
                        fullWidth
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                        InputLabelProps={{ sx: { color: '#FFF' }, shrink: true }}
                    />
                </Grid>
            </Grid>

            {/* Campos adicionales (trabajo realizado, por hacer) */}
            <Grid item xs={12}>
                <TextField
                    label="Trabajo Realizado"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={trabajoRealizado}
                    onChange={(e) => setTrabajoRealizado(e.target.value)}
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{ sx: { color: '#FFF' } }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="Trabajo Por Hacer"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={trabajoPorHacer}
                    onChange={(e) => setTrabajoPorHacer(e.target.value)}
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{ sx: { color: '#FFF' } }}
                />
            </Grid>

            {/* Botones */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ backgroundColor: '#d32f2f', fontWeight: 'bold', ':hover': { backgroundColor: '#f44336' }, padding: '10px 20px' }}
                    onClick={handleOpenCancelDialog}
                >
                    CANCELAR
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: '#478a0a', fontWeight: 'bold', ':hover': { backgroundColor: '#639d2f' }, padding: '10px 20px' }}
                    onClick={handleOpenDialog}
                >
                    GUARDAR BITÁCORA
                </Button>
            </Box>

            {/* Diálogo y mensajes */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirmación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Está seguro que desea guardar esta bitácora?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">Cancelar</Button>
                    <Button onClick={handleConfirmSave} color="primary">Guardar</Button>
                </DialogActions>
            </Dialog>
            {/* Diálogo de cancelación */}
            <Dialog open={openCancelDialog} onClose={handleCloseCancelDialog}>
                <DialogTitle>Confirmar Cancelación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que deseas borrar todos los datos ingresados?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCancelDialog} color="primary">Cancelar</Button>
                    <Button onClick={handleConfirmCancel} color="primary">Confirmar</Button>
                </DialogActions>
            </Dialog>


            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message="Bitácora guardada exitosamente"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
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

export default BitacoraForm;
