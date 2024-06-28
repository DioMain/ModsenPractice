import React, { useCallback } from "react";
import InputSelectProps from "./inputSelectProps";
import "./inputSelect.scss";

const InputSelect: React.FC<InputSelectProps> = ({ className, style, children, onSelectionChanged }) => {
  
  const selectionChanged = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSelectionChanged)
      onSelectionChanged(evt.currentTarget.value);
  };
  
  return (
    <select
      className={`inputselect sawarabi-gothic-regular ${className}`}
      style={style}
      onChange={selectionChanged}
    >
      {children}
    </select>
  );
};

export default InputSelect;
