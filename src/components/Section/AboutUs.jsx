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
import { getLanguageFile } from "../../utils/LanguageSwitcher";

const AboutMe = ({ id, language }) => {
  const aboutUs = getLanguageFile("aboutMe", language);

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
            <p>{aboutUs.descriptionFin}</p>
          </div>
        </Row>
      </Container>
    </Section>
  );
};

AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default AboutMe;
