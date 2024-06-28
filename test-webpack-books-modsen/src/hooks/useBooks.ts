import { useEffect, useState } from "react";

import BookSearchResult from "../types/bookSearchResult";
import GoogleBooksApiQueries from "../api/googleBooksApiQueries";
import LoadState from "../types/loadState";
import { AxiosError } from "axios";
import GoogleBooksApiOptions from "../types/googleBooksApiOptions";

const defaultValue = { totalItems: 0, items: [] };

function useBooks(options: GoogleBooksApiOptions) {
  const [data, setData] = useState<BookSearchResult>(defaultValue);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setState(LoadState.Loading);

    if (options.search === "") {
      setData(defaultValue);
      setState(LoadState.Success);
    } else {
      GoogleBooksApiQueries.GetBooks(options)
        .then((Data) => {
          if (Data.totalItems == 0) setData(defaultValue);
          else setData(Data);

          setState(LoadState.Success);
        })
        .catch((error) => {
          setError(error);
          setState(LoadState.Failed);
        });
    }
  }, [options.search, options.category, options.orderBy, options.startIndex]);

  return { data, state, error };
}

export default useBooks;
