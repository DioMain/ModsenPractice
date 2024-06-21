import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBook } from "../../redux/slicers/bookSlice";

const SearchBar: React.FC = () => {
  let dispatch = useAppDispatch();

  let click = useCallback(() => {
    dispatch(setBook({ title: "asd" }))
  }, [dispatch]);

  return (
    <>
      <input type="button" onClick={click} value={"adsd"}/>
    </>
  );
}

export default SearchBar;