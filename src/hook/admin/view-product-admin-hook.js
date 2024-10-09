import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(12));
  }, []);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 12));
  };

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  // let items = [];
  // if (allProducts?.data) {
  //   items = allProducts?.data;
  // } else {
  //   items = [];
  // }

  // let pagination = [];
  // if (allProducts?.paginationResult) {
  //   pagination = allProducts?.paginationResult?.numberOfPages;
  // } else {
  //   pagination = [];
  // }

  let items = [];

  items = allProducts?.data ?? [];

  let pagination = [];

  pagination = allProducts?.paginationResult?.numberOfPages ?? [];

  return [items, pagination, onPress];
};

export default ViewProductAdminHook;
