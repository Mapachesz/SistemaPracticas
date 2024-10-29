import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { Box, Typography, Button } from '@mui/material';
import Header from '../components/header';

function DetalleEmpresa() {
    const { empresaId } = useParams(); // Captura el ID de la empresa de la URL
    const navigate = useNavigate();

    // Busca la empresa correspondiente, asegurando que coincida con la ID
    const empresa = empresasData.find(empresa => empresa.id === empresaId);

    // Manejo de caso si la empresa no se encuentra
    if (!empresa) {
        return (
            <Box sx={{ padding: 40, color: '#FFF' }}>
                <Typography variant="h4" gutterBottom>
                    Empresa no encontrada
                </Typography>
                <Button variant="contained" onClick={() => navigate('/empresas')}>
                    Regresar
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: '10px', color: '#FFF', marginLeft: { md: '250px' } }}>
                <Header />
                <Box sx={{ flex: 1, padding: '40px', color: '#FFF' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 4 }}>
                        Detalles de {empresa.nombreEmpresa} {/* Usar nombre de la empresa para mostrar */}
                    </Typography>

                    {/* Detalles Empresa Ofertante */}
                    <Box sx={{
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFF' }}>
                            Detalles Empresa
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Nombre Empresa: {empresa.nombreEmpresa}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Tamaño de la empresa: {empresa.tamañoEmpresa}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Años de antigüedad: {empresa.antiguedad}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Área o campo laboral: {empresa.campoLaboral}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Ubicación demográfica: {empresa.ubicacion}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Alcance: {empresa.alcance}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Remuneración Promedio: {empresa.remuneracionProm}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Ofertas vigentes: {empresa.ofertasVigentes}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Número de contacto: {empresa.numeroContacto}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Correo: {empresa.correo}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                            Calificación: {empresa.calificacion}
                        </Typography>
                    </Box>

                    {/* Botones de navegación */}
                    <Box display="flex" justifyContent="flex-end" marginTop="20px" gap={2}>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/empresas')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff7043',
                                },
                                width: { xs: '100%', sm: '150px' },
                            }}
                        >
                            Regresar
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/ofertas')}
                            sx={{
                                backgroundColor: '#ff4500',
                                color: '#FFF',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff5722',
                                },
                                width: { xs: '100%', sm: '150px' },
                            }}
                        >
                            Buscar ofertas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DetalleEmpresa;
