export const actions = {
  FETCH_PRODUCT_SUCCESS: "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAIL: "FETCH_PRODUCT_FAIL"
};

export const initalState = {
  products: [],
  selectedProduct: null,
  error: null
};

export function productReducer(state, action) {
  switch (action.type) {
    case actions.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null
      };
    case actions.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;
  }
};
