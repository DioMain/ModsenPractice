import { useEffect, useState } from "react";
import User from "@apptypes/user";
import { Book } from "@apptypes/bookTypes";
import { bookIsFavorite } from "@firebase/queries";

function useBookIsFavorite(user: User | undefined, book: Book | null) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (user && book) {
      bookIsFavorite(user, book).then((val) => setIsFavorite(val));
    }
  }, [user, book]);

  return { isFavorite, setIsFavorite };
}

export default useBookIsFavorite;
