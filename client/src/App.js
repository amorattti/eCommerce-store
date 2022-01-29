import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styled components assets
import styled, { ThemeProvider } from 'styled-components'
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
import Profile from './user/Profile'
import ManageProducts from './admin/ManageProducts'
import EditProduct from './admin/ManageProducts/EditProduct'
import { Wrapper } from './components'

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState(null)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation>
        <SearchContext.Provider value={{ setSearchValue: setSearchValue }}>
          <Wrapper>
            <Navbar />
            <Menu />
          </Wrapper>
        </SearchContext.Provider>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="shop"
          element={<Shop
            searchValue={searchValue}
            setSearchValue={setSearchValue} />}
        />
        <Route element={<PrivateUserRoute />}>
          <Route path="user/dashboard" element={<DashboardUser />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Route>
        <Route element={<PrivateAdminRoute />}>
          <Route path="admin/dashboard" element={<DashboardAdmin />} />
          <Route path="create/category" element={<AddCategory />} />
          <Route path="create/product" element={<AddProduct />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="admin/products" element={<ManageProducts />} />
          <Route path="admin/update/:productId" element={<EditProduct />} />
        </Route>
        <Route path="product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
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


export const Navigation = styled.nav`
  background-color: #fff;
  box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
  z-index: 9999;
`