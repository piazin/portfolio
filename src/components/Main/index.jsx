import React from "react";
import "./styles.css";

function Main() {
  return (
    <main id="container">
      <div className="about-container">
        <div className="about-box-presentation">
          <span className="about-presentation-arrow"></span>
          <p className="about-presentation-text">hello my name is</p>
        </div>
        <div className="about-box-title">
          <h2 className="about-text__my-name">Lucas</h2>
          <h2 className="about-text__my-name">Souza.</h2>
        </div>
        <p>
          Creative front-end developer with more than +2 years of experience in
          enterprise companies and startups. Proficient in Html, Tailwind Css,
          Javascript and React. Passionate about UI/UX
        </p>

        <div className="icons-container">
          <a href="">
            <i class="bx bxl-github bx-md bx-tada-hover"></i>
          </a>
          <a href="">
            <i class="bx bxl-linkedin bx-md"></i>
          </a>
          <a href="">
            <i class="bx bxl-instagram bx-md"></i>
          </a>
          <a href="">
            <i class="bx bxl-dev-to bx-md"></i>
          </a>
        </div>
      </div>

      <div className="box-img">
        <span></span>
        <span></span>
      </div>
    </main>
  );
}

export default Main;
