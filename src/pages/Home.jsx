import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import AboutMe from "../components/Section/AboutUs";
import Footer from "../components/Footer/Footer";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/home.png";
import PublicationShowcase from "../components/Section/PublicationShowcase";

const content = require("../data/content");

const Home = () => {
  return (
    <>
      <MetaDecorator
        description={content.pageDescription}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
      />
      <NavigationBar />
      <Landing id={content.landingReference} />
      <AboutMe id={content.aboutUsReference} />
      <PublicationShowcase id={content.publicationShowcaseReference} />
      <Footer />
    </>
  );
};

export default Home;
