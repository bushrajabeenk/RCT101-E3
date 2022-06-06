import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  // const { state } = useLocation();

  const login = () => {
    setIsAuth(true);
    // if (state.from) {
    //   navigate(state.from, { replace: true });
    // } else {
    navigate("/");
    // }
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
