import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let item = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Admin",
      url: "/admin/create-product",
    },
    {
      id: 3,
      name: "Login",
      url: "/login",
    },
  ];
  let links = item?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.url}>{el.name}</NavLink>
    </li>
  ));
  return (
    <section className="navbar">
      <div className="container">
        <nav>
          <Link to={"/"} className="logo ">
            LOGO
          </Link>
          <ul>{links}</ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
