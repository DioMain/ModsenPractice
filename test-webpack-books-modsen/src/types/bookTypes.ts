interface Book {
  id: string;
  etag: string;
  selfLink: string;
  isFavorite?: boolean;
  volumeInfo: {
    title: string;

    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    authors: string[];

    publisher: string;
    publishedDate: Date;
    description: string;
    pageCount: number;

    dimensions: {
      height: string;
      width: string;
      thickness: string;
    };

    printType: string;
    mainCategory: string;
    categories: string[];

    averageRating: number;
    ractingsCount: number;

    contentVersion: string;
    language: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
}

interface BookSearchResult {
  items: Book[];
  totalItems: number;
}

export { Book, BookSearchResult };
