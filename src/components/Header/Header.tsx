import "./Header.scss";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const Header = () => {
  return (
    <header>
      <h1 className="logo">Nutag Foundation</h1>
      <MobileNavigation/>
    </header>
  );
};
export default Header;
