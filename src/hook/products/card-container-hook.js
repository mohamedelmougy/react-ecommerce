import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "../../redux/actions/wishListAction";

const CardContainerHook = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [favProd, setFavProd] = useState([]);
  
    const res = useSelector((state) => state.addToWishListReducer.allWishList);
  
    useEffect(() => {
      const get = async () => {
        setLoading(true);
        await dispatch(getProductWishList());
        setLoading(false);
      };
      get();
    }, []);
  
    useEffect(() => {
      if (loading === false) {
        if (Array.isArray(res?.data)) {
          setFavProd(res?.data?.map(item => item._id))
        }
      }
    }, [loading])


    return [favProd]
    
}

export default CardContainerHook
