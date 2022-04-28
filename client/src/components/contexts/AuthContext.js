import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Create new user
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email,password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  // Notify when user gets set
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return unsubscribe
  }, []);
  //Context of current user (info, functions etc...)
  const value = {
    currentUser,
    signup,
    login
  };

  return <AuthContext.Provider value={value}>
            {!loading && children}
         </AuthContext.Provider>;
}
