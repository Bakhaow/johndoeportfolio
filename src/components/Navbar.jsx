import { Link } from "react-router-dom";
import "../assets/styles/main.css";

function Navbar({ active }) {
  return (
    <div className="navbar">
      <p>John Doe</p>
      <ul>
        <li>
          <Link to="/" className={active === "home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={active === "about" ? "active" : ""}>
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={active === "projects" ? "active" : ""}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={active === "contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/policies"
            className={active === "policies" ? "active" : ""}
          >
            Mentions Légales
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
