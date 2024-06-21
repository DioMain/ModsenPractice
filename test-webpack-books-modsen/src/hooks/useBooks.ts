import { useEffect, useState } from "react";

import BookSearchResult from "../types/bookSearchResult";
import GoogleBooksApiQueries from "../api/googleBooksApiQueries";
import LoadState from "../enums/loadState";

function useBooks(search: string) {
    const [data, setData] = useState<BookSearchResult[]>([]);
    const [state, setState] = useState<LoadState>(LoadState.Loading);
    const [error, setError] = useState<string>("NONE");

    useEffect(() => {
        GoogleBooksApiQueries.GetBooks(search).then(Data => {
            setData(Data);
            setState(LoadState.Success);
        }).catch(error => {
            setError(error);
            setState(LoadState.Failed);
        })
    }, [search]);

    return { data, state, error };
}

export default useBooks;