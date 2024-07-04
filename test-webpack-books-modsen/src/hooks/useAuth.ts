import { useEffect, useState } from "react";
import AuthState from "@apptypes/authState";
import { User, getAuth } from "firebase/auth";

function useAuth() {
  const [data, setData] = useState<User | null>(null);
  const [state, setState] = useState<AuthState>(AuthState.Loading);
  const [error, setError] = useState<any>();

  useEffect(() => {
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
      }
    );
  }, []);

  return { data, state, error };
}

export default useAuth;
