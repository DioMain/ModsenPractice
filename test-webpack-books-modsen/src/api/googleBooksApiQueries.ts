import axios from "axios";
import { BookSearchResult } from "@apptypes/bookTypes";
import config from "../config";
import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";
import User from "@apptypes/user";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseData } from "@firebase/index";

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

  public static async GetFavoriteBooks(user: User): Promise<BookSearchResult> {
    const result: BookSearchResult = {
      totalItems: 0,
      items: [],
    };

    const dbq = query(collection(firebaseData.database, "favoritebooks"), where("userid", "==", user.id));
    const snapshot = await getDocs(dbq);

    snapshot.forEach(async (item) => {
      const data = item.data();

      const responce = await axios.get((config.googleApiUrl + `/${data.bookid}`) as string, {
        params: {
          key: config.googleApiKey,
        },
      });

      result.totalItems++;
      result.items.push(responce.data);
    });

    return result;
  }
}

export default GoogleBooksApiQueries;
