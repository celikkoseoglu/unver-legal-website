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
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import DarkModeToggle from "../DarkModeToggle";
import UnstyledLink from "../Util/UnstyledLink";
import unverLegalLogo from "../../data/images/unverLegalLogo.svg";
import unverLegalLogoLight from "../../data/images/unverLegalLogoLight.svg";
import HorizontalRuler from "../Util/HorizontalRuler";

const BlogNavbar = ({ headerText, headerLink, brandingLink, isDark, setIsDark, className }) => {
  const header = <h1 className={`${noMargin} ${titleFont}`}>{headerText}</h1>;

  const getTitleOrButton = (text, link) => {
    return link ? (
      <UnstyledLink
        className={`${isDark ? blogLinkBrandingDark : blogLinkBranding} ${pointerCursor}`}
        to={link}
      >
        {header}
      </UnstyledLink>
    ) : (
      <span className={`${defaultCursor} ${isDark ? titleDark : title}`}>{header}</span>
    );
  };

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
  className: PropTypes.string,
};

BlogNavbar.defaultProps = {
  headerLink: null,
  className: null,
};

export default BlogNavbar;
