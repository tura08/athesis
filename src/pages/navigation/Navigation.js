import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="navbar" id={isMenuOpen ? "open" : "close"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu">
        <div className="toggleButton" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon
              className="menuIcon"
              style={{ position: "fixed", right: "50px", top: "50px" }}
            />
          ) : (
            <MenuIcon
              className="menuIcon"
              style={{ position: "fixed", right: "50px", top: "50px" }}
            />
          )}
        </div>
        <div className="links">
          <Link to="/products" className="link">
            {location.pathname === "/products" ? (
              <h3>PRODOTTI</h3>
            ) : (
              <p>PRODOTTI</p>
            )}
          </Link>
          <Link to="/sheets" className="link">
            {location.pathname === "/sheets" ? (
              <h3>SCHEDE TECNICHE</h3>
            ) : (
              <p>SCHEDE TECNICHE</p>
            )}
          </Link>
          <Link to="/contact" className="link">
            {location.pathname === "/contact" ? (
              <h3>CONTATTI</h3>
            ) : (
              <p>CONTATTI</p>
            )}
          </Link>
          <Link to="/about" className="link">
            {location.pathname === "/about" ? <h3>ABOUT</h3> : <p>ABOUT</p>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
