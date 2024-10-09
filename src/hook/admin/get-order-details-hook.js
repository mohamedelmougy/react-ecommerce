import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrder, getOneOrder } from '../../redux/actions/orderAction';


const GetOrderDetailsHook = (id) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);




    const get = async () => {
        setLoading(true);
        await dispatch(getOneOrder(id))
        setLoading(false);
     
      };


     useEffect(() => {
        get()
     }, [])
     
 

       // get address details for user
  const resOneOrder = useSelector((state) => state.orderReducer.getOneOrders);
  useEffect(() => {
    if (loading === false) {
      if (resOneOrder?.data) {
        setOrderData(resOneOrder?.data)
      }
      if (resOneOrder?.data?.cartItems) {
        setCartItems(resOneOrder?.data?.cartItems)
      }
 
    }
  }, [loading]);


  return [orderData, cartItems]
}

export default GetOrderDetailsHook
