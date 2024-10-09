import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Utility/SubTiltle";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "../../redux/actions/wishListAction";
import CardContainerHook from "../../hook/products/card-container-hook";

const CardProductsContainer = ({ btntitle, title, pathText, products }) => {
 const [favProd] =CardContainerHook()
  return (
    <Container>
      {products ? (
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} item={item} favProd={favProd}/>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
