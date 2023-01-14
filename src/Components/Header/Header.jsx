import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./Menulist";
import Head from "../Header/Head.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const menulist = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  const menuClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            Appy <font>Creation</font>
          </h1>
        </div>
        <div className="menu-icon" onClick={menuClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          {menulist}
        </ul>
      </nav>
    </>
  );
};

export default Header;
