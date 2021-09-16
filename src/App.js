import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AboutPage, AuthWrapper, CheckoutPage, ErrorPage, HomePage, ProductsPage, SingleProductPage, CartPage, PrivateRoute } from './pages'

function App() {


  return (<>
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
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/products/:id" exact>
          <SingleProductPage />
        </Route>
        <Route path="*" exact>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>


  </>)
}

export default App
