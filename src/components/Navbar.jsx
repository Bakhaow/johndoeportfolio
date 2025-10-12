import { Link } from "react-router-dom";
import "../assets/styles/main.css";

function Navbar({ active }) {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Navigation principale"
    >
      <Link to="/" className="navbar-brand" aria-label="Retour à l'accueil">
        <p>John Doe</p>
      </Link>
      <ul role="menubar">
        <li role="none">
          <Link
            to="/"
            className={active === "home" ? "active" : ""}
            role="menuitem"
            aria-current={active === "home" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li role="none">
          <Link
            to="/about"
            className={active === "about" ? "active" : ""}
            role="menuitem"
            aria-current={active === "about" ? "page" : undefined}
          >
            Services
          </Link>
        </li>
        <li role="none">
          <Link
            to="/projects"
            className={active === "projects" ? "active" : ""}
            role="menuitem"
            aria-current={active === "projects" ? "page" : undefined}
          >
            Portfolio
          </Link>
        </li>
        <li role="none">
          <Link
            to="/contact"
            className={active === "contact" ? "active" : ""}
            role="menuitem"
            aria-current={active === "contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
        <li role="none">
          <Link
            to="/policies"
            className={active === "policies" ? "active" : ""}
            role="menuitem"
            aria-current={active === "policies" ? "page" : undefined}
          >
            Mentions Légales
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
