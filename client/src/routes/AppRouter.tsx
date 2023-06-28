import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../page/Login";
import { TodoList } from "../page/TodoList";
import { Register } from "../page/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};
