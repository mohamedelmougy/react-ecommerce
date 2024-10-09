import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotification";
import addProductToCart, { applyCouponCart } from '../../redux/actions/cartAction';
import { useNavigate } from 'react-router-dom';

const ApplyCouponHook = (cartItems) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [couponName, setCouponName] = useState("")
    const [loading, setLoading] = useState(true)
    
    const onChangeCoupon=(e)=> {
        setCouponName(e)
    }
    const handleSubmitCoupon= async()=> {
        if (couponName === "") {
            notify("من فضلك ادخل الكوبون","warn")
            return
        }
        setLoading(true)
        await dispatch(applyCouponCart({
            couponName:couponName
        }))
        setLoading(false)
    }

    const res= useSelector(state => state.cartReducer.applyCoupon)

    useEffect(() => {
        if (loading === false) {
            console.log(res)
         if (res && res.status === 200) {
          notify("تم تطبيق الكوبون بنجاح","success")
          setTimeout(() => {
            window.location.reload()
          }, 1000);
         } else {
          notify("هذا الكوبون غير صحيح او منتهي الصلاحية","warn")
          setTimeout(() => {
            window.location.reload()
          }, 1000);
         }
        }
      }, [loading])

      const handleCheckOut=()=>{
        if (cartItems.length  >=1) {
          navigate("/order/paymethoud")
        } else {
          notify("من فضلك اضف منتجات للعربة اولا","warn")
        }
    
      }


    return [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckOut]
}

export default ApplyCouponHook
