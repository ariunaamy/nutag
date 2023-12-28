import "./MobileNavigation.scss";
import { useState } from "react";

const MobileNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
         <div className="menu_icon" onClick={toggleMenu}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#0b3375"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#0b3375"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#0b3375"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        </div>
        {isMenuOpen &&
        (<nav>
            <a>About</a>
            <a>Read</a>
            <a>Donate</a>
        </nav>) }
        </>
       

    )


}

export default MobileNavigation;
