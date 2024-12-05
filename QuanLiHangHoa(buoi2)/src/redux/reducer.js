import { SET_SEARCH_QUERY, SET_PRODUCTS } from './actions';

const initialState = {
  searchQuery: '',
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default reducer;
