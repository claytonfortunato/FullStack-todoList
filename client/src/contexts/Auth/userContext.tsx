import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import axios from "axios";

import { AuthProvider } from "../../interfaces/types";

export const UserContext = createContext({});

interface User {
  name: string;
  password: string;
}

export function UserContextProvider({ children }: AuthProvider) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      api.get("/profile").then(({ data }) => {
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
