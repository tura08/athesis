import React from "react";
import { Link } from "react-router-dom";
import "./ProductCardHome.css"; // Ensure you create this CSS file

const ProductCardHome = ({ id, name, description, nomeBotanico }) => {
  return (
    // <Link to={`/product/${id}`} className="product-card">
    <div className="product-card">
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <span className="product-botanic-name">{nomeBotanico}</span>
      {/* <img src={imageUrl} alt={name} className="product-image" /> */}
    </div>
    // </Link>
  );
};

export default ProductCardHome;
