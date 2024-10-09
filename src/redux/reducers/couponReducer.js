import { ADD_COUPON , GET_ALL_COUPON, DELETE_COUPON, GET_ONE_COUPON, EDIT_COUPON} from "../type";

const initial = {
  addCoupon: [],
  allCoupon:[],
  deleteCoupon:[],
  oneCoupon:[], 
  editCoupon:[]
};

const couponReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };
    case GET_ALL_COUPON:  
      return {
        ...state,
        allCoupon: action.payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };
    case GET_ONE_COUPON:
      return {
        ...state,
        oneCoupon: action.payload,
      };
    case EDIT_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default couponReducer;
