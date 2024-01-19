import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./Navigation.css";

const Navigation = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    // Listen for scroll events on the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className={`logo ${shrink ? "shrink-logo" : ""}`}>
        <Link to="/">
          <img src={logo} alt="" />
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
