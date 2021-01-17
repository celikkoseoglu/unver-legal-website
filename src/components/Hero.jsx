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

const Hero = ({ introHeading, introLeadIn, resumeButtonText, resumeLink }) => {
  return (
    <div className={`${introMargin}`}>
      <div className={`${introLeadInStyle} ${introFont}`}>{introLeadIn}</div>
      <div className={`${introHeadingStyle} ${introFont}`}>{introHeading}</div>
      <div className={`${introLeadOutStyle} ${introFont}`}>
        Accurate and transparent legal service whilst protecting your confidential information.
        Always here, always responding legal backup plan.
      </div>
      <div className={boxDiv}>
        <a href={resumeLink} className={`${box} ${introFont}`}>
          {resumeButtonText}
        </a>
      </div>
    </div>
  );
};

Hero.propTypes = {
  introHeading: PropTypes.string.isRequired,
  introLeadIn: PropTypes.string.isRequired,
  resumeButtonText: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
};

export default Hero;
