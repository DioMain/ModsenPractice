import React, { useCallback } from "react";
import "./bookElement.scss";
import BookElementProps from "./bookElementProps";

const BookElement: React.FC<BookElementProps> = ({ book, onClick, style, className }) => {
  const volume = book.volumeInfo;

  const onElementClick = useCallback(() => {
    if (onClick) onClick(book);
  }, [onClick, book]);

  return (
    <div className={`bookelement ${className}`} style={style} onClick={onElementClick}>
      <div className="bookelement-img">
        {volume.imageLinks ? <img src={volume.imageLinks.thumbnail} /> : <img src="/book-placeholder.png" />}
      </div>
      <div className="bookelement-category">{volume.categories ? volume.categories[0] : "Без категории"}</div>
      <div className="bookelement-title">{volume.title}</div>
      <div className="bookelement-author">{volume.authors ? volume.authors[0] : "Автор не указан"}</div>
    </div>
  );
};

export default BookElement;
