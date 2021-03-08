import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading";
import {
  description,
  ruler,
  heading,
  titleRow,
  descriptionRow,
  link,
  backgroundImage,
  sectionMargins,
} from "../../stylesheets/components/Section/AboutUs.module.sass";
import HorizontalRuler from "../Util/HorizontalRuler";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";
import UnstyledLink from "../Util/UnstyledLink";

const aboutUs = require("../../data/en/aboutMe.json");

const AboutMe = ({ id }) => {
  return (
    <Section className={backgroundImage} id={id}>
      <Container className={sectionMargins}>
        <Row className={titleRow}>
          <Heading text={aboutUs.title} className={heading} />
        </Row>
        <HorizontalRuler isDark className={ruler} />
        <Row className={descriptionRow}>
          <div className={description}>
            <p>{aboutUs.descriptionHead}</p>
            <p>{aboutUs.descriptionMid}</p>
            <p>{aboutUs.descriptionTail}</p>
            <UnstyledLink className={link} to="/publications">
              Read our publications
            </UnstyledLink>
          </div>
        </Row>
      </Container>
    </Section>
  );
};

AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutMe;
