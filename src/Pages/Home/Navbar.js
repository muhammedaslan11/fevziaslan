import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    {
      to: "heroSection",
      name: t("homepageTitle"),
    },
    {
      to: "AboutMe",
      name: t("aboutmeTitle"),
    },
    {
      to: "Projects",
      name: t("projectsTitle"),
    },
  ];

  localStorage.setItem("links", links);
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      closeMenu;
    }
  }, []);

  // console.log("objectdsdadas", i18n.languages);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a href="/">
        <img width={150} src="./img/logo2.png" alt="Logoipsum" />
      </a>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line" />
        <span className="nav__hamburger__line" />
        <span className="nav__hamburger__line" />
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={item.to}
                className="navbar--content"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div
        onClick={() => window.open("https://wa.me/+905444038307")}
        className="btn btn-outline-primary"
      >
        {t("getContactTitle")}
      </div> */}
      <div className="language-parent">
        <div
          className="lang-btn"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          <img src={t("flag")} />
          <b>{i18n.language === "tr" ? "Turkish" : "English"}</b>
        </div>
        {modalOpen && (
          <div className="language-modal">
            <button
              onClick={() => {
                changeLanguage("tr");
                setModalOpen(false);
              }}
            >
              {" "}
              <div>
                <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg" />
              </div>
              Turkish
            </button>
            <button
              onClick={() => {
                changeLanguage("en");
                setModalOpen(false);
              }}
            >
              <div>
                <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg" />
              </div>
              English
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
