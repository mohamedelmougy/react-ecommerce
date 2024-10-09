import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import { ToastContainer } from "react-toastify";
import ApplyCouponHook from "../../hook/cart/apply-coupon-hook";
import notify from "../../hook/useNotification";

const CartCheckout = ({ totalCartPrice, totalCartPriceAfterDiscount, couponNameRes, cartItems }) => {
  const navigate = useNavigate()
  const [
    handleDeleteCart,
    show,
    handleClose,
    handleShow,
    handleDeleteItem,
    itemCount,
    onChangeCount,
    handleUpdateCart,
  ] = DeleteCartHook();

const [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckOut] =ApplyCouponHook(cartItems)

useEffect(() => {
    if (couponNameRes) {
        onChangeCoupon(couponNameRes)
    }
}, [couponNameRes])



  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={ e => onChangeCoupon(e.target.value)}
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">تطبيق</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {
            totalCartPriceAfterDiscount >=1 ?
            `${totalCartPrice} جنيه...بعد الخصم ${totalCartPriceAfterDiscount}` :
            `${totalCartPrice} جنيه`
          }
        </div>
   
          <button onClick={handleCheckOut} className="product-cart-add w-100 px-2 d-inline "> اتمام الشراء</button>

        <button
          onClick={handleDeleteCart}
          className="product-cart-add w-100 px-2 my-1"
        >
          مسح العربة
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
