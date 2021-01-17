import React, { useEffect } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import { firebaseAnalytics } from "../firebaseConfig";
import AboutMe from "../components/Section/AboutUs";
import Footer from "../components/Footer/Footer";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/home.png";

const content = require("../data/content");

const Home = () => {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  });

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
      <Footer />
    </>
  );
};

export default Home;
