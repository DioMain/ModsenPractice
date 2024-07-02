import IconButtonProps from "./iconButtonProps";
import "./iconButton.scss";
import React from "react";

const IconButton: React.FC<IconButtonProps> = ({ image, className, style, onClick }) => {
  return (
    <div className={`iconbutton ${className}`} style={style} onClick={onClick}>
      <img src={image}></img>
    </div>
  );
};

export default IconButton;
