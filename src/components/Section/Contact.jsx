import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading";
import {
  description,
  ruler,
  heading,
  titleRow,
  descriptionRow,
  backgroundImage,
  sectionMargins,
  title,
  text,
  socialMediaBarSpacing,
} from "../../stylesheets/components/Section/Contact.module.sass";
import HorizontalRuler from "../Util/HorizontalRuler";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";
import { getLanguageFile } from "../../utils/LanguageSwitcher";
import SocialMediaBar from "../Footer/SocialMediaBar";

const Contact = ({ id, language }) => {
  const contact = getLanguageFile("contact", language);

  return (
    <Section className={backgroundImage} id={id}>
      <Container className={sectionMargins}>
        <Row className={titleRow}>
          <Heading text={contact.title} className={heading} />
        </Row>
        <HorizontalRuler isDark className={ruler} />
        <Row className={descriptionRow}>
          <div className={description}>
            <p className={title}>{contact.addressTitle}</p>
            <p className={text}>{contact.address}</p>
            <p className={title}>{contact.phoneTitle}</p>
            <p className={text}>{contact.phone}</p>
            <p className={title}>{contact.emailTitle}</p>
            <p className={text}>{contact.email}</p>
          </div>
        </Row>
        <div className={socialMediaBarSpacing}>
          <SocialMediaBar socialMediaLinks={contact.socialMediaLinks} />
        </div>
      </Container>
    </Section>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Contact;
