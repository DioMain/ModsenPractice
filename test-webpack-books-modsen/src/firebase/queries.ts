import { Book } from "@apptypes/bookTypes";
import User from "@apptypes/user";
import { addDoc, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firebaseData } from "./data";

async function bookIsFavorite(user: User, book: Book) {
  const dbq = query(
    firebaseData.favoriteBooksCollection,
    where("userid", "==", user.id),
    where("bookid", "==", book.id)
  );

  const docSnap = await getDocs(dbq);

  return !docSnap.empty;
}

async function addBookToFavorite(user: User, book: Book) {
  if (await bookIsFavorite(user, book)) return;

  await addDoc(firebaseData.favoriteBooksCollection, { userid: user.id, bookid: book.id });
}

async function removeBookFromFavorite(user: User, book: Book) {
  const dbq = query(
    firebaseData.favoriteBooksCollection,
    where("userid", "==", user.id),
    where("bookid", "==", book.id)
  );

  const docSnap = await getDocs(dbq);

  if (docSnap.empty) return;

  await deleteDoc(doc(firebaseData.favoriteBooksCollection, docSnap.docs[0].id));
}

export { addBookToFavorite, removeBookFromFavorite, bookIsFavorite };
