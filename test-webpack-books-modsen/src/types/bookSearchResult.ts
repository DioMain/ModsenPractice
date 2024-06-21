import Book from "./book";

interface BookSearchResult {
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: Book;
}

export default BookSearchResult;