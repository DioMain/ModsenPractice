import React from "react";
import SearchBar from "@components/searchBar";
import { useAppDispatch } from "@hooks/reduxHooks";
import CartPage from "@components/cartPage";
import SearchPage from "@components/searchPage";
import UserPanel from "@components/userPanel";
import useAuth from "@hooks/useAuth";
import AuthState from "@apptypes/authState";
import { setUser } from "@redux/slices/userSlice";
import FavoritePage from "@components/favoritePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";

function App() {
  const dispatch = useAppDispatch();
  const auth = useAuth();

  switch (auth.state) {
    case AuthState.Loading:
      return <></>;

    case AuthState.NotAuthed:
      dispatch(setUser(undefined));
      break;

    case AuthState.Authed:
      dispatch(
        setUser({
          name: auth.data?.displayName,
          id: auth.data?.email,
          photoUrl: auth.data?.photoURL,
        })
      );
      break;
  }

  return (
    <>
      <header>
        <UserPanel />
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={SearchBar} />
          </Routes>
        </BrowserRouter>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/favorites" Component={FavoritePage} />
            <Route path="/" Component={SearchPage} />
            <Route path="/book/*" Component={CartPage} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
