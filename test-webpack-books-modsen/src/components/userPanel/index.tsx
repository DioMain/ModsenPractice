import React from "react";
import { useAppSelector } from "@hooks/reduxHooks";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { firebaseData } from "@firebase/data";
import IconButton from "@components/iconButton";
import HearthImg from "@assets/img/heart.png";
import SearchImg from "@assets/img/search.png";
import "./style.scss";

const UserPanel: React.FC = () => {
  const user = useAppSelector((state) => state.user.value);
  const isFavorite = window.location.pathname.endsWith("favorites");

  const clickLogin = () => {
    const auth = getAuth();

    signInWithPopup(auth, firebaseData.authProvider).catch((error) => console.log(error));
  };

  const clickLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        if (isFavorite) window.location.assign("/");
      })
      .catch((error) => console.log(error));
  };

  const clickFavorite = () => {
    window.location.assign("/favorites");
  };

  const clickSearch = () => {
    window.location.assign("/");
  };

  return (
    <div className="userpanel">
      {user ? (
        <div className="userpanel-auth">
          {!isFavorite ? (
            <IconButton className="userpanel-auth-statebtn" image={HearthImg} onClick={clickFavorite} />
          ) : (
            <IconButton className="userpanel-auth-statebtn" image={SearchImg} onClick={clickSearch} />
          )}
          <div className="userpanel-auth-user">
            <div className="userpanel-auth-user-name">{user.name}</div>
            <div className="userpanel-auth-user-col">
              <img src={user.photoUrl as string} alt="icon here" />
              <div className="userpanel-auth-user-col-logoutbtn" onClick={clickLogout}>
                Выйти
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="userpanel-noauth">
          <div className="userpanel-noauth-loginbtn" onClick={clickLogin}>
            Вход через Google
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
