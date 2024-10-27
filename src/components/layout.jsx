import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Dashboard from '../pages/dashboard';

const Layout = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
  )
}

export default Layout
