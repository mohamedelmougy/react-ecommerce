import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST} from "../type";

const initial = {
  addWishList:[],
  removeWishList:[],
  allWishList:[],
  loading: true,
};

const addToWishListReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.payload,
        loading: false,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishList: action.payload,
        loading: false,
      };
    case USER_WISHLIST:
      return {
        ...state,
        allWishList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default addToWishListReducer;
