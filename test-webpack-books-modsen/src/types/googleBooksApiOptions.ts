class GoogleBooksApiOptions {
    search: string = "";
    orderBy: string = "relevance";
    category: string = "all";
    
    startIndex?: number = 0;
    maxResults?: number = 30;
}

export default GoogleBooksApiOptions;