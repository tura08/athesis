import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="/products" className="link">
          PRODOTTI
        </Link>
        <Link to="/sheets" className="link">
          SCHEDE TECNICHE
        </Link>
        <Link to="/contact" className="link">
          CONTATTI
        </Link>
        <Link to="/about" className="link">
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
