import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";

function Header() {
  return (
    <header id="header">
      <img className="logo" src={logo} alt="logo-pic"></img>
      <ul className="nav">
        <li className="nav-item">
          <a href="#section-services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-works" className="nav-link">
            Experience
          </a>
        </li>

        <li className="nav-item">
          <a href="#section-skills" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="cv.pdf" download className="btn__dowload-cv">
            <span className="text-btn">Download CV</span>
            <span className="icon-btn">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
