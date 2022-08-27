import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="header-logo" className="logo" />
      <h2 className="header-text">React Course - Project 3</h2>
    </header>
  );
}

export default Header;
