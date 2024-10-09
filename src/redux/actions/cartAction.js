import { ADD_TO_CART,GET_ALL_USER_CART, CLEAR_ALL_USER_CART, DELETE_ITEM_FROM_CART, UPDATE_ITEM_FROM_CART, APPLY_COUPON_CART} from "../type";
import {useGetData, useGetDataToken} from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from "../../hooks/useUpdateData";


// add to cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload:  e.response,
    });
  }
};

// get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload:  e.response,
    });
  }
};

// Clear all cart items
export const clearAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart`);   
    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_USER_CART,
      payload:  e.response,
    });
  }
};



// Delete cart cart items
export const deleteCartItems = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${id}`);
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload:  e.response,
    });
  }
};



// Update cart cart items
export const updateCartItems = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/${id}`, body);
    dispatch({
      type: UPDATE_ITEM_FROM_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ITEM_FROM_CART,
      payload:  e.response,
    });
  }
};


// apply coupon cart
export const applyCouponCart = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
    dispatch({
      type: APPLY_COUPON_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON_CART,
      payload:  e.response,
    });
  }
};

export default addProductToCart
