import { useEffect, useState } from "react";

import BookSearchResult from "../types/bookSearchResult";
import GoogleBooksApiQueries from "../api/googleBooksApiQueries";
import LoadState from "../enums/loadState";
import { AxiosError } from "axios";
import GoogleBooksApiOptions from "../types/googleBooksApiOptions";

function useBooks(options: GoogleBooksApiOptions) {
    const [data, setData] = useState<BookSearchResult>({ totalItems: 0, items: [] });
    const [state, setState] = useState<LoadState>(LoadState.Loading);
    const [error, setError] = useState<AxiosError>();

    useEffect(() => {
        setState(LoadState.Loading);

        if (options.search === "") {
            setData({ totalItems: 0, items: []});
            setState(LoadState.Success);
        }
        else {
            GoogleBooksApiQueries.GetBooks(options).then(Data => {
                setData(Data);
                setState(LoadState.Success);
            }).catch(error => {
                setError(error);
                setState(LoadState.Failed);
            });
        }
    }, [options.search, options.startIndex]);

    return { data, state, error };
}

export default useBooks;