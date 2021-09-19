import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filter_products,girdView,listView} =useFilterContext()
  if (filter_products.length <1) {
    return (<h5 style={{textTransform:'none'}}>Sorry, no products matched your search.</h5>)
  }
  return <>
 {girdView && <GridView filter_products={filter_products}/>}
 {listView && <ListView filter_products={filter_products} /> }
  </>
}

export default ProductList
