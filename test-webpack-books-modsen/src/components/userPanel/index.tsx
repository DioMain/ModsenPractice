import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import "./userPanel.scss";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { firebaseData } from "../../firebase";
import IconButton from "../iconButton";
import PageState from "../../types/pageState";
import { setPageState } from "../../redux/slices/pageStateSlice";

const UserPanel: React.FC<{ pg: any }> = ({ pg }) => {
  const user = useAppSelector((state) => state.user.value);
  //const pageState = useAppSelector((state) => state.pageState.value);

  const dispatch = useAppDispatch();

  const clickLogin = () => {
    const auth = getAuth();

    signInWithPopup(auth, firebaseData.authProvider)
      .then(() => console.log("logined"))
      .catch((error) => console.log(error));
  };

  const clickLogout = () => {
    const auth = getAuth();

    dispatch(setPageState(PageState.Search));

    signOut(auth)
      .then(() => console.log("logout"))
      .catch((error) => console.log(error));
  };

  const clickFavorite = () => {
    dispatch(setPageState(PageState.Favorite));
  };

  const clickSearch = () => {
    dispatch(setPageState(PageState.Search));
  };

  return (
    <div className="userpanel">
      {user ? (
        <div className="userpanel-auth">
          {pg === PageState.Search ? (
            <IconButton className="userpanel-auth-statebtn" image="/heart.png" onClick={clickFavorite} />
          ) : (
            <IconButton className="userpanel-auth-statebtn" image="/search.png" onClick={clickSearch} />
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
