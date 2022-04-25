import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();

  // Create new user
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Notify when user gets set
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe
  }, []);
  //Context of current user (info, functions etc...)
  const value = {
    currentUser,
    signup
  };

  return <AuthContext.Provider 
            value={value}>{children}
         </AuthContext.Provider>;
}
