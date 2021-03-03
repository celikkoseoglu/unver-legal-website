import React from "react";
import PropTypes from "prop-types";
import Section from "../Util/Section";
import {
  blogShowcaseCard,
  backgroundImage,
} from "../../stylesheets/components/Section/PublicationShowcase.module.sass";
import Heading from "../Heading";
import Row from "../Util/Row";
import {
  NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE,
  retrieveLatestBlogPosts,
} from "../../utils/LatestBlogsFetcher";
import PublicationShowcaseCard from "../PublicationShowcase/PublicationShowcaseCard";
import {
  description,
  descriptionRow,
  heading,
  ruler,
  sectionMargins,
  titleRow,
} from "../../stylesheets/components/Section/AboutUs.module.sass";
import HorizontalRuler from "../Util/HorizontalRuler";
import Container from "../Util/Container";

const blog = require("../../data/blog");
const blogShowcase = require("../../data/blogShowcase");

const PublicationShowcase = ({ id }) => {
  return (
    <Section className={backgroundImage} id={id}>
      <Container className={sectionMargins}>
        <Row className={titleRow}>
          <Heading text={blogShowcase.latestPublicationsTitle} className={heading} />
        </Row>
        <HorizontalRuler isDark className={ruler} />
        <Row className={`${descriptionRow}`}>
          <div className={description}>
            <p>{blogShowcase.description}</p>
          </div>
        </Row>
        <Row>
          {retrieveLatestBlogPosts(blog).map((blogItem, index) => (
            <PublicationShowcaseCard
              timestamp={blogItem.date}
              minutes={blogItem.minutes}
              blogPost={blogItem.blogPost}
              title={blogItem.title}
              subtitle={blogItem.subtitle}
              className={
                index >= NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE ? blogShowcaseCard : null
              }
              key={blogItem.title}
            />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

PublicationShowcase.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PublicationShowcase;
