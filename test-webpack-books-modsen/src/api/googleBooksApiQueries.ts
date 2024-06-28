import axios from "axios";
import BookSearchResult from "../types/bookSearchResult";
import config from '../config';
import GoogleBooksApiOptions from "../types/googleBooksApiOptions";

class GoogleBooksApiQueries {
    public static async GetBooks(options: GoogleBooksApiOptions): Promise<BookSearchResult> {
        let responce = await axios.get(config.googleApiUrl as string, {
            params: {
                q: options.category === 'all' ? options.search : `${options.search}+subject:${options.category}`,
                startIndex: options.startIndex,
                maxResults: options.maxResults,
                orderBy: options.orderBy,
                key: config.googleApiKey,
            }
        });

        return responce.data;
    }
}

export default GoogleBooksApiQueries;