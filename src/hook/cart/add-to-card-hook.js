import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotification";
import addProductToCart from '../../redux/actions/cartAction';

const AddToCardHook = (prodID, item) => {
    const dispatch = useDispatch();

    const [indexcolor, setIndexcolor] = useState("")
    const [colorText, setcolorText] = useState("")
    const [loading, setLoading] = useState(true)


  const colorClick=(index, color)=> {
    console.log(index)
    setIndexcolor(index)
    setcolorText(color)
    console.log(color)
  }
  // add product to cart
  const addToCartHandle= async()=> {
    console.log(item.availableColors)
    setLoading(true)
    if (item.availableColors.length >=1) {
      if (colorText === "") {
        notify("من فضلك اختر لون اولا للمنتج","warn")
        return
      } 
    }else {
      setcolorText("")
    }
    await dispatch(addProductToCart({
      productId: prodID,
      color:colorText
    }))
    setLoading(false)
  }

  const res = useSelector((state) => state.cartReducer.addToCart);
  
  useEffect(() => {
    if (loading === false) {
     if (res && res.status === 200) {
      notify("تمت اضافة المنتج للعربة بنجاح","success")
      setTimeout(() => {
        window.location.reload()
      }, 1000);
     } else {
      notify("قم بتسجيل الدخول اولا","warn")
     }
    }
  }, [loading])
  

  return [colorClick, indexcolor, addToCartHandle]
}

export default AddToCardHook
