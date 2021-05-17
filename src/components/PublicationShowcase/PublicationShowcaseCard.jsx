import React from "react";
import PropTypes from "prop-types";
import {
  square,
  montserrat,
  montserratSlim,
  timestampStyle,
  subtitleStyle,
  titleStyle,
  description,
} from "../../stylesheets/components/PublicationShowcase/PublicationShowcaseCard.module.sass";
import UnstyledLink from "../Util/UnstyledLink";
import { BLOG_LINK } from "../../utils/Constants.utils";

const PublicationShowcaseCard = ({ title, subtitle, timestamp, minutes, blogPost, className }) => (
  <div className={`${square} ${className}`}>
    <UnstyledLink to={`${BLOG_LINK}${blogPost}`}>
      <div className={description}>
        <h6 className={`${montserrat} ${titleStyle}`}>{title}</h6>
        <p className={`${montserratSlim} ${subtitleStyle}`}>{subtitle}</p>
      </div>
      <p className={`${timestampStyle} ${montserratSlim}`}>
        {timestamp} - {minutes}
      </p>
    </UnstyledLink>
  </div>
);

PublicationShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PublicationShowcaseCard.defaultProps = {
  className: null,
};

export default PublicationShowcaseCard;
