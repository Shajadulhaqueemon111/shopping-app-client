/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { logOut } from "../login";

import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { refreshAccessToken } from "../login/refreshToken";

interface User {
  email: string;
  role: string;
  profilImage?: string;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  // Optionally restore user from localStorage
  // useEffect(() => {
  //   const savedUser = localStorage.getItem("loggedInUser");
  //   const token = localStorage.getItem("accessToken");

  //   if (savedUser) setUser(JSON.parse(savedUser));

  //   if (token) {
  //     try {
  //       const decoded: { exp: number } = jwtDecode(token);
  //       const expirationTime = decoded.exp * 1000;
  //       if (Date.now() > expirationTime) {
  //         toast.error("token have an expired !");
  //         logout();
  //         router.push("/login");
  //       }
  //     } catch {
  //       logout();
  //       router.push("/login");
  //     }
  //   }
  // }, []);
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    const token = localStorage.getItem("accessToken");

    if (savedUser) setUser(JSON.parse(savedUser));

    const checkTokenValidity = async () => {
      if (token) {
        try {
          const decoded: { exp: number } = jwtDecode(token);
          const expirationTime = decoded.exp * 1000;

          if (Date.now() > expirationTime) {
            const refreshed = await refreshAccessToken(setUser);
            if (!refreshed) {
              logout();
              router.push("/login");
            }
          }
        } catch {
          logout();
          router.push("/login");
        }
      }
    };

    checkTokenValidity();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedInUser");
    logOut();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
