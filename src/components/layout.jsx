import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'

const Layout = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
    </BrowserRouter>
  )
}

export default Layout
