import { AxiosError } from "axios";
import { BookSearchResult } from "@apptypes/bookTypes";
import LoadState from "@apptypes/loadState";
import { useEffect, useState } from "react";
import User from "@apptypes/user";
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

export default useFavoriteBooks;
