import React from "react";
import CartItem from "../Cart/CartItem";
import { Col, Row } from "react-bootstrap";
import UserAllOrderItem from "../User/UserAllOrderItem";
import { useParams } from "react-router-dom";
import GetOrderDetailsHook from "./../../hook/admin/get-order-details-hook";
import ChangeOrderStatusHook from "../../hook/admin/change-order-status-hook";
import { ToastContainer } from "react-toastify";

const AdminOrderDetails = () => {
  const { id } = useParams();

  const [orderData, cartItems] = GetOrderDetailsHook(id);



    const [formatDate,onChangePaid, changePayOrder , onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(id)

  return (
    <div>
      <UserAllOrderItem orderItem={orderData} />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData?.user?.name}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData?.user?.phone}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData?.user?.email}
          </div>
        </Col>

        <div className="d-flex mt-2 justify-content-center">
          <div>
            <select
              name="pay"
              id="paid"
              onChange={onChangePaid}
              className="select input-form-area mt-1  text-center w-50"
            >
              <option value="0">الدفع</option>
              <option value="true">تم</option>
              <option value="false">لم يتم</option>
            </select>
            <button onClick={changePayOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
          </div>
          <div>
            <select
              name="deliver"
              id="deliver"
              onChange={onChangeDeliver}
              className="select input-form-area mt-1  text-center w-50"
            >
            <option value="0">التوصيل</option>
            <option value="true">تم</option>
            <option value="false">لم يتم</option>
            </select>
            <button onClick={changeDeliverOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
          </div>
          <ToastContainer />
        </div>
      </Row>
      
    </div>
  );
};

export default AdminOrderDetails;
