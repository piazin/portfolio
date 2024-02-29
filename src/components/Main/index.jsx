import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Translator from "../i18n/Translator";
import { useTranslation } from "react-i18next";
import animationElements from "../../scripts/amimationElements";

import ButtonToTop from "./BtnToTop";
import SectionWork from "../SectionWork";
import CardProject from "../CardProjects";
import CardServices from "../CardServices";
import SectionSkills from "../SectionSkills";
import SectionHeader from "../SectionHeader";
import SectionContact from "../SectionContact";

import TabNewsIcon from "../../assets/svg/tech/tabnews.svg";

function Main() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ once: true, duration: 600 });
    animationElements(".course-info");
    animationElements(".technologies-skills");
  }, []);

  useEffect(() => {
    document.title = t("head.title");
  }, [i18n.language]);

  return (
    <main id="container">
      <section id="section-about">
        <div className="about-container">
          <div className="about-box-presentation">
            <span className="about-presentation-arrow"></span>
            <p className="about-presentation-text">
              <Translator path="main.about" />
            </p>
          </div>
          <div className="about-box-title">
            <h2 className="about-text__my-name">Lucas</h2>
            <h2 className="about-text__my-name">Souza.</h2>
          </div>
          <p>
            <Translator path="main.intro" />
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
              href="https://www.instagram.com/lucassouzalfs/"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <i className="bx bxl-instagram bx-sm"></i>
            </a>
            <a
              href="https://www.tabnews.com.br/lucasfsouza"
              target="_blank"
              rel="external"
              className="icon-link"
            >
              <img
                src={TabNewsIcon}
                alt="tab news icon"
                className="icon-image"
              />
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
        <SectionHeader
          name={<Translator path="section_header.services" />}
          description={<Translator path="section_header.services_describe" />}
        />
        <div className="container-services">
          <CardServices
            title={<Translator path="card_services.web_dev.title" />}
            description={
              <Translator path="card_services.web_dev.description" />
            }
            icon_type="bx-globe"
            animationType="fade-up"
          />
          <CardServices
            title={<Translator path="card_services.node_js.title" />}
            description={
              <Translator path="card_services.node_js.description" />
            }
            icon_type="bxl-nodejs"
            animationType="fade-up"
          />
          <CardServices
            title={<Translator path="card_services.app_dev.title" />}
            description={
              <Translator path="card_services.app_dev.description" />
            }
            icon_type="bxl-javascript"
            animationType="fade-up"
          />
        </div>
      </section>

      {/* Section Projects */}
      <section id="section-projects">
        <SectionHeader
          name={<Translator path="section_header.projects" />}
          description={<Translator path="section_header.projects_describe" />}
        />

        <div className="container-projects">
          <CardProject
            title="API CFP"
            description="API de movimentações financeiras, deselvolvida para meu TCC da faculdade."
            name_repo="api-rest-cfp"
            stacks={["typescript", "nodejs", "mongodb", "google-cloud"]}
            background_image="https://i.ibb.co/ZdVHNbj/DALL-E-2024-02-29-09-27-25-Imagine-a-scene-straight-out-of-a-cartoon-where-a-happy-excited-goldfish.webp"
            animationType="fade-up-right"
          />

          <CardProject
            title="Routeify Express"
            name_repo="routeify-express"
            description="Criei o pacote 'Routeify Express' para facilitar a criação de rotas no Express com decorators."
            stacks={["nodejs", "typescript"]}
            background_image="https://i.ibb.co/KDq3S09/0C3YaZV.jpg"
            animationType="fade-up-left"
          />

          <CardProject
            title="Mailman"
            name_repo="mailman"
            full_url_repo="https://gitlab.com/piazin/mailman"
            description="Mailman é um serviço que permite enviar e-mails através de um formulário HTML simples."
            stacks={["nodejs", "typescript"]}
            background_image="https://raw.githubusercontent.com/piazin/mailman/main/public/logo.png"
            animationType="fade-up-left"
            link_to_live_app="https://github.com/piazin/mailman"
          />

          <CardProject
            title="OneBitFlix"
            name_repo="onebitflix"
            description="Api de Cursos EAD"
            stacks={["typescript", "nodejs"]}
            background_image="https://raw.githubusercontent.com/piazin/onebitflix_web/main/public/demos/home.png"
            animationType="fade-up-right"
            link_to_live_app="https://github.com/piazin/onebitflix"
          />

          <CardProject
            title="Chat Bot"
            name_repo="bot_zap"
            description="Assistente virtual para o atendimento de usuários"
            stacks={["nodejs", "typescript"]}
            background_image="https://cdn.elearningindustry.com/wp-content/uploads/2022/12/shutterstock_1180950625.jpg"
            animationType="fade-up"
          />

          <CardProject
            title="YT Fetch"
            name_repo="ytfetch"
            description="Serviço de download de vídeos do Youtube."
            stacks={["typescript", "nodejs", "nextjs"]}
            background_image="https://yt-fetch.lucasouza.tech/vit.png"
            animationType="fade-up-left"
          />

          <CardProject
            title="API MC"
            name_repo="api_mc"
            description="Boas práticas de desenvolvimento de API REST com Node.js e Express."
            stacks={["nodejs", "typescript"]}
            background_image="https://i.ibb.co/CBRSV6P/DALL-E-2024-02-29-09-29-28-Imagine-a-cutting-edge-futuristic-API-system-displayed-as-a-holographic-i.webp"
            animationType="fade-up-left"
          />

          <CardProject
            title="App CFP"
            name_repo="mobile-cfp"
            description="Aplicativo de movimentações financeiras, deselvolvido para meu TCC da faculdade."
            stacks={["react", "javascript"]}
            background_image="https://i.ibb.co/HTp7YJm/DALL-E-2024-02-29-09-31-11-Visualize-a-charming-scene-where-a-small-golden-fish-is-using-a-smartphon.webp"
            animationType="fade-up-left"
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
