import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faBars, faUser, faPhone , faSmile} from '@fortawesome/free-solid-svg-icons';

import './nav.css';

function Navbar() {
  return (
    <nav className="navbar-background">
      <ul className="nav-list">
        <h1 style={{ color: "black", fontSize: "40px" }}>
          <i>ELEGANZ <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: "black", fontSize: "38px" }} /> </i>
        </h1>
        <li>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <button><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></button>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars} size="2x" />
          <button><Link to="/menu" style={{ color: "white", textDecoration: "none" }}>Menu</Link></button>
        </li>
        <li>
        <FontAwesomeIcon icon={faUser} size="2x" />
          <button><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About us</Link></button>
        </li>
        <li>
        <FontAwesomeIcon icon={faPhone} size="2x" />
          <button><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact us</Link></button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
