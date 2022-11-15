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
      {selectedLanguage == "pt-BR" ? (
        <p
          onClick={() => handleChangeLanguage("en-US")}
          style={{ cursor: "pointer" }}
        >
          EN-US
        </p>
      ) : (
        <p
          onClick={() => handleChangeLanguage("pt-BR")}
          style={{ cursor: "pointer" }}
        >
          PT-BR
        </p>
      )}
    </>
  );
};

export default I18n;
