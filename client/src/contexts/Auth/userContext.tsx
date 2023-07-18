import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../../services/api";
import axios from "axios";

import { AuthProvider } from "../../interfaces/types";

export const UserContext = createContext({});

export function UserContextProvider({ children }: AuthProvider) {
  const [user, setUser] = useState(null);

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
