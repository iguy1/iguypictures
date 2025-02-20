import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './4k.gif';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" style ={{width:"500px"}} />
            <span className="logo-text"></span>
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/iguypictures" onClick={toggleNavbar}>Home</Link>
            </li>
            <li>
            <Link to ='/Flicks' onClick={toggleNavbar}>Halloween</Link>
            </li>
            <li>
              <Link to="/Memorial" onClick={toggleNavbar}>Memorial Day</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;