import React from "react";
import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import { switchLanguage } from "../utils/LanguageSwitcher";
import { languageToggle } from "../stylesheets/components/LanguageToggle.module.sass";

const onClickWrapper = (language) => {
  const newLanguage = switchLanguage(language);
  storage.setItem("language", newLanguage);
  return newLanguage;
};

const LanguageToggle = ({ text, className, language, languageSwitchFunction }) => {
  return (
    <button
      type="button"
      aria-label="Language Toggle"
      onClick={(_) => {
        languageSwitchFunction(onClickWrapper(language));
      }}
      className={languageToggle}
    >
      {text}
    </button>
  );
};

LanguageToggle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  language: PropTypes.string.isRequired,
  languageSwitchFunction: PropTypes.func.isRequired,
};

LanguageToggle.defaultProps = {
  className: null,
};

export default LanguageToggle;
