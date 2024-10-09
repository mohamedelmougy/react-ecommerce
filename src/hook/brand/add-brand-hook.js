import React, { useEffect, useState } from 'react'
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotification";
import { createBrand } from '../../redux/actions/brandAction';

const AddBrandHook = () => {
    const dispatch = useDispatch();

    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
  
// to change name state
  const onChangeName=(event)=> {
    event.persist();
    setName(event.target.value)
  }



    // when image change save it
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImg(URL.createObjectURL(event.target.files[0]));
        setSelectedFile(event.target.files[0]);
      }
    };
  
    const res = useSelector((state) => state.allBrand.brand);
  
    // save data in database
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (name === "" || selectedFile === null) {
        notify("من فضلك ادخل البيانات", "warn");
        return;
      }
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectedFile);
      setLoading(true);
      setIsPress(true);
      console.log("جاري التحميل");
      await dispatch(createBrand(formData));
  
      setLoading(false);
    };
  
    useEffect(() => {
      if (loading === false) {
        setName("");
        setImg(avatar);
        setSelectedFile(null);
        console.log("تم الانتهاء");
        setLoading(true);
        setTimeout(() => setIsPress(false), 1000);
        if (res.status === 201) {
          notify("تمت عملية الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكلة في عملية الاضافة", "error");
        }
      }
    }, [loading]);
  
  return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName ]

}

export default AddBrandHook
