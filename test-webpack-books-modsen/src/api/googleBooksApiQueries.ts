import axios from "axios";
import BookSearchResult from "../types/bookSearchResult";
import global from '../global';
import GoogleBooksApiOptions from "../types/googleBooksApiOptions";

class GoogleBooksApiQueries {
    public static async GetBooks(options: GoogleBooksApiOptions): Promise<BookSearchResult> {
        console.log(options);
        let responce = await axios.get(global.googleApiUrl as string, {
            params: {
                q: options.search,
                startIndex: options.startIndex,
                maxResults: options.maxResults,
                key: global.googleApiKey
            }
        });

        return responce.data;
    }
}

export default GoogleBooksApiQueries;