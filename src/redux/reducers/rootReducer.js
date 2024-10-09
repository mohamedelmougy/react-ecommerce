import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import addToWishListReducer from "./wishListReducer";
import couponReducer from './couponReducer';
import userAddressesReducer from "./userAddressesReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";


export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allproducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  addToWishListReducer:addToWishListReducer,
  couponReducer:couponReducer,
  userAddressesReducer:userAddressesReducer,
  cartReducer:cartReducer,
  checkoutReducer:checkoutReducer,
  orderReducer:orderReducer,
});
