import React, { useEffect, useState, useMemo } from "react";
import { auth } from "../utils/firebase.js";

export const AuthContext = React.createContext(
  {
    category: '',
    setCategory: () => {},
  }
);

export const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const value = useMemo(
    () => ({ category, setCategory }), 
    [category]
  );
//   // useEffect(() => {
//   //   // auth.onAuthStateChange(setCurrentUser)
//   //   setCurrentUser(currentUser);
//   // }, []);

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};
