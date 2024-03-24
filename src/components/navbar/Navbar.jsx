import React from "react";
import "./NavbarStyles.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Learnings</h2>
      </div>
      <ul className="nav-menu">
        {location.pathname !== "/" && (
          <li>
            <Link to="/">HOME</Link>
          </li>
        )}
        {location.pathname !== "/books" && (
          <li>
            <Link to="/books">BOOKS</Link>
          </li>
        )}
        {location.pathname !== "/sites" && (
          <li>
            <Link to="/sites">SITES</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
