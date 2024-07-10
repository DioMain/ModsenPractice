import React, { useCallback } from "react";
import bookimgplaceholder from "@assets/img/book-placeholder.png";
import IconButton from "@components/iconButton";
import BackImage from "@assets/img/back.png";
import HeartImage from "@assets/img/heart.png";
import CancelImage from "@assets/img/heartbreak.png";
import { useAppSelector } from "@hooks/reduxHooks";
import useBookIsFavorite from "@hooks/useBookIsFavorite";
import { addBookToFavorite, removeBookFromFavorite } from "@firebase/queries";
import User from "@apptypes/user";
import useBook from "@hooks/useBook";
import "./style.scss";
import LoadState from "@apptypes/loadState";
import { Book } from "@apptypes/bookTypes";

const CartPage: React.FC = () => {
  const user = useAppSelector((state) => state.user.value);
  const hrefs = window.location.pathname.split("/");
  const book = useBook(hrefs[hrefs.length - 1]);

  const { isFavorite, setIsFavorite } = useBookIsFavorite(user, book.data);

  const clickBack = () => {
    window.location.assign("/");
  };

  const clickSetFavorite = useCallback(async () => {
    if (book.data) await addBookToFavorite(user as User, book.data);

    setIsFavorite(true);
  }, [user, book, setIsFavorite]);

  const clickUnsetFavorite = useCallback(async () => {
    if (book.data) await removeBookFromFavorite(user as User, book.data);

    setIsFavorite(false);
  }, [user, book, setIsFavorite]);

  if (book.state === LoadState.Failed) return <h3>ERROR: {book.error?.message}</h3>;
  if (book.state === LoadState.Loading) return <></>;

  const volume = (book.data as Book).volumeInfo;

  return (
    <div className="cartpage">
      <div className="cartpage-img">
        {volume?.imageLinks ? <img src={volume.imageLinks.thumbnail} /> : <img src={bookimgplaceholder} />}
      </div>
      <div className="cartpage-content">
        <div className="cartpage-content-backbtn">
          <IconButton image={BackImage} onClick={clickBack} />
          {user && (
            <>
              {isFavorite ? (
                <IconButton image={CancelImage} onClick={clickUnsetFavorite} />
              ) : (
                <IconButton image={HeartImage} onClick={clickSetFavorite} />
              )}
            </>
          )}
        </div>
        <div className="cartpage-content-category">
          {volume.categories &&
            volume.categories.map((item, index) => {
              return (
                <span key={`book-categories-${index}`}>
                  {item} {volume.categories.length > 1 && <> / </>}
                </span>
              );
            })}
        </div>
        <div className="cartpage-content-title">{volume.title}</div>
        <div className="cartpage-content-author">{volume.authors && volume.authors[0]}</div>
        <div className="cartpage-content-description">
          <p>{volume.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
