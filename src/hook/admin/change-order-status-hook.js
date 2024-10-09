import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeOrderDeliver, changeOrderPay, getAllOrder, getOneOrder } from '../../redux/actions/orderAction';
import notify from '../useNotification';


const ChangeOrderStatusHook = (id) => {
   
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);

    const changePayOrder = async () => {
        if (pay === "true") {
            console.log(pay)
            setLoading(true);
            await dispatch(changeOrderPay(id))
            setLoading(false);
        } else if (pay === "0") {
            console.log("من فضلك اختر قيمة")
        }
      };


    const changeDeliverOrder = async () => {
        if (deliver === "true") {
            setLoadingDeliver(true);
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false);
        } else if (deliver === "0") {
            console.log("من فضلك اختر قيمة")
        }
      };

       // get order pay change
  const resOneOrder = useSelector((state) => state.orderReducer.changePay);
  useEffect(() => {
    if (loading === false) {
        if (resOneOrder && resOneOrder.status === 200) {
            notify("تم تغيير الحالة الدفع بنجاح","success")
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } else {
            notify("هناك مشكلة في عملية التغيير","error")
        }
    }
  }, [loading]);



       // get order deliver change
  const resDeliverOrder = useSelector((state) => state.orderReducer.changeDeliver);
  useEffect(() => {
    if (loadingDeliver === false) {
        if (resDeliverOrder && resDeliverOrder.status === 200) {
            notify("تم تغيير الحالة التوصيل بنجاح","success")
            setTimeout(() => {
                window.location.reload()
            }, 1000);

        } else {
            notify("هناك مشكلة في عملية التغيير","error")
        }
        console.log(resDeliverOrder)
    }
  }, [loadingDeliver]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

    const onChangePaid=(e)=> {
        setPay(e.target.value)
    }
    const onChangeDeliver=(e)=> {
        setDeliver(e.target.value)
    }


  return [formatDate,onChangePaid, changePayOrder, onChangeDeliver,changeDeliverOrder ]

}

export default ChangeOrderStatusHook
