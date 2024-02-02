import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import athesis from "../../assets/athesis.svg";

import ProductCard from "../../components/product-card/ProductCard";

// Data
import { carosello, productList, detailsTags } from "../../assets/data";

const Home = () => {
  return (
    <div className="h">
      <div className="h-bg">
        <div className="h-top">
          <img src={athesis} alt="Company Logo" />
          <h3>di Turazza Marco</h3>
          <p>
            Benvenuti in Athesis un'azienda italiana specializzata in
            nell'importazione e distribuzione all'ingrosso di estratti di piante
            e funghi per uso alimentare. Da oltre 20 anni trattiamo ingredienti
            naturali e di alta qualità.
          </p>
          <div className="h-top-button">
            <Link to="/contact">Contattaci</Link>
          </div>
        </div>
      </div>
      <div className="h-carosello">
        {carosello.first.map((item) => {
          return (
            <img
              src={item.image}
              key={item.id}
              alt={item.id}
              className="h-carosello-image"
            ></img>
          );
        })}
      </div>
      <div className="h-quality">
        <div className="h-quality-left">
          <h1 className="h-title">{detailsTags.quality.header}</h1>
        </div>
        <div className="h-quality-right">
          <p>{detailsTags.quality.descriptionTag}</p>
        </div>
      </div>
      <div className="h-bestSellers">
        <div className="h-bestSellers-header">
          <h1>I più venduti</h1>
          <p>Alcuni dei prodotti preferiti dai nostri clienti</p>
        </div>
        <div className="h-product-grid">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      {detailsTags.first.map((item) => (
        <div className="h-priceShipTags">
          <div key={item.id} className="h-priceShipTags-left">
            <h1 className="h-priceShipTags-title">{item.header}</h1>
            <p>{item.descriptionTag}</p>
          </div>
          <div className="h-priceShipTags-right">
            <img
              src={item.imageTag}
              alt="iconTag"
              className="h-priceShipTags-image"
            />
          </div>
        </div>
      ))}
      <div className="h-carosello">
        {carosello.second.map((item) => {
          return (
            <img
              src={item.image}
              key={item.id}
              alt={item.id}
              className="h-carosello-image"
            ></img>
          );
        })}
      </div>
      {detailsTags.second.map((item) => (
        <div className="h-priceShipTags">
          <div key={item.id} className="h-priceShipTags-left">
            <h1 className="h-priceShipTags-title">{item.header}</h1>
            <p>{item.descriptionTag}</p>
          </div>
          <div className="h-priceShipTags-right">
            <img
              src={item.imageTag}
              alt="iconTag"
              className="h-priceShipTags-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
