import LoadState from "@apptypes/loadState";
import { useEffect, useState } from "react";
import User from "@apptypes/user";
import { Book } from "@apptypes/bookTypes";
import GoogleBooksApiQueries from "@api/googleBooksApiQueries";

function useBookIsFavorite(user: User | undefined, book: Book) {
  const [data, setData] = useState<boolean>(false);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<string>("");

  //const pageState = useAppSelector((state) => state.pageState.value);

  useEffect(() => {
    if (user) {
      GoogleBooksApiQueries.GetFavoriteBook(user, book.id)
        .then((value) => {
          setData(value != null);
          setState(LoadState.Success);
        })
        .catch((error) => {
          setState(LoadState.Failed);
          setError(error);
        });
    } else {
      setData(false);
      setState(LoadState.Success);
    }
  }, []);

  return { data, state, error };
}

export default useBookIsFavorite;
