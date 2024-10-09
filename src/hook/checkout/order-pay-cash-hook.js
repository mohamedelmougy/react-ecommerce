import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUserAddress } from "../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "../cart/get-all-user-cart-hook";
import notify from './../useNotification';
import { createOrderCash } from "../../redux/actions/checkoutAction";

const OrderPayCashHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);
  const [addressDetails, setAddressDetails] = useState([]);


  const [, , , , , cartID] = GetAllUserCartHook();

  // when change address by user
  const handleChooseAddress = (e) => {
    setAddressDetails([]);
    if (e.target.value !== "0") {
      get(e.target.value);
    }
  };

  const get = async (id) => {
    setLoading(true);
    await dispatch(getOneUserAddress(id));
    setLoading(false);
  };

  // get address details for user
  const resAddress = useSelector(
    (state) => state.userAddressesReducer.oneAddress
  );
  useEffect(() => {
    if (loading === false) {
        // console.log(resAddress)
      if (resAddress && resAddress.status === "success") {
        setAddressDetails(resAddress?.data);
      } else {
        setAddressDetails([]);
      }
    }
  }, [loading]);


  // when user click pay
  const handleCreateOrderCash= async()=> {
        if (cartID === "0") {
            notify("من فضلك اضف منتجات الي العربة اولا","warn")
            return
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوانا اولا","warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID,{
            shippingAddress:{
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
                }
        }))
        setLoadingCreate(false)
  }



// get response for create order cash
const resOrderCash = useSelector(
    (state) => state.checkoutReducer.createOrderCash
  );
  useEffect(() => {
    if (loadingCreate === false) {
        // console.log(resOrderCash)
      if (resOrderCash && resOrderCash.status ===201) {
        notify("تم انشاء طلبك بنجاح","success")
        setTimeout(() => {
            navigate("/user/allorders")
            window.location.reload()
        }, 1500);
      } else {
        notify("فشل في اتمام الطلب من فضلك حاول مرة اخري","warn")
      }
    }
  }, [loadingCreate]);


  return [handleChooseAddress, addressDetails, handleCreateOrderCash];
};

export default OrderPayCashHook;
