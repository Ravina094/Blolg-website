import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">LOGO</div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>
      ;
    </>
  );
};

export default Navbar;
