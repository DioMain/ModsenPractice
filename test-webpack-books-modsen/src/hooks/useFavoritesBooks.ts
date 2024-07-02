import { AxiosError } from "axios";
import BookSearchResult from "../types/bookSearchResult";
import LoadState from "../types/loadState";
import { useEffect, useState } from "react";
import User from "../types/user";
import { useAppSelector } from "./reduxHooks";

const defaultValue = { totalItems: 0, items: [] };

function useFavoriteBooks(user: User) {
  const [data, setData] = useState<BookSearchResult>(defaultValue);
  const [state, setState] = useState<LoadState>(LoadState.Loading);
  const [error, setError] = useState<AxiosError>();

  const pageState = useAppSelector((state) => state.pageState.value);

  useEffect(() => {
    ///TODO
  }, [user, pageState]);

  return { data, state, error };
}
