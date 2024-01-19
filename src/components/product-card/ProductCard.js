import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Ensure you create this CSS file

const ProductCard = ({ id, name, description, imageUrl }) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
