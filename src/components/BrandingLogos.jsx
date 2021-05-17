import React from "react";
import PropTypes from "prop-types";
import { celikkBranding } from "../stylesheets/components/BrandingLogos.module.sass";
import unverLegalLogo from "../data/images/unverLegalLogo.svg";
import BlogBrandingLogo from "./Animations/BlogBrandingLogo";
import unverLegalLogoLight from "../data/images/unverLegalLogoLight.svg";

const BrandingLogos = ({ className, isDark }) => (
  <div className={className}>
    <a href="/">
      <img
        border="0"
        alt="logo"
        src={isDark ? unverLegalLogo : unverLegalLogoLight}
        width="auto"
        height="20"
      />
    </a>
    <a href="https://www.celikk.me">
      <BlogBrandingLogo className={`${celikkBranding}`} isDark />
    </a>
  </div>
);

BrandingLogos.propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
};

BrandingLogos.defaultProps = {
  className: null,
};

export default BrandingLogos;
