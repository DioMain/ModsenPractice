import React from "react";
import { Book } from "@apptypes/bookTypes";
import bookimgplaceholder from "@assets/img/book-placeholder.png";
import "./style.scss";

const CartPage: React.FC<{ book: Book }> = ({ book }) => {
  let volume = book.volumeInfo;

  return (
    <div className="cartpage">
      <div className="cartpage-img">
        {volume.imageLinks ? (
          <>
            {volume.imageLinks.large ? (
              <img src={volume.imageLinks.large} />
            ) : (
              <img src={volume.imageLinks.thumbnail} />
            )}
          </>
        ) : (
          <img src={bookimgplaceholder} />
        )}
      </div>
      <div className="cartpage-content">
        <div className="cartpage-content-category">
          {volume.categories &&
            volume.categories.map((item, index) => {
              return (
                <span key={index}>
                  {item} {volume.categories.length - 1 && <> / </>}
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
