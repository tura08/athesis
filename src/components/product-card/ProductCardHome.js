import React from "react";
import { Link } from "react-router-dom";
import "./ProductCardHome.css"; // Ensure you create this CSS file

const ProductCardHome = ({ id, name, description, price, imageUrl }) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      {/* <img src={imageUrl} alt={name} className="product-image" /> */}
      <h1 className="product-price">{price} €/kg</h1>
    </Link>
  );
};

export default ProductCardHome;
