import React, { useCallback, useState } from "react";
import PropsBase from "../../types/propsBase";

import "./../../styles/inputSelect.scss";

interface InputSelectProps extends PropsBase {
  onSelectionChanged?: (value: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({ className, style, children, onSelectionChanged }) => {
  const selectionChangedCallback = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      if (onSelectionChanged != undefined)
        onSelectionChanged(evt.currentTarget.value);
    },
    [onSelectionChanged]
  );

  return (
    <select
      className={`inputselect sawarabi-gothic-regular ${className}`}
      style={style}
      onChange={selectionChangedCallback}
    >
      {children}
    </select>
  );
};

export default InputSelect;
