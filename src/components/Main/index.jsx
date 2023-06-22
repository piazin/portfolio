import React, { useEffect } from 'react';
import Translator from '../i18n/Translator';
import './styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import animationElements from '../../scripts/amimationElements';

import SectionWork from '../SectionWork';
import SectionHeader from '../SectionHeader';
import SectionSkills from '../SectionSkills';
import SectionContact from '../SectionContact';
import CardServices from '../CardServices';
import CardProject from '../CardProjects';
import ButtonToTop from './BtnToTop';

function Main() {
  useEffect(() => {
    Aos.init({ once: true, duration: 600 });
    animationElements('.course-info');
    animationElements('.technologies-skills');
  }, []);

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
            background_image="https://blog.rocketseat.com.br/content/images/size/w600/2018/12/adonis-reactjs-react-native-1.png"
            link_to_live_app="https://api.lucasouza.tech/"
            animationType="fade-up-right"
          />
          <CardProject
            title="Redid Blog"
            name_repo="redid"
            description="Pequeno blog de noticias techs."
            stacks={['javascript', 'nodejs', 'css3', 'html5']}
            background_image="https://camo.githubusercontent.com/6f61540b84024e0c5d8acd34ec30c05fce6d990e40c094263fc56c5737ae456f/68747470733a2f2f696d61676573322e696d67626f782e636f6d2f39662f65642f47746571793972445f6f2e676966"
            animationType="fade-up"
          />

          <CardProject
            title="OneBitFlix API"
            name_repo="onebitflix"
            description="API para gerenciar cursos, videos e usuários de um EAD"
            stacks={['nodejs', 'typescript']}
            background_image="https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png"
            animationType="fade-up-left"
            link_to_live_app="https://onebitflix-web.lucasouza.tech/home"
          />

          <CardProject
            title="Chat Bot"
            name_repo="bot-zap"
            description="Chat Bot feito para aberturas de chamados do T.I."
            stacks={['nodejs', 'typescript']}
            background_image="https://cdn.elearningindustry.com/wp-content/uploads/2022/12/shutterstock_1180950625.jpg"
            animationType="fade-up-right"
          />

          <CardProject
            title="Mailman"
            name_repo="mailman"
            description="Mailman é um serviço que permite enviar e-mails através de um formulário HTML simples."
            stacks={['nodejs', 'typescript']}
            background_image="https://raw.githubusercontent.com/piazin/mailman/main/public/logo.png"
            animationType="fade-up"
          />

          <CardProject
            title="OneBitFlix Web"
            name_repo="onebitflix_web"
            description="EAD inspirado na Netflix"
            stacks={['typescript', 'nextjs', 'sass', 'swr']}
            background_image="https://raw.githubusercontent.com/piazin/onebitflix_web/main/public/demos/home.png"
            animationType="fade-up-left"
            link_to_live_app="https://onebitflix-web.lucasouza.tech/home"
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
