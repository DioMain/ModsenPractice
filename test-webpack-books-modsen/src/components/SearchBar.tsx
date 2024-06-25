import React, { useCallback, useRef } from "react";
import InputSearch from "./inputSearch";

import "../styles/searchBar.scss";
import InputSelect from "./inputSelect";
import { useAppDispatch } from "../redux/hooks";
import { setSearchInfo } from "../redux/slicers/searchInfoSlice";
import { setBook } from "../redux/slicers/bookSlice";

const SearchBar: React.FC = () => {
  const search = useRef("");
  const category = useRef("all");
  const filter = useRef("relevance");

  const dispatch = useAppDispatch();

  const onSubmitCallback = useCallback(() => {
    dispatch(setBook(undefined));
    dispatch(
      setSearchInfo({
        search: search.current,
        category: category.current,
        filter: filter.current,
        startIndex: 0,
      })
    );
  }, [dispatch, search, category, filter]);

  const onCategoryChangedCallback = useCallback(
    (value: string) => {
      category.current = value;
    },
    [category]
  );

  const onFilterChangedCallback = useCallback(
    (value: string) => {
      filter.current = value;
    },
    [filter]
  );

  return (
    <header className="searchbar">
      <h1 className="searchbar-title sawarabi-gothic-bold">Поиск книг</h1>
      <div className="searchbar-row1">
        <InputSearch
          onSearchSubmit={onSubmitCallback}
          onTextChanged={(text) => {
            search.current = text;
          }}
        />
      </div>
      <div className="searchbar-row2">
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">
            Категория
          </div>
          <InputSelect onSelectionChanged={onCategoryChangedCallback}>
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
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">
            Сортировка по
          </div>
          <InputSelect onSelectionChanged={onFilterChangedCallback}>
            <option>relevance</option>
            <option>newest</option>
          </InputSelect>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
