import { useEffect, useState } from "react";
import { Book } from "@apptypes/bookTypes";
import GoogleBooksApiQueries from "@api/googleBooksApiQueries";
import LoadState from "@apptypes/loadState";
import { AxiosError } from "axios";

function useBook(bookId: string) {
  const [data, setData] = useState<Book | null>(null);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setState(LoadState.Loading);

    GoogleBooksApiQueries.GetBook(bookId)
      .then((Data) => {
        setData(Data);
        setState(LoadState.Success);
      })
      .catch((error) => {
        setError(error);
        setState(LoadState.Failed);
      });
  }, []);

  return { data, state, error };
}

export default useBook;
