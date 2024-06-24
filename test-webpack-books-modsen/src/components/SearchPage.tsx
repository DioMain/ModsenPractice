import React, { useRef, useState } from "react";
import useBooks from "../hooks/useBooks";
import LoadState from "../enums/loadState";
import BookElement from "./bookElement";
import '../styles/searchPage.scss';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToStartIndex } from "../redux/slicers/searchInfoSlice";
import BookSearchResult from "../types/bookSearchResult";
import Book from "../types/book";

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchInfo = useAppSelector(state => state.searchInfo);

  const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });
  const booksBuffer = useRef<any>({ items: [], searchInfo: searchInfo });

  const loadedBooks = useBooks({ search: searchInfo.search, maxResults: 30, startIndex: searchInfo.startIndex });

  const onClickLoadmoreCallback = () => {
    dispatch(addToStartIndex({ count: 30 }));
  };

  if (loadedBooks.state == LoadState.Success) {
    books.current = { totalItems: loadedBooks.data.totalItems, items: [...booksBuffer.current.items, ...loadedBooks.data.items] }
  }
  else if (loadedBooks.state == LoadState.Loading) {
    if (booksBuffer.current.searchInfo.search !== searchInfo.search ||
        booksBuffer.current.searchInfo.filter !== searchInfo.filter ||
        booksBuffer.current.searchInfo.category !== searchInfo.category
    ) {
      booksBuffer.current = { items: [], searchInfo: searchInfo };
    }
    else {
      booksBuffer.current = { items: books.current.items, searchInfo: searchInfo };
    }
  }

  return (
    <div className="searchpage">
      {
        books.current.items.length > 0 && (
          <>
            <h1 className="sawarabi-gothic-regular searchpage-itemcount">
              {books.current.totalItems > 0 ? (<>Найдено {books.current.totalItems}</>) : (<>Ничего не найдено</>)}
            </h1>
            {loadedBooks.state == LoadState.Loading && (<h1 className="searchpage-info">Загрузка...</h1>)}
            <div className="searchpage-content">
              {
                books.current.items.map((item, i) => {
                  return (<BookElement key={i} book={item} />);
                })
              }
            </div>
          </>
        )
      }

      {loadedBooks.state == LoadState.Loading && (<h1 className="searchpage-info">Загрузка...</h1>)}
      {loadedBooks.state == LoadState.Failed && (<h1 className="searchpage-info">ОШИБКА: {loadedBooks.error?.message}</h1>)}

      {
        loadedBooks.state == LoadState.Success && loadedBooks.data.items.length != 0 && (
          <div className="searchpage-loadmore">
            <input type="button" value="Ещё 30" onClick={onClickLoadmoreCallback}/>
          </div>
        )
      }
    </div>
  );
}

export default SearchPage;