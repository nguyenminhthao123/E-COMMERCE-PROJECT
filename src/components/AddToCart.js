import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product}) => {
  const {addCart}= useCartContext()
  const {colors ,stock ,id }=product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount]=useState(1)
  const increaseAmount=()=>{
    setAmount(prevamount=>{
      let templateAmount=prevamount +1
      if (templateAmount>stock)
      {
        templateAmount=stock
      }
      return templateAmount 
    })
  }
  const decreaseAmount=()=>{
    setAmount(prevamount=>{
      let templateAmount=prevamount - 1
      if (templateAmount<1)
      {
        templateAmount=1
      }
      return templateAmount 
    })
  }
  return <Wrapper>
    <div className="colors">
      <span>Colors:</span>
      <div>
        {colors.map((color, index) => {
          return <button key={index} className={mainColor === color ? 'active color-btn' : 'color-btn'} style={{ backgroundColor: `${color}` }}
            onClick={() => setMainColor(color)}
          >
            {mainColor === color ? <FaCheck /> : null}
          </button>
        })}
      </div>
    </div>
    <div className="btn-container">
      <AmountButtons stock={stock} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} amount={amount}/>
    </div>
    <Link to='/cart' className="btn" onClick={()=>addCart(id,mainColor,amount,product)}>Add To Cart</Link>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
