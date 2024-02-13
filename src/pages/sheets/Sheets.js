import React from "react";
import "./Sheets.css";

// Data
import { productsST } from "../../assets/data";

// Reusable component for product card
const ProductCardST = ({ name, pdfLink }) => {
  return (
    <a href={pdfLink} className="products-card" download>
      <div className="products-info">
        <div className="products-name">{name}</div>
      </div>
    </a>
  );
};

// Component to render the list of product cards
const Sheets = () => {
  return (
    <div className="ts">
      <div className="ts-bg">
        <div className="ts-wrapper">
          {productsST.map((product, index) => (
            <ProductCardST
              key={index}
              name={product.name}
              pdfLink={product.pdfLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sheets;
