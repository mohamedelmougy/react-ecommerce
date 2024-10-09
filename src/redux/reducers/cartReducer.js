import {  ADD_TO_CART,GET_ALL_USER_CART,CLEAR_ALL_USER_CART, DELETE_ITEM_FROM_CART, UPDATE_ITEM_FROM_CART , APPLY_COUPON_CART} from "../type";

const initial = {
  addToCart: [],
  getAllUserCart:[],
  clearCart:[],
  deleteItem:[],
  updateItem:[],
  applyCoupon:[],
};

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case GET_ALL_USER_CART:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_ALL_USER_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        deleteItem: action.payload,
      };
    case UPDATE_ITEM_FROM_CART:
      return {
        ...state,
        updateItem: action.payload,
      };
    case APPLY_COUPON_CART:
      return {
        ...state,
        applyCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;


