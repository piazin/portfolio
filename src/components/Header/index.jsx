import React from 'react';
import Translator from '../i18n/Translator';
import I18n from '../i18n/I18n';
import logo from '../../assets/logo.png';
import './styles.css';

function Header() {
  const toogleMenuMobile = () => {
    document
      .querySelector('.menu-mobile')
      .classList.toggle('menu-mobile-active');
  };

  return (
    <header id="header">
      <img className="logo" src={logo} alt="logo-pic"></img>
      <ul className="nav">
        <li className="nav-item">
          <a href="#section-services" className="nav-link">
            <Translator path="header.services" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-projects" className="nav-link">
            <Translator path="header.projects" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-works" className="nav-link">
            <Translator path="header.experience" />
          </a>
        </li>

        <li className="nav-item">
          <a href="#section-skills" className="nav-link">
            <Translator path="header.skills" />
          </a>
        </li>
        <li className="nav-item">
          <I18n />
        </li>
        <li className="nav-item">
          <a href="cv.pdf" download className="btn__dowload-cv">
            <span className="text-btn">
              {' '}
              <Translator path="header.download_cv" />
            </span>
            <span className="icon-btn">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </li>
      </ul>

      <ul className="menu-mobile">
        <li className="nav-item">
          <a href="#section-services" className="nav-link">
            <Translator path="header.services" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-projects" className="nav-link">
            <Translator path="header.projects" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-works" className="nav-link">
            <Translator path="header.experience" />
          </a>
        </li>

        <li className="nav-item">
          <a href="#section-skills" className="nav-link">
            <Translator path="header.skills" />
          </a>
        </li>
        <li className="nav-item">
          <I18n />
        </li>
        <li className="nav-item">
          <a href="cv.pdf" download className="btn__dowload-cv">
            <span className="text-btn">
              {' '}
              <Translator path="header.download_cv" />
            </span>
            <span className="icon-btn">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </li>
      </ul>
      <div className="btn-hambuguer-mobile">
        <input
          type="checkbox"
          id="checkbox-menu"
          hidden
          onChange={() => toogleMenuMobile()}
        />

        <label htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
