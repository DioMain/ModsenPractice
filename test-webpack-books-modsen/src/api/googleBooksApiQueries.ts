import axios from "axios";
import { Book, BookSearchResult } from "@apptypes/bookTypes";
import config from "../config";
import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";
import User from "@apptypes/user";
import { getDocs, query, where } from "firebase/firestore";
import { firebaseData } from "@firebase/data";

class GoogleBooksApiQueries {
  public static async GetBooks(options: GoogleBooksApiOptions): Promise<BookSearchResult> {
    const responce = await axios.get(config.googleApiUrl as string, {
      params: {
        q: options.category === "all" ? options.search : `${options.search}+subject:${options.category}`,
        startIndex: options.startIndex,
        maxResults: options.maxResults,
        orderBy: options.orderBy,
        key: config.googleApiKey,
      },
    });

    return responce.data;
  }

  public static async GetBook(bookId: string): Promise<Book> {
    const responce = await axios.get(config.googleApiUrl + `/${bookId}`, {
      params: {
        key: config.googleApiKey,
      },
    });

    return responce.data;
  }

  public static async GetFavoriteBooks(user: User): Promise<BookSearchResult> {
    const result: BookSearchResult = {
      totalItems: 0,
      items: [],
    };

    const dbq = query(firebaseData.favoriteBooksCollection, where("userid", "==", user.id));
    const snapshot = await getDocs(dbq);

    for (const item of snapshot.docs) {
      const data = item.data();

      const responce = await axios.get(config.googleApiUrl + `/${data.bookid}`, {
        params: {
          key: config.googleApiKey,
        },
      });

      result.totalItems++;
      result.items.push(responce.data);
    }

    return result;
  }
}

export default GoogleBooksApiQueries;
