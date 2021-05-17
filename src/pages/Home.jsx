import React, { useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import AboutMe from "../components/Section/AboutUs";
import Footer from "../components/Footer/Footer";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/blogPost/generic/generic.jpg";
import PublicationShowcase from "../components/Section/PublicationShowcase";
import { getInitialLanguage } from "../utils/LanguageSwitcher";
import Contact from "../components/Section/Contact";

const content = require("../data/en/content.json");

const Home = () => {
  const [language, setLanguage] = useState(getInitialLanguage());

  return (
    <>
      <MetaDecorator
        description={content.pageDescription}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
      />
      <NavigationBar language={language} languageSwitchFunction={setLanguage} />
      <Landing id={content.landingReference} language={language} />
      <AboutMe id={content.aboutUsReference} language={language} />
      <PublicationShowcase id={content.publicationShowcaseReference} language={language} />
      <Contact id={content.contactReference} language={language} />
      <Footer language={language} />
    </>
  );
};

export default Home;
