import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    getStorage();
    sortData();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${priceFromString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  // when click pagination
  const onPress = async (page) => {
    getStorage();
    sortData(); 
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${priceFromString}${priceToString}`
      )
    );
  };
  let priceFromString = "",
    priceToString = "";
  let word = "",
    queryCat = "",
    brandCat = "",
    priceTo = "",
    priceFrom = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catChecked") != null) {
      queryCat = localStorage.getItem("catChecked");
    }
    if (localStorage.getItem("brandChecked") != null) {
      brandCat = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  try {
    if (allProducts) {
      items = allProducts?.data;
    } else {
      items = [];
    }
  } catch (e) {}

  let pagination = [];
  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPage;
    } else {
      pagination = [];
    }
  } catch (e) {}

  let result = 0;
  try {
    if (allProducts.results) {
      result = allProducts.results;
    } else {
      result = 0;
    }
  } catch (e) {}

  // when user choose sort type
  let sortType = "";
  let sort;

  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-quantity";
    } else if (sortType === "") {
      sort = "";
    }
  };

  return [items, pagination, onPress, getProduct, result];
};

export default ViewSearchProductsHook;
