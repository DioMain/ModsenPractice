import axios from "axios";
import BookSearchResult from "../types/bookSearchResult";
import global from '../global';
import GoogleBooksApiOptions from "../types/googleBooksApiOptions";

class GoogleBooksApiQueries {
    public static async GetBooks(options: GoogleBooksApiOptions): Promise<BookSearchResult> {
        let responce = await axios.get(global.googleApiUrl as string, {
            params: {
                q: options.category === 'all' ? options.search : `${options.search}+subject:${options.category}`,
                startIndex: options.startIndex,
                maxResults: options.maxResults,
                orderBy: options.orderBy,
                key: global.googleApiKey,
            }
        });

        return responce.data;
    }
}

export default GoogleBooksApiQueries;