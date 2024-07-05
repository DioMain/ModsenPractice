import React, { useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addToStartIndex } from "@redux/slices/searchInfoSlice";
import { Book, BookSearchResult } from "@apptypes/bookTypes";
import { setBook } from "@redux/slices/bookSlice";
import useBooks from "@hooks/useBooks";
import LoadState from "@apptypes/loadState";
import BookElement from "@components/bookElement";
import "./style.scss";

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchInfo = useAppSelector((state) => state.searchInfo);

  const maxBooksCount = 30;

  const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });
  const booksBuffer = useRef<any>({ items: [], searchInfo: searchInfo });

  const loadedBooks = useBooks({
    search: searchInfo.search,
    maxResults: maxBooksCount,
    startIndex: searchInfo.startIndex,
    orderBy: searchInfo.filter,
    category: searchInfo.category,
  });

  const onClickLoadmore = useCallback(() => {
    dispatch(addToStartIndex({ count: maxBooksCount }));
  }, [dispatch]);

  const onElementClick = useCallback(
    (book: Book) => {
      dispatch(setBook(book));
    },
    [dispatch],
  );

  if (loadedBooks.state === LoadState.Success) {
    books.current = {
      totalItems: loadedBooks.data.totalItems,
      items: [...booksBuffer.current.items, ...loadedBooks.data.items],
    };
  } else if (loadedBooks.state === LoadState.Loading) {
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
              return <BookElement key={`book-${i}`} book={item} onClick={onElementClick} />;
            })}
          </div>
        </>
      )}

      {loadedBooks.state === LoadState.Loading && <h1 className="searchpage-info">Загрузка...</h1>}

      {loadedBooks.state === LoadState.Failed && (
        <h1 className="searchpage-info">ОШИБКА: {loadedBooks.error?.message}</h1>
      )}

      {loadedBooks.state === LoadState.Success && loadedBooks.data.items.length === maxBooksCount && (
        <div className="searchpage-loadmore">
          <input type="button" value="Ещё 30" onClick={onClickLoadmore} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
