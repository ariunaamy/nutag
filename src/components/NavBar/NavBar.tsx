import "./NavBar.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//assets:
import hamburgerIcon from "../../assets/hamburger-4-svgrepo-com.svg";
import closeIcon from "../../assets/close-svgrepo-com.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // close navbar timer
  useEffect(() => {
    let timer: number;
    if (isMenuOpen) {
      timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  // navbar on scroll

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
        setIsMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <div id="nav-bar">
      <a href="/" className="logo">
        <img src="../../images/yurt-logo.png" alt="yurt" />
        <h1>Nutag Foundation</h1>
      </a>
      {isMenuOpen ? (
        <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
          <img src={closeIcon} alt="close" />
        </div>
      ) : (
        <div
          className="hamburger-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={hamburgerIcon} alt="humburger" />
        </div>
      )}
      {isMenuOpen && (
          <nav className="dropdown">
            <ul className="menu">
              <li>
                <Link to="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="ways_we_help" onClick={() => setIsMenuOpen(false)}>
                  Ways We Help
                </Link>
              </li>
              <li>
                <Link to="/our_team" onClick={() => setIsMenuOpen(false)}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="donate"
                  className="donate-button"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src="../../images/heart.png" alt="heart" />
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        
      )}
    </div>
  );
};
export default NavBar;
