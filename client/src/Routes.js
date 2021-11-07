import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp