import React, { useState } from "react";
import Users from "../../components/users/Users";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  let [menu, setMenu] = useState(true);
  let item = ["Create Product", "Manage Products"];
  let link = item?.map((el, inx) => (
    <li key={inx}>
      <NavLink to={`${el.toLowerCase().split(" ").join("-")}`}>{el}</NavLink>
    </li>
  ));
  return (
    <section
      style={{
        gridTemplateColumns: `${menu ? "1fr 30fr" : "300px 1fr"}`,
      }}
      className="admin"
    >
      <div className={`aside ${menu ? "show" : ""}`}>
        <ul>{link}</ul>
        <div
          onClick={() => setMenu((p) => !p)}
          className={`menu ${menu ? "menu__left" : ""}`}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
      </div>
      <div></div>
      <Outlet />
    </section>
  );
};

export default Admin;
