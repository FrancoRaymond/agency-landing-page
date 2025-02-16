import React, { useEffect, useState } from "react";
import './navbar.css'
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <nav className={menuOpen ? "active" : ""}>
        <ul>
          <li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Projects</a></li>
        </ul>
        <button className="navBtn">Contact</button>
      </nav>
      <img
        src={menu}
        onClick={handleMenuClick}
        alt=""
        className="menu"
      />
    </div>
  );
};

export default Navbar;

