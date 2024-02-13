import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import athesis from "../../assets/athesis.svg";

import ProductCardHome from "../../components/product-card/ProductCardHome";

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
            <ProductCardHome
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
      <div className="h-analysis">
        <div className="h-analysis-top">
          <h1>Analisi</h1>
          <p>
            Ogni prodotto che consegniamo è accompagnato da un certificato di
            analisi completo. Questo documento viene redatto direttamente dal
            produttore, il quale effettua rigorosi controlli su ciascun lotto
            per garantire la conformità a tutte le specifiche richieste. I
            nostri prodotti possono essere categorizzati in due tipologie:
          </p>
        </div>
        <div className="h-analysis-types">
          <div className="h-analysis-left">
            <p>
              Standardizzati (la maggior parte): Garantiamo un contenuto minimo
              di principi attivi, il quale deve essere rigorosamente rispettato;
              in caso contrario, il lotto viene respinto.
            </p>
          </div>
          <div className="h-analysis-right">
            <p>
              Non standardizzati: Garantiamo un rapporto fisso tra la droga e
              l'estratto, ma il contenuto di principi attivi può variare
              leggermente da un lotto all'altro.
            </p>
          </div>
        </div>
        <div className="h-analysis-bottom">
          <p>
            Nei certificati di analisi, sono riportati dettagliatamente i
            parametri organolettici, la granulometria, l'umidità, la carica
            batterica, le date di produzione e di scadenza, e altri parametri
            rilevanti. Inoltre, tutti i nostri prodotti sono certificati per
            essere privi di OGM, glutine, irradiazione e batteri patogeni. È
            importante sottolineare che tutti i principi attivi sono di origine
            naturale e non sono aggiunti artificialmente. Su richiesta, possiamo
            anche fornire ulteriori documenti come schede tecniche, schede di
            sicurezza e schede degli allergeni.
          </p>
        </div>
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
