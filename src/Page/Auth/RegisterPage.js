import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify'

const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit
  ]=RegisterHook()


  return (
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">تسجيل حساب جديد</label>
        <input
          value={name}
          onChange={onChangeName}
          placeholder="اسم المستخدم..."
          type="text"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
        value={email}
        onChange={onChangeEmail}
          placeholder="الايميل..."
          type="email"
          className="user-input my-3 text-center mx-auto"
        />
        <input
        value={phone}
        onChange={onChangePhone}
          placeholder="الهاتف..."
          type="phone"
          className="user-input text-center mx-auto"
        />
        <input
        value={password}
        onChange={onChangePassword}
          placeholder="كلمة السر..."
          type="password"
          className="user-input text-center mt-3 mx-auto"
        />
        <input
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
          placeholder="تأكيد كلمة السر..."
          type="password"
          className="user-input text-center mt-3 mx-auto"
        />
        <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
        <label className="mx-auto my-4">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              اضغط هنا
            </span>
          </Link>
        </label>
      </Col>
    </Row>
    <ToastContainer />
  </Container>
  )
}

export default RegisterPage
