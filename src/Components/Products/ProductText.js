import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/products/view-products-details-hook";
import AddToCardHook from "../../hook/cart/add-to-card-hook";
import { ToastContainer } from "react-toastify";

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat] = ViewProductsDetailsHook(id);

  
  const  [colorClick, indexcolor, addToCartHandle]=AddToCardHook(id, item)

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
           {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">سامسنوج </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">

        {
          item.availableColors? (item.availableColors.map((color, index)=> {
            return (
              <div
              key={index}
              onClick={()=> colorClick(index, color)}
              className="color ms-2 "
              style={{ backgroundColor: color, border: indexcolor === index?"3px solid black":"none" }}
            ></div>
            )
          })) :   null
        }
        </Col>
        <div className="cat-text d-inline">الكمية المتاحة : {item.quantity}</div>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
          {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
        {
          item.priceAfterDiscount >= 1 ?(
            <div className="product-price d-inline px-3 py-3 border">
            <span style={{textDecorationLine:"line-through"}}>{item.price}</span> {item.priceAfterDiscount} جنيه
          </div>
          )  : <div className="product-price d-inline px-3 py-3 border"><span>{item.price}</span> جنيه </div>
        }
          <div onClick={addToCartHandle} className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
