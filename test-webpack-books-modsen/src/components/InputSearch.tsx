import React, { useCallback, useState } from "react";

import './../styles/inputSearch.scss';
import PropsBase from "../types/propsBase";

interface InputSearchProps extends PropsBase {
  onTextChanged: (text: string) => void;
  onSearchSubmit: () => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearchSubmit, onTextChanged, style, className }) => {
    const [text, setText] = useState("");

    const textChangedCallback = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
      setText(evt.target.value);

      if (onTextChanged != undefined)
        onTextChanged(text);

    }, [setText, onTextChanged, text]);

    const submitCallback = useCallback(() => {
      
      if (onSearchSubmit != undefined)
        onSearchSubmit();

    }, [onSearchSubmit]);

    return (
      <div className={`inputsearch ${className}`} style={style}>
        <input type="text" className="sawarabi-gothic-regular inputsearch-input-text" placeholder="..." onChange={textChangedCallback}/>
        <input type="button" className="sawarabi-gothic-regular inputsearch-input-submit" value="поиск" onClick={submitCallback}/>
      </div>
    )
  }

export default InputSearch;