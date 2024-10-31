import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
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
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [openCancelDialog, setOpenCancelDialog] = useState(false); // Estado para el diálogo de confirmación de cancelación
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const [horaInicio, setHoraInicio] = useState('');
    const [horasColacion, setHorasColacion] = useState('');
    const [horaTermino, setHoraTermino] = useState('');
    const [fecha, setFecha] = useState('');
    const [trabajoRealizado, setTrabajoRealizado] = useState('');
    const [trabajoPorHacer, setTrabajoPorHacer] = useState('');

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleCloseErrorSnackbar = () => {
        setOpenErrorSnackbar(false);
    };

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

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    // Maneja la apertura y cierre del diálogo de confirmación de cancelación
    const handleOpenCancelDialog = () => {
        setOpenCancelDialog(true);
    };

    const handleCloseCancelDialog = () => {
        setOpenCancelDialog(false);
    };

    // Función para confirmar la cancelación y redirigir al dashboard
    const handleConfirmCancel = () => {
        setOpenCancelDialog(false);
        navigate('/dashboard');
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '10px',
                backgroundColor: '#333',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '900px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 auto',
            }}
        >
            {/* Sección de horas */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                }}
            >
                <TextField
                    label="Hora Inicio"
                    variant="outlined"
                    type="time"
                    fullWidth
                    value={horaInicio}
                    onChange={(e) => setHoraInicio(e.target.value)}
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                        shrink: true,
                    }}
                />
                <TextField
                    label="Horas de Colación"
                    variant="outlined"
                    fullWidth
                    value={horasColacion}
                    onChange={(e) => setHorasColacion(e.target.value)}
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                    }}
                />
                <TextField
                    label="Hora Término"
                    variant="outlined"
                    type="time"
                    fullWidth
                    value={horaTermino}
                    onChange={(e) => setHoraTermino(e.target.value)}
                    InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                    InputLabelProps={{
                        sx: {
                            color: '#FFF',
                        },
                        shrink: true,
                    }}
                />
            </Box>

            {/* Campo de fecha */}
            <TextField
                label="Fecha"
                variant="outlined"
                type="date"
                fullWidth
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                    shrink: true,
                }}
            />

            {/* Campo de trabajo realizado */}
            <TextField
                label="Trabajo Realizado"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={trabajoRealizado}
                onChange={(e) => setTrabajoRealizado(e.target.value)}
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                }}
            />

            {/* Campo de trabajo por hacer */}
            <TextField
                label="Trabajo Por Hacer"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={trabajoPorHacer}
                onChange={(e) => setTrabajoPorHacer(e.target.value)}
                InputProps={{ style: { backgroundColor: '#121212', color: '#FFF' } }}
                InputLabelProps={{
                    sx: {
                        color: '#FFF',
                    },
                }}
            />

            {/* Botones de guardar y cancelar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        backgroundColor: '#d32f2f',
                        fontWeight: 'bold',
                        ':hover': { backgroundColor: '#f44336' },
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenCancelDialog} // Abre el diálogo de confirmación de cancelación
                >
                    CANCELAR
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#478a0a',
                        fontWeight: 'bold',
                        ':hover': { backgroundColor: '#639d2f' },
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenDialog}
                >
                    GUARDAR BITÁCORA
                </Button>
            </Box>

            {/* Diálogo de confirmación de guardado */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirmación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Está seguro que desea guardar esta bitácora?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmSave} color="primary" autoFocus>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo de confirmación de cancelación */}
            <Dialog open={openCancelDialog} onClose={handleCloseCancelDialog}>
                <DialogTitle>Confirmación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Está seguro que desea cancelar el registro de la bitácora?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCancelDialog} color="secondary">
                        No
                    </Button>
                    <Button onClick={handleConfirmCancel} color="primary" autoFocus>
                        Sí, cancelar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Mensajes de éxito y error como antes */}
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