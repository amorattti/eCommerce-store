import React, { useState, createContext } from 'react'
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
import DashboardUser from './core/Dashboards/UserDashboard'
import DashboardAdmin from './core/Dashboards/AdminDashboard'
import PrivateUserRoute from './auth/PrivateUserRoute'
import PrivateAdminRoute from './auth/PrivateAdminRoute'
import NotFound404 from './components/NotFound404'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Footer from './components/Footer/Footer'
import Shop from './core/pages/Shop/Shop'
import Product from './core/pages/Product/Product'
import Cart from './core/pages/CartShopping/Cart'
import Orders from './admin/Orders'
import ManageProducts from './admin/ManageProducts'
import EditProduct from './admin/ManageProducts/EditProduct'
import { Wrapper } from './components'
import SidebarMobilePortal from './components/SidebarMobile/SidebarMobile'
import { Link } from 'react-router-dom'
import PurchaseHistory from './core/Dashboards/user/pages/purchaseHistory'
import Profile from './core/Dashboards/user/pages/profile'

import { Navigation, Logo } from './index.css.js'

export const ConfigContext = createContext()

const App = () => {
  const [searchResults, setSearchResults] = useState([]) // searchResults === Array of objects
  const [display, setDisplay] = useState(false)
  const [searchName, setSearchName] = useState('TechBooks - news') // set default Helmet title

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ConfigContext.Provider value={{
        setSearchResults,
        searchResults,
        setDisplay,
        display,
        searchName,
        setSearchName
      }}>
        <Navigation>
          <Wrapper as="nav">
            <Logo>
              <Link to="/"><span>Tech</span>Books</Link>
            </Logo>
            <Navbar />
            <Menu />
            <SidebarMobilePortal />
          </Wrapper>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="shop" element={<Shop />} />
          <Route element={<PrivateUserRoute />}>
            <Route path="user/dashboard" element={<DashboardUser />}>
              <Route index element={<PurchaseHistory />} />
              <Route path="profile/:userId" element={<Profile />} />
            </Route>
          </Route>
          <Route element={<PrivateAdminRoute />}>
            <Route path="admin/dashboard" element={<DashboardAdmin />} >
              <Route path="create/category" element={<AddCategory />} />
              <Route path="create/product" element={<AddProduct />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<ManageProducts />} />
              <Route path="update/:productId" element={<EditProduct />} />
            </Route>

          </Route>
          <Route path="product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </ConfigContext.Provider>
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




