import React from "react";
import { Link } from "react-router-dom";

import "./List.css";

export default function List({ title, id, url }) {
  return (
    <Link to={`/${url}/${id}`}>
      <p className="list__item">{title}</p>
    </Link>
  );
}
