import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
const handleSubmit = (e) => {
  e.preventDefault();
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarDiv">
        <a href="/">Thrifty</a>
        <button className="menu-button">
          <MenuIcon />
          <span className="text">Menu</span>
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
