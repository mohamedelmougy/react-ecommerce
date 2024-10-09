import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import { useDispatch } from 'react-redux';
import ProfileHook from '../../hook/user/profile-hook';
import { ToastContainer } from 'react-toastify';

const UserProfile = () => {
const [
    user,
    show,
    handleShow,
    handleClose,
    handleSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] =ProfileHook()

    return (
        <div>
            <div className="admin-content-text">الصفحه الشخصية</div>


            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title><div className='font'>تعديل البيانات الشخصية</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <input
                value={name}
                onChange={onChangeName}
                type="text"
                className="input-form font d-block mt-3 px-3"
                placeholder="اسم المستخدم"
            />
            <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                className="input-form font d-block mt-3 px-3"
                placeholder="الايميل"
            />
            <input
                value={phone}
                onChange={onChangePhone}
                type="phone"
                className="input-form font d-block mt-3 px-3"
                placeholder="الهاتف"
            />
            </Modal.Body>
            <Modal.Footer>
              <Button className='font' variant="secondary" onClick={handleClose}>
                تراجع
              </Button>
              <Button className='font' variant="primary" onClick={handleSubmit}>
               حفظ التعديل
              </Button>
            </Modal.Footer>
          </Modal>


            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">تغير كملة المرور</div>

                        
                        <input
                            value={oldPassword}
                            onChange={onChangeOldPass}
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                        />
                        <input
                            value={newPassword}
                            onChange={onChangeNewPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                        />
                        <input
                            value={confirmNewPassword}
                            onChange={onChangeConfirmPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="تأكيد كلمة المرور الجديدة"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button onClick={changePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserProfile
