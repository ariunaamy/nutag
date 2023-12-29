import "./Header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);

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
        <div id="mobile-navigation">
          <div className="menu_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </div>
        </div>
      {isMenuOpen && (
        <nav className="dropdown">
          <a>About</a>
          <a>Read</a>
          <a>Donate</a>
        </nav>
      )}
    </header>
  );
};
export default Header;
