import React from "react";
import PropTypes from "prop-types";
import SocialMediaBar from "./SocialMediaBar";
import {
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark,
  footerStyle,
  socialMediaBar,
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";
import BrandingLogos from "../BrandingLogos";

const footer = require("../../data/en/contact.json");

const BlogFooter = ({ isDark }) => (
  <footer className={footerStyle}>
    <BrandingLogos isDark={isDark} />
    <div className={socialMediaBar}>
      <SocialMediaBar
        socialMediaLinks={footer.socialMediaLinks}
        buttonBackground={isDark ? socialMediaButtonBackgroundDark : socialMediaButtonBackground}
      />
    </div>
  </footer>
);

BlogFooter.propTypes = {
  isDark: PropTypes.bool,
};

BlogFooter.defaultProps = {
  isDark: false,
};

export default BlogFooter;
