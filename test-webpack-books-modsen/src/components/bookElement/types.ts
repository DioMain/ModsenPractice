import { Book } from "../../types/bookTypes";
import PropsBase from "../../types/propsBase";

interface BookElementProps extends PropsBase {
  book: Book;
  onClick?: (book: Book) => void;
}

export default BookElementProps;
