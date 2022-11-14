import React from "react";
import { useTranslation } from "react-i18next";

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;
  return (
    <>
      <button onClick={() => handleChangeLanguage("pt-BR")}>
        Change Language to PT-BR
      </button>
      <button onClick={() => handleChangeLanguage("en-US")}>
        Mudar linguagem para EN-US
      </button>
    </>
  );
};

export default I18n;
