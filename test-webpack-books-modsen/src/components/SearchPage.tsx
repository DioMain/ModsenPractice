import React from "react";
import BookSearchData from "../types/bookSearchData";
import useBooks from "../hooks/useBooks";
import LoadState from "../enums/loadState";
import BookElement from "./bookElement";

import '../styles/searchPage.scss';

const SearchPage: React.FC<{ searchInfo: BookSearchData }> = ({ searchInfo }) => {

  const books = useBooks(searchInfo.search);

  if (books.state == LoadState.Loading)
    return (<div>Loading...</div>);

  if (books.state == LoadState.Failed)
    return (<div>ERROR: {books.error?.message}</div>);

  console.log(books.data);

  return (
    <div>
      {
        books.data.map((item, i) => {
          return (<div key={i}><BookElement book={item.volumeInfo}/><br/></div>);
        })
      }
    </div>
  );
}

export default SearchPage;