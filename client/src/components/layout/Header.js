import { Link } from "react-router-dom";
import "../../assets/styles/header.scss";

function Header() {
  return (
    <header className="header-container">
      <ul className="header__list">
        <Link className="header__list__item" to="/">
          <li>Home</li>
        </Link>
        <Link className="header__list__item" to="/exercises">
          <li>Exercises</li>
        </Link>
        <Link className="header__list__item" to="/forum">
          <li>Forum</li>
        </Link>
        <Link className="header__list__item" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="header__list__item" to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
