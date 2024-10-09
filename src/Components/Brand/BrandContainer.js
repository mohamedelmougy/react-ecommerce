import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import AllBrandHook from '../../hook/brand/all-brand-page-hook';

const BrandContainer = ({data, loading}) => {


  return (
    <Container>
    <div className="admin-content-text mt-2 ">كل الماركات</div>
    <Row className="my-2 d-flex justify-content-between">

    {loading === false ? (
      data?.length ? (
        data?.map((item, index) => {
          return <BrandCard id={item._id} key={index} img={item.image} />;
        })
      ) : (
        <h4>لا يوجد ماركات</h4>
      )
    ) : (
      <Spinner animation="border" variant="primary" />
    )}
    </Row>
  </Container>
  )
}

export default BrandContainer
