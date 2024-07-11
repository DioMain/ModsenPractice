import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addToStartIndex } from "@redux/slices/searchInfoSlice";
import { Book } from "@apptypes/bookTypes";
import useBooks from "@hooks/useBooks";
import LoadState from "@apptypes/loadState";
import BookElement from "@components/bookElement";
import searchInfoIsEqual from "@helpers/searchInfoIsEqual";
import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";
import "./style.scss";

const SearchPage: React.FC = () => {
  const maxBooksCount = 30;

  const dispatch = useAppDispatch();
  const searchInfo = useAppSelector((state) => state.searchInfo);

  const booksBuffer = useRef<GoogleBooksApiOptions>(searchInfo);

  const loadedBooks = useBooks({
    search: searchInfo.search,
    maxResults: maxBooksCount,
    startIndex: searchInfo.startIndex,
    orderBy: searchInfo.orderBy,
    category: searchInfo.category,
  });

  const onClickLoadmore = () => {
    dispatch(addToStartIndex({ count: maxBooksCount }));
  };

  const onElementClick = (book: Book) => {
    window.location.assign(`/book/${book.id}`);
  };

  if (loadedBooks.state === LoadState.Loading && !searchInfoIsEqual(booksBuffer.current, searchInfo)) {
    loadedBooks.previewData.current = { totalItems: 0, items: [] };
    booksBuffer.current = searchInfo;
  }

  return (
    <div className="searchpage">
      <h1 className="sawarabi-gothic-regular searchpage-itemcount">
        {loadedBooks.state !== LoadState.Loading && (
          <>{loadedBooks.data.totalItems > 0 ? <>Найдено {loadedBooks.data.totalItems}</> : <>Ничего не найдено</>}</>
        )}
      </h1>
      {loadedBooks.data.items.length > 0 && (
        <>
          {loadedBooks.state == LoadState.Loading && <h1 className="searchpage-info">Загрузка...</h1>}
          <div className="searchpage-content">
            {loadedBooks.data.items.map((item, i) => {
              return <BookElement key={`book-${i}`} book={item} onClick={onElementClick} />;
            })}
          </div>
        </>
      )}

      {loadedBooks.state === LoadState.Loading && <h1 className="searchpage-info">Загрузка...</h1>}

      {loadedBooks.state === LoadState.Failed && (
        <h1 className="searchpage-info">ОШИБКА: {loadedBooks.error?.message}</h1>
      )}

      {loadedBooks.state === LoadState.Success &&
        loadedBooks.data.totalItems - loadedBooks.data.items.length - maxBooksCount > 0 && (
          <div className="searchpage-loadmore">
            <input type="button" value="Ещё 30" onClick={onClickLoadmore} />
          </div>
        )}
    </div>
  );
};

export default SearchPage;
