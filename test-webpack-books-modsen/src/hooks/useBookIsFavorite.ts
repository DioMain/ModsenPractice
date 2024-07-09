import { useEffect, useState } from "react";
import User from "@apptypes/user";
import { Book } from "@apptypes/bookTypes";
import { bookIsFavorite } from "@firebase/queries";

function useBookIsFavorite(user: User | undefined, book: Book) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      bookIsFavorite(user, book).then((val) => setIsFavorite(val));
    }
  }, [user]);

  return { isFavorite, setIsFavorite };
}

export default useBookIsFavorite;
