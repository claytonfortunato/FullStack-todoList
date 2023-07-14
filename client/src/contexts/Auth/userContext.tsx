import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import axios from "axios";

import { Context, AuthProvider } from "../../interfaces/types";

export const UserContext = createContext({});

interface User {
  user: string;
}

export function UserContextProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
}
