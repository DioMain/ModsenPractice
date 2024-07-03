import Book from "../../types/book";
import PropsBase from "../../types/propsBase";

interface BookElementProps extends PropsBase {
  book: Book;
  onClick?: (book: Book) => void;
}

export default BookElementProps;