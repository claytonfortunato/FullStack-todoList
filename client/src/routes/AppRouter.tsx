import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../page/Login";
import { Home } from "../page/Home";
import { Register } from "../page/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
