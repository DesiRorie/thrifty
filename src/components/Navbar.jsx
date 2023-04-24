import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const handleSubmit = (e) => {
  e.preventDefault();
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarDiv">
        <Link id="thriftyTitle" to="/">
          Thrifty
        </Link>

        <ul id="navbarList">
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/donate">
            <li>DONATE</li>
          </Link>
          <Link to="/">
            <li>SHOP</li>
          </Link>
        </ul>
        <button className="menu-button">
          <MenuIcon />
        </button>
        <form onSubmit={handleSubmit} className="navForm">
          <input type="search" placeholder="What can we help you find today?" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
