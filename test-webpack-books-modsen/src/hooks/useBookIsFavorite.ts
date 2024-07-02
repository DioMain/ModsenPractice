import LoadState from "../types/loadState";
import { useEffect, useState } from "react";
import User from "../types/user";
import { useAppSelector } from "./reduxHooks";
import Book from "../types/book";

function useBookIsFavorite(user: User, book: Book) {
  const [data, setData] = useState<boolean>(false);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<string>("");

  const pageState = useAppSelector((state) => state.pageState.value);

  useEffect(() => {
    ///TODO
  }, [user, pageState]);

  return { data, state, error };
}

export default useBookIsFavorite;
