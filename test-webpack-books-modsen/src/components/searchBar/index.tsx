import React, { useCallback, useRef } from "react";
import { useAppDispatch } from "@hooks/reduxHooks";
import InputSearch from "@components/inputSearch";
import InputSelect from "@components/inputSelect";
import { setSearchInfo } from "@redux/slices/searchInfoSlice";
import "./style.scss";

const SearchBar: React.FC = () => {
  const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];
  const filters = ["relevance", "newest"];

  const search = useRef("");
  const category = useRef("all");
  const filter = useRef("relevance");

  const dispatch = useAppDispatch();

  const onSearchSubmit = useCallback(() => {
    dispatch(
      setSearchInfo({
        search: search.current,
        category: category.current,
        orderBy: filter.current,
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
              return <option key={`category-${index}`}>{item}</option>;
            })}
          </InputSelect>
        </div>
        <div className="searchbar-row2-col">
          <div className="searchbar-row2-col-title sawarabi-gothic-bold">Сортировка по</div>
          <InputSelect onSelectionChanged={onFilterChanged}>
            {filters.map((item, index) => {
              return <option key={`filter-${index}`}>{item}</option>;
            })}
          </InputSelect>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
