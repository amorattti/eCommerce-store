import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styled components assets
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import GlobalStyles from './index.css.js'
import { LoadingIndicator } from './components'
// routing components
import Home from './core/pages/Home/Home.js'
import Signin from './user/Signin'
import Signup from './user/Signup'

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import DashboardUser from './user/Dashboards/UserDashboard'
import DashboardAdmin from './user/Dashboards/AdminDashboard'
import PrivateUserRoute from './auth/PrivateUserRoute'
import PrivateAdminRoute from './auth/PrivateAdminRoute'
import NotFound404 from './components/NotFound404'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Footer from './components/Footer/Footer'
import Shop from './core/pages/Shop/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="shop" element={<Shop />} />
        <Route element={<PrivateUserRoute />}>
          <Route path="user/dashboard" element={<DashboardUser />} />
        </Route>
        <Route element={<PrivateAdminRoute />}>
          <Route path="admin/dashboard" element={<DashboardAdmin />} />
          <Route path="create/category" element={<AddCategory />} />
          <Route path="create/product" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
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

