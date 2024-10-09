import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCouponAction,
  getAllCouponAction,
} from "../../redux/actions/couponAction";
import notify from "./../useNotification";

const AddCouponHook = () => {
  const dispatch = useDispatch();

  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  
  const onChangeName = (event) => {
    event.persist();
    setCouponName(event.target.value);
  };
  const onChangeDate = (event) => {
    event.persist();
    setCouponDate(event.target.value);
  };
  const onChangeValue = (event) => {
    event.persist();
    setCouponValue(event.target.value);
  };

  const onSubmit = async () => {
    if (couponName === "" || couponDate === "" || couponValue <= 0) {
      notify("من فضلك ادخل اليانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addCouponAction({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.addCoupon);


  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
        console.log(res.status)
        notify("تم اضافة الكوبون بنجاح", "success");
        window.location.reload()
      } else if (res && res.status === 400) {
        notify("هذا الكوبون موجود من قبل  ", "error");
      } else if (res && res.status === 403) {
        notify("انت غير مسموح لك بالاضافة", "error");
      }
    }
  }, [loading]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCouponAction());
    };
    get();
  }, []);

  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);

  let coupons = [];
  try {
    if (allCoupon && allCoupon.data.length >= 1) {
      coupons = allCoupon.data;
    }
  } catch (e) {}

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
  ];
};

export default AddCouponHook;
