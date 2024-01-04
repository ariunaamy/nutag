import "./Header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="logo">
      <img src="../../images/yurt-logo.png" alt="yurt"/>
      <h1>Nutag Foundation</h1>
      </div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav className="menu">
          <Link to="/">About</Link>
          <Link to="/">Read</Link>
          <Link to="/">How we help</Link>
          <Link to="donate" className="donate-button">
            <img src="../../images/heart.png" alt="heart" />
            Donate
          </Link>
        </nav>
      </aside>
    </header>
  );
};
export default Header;
