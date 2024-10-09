import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCouponAction,
  editCouponAction,
  getOneCouponAction,
} from "../../redux/actions/couponAction";
import notify from "./../useNotification";
import { useNavigate } from 'react-router-dom';

const EditCouponHook = (id) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);


  const oneCoupon = useSelector((state) => state.couponReducer.oneCoupon);

  useEffect(() => {
    const get = async () => {
        setLoadingData(true)
      await dispatch(getOneCouponAction(id));
      setLoadingData(false)
    };
    get();

  }, []);



    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

  useEffect(() => {
if (loadingData === false) {
    if (oneCoupon?.data) {
        setCouponName(oneCoupon?.data?.name)
        setCouponDate(formatDate(oneCoupon?.data?.expire))
        setCouponValue(oneCoupon?.data?.discount)
    }  
}
  }, [loadingData])
  

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
      editCouponAction(id,{
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.editCoupon);


  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/admin/addcoupon")
        }, 1000); 
      } else {
        notify("فشل عملية التعديل", "error");
      }
    }
  }, [loading]);




  return [
    couponName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
  ];
};

export default EditCouponHook
