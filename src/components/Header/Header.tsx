import Flag from "./Flag";
import "./Header.scss";

const Header = () => {
  return (
    <header>
        <Flag />
        <h1>Nutag Foundation</h1>
        <nav>
          <ul>
            <li><a href="#">why help?</a></li>
            <li><a href="#">Read</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
    </header>
  );
};
export default Header;
