import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { User } from "../../interfaces/Item";

export const UserContext = createContext({});

export const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      axios.get("/todo").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
