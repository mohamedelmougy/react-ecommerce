import { GET_ALL_ORDER, GET_ONE_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAY} from "../type";

const initial = {
    getAllOrders: [],
    getOneOrders:[],
    changePay:[],
    changeDeliver:[],
  };
  
  const orderReducer = (state = initial, action) => {
    switch (action.type) {
      case GET_ALL_ORDER:
        return {
          ...state,
          getAllOrders: action.payload,
        };
      case GET_ONE_ORDER:
        return {
          ...state,
          getOneOrders: action.payload,
        };
      case UPDATE_ORDER_PAY:
        return {
          ...state,
          changePay: action.payload,
        };
      case UPDATE_ORDER_DELIVER:
        return {
          ...state,
          changeDeliver: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;