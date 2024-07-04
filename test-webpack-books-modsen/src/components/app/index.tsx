import React from "react";
import SearchBar from "@components/searchBar";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import CartPage from "@components/cartPage";
import SearchPage from "@components/searchPage";
import UserPanel from "@components/userPanel";
import useAuth from "@hooks/useAuth";
import AuthState from "@apptypes/authState";
import { setUser } from "@redux/slices/userSlice";
import PageState from "@apptypes/pageState";
import FavoritePage from "@components/favoritePage";
import "./style.scss";

function App() {
  const dispatch = useAppDispatch();

  const currentBook = useAppSelector((state) => state.book.value);
  const pageState = useAppSelector((state) => state.pageState.value);

  const auth = useAuth();

  if (auth.state === AuthState.NotAuthed) dispatch(setUser(undefined));
  else if (auth.state === AuthState.Authed) {
    dispatch(
      setUser({
        name: auth.data?.displayName,
        id: auth.data?.email,
        photoUrl: auth.data?.photoURL,
      })
    );
  }

  return (
    <>
      <header>
        <UserPanel pg={pageState} />

        {pageState === PageState.Search && <SearchBar />}
      </header>

      <main>
        {currentBook ? (
          <CartPage book={currentBook} />
        ) : (
          <>{pageState === PageState.Search ? <SearchPage /> : <FavoritePage />}</>
        )}
      </main>
    </>
  );
}

export default App;
