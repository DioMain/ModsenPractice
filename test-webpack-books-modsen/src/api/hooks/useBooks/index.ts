import axios from "axios";
import { useEffect, useState } from "react";
import BookSearchResult from "../../models/BookSearchResult";

const apiurl = process.env.BASE_API_URL;
const apikey = process.env.API_KEY;

function useBooks(search: string): BookSearchResult[] | undefined {
    const [result, setResult] = useState<BookSearchResult[]>();

    useEffect(() => {
        axios.get(apiurl as string, {
            params: {
                q: search,
                key: apikey
            }
        }).then(res => {
            setResult(res.data.items);
        });
    }, [search]);

    return result;
}

export default useBooks;