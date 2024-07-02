import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import "./userPanel.scss";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { firebaseData } from "../../firebase";

const UserPanel: React.FC = () => {
  const user = useAppSelector((state) => state.user.value);

  const clickLogin = () => {
    const auth = getAuth();

    signInWithPopup(auth, firebaseData.authProvider)
      .then((result) => {
        console.log("logined");
      })
      .catch((error) => console.log(error));
  };

  const clickLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => console.log("logout"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="userpanel">
      {user ? (
        <div className="userpanel-auth">
          <div className="userpanel-auth-favorite">favorite</div>
          <div className="userpanel-auth-content">
            <img src={user.photoUrl as string} alt="icon here" />
            <div>{user.name}</div>
            <div className="userpanel-auth-content-logoutbtn" onClick={clickLogout}>
              выйти
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
