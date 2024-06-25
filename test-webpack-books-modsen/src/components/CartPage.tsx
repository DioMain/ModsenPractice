import React from "react";
import Book from "../types/book";

import "../styles/cartPage.scss";

const CartPage: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="cartpage">
      <div className="cartpage-img">
        {
          book.volumeInfo.imageLinks.large != undefined ?
          <img src={book.volumeInfo.imageLinks.large} /> :
          <img src={book.volumeInfo.imageLinks.thumbnail} />
        }
      </div>
      <div className="cartpage-content">
        <div className="cartpage-content-category">
          {book.volumeInfo.categories != undefined &&
            book.volumeInfo.categories.map((item, index) => {
              if (index == book.volumeInfo.categories.length - 1)
                return <span id="index">{item}</span>;
              else return <span id="index">{item} / </span>;
            })}
        </div>
        <div className="cartpage-content-title">{book.volumeInfo.title}</div>
        <div className="cartpage-content-author">
          {book.volumeInfo.authors != undefined && book.volumeInfo.authors[0]}
        </div>
        <div className="cartpage-content-description">
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
