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
      <h1 className="logo">Nutag Foundation</h1>
      <label className="hamburger-menu">
        <input type="checkbox"/>
      </label>
      <aside className="sidebar">
        <nav className="dropdown">
          <div className="menu">
            <a>About</a>
            <a>Read</a>
            <a>How we help</a>
          </div>
          <Link to="donate" className="donate">    
            <img src="../../images/heart.png" alt="heart" />
            Donate
          </Link>      
        </nav>
        </aside>
    </header>
  );
};
export default Header;
