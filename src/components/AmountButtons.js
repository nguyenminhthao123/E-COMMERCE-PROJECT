import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useUserContext } from '../context/user_context'
const AmountButtons = ({increaseAmount,decreaseAmount,amount}) => {
const { isCheckout } = useUserContext()
  
  return <Wrapper >
    <div className={isCheckout ? 'pk':'wrappers'}>
    {isCheckout && < button onClick={decreaseAmount}><FaMinus/></button>}
   
   <h2>{amount}</h2>
   {isCheckout &&  <button onClick={increaseAmount}><FaPlus/></button>}
    </div>
   
  
  </Wrapper>
}

const Wrapper = styled.div`
.pk{
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}
.wrappers{
  display: grid;
  width: 140px;
  justify-items: center;
  align-items: center;
}
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
