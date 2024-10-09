import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, result] =
    ViewSearchProductsHook();
  const dispatch = useDispatch();
  // when first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);
  // to get state from redux
  const allCat = useSelector((state) => state.allCategory.category);
  // to get state from redux
  const allbrand = useSelector((state) => state.allBrand.brand);

  // to get category
  let category = [];
  if (allCat?.data) {
    category = allCat?.data;
  }
  // to get brand
  let brand = [];
  if (allbrand?.data) {
    brand = allbrand?.data;
  }
  var queryCat = "", queryBrand="";
  const [catChecked, setCatChecked] = useState([]);
  // when user press any category
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = catChecked.filter((e) => e !== value);
        setCatChecked(newArray);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map(val => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked])
  




  const [brandChecked, setBrandChecked] = useState([]);
  // when user press any category
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked])

  const [From, setPriceFrom] = useState(0)
  const [To, setPriceTo] = useState(0)
  const  pficeFrom=(e)=> {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value)
  } 
  const  pficeTo=(e)=> { 
    localStorage.setItem("priceTo",  e.target.value);
    setPriceTo(e.target.value)
  } 

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From,To])
  

  return [category, brand, clickCategory, clickBrand,pficeFrom, pficeTo];
};

export default SidebarSearchHook;
