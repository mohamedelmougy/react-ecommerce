import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/actions/authAction";
import notify from "../useNotification";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل كلمة السر", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("كلمة السر غير مطابقة مع تأكيد كلمة السر", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم تغيير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("من فضلك ادخل كود جديد", "error");
        }
      }
    }
  }, [loading]);

  return [
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;
