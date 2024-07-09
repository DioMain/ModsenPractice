import React from "react";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import useFavoriteBooks from "@hooks/useFavoritesBooks";
import User from "@apptypes/user";
import LoadState from "@apptypes/loadState";
import BookElement from "@components/bookElement";
import { Book } from "@apptypes/bookTypes";
import { setBook } from "@redux/slices/bookSlice";

const FavoritePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.value);

  const { data, state, error } = useFavoriteBooks(user as User);

  const onElementClick = (book: Book) => {
    dispatch(setBook(book));
  };

  return (
    <div className="favoritepage">
      <h1 className="sawarabi-gothic-regular favoritepage-itemcount">
        {data.totalItems > 0 ? <>Найдено {data.totalItems}</> : <>Ничего не найдено</>}
      </h1>
      {data.totalItems > 0 && (
        <>
          {state == LoadState.Loading && <h1 className="favoritepage-info">Загрузка...</h1>}
          <div className="favoritepage-content">
            {data.items.map((item, i) => {
              return <BookElement key={i} book={item} onClick={onElementClick} />;
            })}
          </div>
        </>
      )}

      {state == LoadState.Loading && <h1 className="favoritepage-info">Загрузка...</h1>}

      {state == LoadState.Failed && <h1 className="favoritepage-info">ОШИБКА: {error?.message}</h1>}
    </div>
  );
};

export default FavoritePage;
