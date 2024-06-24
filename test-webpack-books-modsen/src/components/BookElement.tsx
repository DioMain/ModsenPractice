import React, { useCallback } from "react";
import Book from "../types/book";

import '../styles/bookElement.scss';
import PropsBase from "../types/propsBase";

interface BookElementProps extends PropsBase {
  book: Book;
  onClick?: (book: Book) => void;
}

const BookElement: React.FC<BookElementProps> = ({ book, onClick, style, className }) => {

  const onClickCallback = useCallback(() => {

    if (onClick != undefined)
      onClick(book);
      
  }, [onClick, book])

  return (
    <div className={`bookelement ${className}`} style={style} onClick={onClickCallback}>
      <div className="bookelement-img">
        {
          book.volumeInfo.imageLinks != undefined ?
            <img src={book.volumeInfo.imageLinks.thumbnail} /> :
            <img src="/book-placeholder.png" />
        }
      </div>
      <div className="bookelement-category">{book.volumeInfo.categories != undefined ? book.volumeInfo.categories[0] : "Без категории" }</div>
      <div className="bookelement-title">{book.volumeInfo.title}</div>
      <div className="bookelement-author">{book.volumeInfo.authors != undefined ? book.volumeInfo.authors[0] : "Автор не указан" }</div>
    </div>
  );
}

export default BookElement;