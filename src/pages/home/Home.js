import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import athesis from "../../assets/athesis.svg";
import iconProducts from "../../assets/img-home/scatole.svg";

import ProductCardHome from "../../components/product-card/ProductCardHome";

// Data
import { productList, detailsTags } from "../../assets/data";

const Home = () => {
  useEffect(() => {
    // Scrolls to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h">
      <div className="h-bg">
        <div className="h-top">
          <img src={athesis} alt="Company Logo" />
          <h3>di Turazza Marco</h3>
          <p>
            Benvenuti nel mondo di Athesis, un'azienda italiana specializzata
            nell'importazione e distribuzione all'ingrosso di estratti e polveri
            di piante e funghi per l'uso alimentare. Forti di oltre un quarto di
            secolo di esperienza, offriamo ingredienti naturali selezionati per
            la loro qualità superiore. La nostra missione è fornire alle aziende
            di integratori alimentari materie prime sicure e tracciabili. Con
            Athesis, vi garantiamo un servizio professionale e attento alle
            vostre esigenze.
          </p>
          <div className="h-top-button">
            <Link to="/contact">Contattaci</Link>
          </div>
        </div>
      </div>
      <div className="h-quality">
        <h1 className="h-title">{detailsTags.quality.header}</h1>
        <div className="h-quality-details">
          <span className="h-quality-details-item">
            <h2>Tradizione Incontra Innovazione</h2>
            <p>
              Athesis collabora con aziende che uniscono la sapienza
              tradizionale nella coltivazione di erbe autoctone e piante locali
              alla tecnologia avanzata. Questo garantisce la raccolta delle
              materie prime nel momento più propizio, quando i principi attivi
              sono più concentrati e bilanciati.
            </p>
          </span>
          <span className="h-quality-details-item">
            <h2>Purità e Potenza degli Estratti</h2>
            <p>
              Athesis collabora con aziende che uniscono la sapienza
              tradizionale nella coltivazione di erbe autoctone e piante locali
              alla tecnologia avanzata. Questo garantisce la raccolta delle
              materie prime nel momento più propizio, quando i principi attivi
              sono più concentrati e bilanciati.
            </p>
          </span>
          <span className="h-quality-details-item">
            <h2>Partnership Strategiche per la Qualità</h2>
            <p>
              Athesis si affida a una rete selezionata di fornitori cinesi per
              la qualità e l'integrità dei suoi estratti, i quali si avvalgono
              della loro esperienza locale e della conoscenza approfondita delle
              pratiche di coltivazione e di estrazione per offrire prodotti di
              alta qualità.
            </p>
          </span>
        </div>
      </div>
      {detailsTags.first.map((item) => (
        <div className="h-price-shipment">
          <div key={item.id} className="h-price-shipment-left">
            <h1 className="h-price-shipment-title">{item.header}</h1>
            <p>{item.descriptionTag}</p>
          </div>
          <div className="h-price-shipment-right">
            <img
              src={item.imageTag}
              alt="iconTag"
              className="h-price-shipment-image"
            />
          </div>
        </div>
      ))}
      <div className="h-bestSellers">
        <div className="h-bestSellers-header">
          <h1>I nostri bestsellers</h1>
          <p>Alcuni dei prodotti preferiti dai nostri clienti</p>
        </div>
        <div className="h-product-grid">
          {productList.map((product) => (
            <ProductCardHome
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              nomeBotanico={product.nomeBotanico}
            />
          ))}
        </div>
      </div>
      <div className="h-products">
        <div className="h-products-left">
          <h1>Scopri il nostro mondo di prodotti</h1>
          <p>
            Da oltre un quarto di secolo, ci impegniamo a offrire una vasta
            gamma di prodotti di alta qualità, con un catalogo che oggi supera i
            1000 articoli, ognuno selezionato per soddisfare le diverse esigenze
            dei nostri clienti. Vi invitiamo a esplorare la nostra ricca
            selezione nella pagina dei prodotti, dove troverete soluzioni
            innovative e tradizionali adatte a ogni vostra esigenza.
          </p>
          <div className="h-products-button">
            <Link to="/products">Prodotti</Link>
          </div>
        </div>
        <div className="h-products-right">
          <img src={iconProducts} alt=""></img>
        </div>
      </div>
      <div className="h-analysis">
        <div className="h-analysis-top">
          <h1>Analisi</h1>
          <p>
            La nostra gamma di materie prime si articola in tre categorie
            principali, ciascuna con caratteristiche uniche per soddisfare le
            diverse esigenze di produzione:
          </p>
        </div>
        <div className="h-analysis-types">
          <div className="h-analysis-left">
            <p>
              Le polveri, nelle loro forme più naturali, conservano
              integralmente i principi attivi grazie a metodi di essiccazione e
              macinazione delicati.
            </p>
          </div>
          <div className="h-analysis-center">
            <p>
              Gli estratti standardizzati, frutto dell'innovazione, concentrano
              sostanze attive per massimizzare purezza ed efficacia, garantendo
              percentuali di principi attivi uniformi in ogni lotto.
            </p>
          </div>
          <div className="h-analysis-right">
            <p>
              Gli estratti non standardizzati garantiscono un rapporto di
              estrazione costante che preserva l'essenza originale della materia
              prima.
            </p>
          </div>
        </div>
        <div className="h-analysis-bottom">
          <p>
            Ogni lotto è accompagnato da un certificato di analisi che ne
            conferma qualità e conformità alle nostre rigorose specifiche,
            assicurando prodotti naturali, privi di OGM, glutine, irradiazioni e
            batteri patogeni. Offriamo anche documentazione tecnica e
            informazioni sulla sicurezza.
          </p>
        </div>
      </div>
      {detailsTags.second.map((item) => (
        <div className="h-package-sample">
          <div key={item.id} className="h-package-sample-left">
            <h1 className="h-package-sample-title">{item.header}</h1>
            <p>{item.descriptionTag}</p>
          </div>
          <div className="h-package-sample-right">
            <img
              src={item.imageTag}
              alt="iconTag"
              className="h-package-sample-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
