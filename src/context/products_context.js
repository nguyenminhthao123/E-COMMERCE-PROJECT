import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
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

const initialState = {
  isSidebarOpen: false,
  products_begin:false,
  products:[],
  products_error:false,
  products_featured:[],
  products_single_begin:false,
  products_single:{},
  products_single_error:false,

}
const ProductsContext = React.createContext()
export const ProductsProvider = ({ children }) => {
  const [state,dispatch] =useReducer(reducer,initialState)
  const openSidebar = ()=>{
    dispatch({type: SIDEBAR_OPEN})
  }
  const closeSidebar = ()=>{
    dispatch({type: SIDEBAR_CLOSE})
  }
  const fetchProduct = async (url)=>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    try {
      const response = await axios.get(url)
      dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
      console.log(error)
    }
   
  }
  const fetchSingleProduct = async (url)=>{
    dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
    try {
      const response = await axios.get(url)
      const data =response.data
      console.log(data)
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchProduct(url)
  },[])
  return (
    <ProductsContext.Provider value={{...state,
      openSidebar,
      closeSidebar,
      fetchSingleProduct
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
