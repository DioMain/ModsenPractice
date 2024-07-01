import React, { useState } from "react";
import SearchBar from "./../searchBar";
import { useAppSelector } from "../../hooks/reduxHooks";
import CartPage from "./../cartPage";
import SearchPage from "./../searchPage";

function App() {
  const currentBook = useAppSelector((state) => state.book.value);

  return (
    <>
      <SearchBar />

      {currentBook ? <CartPage book={currentBook} /> : <SearchPage />}
    </>
  );
}

export default App;
