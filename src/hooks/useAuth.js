import React, { createContext, useState, useContext, useEffect } from "react";
import { HandleSignIn } from "../services/auth";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const token = localStorage.getItem("@RcAuth:token");
      const user = localStorage.getItem("@RcAuth:user");

      const storageUser = JSON.parse(user);
      const storageToken = token;

      if (storageUser && storageToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
        setUser(storageUser);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(Email, Password) {
    const response = await HandleSignIn(Email, Password);
    if (response.admin) {
      var user = {
        name: response.name,
        username: response.username,
        email: response.email,
        admin: response.admin,
      };
      setUser(user);

      api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
      localStorage.setItem("@RcAuth:user", JSON.stringify(user));
      localStorage.setItem("@RcAuth:token", response.token);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, userAdmin: user.admin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
