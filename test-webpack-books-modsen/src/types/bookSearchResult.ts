import Book from "./book";

interface BookSearchResult {
    items: Book[];
    totalItems: number
}

export default BookSearchResult;