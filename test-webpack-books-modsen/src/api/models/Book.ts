interface Book {
    title: string;

    imageLinks:  {
        smallThumbnail: string;
        thumbnail: string;
        medium: string;
        large: string;
        extraLarge: string;
    };

    averageRating: number;
    ractingsCount: number;
    
    contentVersion: string;
    language: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export default Book;