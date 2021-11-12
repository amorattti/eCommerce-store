import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styled components assets
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './index.css.js';
import { LoadingIndicator } from './components'
// routing components
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Menu from './core/Menu'

import { Wrapper } from './components';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Menu />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp

