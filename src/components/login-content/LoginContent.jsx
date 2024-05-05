import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const user = {
  username: "Rahmonjon",
  password: "12345",
};

const LoginContent = () => {
  let navigate = useNavigate();
  let [data, setData] = useState(user);
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (data.username == "Rahmonjon" && data.password == "12345") {
      localStorage.setItem("token", "qwertyuiopasdfghjklzxcvbnm");
      toast.success("Admin panelga hush kelibsiz!");
      navigate("/admin/create-product");
    } else {
      toast.error("Username va Password tog'ri kelmadi!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={hanldeSubmit} className="login__form">
        <Link className="logo" to={"/"}>
          LOGO
        </Link>
        <label htmlFor="username">Username *</label>
        <input
          value={data.username}
          onChange={(e) => setData((p) => ({ ...p, username: e.target.value }))}
          placeholder="Username"
          type="text"
          required
          id="username"
        />
        <label htmlFor="password">Password *</label>
        <input
          value={data.password}
          onChange={(e) => setData((p) => ({ ...p, password: e.target.value }))}
          placeholder="Password"
          type="password"
          required
          id="password"
        />
        <button className="form__btn">Login</button>
      </form>
    </div>
  );
};

export default LoginContent;
