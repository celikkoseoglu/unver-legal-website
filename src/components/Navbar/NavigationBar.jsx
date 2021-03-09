import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";
import {
  brand,
  brandSmall,
  brandTransition,
  customNavbar,
  mobileNavbar,
  mobileNavbarLinksCollapsed,
  mobileNavbarLinksExpanded,
  navbarContainer,
  navbarLinks,
  navbarToggle,
  noLeftPadding,
  topNavCollapse,
  topNavExpand,
  whiteLink,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";
import Container from "../Util/Container";
import NavbarToggle from "./NavbarToggle";
import {debounce, throttle} from "../../utils/Limitors";
import unverLegalLogo from "../../data/images/unverLegalLogo.svg";
import {getLanguageFile, switchLanguage} from "../../utils/LanguageSwitcher";

const NavigationBar = ({ language, languageSwitchFunction }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);

  const content = getLanguageFile("navbar", language);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50) {
      setNavbarExpanded(true);
    }

    if (window.pageYOffset > 250) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 250.0);
    }

    setMobileNavbarCollapsed(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () => window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);

  return (
    <nav
      style={
        mobileNavbarCollapsed
          ? {
              backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
          : {
              backgroundColor: `rgba(27, 27, 27, 0.85)`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
      }
      className={`${customNavbar} ${navbarExpanded ? topNavExpand : topNavCollapse}`}
    >
      <Container className={navbarContainer}>
        <div className={mobileNavbar}>
          <NavbarItem
            className={noLeftPadding}
            title={
              <img
                alt="logo"
                className={`${brandTransition} ${navbarExpanded ? brand : brandSmall}`}
                src={unverLegalLogo}
              />
            }
            reference={content.landingReference}
          />

          <button
            type="button"
            aria-label="Navbar Toggle"
            onClick={(_) => {
              languageSwitchFunction(switchLanguage(language));
            }}
          >
            Switch Language
          </button>

          <NavbarToggle
            onClickMethod={setMobileNavbarCollapsed}
            collapsed={mobileNavbarCollapsed}
            className={navbarToggle}
          />
        </div>
        <div
          className={`${navbarLinks} ${
            mobileNavbarCollapsed ? mobileNavbarLinksCollapsed : mobileNavbarLinksExpanded
          }`}
        >
          {content.items.map((item) => (
            <NavbarItem
              title={item.title}
              reference={item.reference}
              href={item.href}
              className={whiteLink}
              key={item.title}
            />
          ))}
        </div>
      </Container>
    </nav>
  );
};

NavigationBar.propTypes = {
  language: PropTypes.string.isRequired,
  languageSwitchFunction: PropTypes.func.isRequired,
};

export default NavigationBar;
