import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../page/Login";
import { TodoList } from "../page/TodoList";
import { Register } from "../page/Register";

import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "../contexts/Auth/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};
