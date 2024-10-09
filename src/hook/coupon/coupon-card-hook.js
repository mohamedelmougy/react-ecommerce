import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCouponAction } from "../../redux/actions/couponAction";

const CouponCardHook = (coupon) => {
  const dispatch = useDispatch();

  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteCouponAction(coupon._id));
    setShow(false);
    window.location.reload();
  };

  return [formatDate, dateString, show, handleClose, handleShow, handleDelete];
};

export default CouponCardHook;
