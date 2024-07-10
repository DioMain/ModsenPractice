import IconButtonProps from "./types";
import "./style.scss";
import React from "react";

const IconButton: React.FC<IconButtonProps> = ({ image, className, style, onClick }) => {
  return (
    <div className={`iconbutton ${className}`} style={style} onClick={onClick}>
      <img src={image} />
    </div>
  );
};

export default IconButton;
