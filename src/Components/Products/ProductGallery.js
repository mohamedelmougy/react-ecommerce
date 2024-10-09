import React, { useMemo } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductGallery = () => {
  const { id } = useParams();
  const oneProducts = useSelector((state) => state.allproducts.oneProduct);

  // product-gallary-card d-flex
  const images = useMemo(() => {
    return oneProducts?.data?.images
      ? oneProducts?.data?.images?.map((img) => ({ original: img }))
      : [{ original: mobile }];
  }, [oneProducts?.data]);  
  return (
    <div
      className="justfiy-content-center  align-items-center pt-2"
      style={{
        marginTop: "5rem",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
        height: "400px",
        overflow:"hidden"
      }}
    >
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        showThumbnails={false}
        // renderRightNav={RightButton}
        // renderLeftNav={LeftButton} 
      />
    </div>
  );
};

export default ProductGallery;
