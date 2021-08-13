import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink
        exact
        to="/"
        className="nav__item"
        activeClassName="nav__selected"
      >
        О проекте
      </NavLink>
      <NavLink
        exact
        to="/posts"
        className="nav__item"
        activeClassName="nav__selected"
      >
        Посты
      </NavLink>
      <NavLink
        exact
        to="/users"
        className="nav__item"
        activeClassName="nav__selected"
      >
        Пользователи
      </NavLink>
    </nav>
  );
}
