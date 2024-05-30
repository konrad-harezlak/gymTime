import { Link } from "react-router-dom";
import "../../assets/styles/header.scss";

function Header() {
  return (
    <header className="header-container">
      <ul className="header__list">
        <li className="header__list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__list__item">
          <Link to="/exercises">Exercises</Link>
        </li>
        <li className="header__list__item">
          <Link to="/forum">Forum</Link>
        </li>
        <li className="header__list__item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="header__list__item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
