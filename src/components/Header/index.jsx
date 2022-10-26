import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";

function Header() {
  return (
    <header id="header">
      <img className="logo" src={logo} alt="logo-pic"></img>
      <ul className="nav">
        <li className="nav-item">
          <a href="#">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
