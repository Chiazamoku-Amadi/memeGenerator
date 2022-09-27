import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="header-logo" className="logo" />
    </header>
  );
}

export default Header;
