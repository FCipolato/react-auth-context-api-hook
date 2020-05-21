import React, { createContext, useState } from "react";

import Signin from "../services/auth";

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    const response = await Signin();
    setUser(response.user);

    localStorage.setItem("token", response.token);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user || localStorage.getItem("token"),
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
