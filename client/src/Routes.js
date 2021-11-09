import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Menu from './core/Menu'

import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './index.css.js';


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp