import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteIcon from "../../images/delete.png";
import editIcon from "../../images/edit.png";
import Modal from "react-bootstrap/Modal";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import { ToastContainer } from "react-toastify";
import EditRateHook from "../../hook/review/edit-rate-hook";
import ReactStars from "react-rating-stars-component";
const RateItem = ({ review }) => {
  const [isUser, handleDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(review);
  const  [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  ] = EditRateHook(review);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متأكد من حذف التقييم</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="primary" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />
          <input
            onChange={onChangeRateText}
            value={newRateText}
            type="text"
            className="font w-100"
            style={{ border: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font"
            variant="secondary"
            onClick={handleCloseEdit}
          >
            تراجع
          </Button>
          <Button className="font" variant="primary" onClick={handleEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{review.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{review.review}</div>

          {isUser ? (
            <div className=" d-flex justify-content-end">
              <img
                onClick={handleShow}
                src={deleteIcon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />
              <img
                onClick={handleShowEdit}
                src={editIcon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />
            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
