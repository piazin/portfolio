import React, { useState } from "react";
import "./styles.css";

// import translate
import Translator from "../i18n/Translator";

// import components
import SectionHeader from "../SectionHeader";
import ContainerWorkInfo from "./ContainerWorkInfo";

function SectionWork() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="content-work-section">
      <div className="container-business">
        <SectionHeader
          name={<Translator path="section_header.experience" />}
          description={<Translator path="section_header.experience_describe" />}
        />
        <ul className="list-business">
          <li
            className={`select-business ${
              toggleState === 1 ? "active-tab" : "off-tab"
            }`}
            onClick={() => toggleTab(1)}
          >
            <p className="business-name">SL PART</p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </li>
          <li
            className={`select-business ${
              toggleState === 2 ? "active-tab" : "off-tab"
            }`}
            onClick={() => toggleTab(2)}
          >
            <p className="business-name">Freelancer</p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </li>
        </ul>
      </div>

      {toggleState == 1 ? (
        <ContainerWorkInfo
          position="Auxiliar de T.I"
          business="SL Adm Part"
          businessLink="https://www.slpart.com.br/"
          address="Mauá da Serra, Paraná"
          period="Out 2021 - Present - Full-time"
          tech={["AD", "Servers", "VM", "Linux", "Zabbix"]}
          activities={[
            <Translator path="section_works.sl_part.actives.1" />,
            <Translator path="section_works.sl_part.actives.2" />,
            <Translator path="section_works.sl_part.actives.3" />,
          ]}
        />
      ) : toggleState == 2 ? (
        <ContainerWorkInfo
          position="Freelancer"
          business=""
          businessLink="https://github.com/piazin"
          address="Mauá da Serra, Paraná"
          period="Jul 2021 - Present"
          tech={["Node JS", "React/Native", "APIs", "AWS", "HTML", "CSS", "JS"]}
          activities={[
            <Translator path="section_works.freelancer.actives.1" />,
            <Translator path="section_works.freelancer.actives.2" />,
            <Translator path="section_works.freelancer.actives.3" />,
          ]}
        />
      ) : (
        <h1>404</h1>
      )}
    </div>
  );
}

export default SectionWork;
