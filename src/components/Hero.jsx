import React from "react";
import PropTypes from "prop-types";

import {
  introFont,
  introMargin,
  introHeadingStyle,
  introLeadInStyle,
  introLeadOutStyle,
  boxDiv,
  box,
} from "../stylesheets/components/Hero.module.sass";

const Hero = ({ introHeading, introLeadIn, introLeadOut, resumeButtonText, resumeLink }) => (
  <div className={`${introMargin}`}>
    <div className={`${introLeadInStyle} ${introFont}`}>{introLeadIn}</div>
    <div className={`${introHeadingStyle} ${introFont}`}>{introHeading}</div>
    <div className={`${introLeadOutStyle} ${introFont}`}>{introLeadOut}</div>
    <div className={boxDiv}>
      <a href={resumeLink} className={`${box} ${introFont}`}>
        {resumeButtonText}
      </a>
    </div>
  </div>
);

Hero.propTypes = {
  introHeading: PropTypes.string.isRequired,
  introLeadIn: PropTypes.string.isRequired,
  introLeadOut: PropTypes.string.isRequired,
  resumeButtonText: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
};

export default Hero;
