import React from "react";
import PropTypes from "prop-types";
import { switchLanguage } from "../utils/LanguageSwitcher";
import { languageToggle } from "../stylesheets/components/LanguageToggle.module.sass";

const LanguageToggle = ({ text, className, language, languageSwitchFunction }) => {
  return (
    <button
      type="button"
      aria-label="Language Toggle"
      onClick={(_) => {
        languageSwitchFunction(switchLanguage(language));
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
