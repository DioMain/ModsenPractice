import React from "react";
import Book from "../../types/book";
import "./cartPage.scss";

const CartPage: React.FC<{ book: Book }> = ({ book }) => {
  let volume = book.volumeInfo;

  return (
    <div className="cartpage">
      <div className="cartpage-img">
        {volume.imageLinks.large ? <img src={volume.imageLinks.large} /> : <img src={volume.imageLinks.thumbnail} />}
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
        <div className="cartpage-content-author">{volume.authors != undefined && volume.authors[0]}</div>
        <div className="cartpage-content-description">
          <p>{volume.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
