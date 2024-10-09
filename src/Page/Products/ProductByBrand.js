import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ViewSearchProductsHook from '../../hook/products/view-search-products-hook'
import { useParams } from 'react-router-dom'
import Pagination from './../../Components/Utility/Pagination';
import ViewAllProductBrandHook from '../../hook/products/view-all-product-brand-hook'

const ProductByBrand = () => {

  
    const {id} = useParams()
 const [items, pagination, onPress] = ViewAllProductBrandHook(id)


  if (pagination) {
    var  pageCount = pagination
  } else {
    pageCount = 0
  }


  return (
    <div style={{ minHeight: "670px" }}>
    <Container>
      <Row className="d-flex flex-row">

        <Col sm="12">
          <CardProductsContainer products={items} title="" btntitle="" />
        </Col>
      </Row>
      <Pagination pageCount={pageCount} onPress={onPress}/>
    </Container>
  </div>
  )
}

export default ProductByBrand
