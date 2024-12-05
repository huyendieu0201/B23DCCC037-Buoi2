export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
