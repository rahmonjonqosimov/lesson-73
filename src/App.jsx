import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Auth from "./routes/auth/Auth";
import Admin from "./routes/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Create from "./routes/admin/create/Create";
import Manage from "./routes/admin/manage/Managa";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create-product" element={<Create />} />
            <Route path="manage-products" element={<Manage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
