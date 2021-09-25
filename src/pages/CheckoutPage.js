import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import CartColumns from '../components/CartColumns'
import CartItem from '../components/CartItem'
import CartTotals from '../components/CartTotals'
const CheckoutPage = () => {
  const { user, isCheckout,location,number } = useUserContext()
  const { total_amount, cart } = useCartContext()

  return <main>
    {isCheckout && <>
      <PageHero title="Checkout"></PageHero>
      <Wrapper className="section-center page section">
        <div className="title">
          <h4> WellCome,{user.name}</h4>
          <p>Your total is {formatPrice(total_amount)}</p>
          <Link to='/cart' className='btn'>Back To Cart </Link>
        </div>
        {/* <StripeCheckout /> */}
      </Wrapper></>}
    {/* {!isCheckout && <Wrapper className='section page-100'>
      <div className='section-center'>
        <div className='header'>
          <h2>Thank you for your order!</h2>
          <p>Your order is confirmed! Review your order information below.
            We'll drop you another email when your order ships.</p>
        </div>
        <div className='idorder'>
          <div>
            <h2>order #  {Math.round(Math.random() * 10000)} </h2>
            <p>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</p>
          </div>
        </div>
        <hr></hr>
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="footer">
          <div className='footer-lef'>
            <h5>Name:{user.name}</h5>
            <h5>address:{location} </h5>
            <h5>Phone:{number}</h5>
          </div>
          <div className='footer-right'><CartTotals /></div>
        </div>
       <Link to='/' className='btn'>Go to home</Link>
      </div>

    </Wrapper>} */}
  </main>
}
const Wrapper = styled.div`
display: grid;
justify-content: center;
.header{
  display: grid;
  justify-content: center;
  h2,p{
  font-size:1.25rem;
  text-align:center;
  }
}
.title{
  margin: 1rem;
  text-align:start
}
  .idorder{
    display:flex;
    justify-content: center;
    h2{
      text-transform: uppercase;
      text-align:center;
      font-size: 1.25rem;
    }
    p{
      text-align: center;
    }
    
  }
  .footer{
    display: grid;
    gap: 1rem;
    justify-content: start;
    h5{
    }
    .footer-lef{
      margin-top:3rem;
    }
    
    p{
      width: 100%;
    }
  }
  @media (min-width:800px){
    p{
    width: 40rem;
  }
 .footer{
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 1rem;
  }
  }
  


`
export default CheckoutPage
