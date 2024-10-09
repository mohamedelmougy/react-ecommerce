import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Utility/SubTiltle";
import CategoryCard from "../Category/CategoryCard";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import HomeCategoryHook from "./../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [category, loading, colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category?.data ? (
            category?.data?.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  id={item._id}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}

                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
