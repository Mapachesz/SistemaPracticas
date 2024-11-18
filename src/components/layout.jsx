import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Dashboard from '../pages/dashboard';
import BitacoraPage from '../pages/bitacora_page';
import Ofertas from '../pages/ofertas';
import Empresas from '../pages/empresas';
import DetalleOferta from './detalleoferta';
import PostulacionExitosa from './PostulacionExistosa';
import DetalleEmpresa from './detalleempresa';
import HistorialPostulaciones from '../pages/historial_postulaciones';
import DashboardEmpresa from '../pages/dashboard_empresas';
import OfertasEmpresas from '../pages/oferta_empresa';
import LoginEmpresa from '../pages/loginempresa';
import DatosEmpresa from './DatosEmpresa';
import PerfilEmpresa from '../pages/PerfilEmpresa';
import LoginEstudiante from '../pages/loginestudiante';
import HistorialPostulantes from '../pages/historialpostulantes';

const Layout = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/bitacora" element={<BitacoraPage />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/detalle-oferta/:offerId" element={<DetalleOferta />} />
            <Route path="/postulacion-exitosa" element={<PostulacionExitosa />} />
            <Route path="/detalle-empresa/:empresaId" element={<DetalleEmpresa />} />
            <Route path="/historial" element={<HistorialPostulaciones />} />
            <Route path="/login_estudiante" element={<LoginEstudiante />} />

            <Route path="/dashboard_empresas" element={<DashboardEmpresa />} /> 
            <Route path="/ofertas_empresas" element={<OfertasEmpresas />} />  {/* Ruta para ver ofertas */}
            <Route path="/login_empresa" element={<LoginEmpresa />} />
            <Route path="/datos_empresa" element={<DatosEmpresa />} />
            <Route path="/perfil_empresa" element={<PerfilEmpresa />} />
            <Route path="/historialpostulantes" element={<HistorialPostulantes />} />


          </Routes>
    </BrowserRouter>
  )
}

export default Layout
