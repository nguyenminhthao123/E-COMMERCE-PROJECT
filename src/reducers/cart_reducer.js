import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, product, amount } = action.payload
      const tempItem = state.cart.find(c => c.id === id + color)
      if (tempItem) {
        let tempCart = state.cart.map((c) => {
          if (c.id === id + color) {
            let newAmount = c.amount + amount;
            if (newAmount > c.max) {
              newAmount = c.max;
            }
            return {
              ...c,
              amount: newAmount,
            }
          } else {
            return c
          }
        })
        return {
          ...state,
          cart: tempCart
        }

      } else {
        const newItemCart = {
          id: id + color,
          name: product.name,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
          color: color
        }
        return {
          ...state,
          cart: [...state.cart, newItemCart]
        }
      }

    }
    case REMOVE_CART_ITEM: {
      const tempItem = state.cart.filter((c) => {
        return c.id !== action.payload
      })
     
      return {
        ...state,
        cart:tempItem,
      }
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: []
      }
    }
    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload
      let templateAmountCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return {
              ...item,
              amount: newAmount,
            }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return {
              ...item,
              amount: newAmount
            }
          }
        }
        return item
      })
      return {
        ...state,
        cart: templateAmountCart,
      }
    }
    case COUNT_CART_TOTALS:{
      const {total,amount} =state.cart.reduce((Total,item)=>{
        Total.total +=item.amount * item.price
        Total.amount += item.amount
        return Total

      },{
        total:0,
        amount:0,
      })
     
      return {
        ...state,
        total_items: amount,
        total_amount: total,
      }
    }
    default: return state
  }
  
}

export default cart_reducer
