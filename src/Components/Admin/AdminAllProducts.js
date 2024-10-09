import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = ({products}) => {
  
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">

      {
        products ?(products.map((item, index)=> {
          return (
            <AdminAllProductsCard key={index} item={item} />
          )
        })) :   <h4>لا يوجد منتجات حتي الان</h4>
      }
        

      </Row>
    </div>
  );
};

export default AdminAllProducts;
