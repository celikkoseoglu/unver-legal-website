import React from "react";
import PropTypes from "prop-types";
import { FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  inlineList,
  linkedin,
  mail,
  map,
  noVerticalMargin,
  socialMediaButton,
} from "../../stylesheets/components/Footer/SocialMediaBar.module.sass";

const SocialMediaBar = ({ socialMediaLinks, buttonBackground }) => {
  return (
    <>
      <ul className={`${inlineList} ${noVerticalMargin}`}>
        <SocialMediaIcon
          className={`${linkedin} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.linkedinLink}
          ariaLabel={socialMediaLinks.linkedinAriaLabel}
        >
          <FaLinkedinIn />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${mail} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.emailLink}
          ariaLabel={socialMediaLinks.emailAriaLabel}
        >
          <FaEnvelope />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${map} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.mapLink}
          ariaLabel={socialMediaLinks.mapAriaLabel}
        >
          <FaMapMarkerAlt />
        </SocialMediaIcon>
      </ul>
    </>
  );
};

SocialMediaBar.propTypes = {
  socialMediaLinks: PropTypes.shape({
    twitterLink: PropTypes.string.isRequired,
    twitterAriaLabel: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    facebookAriaLabel: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string.isRequired,
    linkedinAriaLabel: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    githubAriaLabel: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    instagramAriaLabel: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired,
    emailAriaLabel: PropTypes.string.isRequired,
  }).isRequired,
  buttonBackground: PropTypes.string,
};

SocialMediaBar.defaultProps = {
  buttonBackground: null,
};

export default SocialMediaBar;
