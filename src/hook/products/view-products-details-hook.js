import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductsDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike);
  const [loading, setLoading] = useState(false);
  // const [item, setItem] = useState([])
  //to show products item
  let item = [];
  if (oneProducts?.data) item = oneProducts?.data;
  else item = [];

  useEffect(() => {
    if (!loading) {
      if (item?.category && item.brand) {
        dispatch(getOneCategory(item.category));
        dispatch(getOneBrand(item.brand));
        dispatch(getProductLike(item.category));
      }
      setLoading(true)
    }
  }, [item?.category, item.brand, dispatch]);

  // to view images gallery
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${mobile}` }];
  }

  // to show category item
  let cat = [];
  if (oneCategory?.data) {
    cat = oneCategory?.data;
  } else {
    cat = [];
  }

  //to show brand item
  let brand = [];
  if (oneBrand?.data) brand = oneBrand?.data;
  else brand = [];

  let prod = [];
  if (productLike) prod = productLike?.data;
  else prod = [];

  return [item, images, cat, brand, prod];
};

export default ViewProductsDetailsHook;
