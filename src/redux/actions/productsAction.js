
import useDeleteData from "../../hooks/useDeleteData";
import {useGetData} from "../../hooks/useGetData";
import {  useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import { CREATE_PRODUCTS, GET_ERROR,GET_ALL_PRODUCTS,GET_ALL_PRODUCTS_CATEGORY, GET_PRODUCTS_DETAILS, GET_PRODUCTS_LIKE, DELETE_PRODUCTS, UPDATE_PRODUCTS, GET_ALL_PRODUCTS_BRAND } from "../type";

// create product with pagination 
export const createProduct = (formatData) => async (dispatch) => {
    try {
      const response = await useInsertDataWithImage("/api/v1/products", formatData);
  
      dispatch({
        type: CREATE_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
// get all product with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?limit=${limit}`);
      // console.log(response)
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };



// get all product by category
export const getAllProductsByCategory = (page,limit, categoryID) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}`);
      // console.log(response)
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: e.response,
      });
    }
  };




// get all product by brand
export const getAllProductsByBrand = (page,limit, brandID) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}`);
      // console.log(response)
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: e.response,
      });
    }
  };







  // get all product with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

  // get all product with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products/${id}`);
  
      dispatch({
        type: GET_PRODUCTS_DETAILS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
// get one product with id
export const getProductLike = (id) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products/?category=${id}`);
  
      dispatch({
        type: GET_PRODUCTS_LIKE,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
// delete product with id
export const deleteProducts = (id) => async (dispatch) => {
    try {
      const response = await useDeleteData(`/api/v1/products/${id}`);
  
      dispatch({
        type: DELETE_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };


// update product with id
export const updateProducts = (id, data) => async (dispatch) => {
    try {
      const response = await useUpdateDataWithImage(`/api/v1/products/${id}`,data);
  
      dispatch({  
        type: UPDATE_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };