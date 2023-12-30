import "./Header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isMenuOpen) {
      timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  return (
    <header>
      <h1 className="logo">Nutag Foundation</h1>
      <div className="menu_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      {isMenuOpen && (
        <nav className="dropdown">
          <div className="menu">
            <a>About</a>
            <a>Read</a>
            <a>How we help</a>
          </div>
          <button className="donate">
            <img src="../../images/heart.png" alt="heart" />
            Donate
          </button>
        </nav>
      )}
    </header>
  );
};
export default Header;
