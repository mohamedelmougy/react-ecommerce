import { ADD_COUPON, GET_ALL_COUPON,DELETE_COUPON, GET_ONE_COUPON, EDIT_COUPON } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import {useGetDataToken} from '../../hooks/useGetData'
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from '../../hooks/useUpdateData';

// Add coupon
export const addCouponAction = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupons`, body);

    dispatch({
      type: ADD_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.response,
    });
  }
};
// Get all coupon
export const getAllCouponAction = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons`);
    dispatch({
      type: GET_ALL_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.response,
    });
  }
};


// Get one coupon
export const getOneCouponAction = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_ONE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_COUPON,
      payload: e.response,
    });
  }
};


// Delete coupon
export const deleteCouponAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: DELETE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload: e.response,
    });
  }
};

// Edit coupon
export const editCouponAction = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/coupons/${id}`, body);
    dispatch({
      type: EDIT_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_COUPON,
      payload: e.response,
    });
  }
};
