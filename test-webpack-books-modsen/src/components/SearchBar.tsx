import React, { useCallback } from "react";
import InputSearch from "./inputSearch";

import '../styles/searchBar.scss';
import InputSelect from "./inputSelect";

let searchText = "";

const SearchBar: React.FC<{ onSearchSubmit: Function }> = ({ onSearchSubmit }) => {
  const submit = useCallback(() => {
    onSearchSubmit({ search: searchText });
  }, [onSearchSubmit]);

  return (
    <header className="searchbar">
      <h1 className="searchbar-title sawarabi-gothic-bold">Поиск книг</h1>
      <div className="searchbar-row1">
        <InputSearch onSearchSubmit={submit} onTextChanged={(text) => { searchText = text }} />
      </div>
      <div className="searchbar-row2">
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Категория</div>
          <InputSelect>
            <option>123</option>
            <option>124</option>
            <option>124</option>
            <option>12512</option>
          </InputSelect>
        </div>
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Сортировка по</div>
          <InputSelect>
            <option>123</option>
            <option>124</option>
            <option>124</option>
            <option>12512</option>
          </InputSelect>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;