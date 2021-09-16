import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:{
      return {
        ...state,
        isSidebarOpen:true
      }
    }
    case SIDEBAR_CLOSE:{
      return {
        ...state,
        isSidebarOpen:false
      }
    }
    case GET_PRODUCTS_BEGIN:{
      return {
        ...state,
        products_begin:true
      }
    }
    case GET_PRODUCTS_SUCCESS:{
      const {payload:products}=action
     const products_featured= products.filter((product)=>{
        return product.featured===true
      })
      return {
        ...state,
        products_featured:products_featured.slice(0,3),
        products:products,
        products_begin:false,
      }
    }
    case GET_PRODUCTS_ERROR:{
      return {
        ...state,
        products_error:true
      }
    }
    case GET_SINGLE_PRODUCT_BEGIN:{
      return {
        ...state,
        products_single_begin:true,
      }
    }
    case GET_SINGLE_PRODUCT_SUCCESS:{
      return {
        ...state,
        products_single:action.payload,
        products_single_begin:false,
      }
    }
    case GET_SINGLE_PRODUCT_ERROR:{
      return {
        ...state,
        products_single_error:true
      }
    }
    default:return state
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
