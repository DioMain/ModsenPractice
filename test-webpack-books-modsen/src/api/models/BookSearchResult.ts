import Book from "./Book";

interface BookSearchResult {
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: Book;
}

export default BookSearchResult;