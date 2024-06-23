import Book from "./book";

interface BookSearchResult {
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: Book;
    totalItems: number;
}

export default BookSearchResult;