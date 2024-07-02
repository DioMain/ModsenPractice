import { useEffect, useState } from "react";

import AuthState from "../types/authState";
import { User } from "firebase/auth";
import { getAuth } from "firebase/auth";

function useAuth() {
  const [data, setData] = useState<User | null>(null);
  const [state, setState] = useState<AuthState>(AuthState.NotAuthed);
  const [error, setError] = useState<any>();

  const auth = getAuth();

  auth.onAuthStateChanged(
    (user) => {
      if (user) setState(AuthState.Authed);
      else setState(AuthState.NotAuthed);

      setData(user);
    },
    (error) => {
      setState(AuthState.Failed);
      setError(error);
      console.log(error);
    }
  );

  return { data, state, error };
}

export default useAuth;
