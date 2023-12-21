import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const links = [
    {
      to: "heroSection",
      name: "Home",
    },
    {
      to: "AboutMe",
      name: "About Me",
    },
  ];
  localStorage.setItem("links", links);
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
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
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

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
      <div
        onClick={() => window.open("https://wa.me/+905444038307")}
        className="btn btn-outline-primary"
      >
        Contact Me
      </div>
    </nav>
  );
}

export default Navbar;
