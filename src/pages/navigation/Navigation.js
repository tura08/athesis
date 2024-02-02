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
            <h4 className={location.pathname === "/products" ? "active" : ""}>
              PRODOTTI
            </h4>
          </Link>
          <Link to="/sheets" className="link">
            <h4 className={location.pathname === "/sheets" ? "active" : ""}>
              SCHEDE TECNICHE
            </h4>
          </Link>
          <Link to="/contact" className="link">
            <h4 className={location.pathname === "/contact" ? "active" : ""}>
              CONTATTI
            </h4>
          </Link>
          <Link to="/about" className="link">
            <h4 className={location.pathname === "/about" ? "active" : ""}>
              ABOUT
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
