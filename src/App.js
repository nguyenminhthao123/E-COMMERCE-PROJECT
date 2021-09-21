import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AboutPage, AuthWrapper, CheckoutPage, ErrorPage, HomePage, ProductsPage, SingleProductPage, CartPage, PrivateRoute } from './pages'

function App() {


  return (<>
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <PrivateRoute path="/checkout" exact>
            <CheckoutPage />
          </PrivateRoute>
          <Route path="/products/:id" exact>
            <SingleProductPage />
          </Route>
          <Route path="*" exact>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>



  </>)
}

export default App
