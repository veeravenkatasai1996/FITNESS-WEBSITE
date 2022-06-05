import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link} from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleChange = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" to="/">
            <span style={{ color: "red" }}>MAX</span>FIT
          </Link>
          <div className="menu-icon" onClick={handleChange}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="#" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item-links">
              <Link to="#about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item-links">
              <Link to="#features" className="nav-links">
                Features
              </Link>
            </li>
            <li className="nav-item-links">
              <Link to="#pricing" className="nav-links">
                Pricing
              </Link>
            </li>
            <li className="nav-item-links">
              <Link to="#trainers" className="nav-links">
                Trainers
              </Link>
            </li>
            <li className="nav-item-links">
              <Link to="#Moreinfo" className="nav-links">
                MoreInfo
              </Link>
            </li>
      
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
