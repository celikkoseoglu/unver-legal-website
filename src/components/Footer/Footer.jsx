import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  brandingLogos,
  copyrightBar,
  footerLightText,
  footerListContainer,
  footerListDescription,
  footerStyle,
  ruler,
  sectionMargins,
  toggleDisclaimerButton,
} from "../../stylesheets/components/Footer/Footer.module.sass";

import HorizontalRuler from "../Util/HorizontalRuler";
import Container from "../Util/Container";
import { getLanguageFile } from "../../utils/LanguageSwitcher";
import BrandingLogos from "../BrandingLogos";

const Footer = ({ language }) => {
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

  const footer = getLanguageFile("footer", language);

  const getDisclaimerToggleLink = () => (
    <button
      type="button"
      id="myLink"
      title="Disclaimer Toggle"
      className={toggleDisclaimerButton}
      onClick={(_) => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
    >
      {isDisclaimerExpanded ? footer.disclaimerHideButtonText : footer.disclaimerShowButtonText}
    </button>
  );

  return (
    <footer className={footerStyle}>
      <Container className={sectionMargins}>
        <div className={copyrightBar}>
          <p className={`${footerLightText}`}>{footer.copyright}</p>
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
        <BrandingLogos isDark className={brandingLogos} />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
