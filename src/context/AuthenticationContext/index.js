import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <AuthenticationContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
