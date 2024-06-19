import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = 'AIzaSyClCm-rEgwrSBygLqdk1VVI0_0KBaySByc';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

interface Book {
    title: string
}

class BookSearchResult {
    volumeInfo: Book = { title: "" }
}

function useBooks(search: string): BookSearchResult[] {
    const [result, setResult] = useState<BookSearchResult[]>([]);

    console.log("work");

    useEffect(() => {
        axios.get(BASE_URL, {
            params: {   
                q: search,
                key: API_KEY
            }
        }).then(res => {
            console.log(res.data.items);
            setResult(res.data.items);
        });
    }, [search]);

    return result;
}

export default useBooks;