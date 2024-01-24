import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./Products.css";

// Importing images from the src/assets/products-img folder
import partenioImage from "../../assets/products-img/partenio.png";
import moringaImage from "../../assets/products-img/moringa.png";
import boswelliaImage from "../../assets/products-img/boswellia.png";
import magnoliaImage from "../../assets/products-img/magnolia.png";

// Updated product data with imported images
const productList = [
  {
    id: 1,
    name: "Partenio",
    description: "Description for Partenio",
    imageUrl: partenioImage,
  },
  {
    id: 2,
    name: "Moringa",
    description: "Description for Moringa",
    imageUrl: moringaImage,
  },
  {
    id: 3,
    name: "Boswellia",
    description: "Description for Boswellia",
    imageUrl: boswelliaImage,
  },
  {
    id: 4,
    name: "Magnolia",
    description: "Description for Magnolia",
    imageUrl: magnoliaImage,
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="p">
      <div className="p-bg"></div>
      <div className="p-header">
        <h1>Prodotti</h1>
      </div>
      <div className="p-wrapper">
        <div className="product-grid">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
