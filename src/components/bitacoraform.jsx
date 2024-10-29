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

function BitacoraForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false); // Para el mensaje de error

    // Estados para los campos del formulario
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
        // Verificar si hay campos vacíos
        if (!horaInicio || !horasColacion || !horaTermino || !fecha || !trabajoRealizado || !trabajoPorHacer) {
            setOpenErrorSnackbar(true); // Muestra mensaje de error
            return; // Detiene la ejecución si hay campos vacíos
        }

        // Reiniciar los campos del formulario
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

            {/* Botón de guardar */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#FF5722',
                        ':hover': { backgroundColor: '#E64A19' },
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenDialog}
                >
                    GUARDAR BITÁCORA
                </Button>
            </Box>

            {/* Confirmar acción */}
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

            {/* Mensaje de éxito */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message="Bitácora guardada exitosamente"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />

            {/* Mensaje de error */}
            <Snackbar
                open={openErrorSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseErrorSnackbar}
                message="Por favor, complete todos los campos."
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    );
}

export default BitacoraForm;
