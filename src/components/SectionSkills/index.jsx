import React from 'react';
import './styles.css';

// import translate
import Translator from '../i18n/Translator';

// import components
import SectionHeader from '../SectionHeader';

// import logos
import NodeLogo from '../../assets/svg/tech/nodejs-icon.svg';
import JSLogo from '../../assets/svg/tech/js_logo.svg';
import EXLogo from '../../assets/svg/tech/expressjs-icon.svg';
import MongoLogo from '../../assets/svg/tech/mongodb-icon.svg';
import PostSQLLogo from '../../assets/svg/tech/postgresql-icon.svg';
import AwsLogo from '../../assets/svg/tech/amazon_aws-icon.svg';
import ReactLogo from '../../assets/svg/tech/react.svg';
import NestLogo from '../../assets/svg/tech/nestjs-icon.svg';
import SassLogo from '../../assets/svg/tech/sass-lang-icon.svg';
import HtmlLogo from '../../assets/svg/tech/w3_html5-icon.svg';
import CssLogo from '../../assets/svg/tech/w3_css-icon.svg';
import TailwindCssLogo from '../../assets/svg/tech/tailwindcss-icon.svg';
import TypeScriptLogo from '../../assets/svg/tech/typescript.svg';
import PrismaLogo from '../../assets/svg/tech/prisma-4.svg';

import VSLogo from '../../assets/svg/tools/visualstudio_code-icon.svg';
import GitLogo from '../../assets/svg/tools/git-scm-icon.svg';
import GitHubLogo from '../../assets/svg/tools/github-icon.svg';
import PostmanLogo from '../../assets/svg/tools/getpostman-icon.svg';
import VMLogo from '../../assets/svg/tools/logo_vmware.svg';
import DockerLogo from '../../assets/svg/tools/docker.svg';

export default function SectionSkills() {
  return (
    <div className="content-skills-section">
      <header className="header-skills">
        <SectionHeader
          name={<Translator path="section_skills.sub_title" />}
          description={<Translator path="section_skills.title" />}
        />
      </header>
      <main className="main-skills">
        <div className="list-education">
          <div className="box-education">
            <span className="line-education">
              <span className="circle-line"></span>
              <span className="circle-line"></span>
              <span className="circle-line"></span>
            </span>
            <div className="desc-education">
              <div className="course-info up-animation">
                <p className="institution-name">UniFil</p>
                <p className="course-name">
                  <Translator path="section_skills.education_history.1" />
                </p>
                <p className="course-period">2021 - 2023</p>
              </div>
              <div className="course-info up-animation">
                <p className="institution-name">One Bit Code</p>
                <p className="course-name">
                  <Translator path="section_skills.education_history.2" />
                </p>
                <p className="course-period">2021 - 2022</p>
              </div>
              <div className="course-info up-animation">
                <p className="institution-name">João Plath</p>
                <p className="course-name">
                  <Translator path="section_skills.education_history.3" />
                </p>
                <p className="course-period">2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="list-skills">
          <p className="desc-skills">
            <Translator path="section_skills.more_about" />
          </p>

          <div className="box-tech-skills">
            <h3 className="title-box-skills">
              <Translator path="section_skills.tecs" />
            </h3>
            <img
              src={JSLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
            <img
              src={TypeScriptLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
            <img
              src={NodeLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
            <img src={EXLogo} alt="node-logo" className="technologies-skills" />
            <img
              src={NestLogo}
              alt="nest-logo"
              className="technologies-skills"
            />
            <img
              src={ReactLogo}
              alt="react-logo"
              className="technologies-skills"
            />
            <img
              src={HtmlLogo}
              alt="html-logo"
              className="technologies-skills"
            />
            <img src={CssLogo} alt="css-logo" className="technologies-skills" />
            <img
              src={TailwindCssLogo}
              alt="tailwind-logo"
              className="technologies-skills"
            />
            <img
              src={SassLogo}
              alt="sass-logo"
              className="technologies-skills"
            />
            <img
              src={AwsLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
            <img
              src={MongoLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
            <img
              src={PostSQLLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={PrismaLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
          </div>

          <div className="box-tools-skills">
            <h3 className="title-box-skills">
              <Translator path="section_skills.tools" />
            </h3>
            <img
              src={VSLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={GitLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={GitHubLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={PostmanLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={DockerLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />

            <img
              src={VMLogo}
              alt="node-logo"
              className="technologies-skills left-animation"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
