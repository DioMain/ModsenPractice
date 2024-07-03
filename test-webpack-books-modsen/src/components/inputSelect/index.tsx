import React, { useCallback } from "react";
import InputSelectProps from "./types";
import "./style.scss";

const InputSelect: React.FC<InputSelectProps> = ({ className, style, children, onSelectionChanged }) => {
  const selectionChanged = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      if (onSelectionChanged) onSelectionChanged(evt.currentTarget.value);
    },
    [onSelectionChanged]
  );

  return (
    <select className={`inputselect sawarabi-gothic-regular ${className}`} style={style} onChange={selectionChanged}>
      {children}
    </select>
  );
};

export default InputSelect;
