import { useEffect, useState } from "react";

import BookSearchResult from "../types/bookSearchResult";
import GoogleBooksApiQueries from "../api/googleBooksApiQueries";
import LoadState from "../enums/loadState";

function useBook(bookId: string) {
    const [data, setData] = useState<BookSearchResult>();
    const [state, setState] = useState<LoadState>(LoadState.Loading);
    const [error, setError] = useState<string>("NONE");

    useEffect(() => {
        GoogleBooksApiQueries.GetBook(bookId).then(Data => {
            setData(Data);
            setState(LoadState.Success);
        }).catch(error => {
            setError(error);
            setState(LoadState.Failed);
        })
    }, [bookId]);

    return { data, state, error };
}

export default useBook;