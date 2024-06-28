import React, { useCallback } from "react";
import './inputSearch.scss';
import InputSearchProps from "./inputSearchProps";

const InputSearch: React.FC<InputSearchProps> = ({ onSearchSubmit, onTextChanged, style, className }) => {
    const textChanged = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {   
      if (onTextChanged)
        onTextChanged(evt.target.value);

    }, [onTextChanged]);

    const searchSubmit = useCallback(() => {   
      if (onSearchSubmit)
        onSearchSubmit();

    }, [onSearchSubmit]);

    return (
      <div className={`inputsearch ${className}`} style={style}>
        <input type="text" className="sawarabi-gothic-regular inputsearch-input-text" placeholder="..." onChange={textChanged}/>
        <input type="button" className="sawarabi-gothic-regular inputsearch-input-submit" value="поиск" onClick={searchSubmit}/>
      </div>
    )
  }

export default InputSearch;