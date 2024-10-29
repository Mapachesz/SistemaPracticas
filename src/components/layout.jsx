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
          </Routes>
    </BrowserRouter>
  )
}

export default Layout
