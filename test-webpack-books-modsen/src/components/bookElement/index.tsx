import React from "react";
import Book from "../../types/book";

const BookElement: React.FC<{ book: Book }> = ({ book }) => {

  return (
    <div>
      {book.title} : {book.authors?.map((i, index) => <span key={index}>{i} </span>)}
      <br/>
      {book.description}
    </div>
  );
}

export default BookElement;