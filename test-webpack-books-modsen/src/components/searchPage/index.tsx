import React, { useCallback, useRef, useState } from "react";
import useBooks from "../../hooks/useBooks";
import LoadState from "../../types/loadState";
import BookElement from "./../bookElement";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addToStartIndex } from "../../redux/slices/searchInfoSlice";
import BookSearchResult from "../../types/bookSearchResult";
import Book from "../../types/book";
import { setBook } from "../../redux/slices/bookSlice";
import "./searchPage.scss";

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchInfo = useAppSelector((state) => state.searchInfo);

  const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });
  const booksBuffer = useRef<any>({ items: [], searchInfo: searchInfo });

  const loadedBooks = useBooks({
    search: searchInfo.search,
    maxResults: 30,
    startIndex: searchInfo.startIndex,
    orderBy: searchInfo.filter,
    category: searchInfo.category,
  });

  const onClickLoadmore = useCallback(() => {
    dispatch(addToStartIndex({ count: 30 }));
  }, [dispatch, addToStartIndex]);

  const onElementClick = useCallback(
    (book: Book) => {
      dispatch(setBook(book));
    },
    [dispatch, setBook]
  );

  if (loadedBooks.state == LoadState.Success) {
    books.current = {
      totalItems: loadedBooks.data.totalItems,
      items: [...booksBuffer.current.items, ...loadedBooks.data.items],
    };
  } else if (loadedBooks.state == LoadState.Loading) {
    if (
      booksBuffer.current.searchInfo.search !== searchInfo.search ||
      booksBuffer.current.searchInfo.filter !== searchInfo.filter ||
      booksBuffer.current.searchInfo.category !== searchInfo.category
    ) {
      booksBuffer.current = { items: [], searchInfo: searchInfo };
    } else {
      booksBuffer.current = {
        items: books.current.items,
        searchInfo: searchInfo,
      };
    }
  }

  return (
    <div className="searchpage">
      <h1 className="sawarabi-gothic-regular searchpage-itemcount">
        {books.current.totalItems > 0 ? <>Найдено {books.current.totalItems}</> : <>Ничего не найдено</>}
      </h1>
      {books.current.items.length > 0 && (
        <>
          {loadedBooks.state == LoadState.Loading && <h1 className="searchpage-info">Загрузка...</h1>}
          <div className="searchpage-content">
            {books.current.items.map((item, i) => {
              return <BookElement key={i} book={item} onClick={onElementClick} />;
            })}
          </div>
        </>
      )}

      {loadedBooks.state == LoadState.Loading && <h1 className="searchpage-info">Загрузка...</h1>}

      {loadedBooks.state == LoadState.Failed && <h1 className="searchpage-info">ОШИБКА: {loadedBooks.error?.message}</h1>}

      {loadedBooks.state == LoadState.Success && loadedBooks.data.items.length == 30 && (
        <div className="searchpage-loadmore">
          <input type="button" value="Ещё 30" onClick={onClickLoadmore} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
