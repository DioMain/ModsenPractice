import { AxiosError } from "axios";
import { BookSearchResult } from "@apptypes/bookTypes";
import LoadState from "@apptypes/loadState";
import { useEffect, useState } from "react";
import User from "@apptypes/user";
import GoogleBooksApiQueries from "@api/googleBooksApiQueries";

const defaultValue = { totalItems: 0, items: [] };

function useFavoriteBooks(user: User) {
  const [data, setData] = useState<BookSearchResult>(defaultValue);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<AxiosError>();

  //const pageState = useAppSelector((state) => state.pageState.value);

  useEffect(() => {
    setState(LoadState.Loading);
    GoogleBooksApiQueries.GetFavoriteBooks(user)
      .then((value) => {
        setData(value);
        setState(LoadState.Success);
      })
      .catch((error) => {
        setError(error);
        setState(LoadState.Failed);
      });
  }, []);

  return { data, state, error };
}

export default useFavoriteBooks;
