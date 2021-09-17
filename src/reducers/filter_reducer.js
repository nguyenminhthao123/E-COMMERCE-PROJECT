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
     return {
       ...state,
       all_products:action.payload,
       filter_products:action.payload
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
    default:return state
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
