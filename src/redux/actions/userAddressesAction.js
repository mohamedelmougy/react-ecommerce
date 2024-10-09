import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { ADD_USER_ADDRESS,GET_ALL_USER_ADDRESS ,DELETE_USER_ADDRESS,GET_ONE_USER_ADDRESS, EDIT_USER_ADDRESS } from "../type";
import useDeleteData from "./../../hooks/useDeleteData";

// Add user addresses
export const addUserAddress = (body) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/addresses", body);
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: e.response,
    });
  }
};


// Get all user addresses
export const getAllUserAddress = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/v1/addresses");
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// Delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/addresses/${id}`);
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: e.response,
    });
  }
};



// Get one user addresses
export const getOneUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses/${id}`);
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: e.response,
    });
  }
};





// Edit user address
export const editUserAddress = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/addresses/${id}`,body);
    console.log(response)
    dispatch({
      type: EDIT_USER_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_USER_ADDRESS,
      payload: e.response,
    });
  }
};

