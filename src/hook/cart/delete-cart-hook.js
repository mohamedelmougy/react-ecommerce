import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  clearAllUserCartItems,
  deleteCartItems,
  updateCartItems,
} from "../../redux/actions/cartAction";
import notify from "./../useNotification";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handleDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllUserCartItems());
    setLoading(false);
  };

  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };

  useEffect(() => {
    if (item) {
      setItemCount(item.count);
    }
  }, []);

  const res = useSelector((state) => state.cartReducer.clearCart);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteItem = async () => {
    await dispatch(deleteCartItems(item._id));
    setShow(false);
    window.location.reload();
  };

  const handleUpdateCart = async () => {
    await dispatch(
      updateCartItems(item._id, {
        count: itemCount,
      })
    );
    window.location.reload();
  };

  return [
    handleDeleteCart,
    show,
    handleClose,
    handleShow,
    handleDeleteItem,
    itemCount,
    onChangeCount,
    handleUpdateCart,
  ];
};

export default DeleteCartHook;
