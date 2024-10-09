import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandAction";
import { getOneSubCategory } from "../../redux/actions/subcategoryAction";
import {
  createProduct,
  getOneProduct,
  updateProducts,
} from "../../redux/actions/productsAction";
import notify from "./../../hook/useNotification";
const AdminEditProductHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);

  // get one product details
  const item = useSelector((state) => state.allproducts.oneProduct);

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);

  // get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last sub cat state from redux
  const subCat = useSelector((state) => state.subCategory.subcategory);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const [options, setOptions] = useState([]);

  // values images products
  const [images, setImages] = useState([]);
  // values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [CatID, setCatID] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [subCatID, setsubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setImages(item?.data?.images)
      setProdName(item?.data?.title);
      setProdDescription(item?.data?.description);
      setPriceBefore(item?.data?.price);
      setQty(item?.data?.quantity);
      setCatID(item?.data?.category)
      setBrandID(item?.data?.brand)
      setColors(item?.data?.availableColors)
    }
  }, [item]);

  // to change product name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  // to change product Description  state
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  // to change price before state
  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  // to change price after state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  // to change qty state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  // to change color state
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  // to show hide color picker
  const [showColor, setShowColor] = useState(false);
  // to store all pick color
  const [colors, setColors] = useState([]);
  // to choose new color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  // when select category store id
  const onSelectCategory = async (e) => {
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID != 0) {
      console.log(CatID)
      const run =async ()=> {
        await dispatch(getOneSubCategory(CatID));
      }
      run();
  
    }
  }, [CatID]);

  useEffect(() => {
    if (subCat.data) {
      setOptions(subCat?.data);
    }
  }, [subCat])
  
  // when select brand store id
  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  // to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }



   //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };


  // to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      CatID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    } 

    let imgCover
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then(val =>imgCover = val)
    } else {
          // convert base 64 image to file
     imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }


    let itemImages =[];
    // convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        if (images[index].length <= 1000) {
          convertURLtoFile(images[index]).then(val =>itemImages.push(val))
        } else {
          itemImages.push(dataURLtoFile(images[index], Math.random() + ".png")) ;
        }
      }
    );

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", CatID);
    formData.append("brand", BrandID);

      setTimeout(() => {
        formData.append("imageCover", imgCover);
        itemImages.map((item) => formData.append("images", item));
      }, 1000);

    colors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id,formData));
      setLoading(false);
    }, 1000);




  };

  // get create message
  const product = useSelector((state) => state.allproducts.updateProducts);

  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 200) {
          notify("تم التعديل بنجاح", "success");
        } else {
          notify("هناك مشكلة", "error");
        }
      }
    }
  }, [loading]);

  return [
    onChangeProdName,
    onChangeDesName,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeQty,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    CatID,
    BrandID,
  ];
};

export default AdminEditProductHook;
