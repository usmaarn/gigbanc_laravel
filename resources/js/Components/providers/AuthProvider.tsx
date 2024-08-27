/** @format */
"use client";

import { getUser } from "@/lib/actions/auth";
import { User } from "@/lib/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type AuthContextProps = {
  user?: User | null;
};

export const AuthContext = createContext<AuthContextProps>({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth: () => AuthContextProps = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
