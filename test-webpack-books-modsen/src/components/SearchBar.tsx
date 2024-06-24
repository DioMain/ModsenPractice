import React, { useCallback, useRef } from "react";
import InputSearch from "./inputSearch";

import '../styles/searchBar.scss';
import InputSelect from "./inputSelect";
import { useAppDispatch } from "../redux/hooks";
import { setSearchInfo } from "../redux/slicers/searchInfoSlice";

const SearchBar: React.FC = () => {
  const search = useRef("");
  const category = useRef("all");
  const filter = useRef("revelance");

  const dispatch = useAppDispatch();
  
  const onSubmitCallback = useCallback(() => {
    dispatch(setSearchInfo({ search: search.current, category: category.current, filter: filter.current, startIndex: 0 }));
  }, [dispatch, search, category, filter]);

  const onCategoryChangedCallback = useCallback((evt: any) => {

  }, [category])

  return (
    <header className="searchbar">
      <h1 className="searchbar-title sawarabi-gothic-bold">Поиск книг</h1>
      <div className="searchbar-row1">
        <InputSearch onSearchSubmit={onSubmitCallback} onTextChanged={(text) => { search.current = text }} />
      </div>
      <div className="searchbar-row2">
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Категория</div>
          <InputSelect>
            <option>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </InputSelect>
        </div>
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Сортировка по</div>
          <InputSelect>
            <option>Релевантность</option>
            <option>Новое</option>
          </InputSelect>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;