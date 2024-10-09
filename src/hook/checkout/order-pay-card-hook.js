import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUserAddress } from "../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "../cart/get-all-user-cart-hook";
import notify from "./../useNotification";
import { createOrderCard, createOrderCash } from "../../redux/actions/checkoutAction";

const OrderPayCardHook = (addressDetails) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  const [, , , , , cartID] = GetAllUserCartHook();

  // when user click pay
  const handleCreateOrderCard = async () => {
    if (cartID === "0") {
      notify("من فضلك اضف منتجات الي العربة اولا", "warn");
      return;
    }
    if (addressDetails.length <= 0) {
      notify("من فضلك اختر عنوانا اولا", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderCard(cartID, {
        shippingAddress: {
          details: addressDetails.alias,
          phone: addressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };


  // get response for create order card
const resOrderCard = useSelector((state) => state.checkoutReducer.createOrderCard);
useEffect(() => {
  if (loading === false) {
    if (resOrderCard && resOrderCard.status ==="success") {
      // notify("تم انشاء طلبك بنجاح","success")
      if(resOrderCard.session.url) {
        window.open(resOrderCard.session.url)
      }
    } else {
      notify("فشل في اتمام الطلب من فضلك حاول مرة اخري","warn")
    }
  }
}, [loading]);


  return [handleCreateOrderCard]
};

export default OrderPayCardHook;
