import React, { useCallback, useRef } from "react";
import InputSearch from "./../inputSearch";
import "./style.scss";
import InputSelect from "./../inputSelect";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setSearchInfo } from "../../redux/slices/searchInfoSlice";
import { setBook } from "../../redux/slices/bookSlice";

const SearchBar: React.FC = () => {
  const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];

  const search = useRef("");
  const category = useRef("all");
  const filter = useRef("relevance");

  const dispatch = useAppDispatch();

  const onSearchSubmit = useCallback(() => {
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

  const onCategoryChanged = useCallback(
    (value: string) => {
      category.current = value;
    },
    [category]
  );

  const onFilterChanged = useCallback(
    (value: string) => {
      filter.current = value;
    },
    [filter]
  );

  return (
    <div className="searchbar">
      <h1 className="searchbar-title sawarabi-gothic-bold">Поиск книг</h1>
      <div className="searchbar-row1">
        <InputSearch
          onSearchSubmit={onSearchSubmit}
          onTextChanged={(text) => {
            search.current = text;
          }}
        />
      </div>
      <div className="searchbar-row2">
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Категория</div>
          <InputSelect onSelectionChanged={onCategoryChanged}>
            {categories.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </InputSelect>
        </div>
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Сортировка по</div>
          <InputSelect onSelectionChanged={onFilterChanged}>
            <option>relevance</option>
            <option>newest</option>
          </InputSelect>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
