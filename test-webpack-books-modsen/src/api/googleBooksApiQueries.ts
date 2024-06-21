import axios from "axios";
import BookSearchResult from "../types/bookSearchResult";
import global from '../global';

class GoogleBooksApiQueries {
    public static async GetBooks(search: string): Promise<BookSearchResult[]> {
        let responce = await axios.get(global.googleApiUrl as string, {
            params: {
                q: search,
                key: global.googleApiKey
            }
        });

        return responce.data.items;
    }

    public static async GetBook(bookId: string): Promise<BookSearchResult> {
        let responce = await axios.get(global.googleApiUrl + `/${bookId}` as string, {
            params: {
                key: global.googleApiKey
            }
        });

        return responce.data;
    }
}

export default GoogleBooksApiQueries;