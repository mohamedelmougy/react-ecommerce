import React from "react";
import UserAddressCard from "./UserAddressCard";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";

const UserAllAddresses = () => {
  const [res] = ViewAddressesHook();
  
  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العناوين</div>
      {
        res? (res?.data?.map((item, index)=> {
          return (
            <UserAddressCard item={item} key={index}/>
          )
        })) :  <h6>لا يوجد عناوين حتي الان</h6>
      }
      

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddresses;
