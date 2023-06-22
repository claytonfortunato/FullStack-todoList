import { useState } from "react";
import { TodoList } from "./page/TodoList";
import { Login } from "./page/Login";

export const ProtectedRoutes = () => {
  const [user, setUser] = useState(null);

  return <div>{user ? <TodoList /> : <Login />}</div>;
};
