import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filter_products: [],
  all_products: [],
  girdView: true,
  listView:false,
  sort:'price-lowest',
  filter: {
    text:'',
    category:'all',
    company:'all',
    color:'all',
    min_price:0,
    max_price:0,
    price:0,
    shipping:false,

  }

}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { products } = useProductsContext()
  const girdViews=()=>{
    dispatch({type:SET_GRIDVIEW})
  }
  const listViews=()=>{
    dispatch({type:SET_LISTVIEW})
  }
  const sortProducts= (e)=>{
   const value=  e.target.value;
    dispatch({type:UPDATE_SORT, payload:value})
  }
  const filterProducts=  (e)=>{
    let name=e.target.name
    let value=e.target.value
    if(name==="category")
    {
      value=(e.target.textContent)
    }
    if (name==="shipping")
    {
      value=e.target.checked
    }
    console.log(value);
   
    dispatch({type:UPDATE_FILTERS,payload:{name,value}})
   }
   const clearFilters=(price)=>{
     dispatch({type:CLEAR_FILTERS,payload:price})
   }
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  useEffect(() => {
    dispatch({ type:FILTER_PRODUCTS})
    dispatch({ type:SORT_PRODUCTS})
    
  },[state.sort,products,state.filter])
  return (
    <FilterContext.Provider value={{
      ...state,
      girdViews,
      listViews,
      sortProducts,
      filterProducts,
      clearFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
