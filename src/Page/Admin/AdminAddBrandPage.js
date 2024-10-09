import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'


const AdminAddBrandPage = () => {
  return (
    <Container>
        <Row className='py-3'>

            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>

            <Col sm="9" xs="10" md="10" >
            <AdminAddBrand/>
            </Col>

        </Row>
    </Container>
  )
}

export default AdminAddBrandPage
