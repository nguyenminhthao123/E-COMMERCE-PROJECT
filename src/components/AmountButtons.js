import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({stock}) => {
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
   <button onClick={decreaseAmount}><FaMinus/></button>
   <h2>{amount}</h2>
   <button onClick={increaseAmount}><FaPlus/></button>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
