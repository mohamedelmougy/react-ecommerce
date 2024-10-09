import React from "react";
import next from "../../images/next.png";

const LeftButton = (onClick, onDisable) => {
  return (
    <div>
      <img
        src={next}
        alt=""
        width="35px"
        onClick={onClick}
        onDisable={onDisable}
        height="35px"
        style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
      />
    </div>
  );
};

export default LeftButton;
