import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/actions/authAction";
import notify from "../useNotification";
import {apdateReviewOnProduct,} from "../../redux/actions/reviewAction";

const EditRateHook = (review) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };
  const onChangeRateValue= (val) => {
    setNewRateValue(val);
  };

  const handleEdit = async () => {
    setLoading(true);
    await dispatch(apdateReviewOnProduct(review._id, 
        {
            review: newRateText,
            rating: newRateValue
        }));
    setLoading(false);
    handleCloseEdit();
  };

  const res = useSelector((state) => state.reviewReducer.updateReview);
  useEffect(() => {
    if (loading === false) {
        console.log(res)
      if (res.status && res.status === 200) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notify("هناك مشكلة في عملية التعديل", "error");
      }
    }
  }, [loading]);

  return [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  ];
};

export default EditRateHook;
