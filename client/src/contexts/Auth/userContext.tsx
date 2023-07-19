import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";

import { AuthProvider } from "../../interfaces/types";

export type User = {
  name: string;
  email: string;
};

export const UserContext = createContext({});

export function UserContextProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      api.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
