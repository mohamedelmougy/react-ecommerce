import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import EditCouponHook from '../../hook/coupon/edit-coupon-hook';
import { useParams } from 'react-router-dom';

const AdminEditCoupon = () => {
   const {id} =   useParams()
    const [
        couponName,
        couponDate,
        couponValue,
        onChangeName,
        onChangeDate,
        onChangeValue,
        onSubmit,
      ]= EditCouponHook(id);
    
  return (
    <div>
    <Row className="justify-content-start ">
      <div className="admin-content-text pb-4">تعديل بيانات الكوبون</div>
      <Col sm="8">
        <input
          value={couponName}
          onChange={onChangeName}
          type="text"
          className="input-form d-block mt-3 px-3"
          placeholder="اسم الكوبون"
        />
        <input
          value={couponDate}
          onChange={onChangeDate}
          type="text"
          className="input-form d-block mt-3 px-3"
          placeholder="تاريخ الانتهاء"
        />
        <input
          value={couponValue}
          onChange={onChangeValue}
          type="number"
          className="input-form d-block mt-3 px-3"
          placeholder="نسبة خصم الكوبون"
        />
      </Col>
    </Row>
    <Row>
      <Col sm="8" className="d-flex justify-content-end ">
        <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
          حفظ التعديل
        </button>
      </Col>
    </Row>
   
    <ToastContainer />
  </div>
  )
}

export default AdminEditCoupon
