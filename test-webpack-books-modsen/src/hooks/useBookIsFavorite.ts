import LoadState from "@apptypes/loadState";
import { useEffect, useState } from "react";
import User from "@apptypes/user";
import { useAppSelector } from "./reduxHooks";
import { Book } from "@apptypes/bookTypes";

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
