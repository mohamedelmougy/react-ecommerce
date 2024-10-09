import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrderItem = ({orderItem}) => {

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #{orderItem.id || 0} ... ..تم بتاريخ {formatDate(orderItem.updatedAt)}</div>
      </Row>
      {
        orderItem.cartItems ? (orderItem.cartItems.map((item, index)=> {
          return  <UserAllOrderCard key={index} item={item}/>
        })) :null
      }

      <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex justify-content-between">
          <div>
            <div className="d-inline"> التوصيل </div>
            <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? "تم " :"لم يتم "}</div>
          </div>
          <div>
            <div className="d-inline"> الدفع </div>
            <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? "تم " :"لم يتم "}</div>
          </div>
          <div>
            <div className="d-inline"> طريقة الدفع </div>
            <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === "cash" ? "كاش " :"بطاقة ائتمانية "}</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنيه</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
