import React, { useState } from "react";
import SearchBar from "./../searchBar";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import CartPage from "./../cartPage";
import SearchPage from "./../searchPage";
import "./app.scss";
import UserPanel from "../userPanel";
import useAuth from "../../hooks/useAuth";
import AuthState from "../../types/authState";
import { setUser } from "../../redux/slices/userSlice";
import PageState from "../../types/pageState";
import FavoritePage from "../favoritePage";

function App() {
  const dispatch = useAppDispatch();

  const currentBook = useAppSelector((state) => state.book.value);
  const pageState = useAppSelector((state) => state.pageState.value);

  const auth = useAuth();

  console.log("asds");

  if (auth.state == AuthState.NotAuthed) dispatch(setUser(undefined));
  else if (auth.state == AuthState.Authed) {
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

      {currentBook ? (
        <CartPage book={currentBook} />
      ) : (
        <>{pageState === PageState.Search ? <SearchPage /> : <FavoritePage />}</>
      )}
    </>
  );
}

export default App;
