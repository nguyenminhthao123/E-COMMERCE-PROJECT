import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    
    case LOAD_PRODUCTS:{
      let maxPrice=action.payload.map((product)=>{
        return product.price;
      })
      maxPrice = Math.max(...maxPrice)
     return {
       ...state,
       all_products:action.payload,
       filter_products:action.payload,
       filter:{
         ...state.filter,
         max_price:maxPrice,
         price:maxPrice
       }
     }
    }
    case SET_GRIDVIEW:{
      return {
        ...state,
        girdView:true,
        listView:false
      }
    }
    case SET_LISTVIEW:{
      return {
        ...state,
        listView:true,
        girdView:false
      }
    }
    case UPDATE_SORT:{
      return {
        ...state,
        sort:action.payload
      }
    }
    case SORT_PRODUCTS:{
      const {sort,filter_products}=state
      if(sort==="price-lowest")
      {
        var newProduct=filter_products.sort((a,b)=>{
          return a.price - b.price;
        })
      }
      if(sort==="price-highest")
      {
       newProduct=filter_products.sort((a,b)=>{
          return b.price - a.price;
        })
      }
      if(sort==="name-a")
      {
         newProduct=filter_products.sort((a,b)=>{
         if (a.name>b.name) return 1;
         if (a.name<b.name) return -1;
         return 0;
        })
      }
      if(sort==="name-z")
      {
         newProduct=filter_products.sort((a,b)=>{
          if (a.name>b.name) return -1;
         if (a.name<b.name) return 1;
         return 0;
        })
      }
      return {
        ...state,
        filter_products:newProduct
      }
    }
    case UPDATE_FILTERS:{
      const {name,value} =action.payload
      return {
        ...state,
        filter: {...state.filter,[name]:value}
      }
    }
    case FILTER_PRODUCTS:{
      const {filter:{text,category,company,color,price,shipping},all_products}=state
      let newProductFilter=[...all_products]
      if(text)
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.name.toLowerCase().includes(text.toLowerCase())===true
        })
      }
     
      if (category!=='all')
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.category===category
        })
      }
      if (company!=='all')
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.company===company
        })
      }
      if (color!=='all')
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.colors.includes(color)
        })
        
      }
      if (price)
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.price <= price
        })
        
      }
      if (shipping)
      {
        newProductFilter=newProductFilter.filter((product)=>{
          return product.shipping
        })
        
      }
     
      return {
        ...state,
        filter_products:newProductFilter
      }
    }
    case CLEAR_FILTERS:{
      return {
        ...state,
        filter: {
          ...state.filter,
          text:'',
          category:'all',
          company:'all',
          color:'all',
          price:action.payload,
          shipping:false,
      
        }
      }
    }
    default:return state
  }
  
}

export default filter_reducer
