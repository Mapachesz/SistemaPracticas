import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Dashboard from '../pages/dashboard';
import BitacoraPage from '../pages/bitacora_page';

const Layout = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bitacora" element={<BitacoraPage />} />
          </Routes>
    </BrowserRouter>
  )
}

export default Layout
