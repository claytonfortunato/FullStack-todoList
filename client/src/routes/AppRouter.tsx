import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../page/Login";
import { TodoList } from "../page/TodoList";
import { Register } from "../page/Register";
import { ProtectedRoutes } from "../ProtectedRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/todo" element={<TodoList />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
