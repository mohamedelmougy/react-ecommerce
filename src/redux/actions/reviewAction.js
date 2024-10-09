import { CREATE_REVIEW ,ALL_REVIEW_PRODUCT, DELETE_REVIEW, UPDATE_REVIEW} from "../type";
import {useGetDataToken} from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";


// Create Rate
export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/products/${prodID}/reviews`,body);

    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};
// get all review to one product
export const allReviewProduct = (prodID, page,limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`);

    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: e.response,
    });
  }
};


// delete review to one product
export const deleteReviewOnProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/reviews/${id}`);

    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

// update review to one product
export const apdateReviewOnProduct = (id,body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/reviews/${id}`, body);

    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};