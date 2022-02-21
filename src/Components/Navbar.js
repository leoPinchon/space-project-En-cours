import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../data/assets/shared/logo.svg";
import burger from "../data/assets/shared/icon-hamburger.svg";
import close from "../data/assets/shared/icon-close.svg";

export default function Navbar() {
  //Menu burger visible ou non
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="space logo" />
      <nav className="primary-nav-box">
        <ul className="primary-nav">
          <NavLink to="/">
            <li>
              <span>00</span>Home
            </li>
          </NavLink>
          <NavLink to="/destination">
            <li>
              <span>01</span>Destination
            </li>
          </NavLink>
          <NavLink to="/crew">
            {" "}
            <li>
              <span>02</span>Crew
            </li>
          </NavLink>
          <NavLink to="/technology">
            <li>
              <span>03</span>Technology
            </li>
          </NavLink>
        </ul>
      </nav>
      <nav className={`primary-nav-box-phone ${menuOpen && "isOpen"}`}>
        <ul className="primary-nav primary-nav-phone">
          <NavLink to="/">
            <li>
              <span>00</span>Home
            </li>
          </NavLink>
          <NavLink to="/destination">
            <li>
              <span>01</span>Destination
            </li>
          </NavLink>
          <NavLink to="/crew">
            <li>
              <span>02</span>Crew
            </li>
          </NavLink>
          <NavLink to="/technology">
            <li>
              <span>03</span>Technology
            </li>
          </NavLink>
        </ul>
      </nav>
      <button
        className={`nav-burger-toggle ${menuOpen ? 'close' : 'burger' }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* <img src={menuOpen ? close : burger} alt="menu" /> */}
      </button>
    </header>
  );
}
