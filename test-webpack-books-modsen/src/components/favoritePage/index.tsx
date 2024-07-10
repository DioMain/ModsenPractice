import React from "react";
import "./style.scss";
import { useAppSelector } from "@hooks/reduxHooks";
import useFavoriteBooks from "@hooks/useFavoritesBooks";
import User from "@apptypes/user";
import LoadState from "@apptypes/loadState";
import BookElement from "@components/bookElement";
import { Book } from "@apptypes/bookTypes";

const FavoritePage: React.FC = () => {
  const user = useAppSelector((state) => state.user.value);

  const { data, state, error } = useFavoriteBooks(user as User);

  const onElementClick = (book: Book) => {
    window.location.assign(`book/${book.id}`);
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

      {state == LoadState.Failed && user && <h1 className="favoritepage-info">ОШИБКА: {error?.message}</h1>}
    </div>
  );
};

export default FavoritePage;
