import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/main.css";

function Navbar({ active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Navigation principale"
    >
      <Link
        to="/"
        className="navbar-brand"
        aria-label="Retour à l'accueil"
        onClick={closeMenu}
      >
        <p>John Doe</p>
      </Link>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <ul
        className={`navbar-menu ${isMenuOpen ? "active" : ""}`}
        role="menubar"
      >
        <li role="none">
          <Link
            to="/"
            className={active === "home" ? "active" : ""}
            role="menuitem"
            aria-current={active === "home" ? "page" : undefined}
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Mentions Légales
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
