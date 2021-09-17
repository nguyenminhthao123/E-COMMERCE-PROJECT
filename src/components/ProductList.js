import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {all_products,girdView,listView} =useFilterContext()
  if (all_products.length <1) {
    return (<h5 style={{textTransform:'none'}}>Sorry, no products matched your search.</h5>)
  }
  return <>
 {girdView && <GridView all_products={all_products}/>}
 {listView && <ListView all_products={all_products} /> }
  </>
}

export default ProductList
