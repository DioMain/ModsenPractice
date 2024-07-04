import { Book } from "@apptypes/bookTypes";
import PropsBase from "@apptypes/propsBase";

interface BookElementProps extends PropsBase {
  book: Book;
  onClick?: (book: Book) => void;
}

export default BookElementProps;
