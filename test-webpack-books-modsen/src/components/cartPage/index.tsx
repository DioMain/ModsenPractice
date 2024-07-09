import React, { useCallback } from "react";
import { Book } from "@apptypes/bookTypes";
import bookimgplaceholder from "@assets/img/book-placeholder.png";
import "./style.scss";
import IconButton from "@components/iconButton";
import BackImage from "@assets/img/back.png";
import HeartImage from "@assets/img/heart.png";
import CancelImage from "@assets/img/heartbreak.png";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { dropBook } from "@redux/slices/bookSlice";
import useBookIsFavorite from "@hooks/useBookIsFavorite";
import { addBookToFavorite, removeBookFromFavorite } from "@firebase/queries";
import User from "@apptypes/user";

const CartPage: React.FC<{ book: Book }> = ({ book }) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.value);
  const { isFavorite, setIsFavorite } = useBookIsFavorite(user, book);

  const volume = book.volumeInfo;

  const clickBack = () => {
    dispatch(dropBook());
  };

  const clickSetFavorite = useCallback(async () => {
    await addBookToFavorite(user as User, book);

    setIsFavorite(true);
  }, [user, book, setIsFavorite]);

  const clickUnsetFavorite = useCallback(async () => {
    await removeBookFromFavorite(user as User, book);

    setIsFavorite(false);
  }, [user, book, setIsFavorite]);

  return (
    <div className="cartpage">
      <div className="cartpage-img">
        {volume.imageLinks ? <img src={volume.imageLinks.thumbnail} /> : <img src={bookimgplaceholder} />}
      </div>
      <div className="cartpage-content">
        <div className="cartpage-content-backbtn">
          <IconButton image={BackImage} onClick={clickBack} />
          {user && (
            <>
              {!isFavorite ? (
                <IconButton image={HeartImage} onClick={clickSetFavorite} />
              ) : (
                <IconButton image={CancelImage} onClick={clickUnsetFavorite} />
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
