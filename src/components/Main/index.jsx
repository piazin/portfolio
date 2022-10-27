import React from "react";
import "./styles.css";

import SectionHeader from "../SectionHeader";
import CardServices from "../CardServices";

function Main() {
  return (
    <main id="container">
      <section id="section-about">
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
            Creative front-end developer with more than +2 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React. Passionate about UI/UX
          </p>
          <div className="icons-container">
            <a
              href="https://github.com/piazin"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <i className="bx bxl-github bx-sm"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-souza-929096222/"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <i className="bx bxl-linkedin bx-sm"></i>
            </a>
            <a
              href="https://www.instagram.com/lucas_souzalfs/"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <i className="bx bxl-instagram bx-sm"></i>
            </a>
            <a
              href="https://dev.to/lucas_fs"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <i className="bx bxl-dev-to bx-sm"></i>
            </a>
          </div>
        </div>
        <div className="section-img">
          <span></span>
          <span></span>
        </div>
      </section>

      {/* Section Services */}
      <section id="section-services">
        <SectionHeader name="services" description="Specialized in" />
        <div className="container-services">
          <CardServices
            title="Web Development"
            description="Create and maintain your websites and also take care of its performance and traffic capacity."
            icon_type="bx-globe"
          />
          <CardServices
            title="Node JS"
            description="lorem lorem lorem lorem lorem lorem lorem lorem"
            icon_type="bxl-nodejs"
          />
          <CardServices
            title="Aplication Development"
            description="Standard designing, building, and implementing your applications with documentation.
            "
            icon_type="bxl-javascript"
          />
        </div>
      </section>

      <section id="section-projects">
        <SectionHeader name="my works" description="Featured portfolios" />
      </section>
    </main>
  );
}

export default Main;
