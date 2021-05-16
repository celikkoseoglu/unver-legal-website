import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  heroContainer,
  heroBackground,
} from "../../stylesheets/components/Section/Landing.module.sass";
import Container from "../Util/Container";
import { folders, getRandomInt } from "../../utils/FileManager.utils";
import Hero from "../Hero";
import { iPad } from "../../utils/Constants.utils";
import { debounce } from "../../utils/Limitors";

import { getLanguageFile } from "../../utils/LanguageSwitcher";

const randomLandingImageNumber = getRandomInt(folders.heroImages.length);
const landingImageUrl = folders.heroImages[randomLandingImageNumber];

let windowInnerWidth = 0;

const Landing = ({ id, language }) => {
  const hero = getLanguageFile("hero", language);

  const handleResize = () => {
    const currentWindowInnerWidth = window.innerWidth;
    if (currentWindowInnerWidth !== windowInnerWidth) {
      windowInnerWidth = currentWindowInnerWidth;
      const windowInnerHeight = window.innerHeight;
      document.documentElement.style.setProperty("--windowInnerHeight", `${windowInnerHeight}px`);
    }
  };

  if (iPad) {
    handleResize();
  }

  useEffect(() => {
    if (iPad) {
      window.addEventListener("resize", debounce(handleResize));
    }

    return () => {
      if (iPad) {
        window.removeEventListener("resize", debounce(handleResize));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <header
      id={id}
      style={{
        backgroundImage: `linear-gradient(to bottom, black, transparent 20%, transparent 80%, black 100%), url(${landingImageUrl})`,
      }}
      className={`${heroBackground}`}
    >
      <Container className={heroContainer}>
        <Hero
          introHeading={hero.introHeading}
          introLeadIn={hero.introLeadIn}
          introLeadOut={hero.introLeadOut}
          resumeButtonText={hero.resumeButtonText}
          resumeLink={hero.resumeButtonLink}
        />
      </Container>
    </header>
  );
};

Landing.propTypes = {
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Landing;
