import "./NavBar.scss";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }
}, [lastScrollY]);


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
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
    <div className={`navbar ${show ? 'active' : 'hidden'}`}>
      <a href="/" className="logo">
      <img src="../../images/yurt-logo.png" alt="yurt"/>
      <h1>Nutag Foundation</h1>
      </a>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="dropdown">
        <nav className="menu">
          <a href="#about">About</a>
          <Link to="/">Read</Link>
          <Link to="/">How we help</Link>
          <Link to="donate" className="donate-button">
            <img src="../../images/heart.png" alt="heart" />
            Donate
          </Link>
        </nav>
      </aside>
    </div>
  );
};
export default NavBar;
