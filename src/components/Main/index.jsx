import React, { useEffect } from "react";
import "./styles.css";
import animationElements from "../../scripts/script";

import SectionWork from "../SectionWork";
import SectionHeader from "../SectionHeader";
import SectionSkills from "../SectionSkills";
import SectionContact from "../SectionContact";
import CardServices from "../CardServices";
import CardProject from "../CardProjects";
import ButtonToTop from "./BtnToTop";

function Main() {
  useEffect(() => {
    animationElements(".card-service");
    animationElements(".card-project");
    animationElements(".container-work-info");
    animationElements(".course-info");
    animationElements(".technologies-skills");
  }, []);

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

      {/* Section Projects */}
      <section id="section-projects">
        <SectionHeader name="my works" description="Featured portfolios" />

        <div className="container-projects">
          <CardProject
            title="Api users"
            name_repo="api-users"
            stacks={["javascript", "nodejs"]}
            background_image="https://blog.rocketseat.com.br/content/images/size/w600/2018/12/adonis-reactjs-react-native-1.png"
          />

          <CardProject
            title="Redid blog"
            name_repo="redid"
            stacks={["javascript", "nodejs", "css3", "html5"]}
            background_image="https://camo.githubusercontent.com/6f61540b84024e0c5d8acd34ec30c05fce6d990e40c094263fc56c5737ae456f/68747470733a2f2f696d61676573322e696d67626f782e636f6d2f39662f65642f47746571793972445f6f2e676966"
          />

          <CardProject
            title="Portfolio"
            name_repo="portfolio"
            stacks={["javascript", "react", "css3"]}
            background_image="https://blog.rocketseat.com.br/content/images/size/w1000/2020/07/ideias-inspiracoes-projetos-design-web-mobile.png"
            link_to_live_app="https://portfolio-five-bay-45.vercel.app/"
          />
        </div>
      </section>

      {/*Section Works*/}

      <section id="section-works">
        <SectionWork />
      </section>

      <section id="section-skills">
        <SectionSkills />
      </section>

      <section id="section-contact">
        <SectionContact />
      </section>

      {/*button to top*/}

      <ButtonToTop />
    </main>
  );
}

export default Main;
