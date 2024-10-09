import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/products/view-products-details-hook";


const ProductDetailsPage = () => {
  const { id } = useParams();

   const [item, images, cat, brand, prod] = ViewProductsDetailsHook(id);
   try {
    if (prod) {
      var items = prod.slice(0,4)
    }
   } catch (e) {}
   
   try {
    if (item){
      var rateAvg =item.ratingsAverage;
      var rateQty =item.ratingsQuantity;
    }
   } catch (e) {}
 



 
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
        <CardProductsContainer products={items} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
