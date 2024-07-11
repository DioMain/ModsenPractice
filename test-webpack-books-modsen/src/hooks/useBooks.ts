import { useEffect, useRef, useState } from "react";
import { BookSearchResult } from "@apptypes/bookTypes";
import GoogleBooksApiQueries from "@api/googleBooksApiQueries";
import LoadState from "@apptypes/loadState";
import { AxiosError } from "axios";
import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";

const defaultValue = { totalItems: 0, items: [] };

function useBooks(options: GoogleBooksApiOptions) {
  const [data, setData] = useState<BookSearchResult>(defaultValue);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<AxiosError>();

  const previewData = useRef<BookSearchResult>(defaultValue);

  useEffect(() => {
    setState(LoadState.Loading);

    previewData.current = data;

    if (options.search === "") {
      setData(defaultValue);
      setState(LoadState.Success);
    } else {
      GoogleBooksApiQueries.GetBooks(options)
        .then((Data) => {
          if (previewData.current.totalItems === 0) previewData.current.totalItems = Data.totalItems;

          setData({ totalItems: previewData.current.totalItems, items: [...previewData.current.items, ...Data.items] });
          setState(LoadState.Success);
        })
        .catch((error) => {
          setError(error);
          setState(LoadState.Failed);
        });
    }
  }, [options.search, options.category, options.orderBy, options.startIndex]);

  return { data, state, error, previewData };
}

export default useBooks;
