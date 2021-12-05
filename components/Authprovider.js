import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

//   // useEffect(() => {
//   //   // auth.onAuthStateChange(setCurrentUser)
//   //   setCurrentUser(currentUser);
//   // }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
