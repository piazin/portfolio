import Aos from 'aos';
import './styles.css';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Translator from '../i18n/Translator';
import { useTranslation } from 'react-i18next';
import animationElements from '../../scripts/amimationElements';

import ButtonToTop from './BtnToTop';
import SectionWork from '../SectionWork';
import CardProject from '../CardProjects';
import CardServices from '../CardServices';
import SectionSkills from '../SectionSkills';
import SectionHeader from '../SectionHeader';
import SectionContact from '../SectionContact';

function Main() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ once: true, duration: 600 });
    animationElements('.course-info');
    animationElements('.technologies-skills');
  }, []);

  useEffect(() => {
    document.title = t('head.title');
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
            <a href="https://dev.to/lucas_fs" target="_blank" rel="external" className="icon-link">
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
        <SectionHeader
          name={<Translator path="section_header.services" />}
          description={<Translator path="section_header.services_describe" />}
        />
        <div className="container-services">
          <CardServices
            title={<Translator path="card_services.web_dev.title" />}
            description={<Translator path="card_services.web_dev.description" />}
            icon_type="bx-globe"
            animationType="fade-up"
          />
          <CardServices
            title={<Translator path="card_services.node_js.title" />}
            description={<Translator path="card_services.node_js.description" />}
            icon_type="bxl-nodejs"
            animationType="fade-up"
          />
          <CardServices
            title={<Translator path="card_services.app_dev.title" />}
            description={<Translator path="card_services.app_dev.description" />}
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
            stacks={['typescript', 'nodejs', 'mongodb', 'google-cloud']}
            background_image="https://imageupload.io/ib/8na54mMfohcQi80_1696340205.jpg"
            link_to_live_app="https://api.lucasouza.tech/"
            animationType="fade-up-right"
          />

          <CardProject
            title="Routeify Express"
            name_repo="routeify-express"
            description="Criei o pacote 'Routeify Express' para facilitar a criação de rotas no Express com decorators."
            stacks={['nodejs', 'typescript']}
            background_image="https://i.imgur.com/0C3YaZV.jpeg"
            animationType="fade-up-left"
          />

          <CardProject
            title="Mailman"
            name_repo="mailman"
            full_url_repo="https://gitlab.com/piazin/mailman"
            description="Mailman é um serviço que permite enviar e-mails através de um formulário HTML simples."
            stacks={['nodejs', 'typescript']}
            background_image="https://raw.githubusercontent.com/piazin/mailman/main/public/logo.png"
            animationType="fade-up-left"
            link_to_live_app="https://github.com/piazin/mailman"
          />

          <CardProject
            title="OneBitFlix Web"
            name_repo="onebitflix_web"
            description="EAD inspirado na Netflix"
            stacks={['typescript', 'nextjs', 'sass', 'swr']}
            background_image="https://raw.githubusercontent.com/piazin/onebitflix_web/main/public/demos/home.png"
            animationType="fade-up-right"
            link_to_live_app="https://onebitflix-web.lucasouza.tech/home"
          />

          <CardProject
            title="Chat Bot"
            name_repo="bot_zap"
            description="Assistente virtual para o atendimento de usuários"
            stacks={['nodejs', 'typescript']}
            background_image="https://cdn.elearningindustry.com/wp-content/uploads/2022/12/shutterstock_1180950625.jpg"
            animationType="fade-up"
          />

          <CardProject
            title="Redid Blog"
            name_repo="redid"
            description="Pequeno blog de noticias techs."
            stacks={['javascript', 'nodejs', 'css3', 'html5']}
            background_image="https://camo.githubusercontent.com/6f61540b84024e0c5d8acd34ec30c05fce6d990e40c094263fc56c5737ae456f/68747470733a2f2f696d61676573322e696d67626f782e636f6d2f39662f65642f47746571793972445f6f2e676966"
            animationType="fade-up-left"
            link_to_live_app="https://redid.lucasouza.tech/"
          />

          <CardProject
            title="API MC"
            name_repo="api_mc"
            description="Boas práticas de desenvolvimento de API REST com Node.js e Express."
            stacks={['nodejs', 'typescript']}
            background_image="https://imageupload.io/ib/Ax0DtlfHbbwHr5l_1696337911.jpg"
            animationType="fade-up-left"
          />

          <CardProject
            title="App CFP"
            name_repo="mobile-cfp"
            description="Aplicativo de movimentações financeiras, deselvolvido para meu TCC da faculdade."
            stacks={['react', 'javascript']}
            background_image="https://imageupload.io/ib/Sm7dpR8Eghe5c3N_1696340088.jpg"
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
