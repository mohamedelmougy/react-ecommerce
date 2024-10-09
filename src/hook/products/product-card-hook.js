import React, { useEffect, useState } from "react";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductFromWishList,
} from "../../redux/actions/wishListAction";
import notify from "./../../hook/useNotification";

const ProductCardHook = ( item, favProd) => {
    const dispatch = useDispatch();

    const [favImg, setFavImg] = useState(favoff);
    let Fav =favProd.some(fitem=> fitem === item._id)
    const [loadingAdd, setLoadingAdd] = useState(true);
    const [loadingRemove, setLoadingRemove] = useState(true);
    const [isFav, setIsFav] = useState(Fav);
  
  useEffect(() => {
    setIsFav(favProd.some(fitem=> fitem === item._id))
  }, [favProd])
  
    const handleFav = () => {
      if (isFav) {
          RemoveFromWishListData();
      } else {
        addToWishListReducerData()
      }
    };
  
    useEffect(() => {
      if (isFav=== true) {
        setFavImg(favon)
      } else {
        setFavImg(favoff)
      }
    }, [isFav]);
  
    const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
    const resRemove = useSelector((state) => state.addToWishListReducer.removeWishList);
  
    const addToWishListReducerData = async () => {
      setIsFav(true)
      setFavImg(favon)
      setLoadingAdd(true)
      await dispatch(
        addProductToWishList({
          productId: item._id,
        })
      );
      setLoadingAdd(false)
    };
  
  
  
    const RemoveFromWishListData = async () => {
      setIsFav(false)
      setFavImg(favoff)
      setLoadingRemove(true)
      await dispatch(removeProductFromWishList(item._id));
      setLoadingRemove(false)
    };
    useEffect(() => {
      if (loadingAdd === false) {
        console.log(resAdd.status)
        if (resAdd && resAdd.status === 200) {
          notify("تمت اضافة المنتج للمفضلة بنجاح", "success");
        } else if (resAdd && resAdd.status === 401) {
          notify("انت غير مسجل", "error");
        }
      }
  
    }, [loadingAdd])
  
  
    useEffect(() => {
      if (loadingRemove === false) {
     
        if (resRemove && resRemove.status ==="success") {
          notify("تمت حذف المنتج للمفضلة بنجاح", "warn");
        }else if (resAdd && resAdd.status === 401) {
          notify("انت غير مسجل", "error");
        }
      }
    }, [loadingRemove])
  
  return [handleFav, favImg]
}

export default ProductCardHook
