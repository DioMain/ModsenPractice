import React, { useCallback, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import "./style.scss";

const FavoritePage: React.FC = () => {
  const dispatch = useAppDispatch();

  ///TODO

  return (
    /*<div className="favoritepage">
      <h1 className="sawarabi-gothic-regular favoritepage-itemcount">
        {books.current.totalItems > 0 ? <>Найдено {books.current.totalItems}</> : <>Ничего не найдено</>}
      </h1>
      {books.current.items.length > 0 && (
        <>
          {loadedBooks.state == LoadState.Loading && <h1 className="favoritepage-info">Загрузка...</h1>}
          <div className="favoritepage-content">
            {books.current.items.map((item, i) => {
              return <BookElement key={i} book={item} onClick={onElementClick} />;
            })}
          </div>
        </>
      )}

      {loadedBooks.state == LoadState.Loading && <h1 className="favoritepage-info">Загрузка...</h1>}

      {loadedBooks.state == LoadState.Failed && (
        <h1 className="favoritepage-info">ОШИБКА: {loadedBooks.error?.message}</h1>
      )}
    </div>*/
    <></>
  );
};

export default FavoritePage;
