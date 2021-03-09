import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  brandingLogos,
  celikkBranding,
  copyrightBar,
  footerLightText,
  footerListContainer,
  footerListDescription,
  footerStyle,
  ruler,
  sectionMargins,
  toggleDisclaimerLink,
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import HorizontalRuler from "../Util/HorizontalRuler";
import Container from "../Util/Container";
import unverLegalLogo from "../../data/images/unverLegalLogo.svg";
import BlogBrandingLogo from "../Animations/BlogBrandingLogo";
import { getLanguageFile } from "../../utils/LanguageSwitcher";
import AboutMe from "../Section/AboutUs";

const Footer = ({ language }) => {
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

  const footer = getLanguageFile("footer", language);

  const getDisclaimerToggleLink = () => {
    return (
      <a
        id="myLink"
        title="Disclaimer Toggle"
        className={toggleDisclaimerLink}
        onClick={(_) => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
      >
        {isDisclaimerExpanded ? footer.disclaimerHideButtonText : footer.disclaimerShowButtonText}
      </a>
    );
  };

  return (
    <footer className={footerStyle}>
      <Container className={sectionMargins}>
        <div className={copyrightBar}>
          <p className={`${footerLightText}`}>{footer.copyright}</p>
          <SocialMediaBar socialMediaLinks={footer.socialMediaLinks} />
        </div>

        <HorizontalRuler isDark className={ruler} />
        <div className={footerListContainer}>
          <p className={`${footerListDescription} ${footerLightText}`}>{footer.disclaimer}</p>
          {isDisclaimerExpanded && (
            <p className={`${footerListDescription} ${footerLightText}`}>
              {footer.extendedDisclaimer}
            </p>
          )}
          {getDisclaimerToggleLink()}
        </div>

        <div className={brandingLogos}>
          <a href="/">
            <img border="0" alt="logo" src={unverLegalLogo} width="auto" height="20" />
          </a>
          <a href="https://www.celikk.me">
            <BlogBrandingLogo className={`${celikkBranding}`} isDark />
          </a>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
