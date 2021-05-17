import React from "react";
import PropTypes from "prop-types";
import {
  noMargin,
  titleFont,
  title,
  titleDark,
  navbarFlex,
  darkModeToggle,
  brandingContainer,
  branding,
  blogLinkBranding,
  blogLinkBrandingDark,
  defaultCursor,
  pointerCursor,
  ruler,
  centerAlign,
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import DarkModeToggle from "../DarkModeToggle";
import UnstyledLink from "../Util/UnstyledLink";
import unverLegalLogo from "../../data/images/unverLegalLogo.svg";
import unverLegalLogoLight from "../../data/images/unverLegalLogoLight.svg";
import HorizontalRuler from "../Util/HorizontalRuler";
import LanguageToggle from "../LanguageToggle";

const BlogNavbar = ({
  headerText,
  headerLink,
  brandingLink,
  isDark,
  setIsDark,
  language,
  languageSwitchFunction,
  className,
}) => {
  const header = <h1 className={`${noMargin} ${titleFont}`}>{headerText}</h1>;

  const getTitleOrButton = (text, link) =>
    link ? (
      <UnstyledLink
        className={`${isDark ? blogLinkBrandingDark : blogLinkBranding} ${pointerCursor}`}
        to={link}
      >
        {header}
      </UnstyledLink>
    ) : (
      <span className={`${defaultCursor} ${isDark ? titleDark : title}`}>{header}</span>
    );

  return (
    <div>
      <UnstyledLink to={brandingLink}>
        <a className={`${branding}`} href="/">
          <img
            border="0"
            alt="logo"
            src={isDark ? unverLegalLogo : unverLegalLogoLight}
            height="90"
          />
        </a>
      </UnstyledLink>

      {language && (
        <div className={centerAlign}>
          <LanguageToggle
            languageSwitchFunction={languageSwitchFunction}
            text="TR - EN"
            language={language}
            isDark={isDark}
          />
        </div>
      )}

      <HorizontalRuler isDark={isDark} className={ruler} />

      <div className={`${navbarFlex} ${className}`}>
        <div className={brandingContainer}>{getTitleOrButton(headerText, headerLink, isDark)}</div>
        <div className={darkModeToggle}>
          <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
        </div>
      </div>
    </div>
  );
};

BlogNavbar.propTypes = {
  headerText: PropTypes.string.isRequired,
  headerLink: PropTypes.string,
  brandingLink: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
  language: PropTypes.string,
  languageSwitchFunction: PropTypes.func,
  className: PropTypes.string,
};

BlogNavbar.defaultProps = {
  headerLink: null,
  className: null,
  language: null,
  languageSwitchFunction: null,
};

export default BlogNavbar;
