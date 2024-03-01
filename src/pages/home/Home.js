import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import athesis from "../../assets/athesis.svg";
import quality from "../../assets/img-home/quality.svg";

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
          {/* <p>
            Benvenuti nel mondo di Athesis, dove l'eccellenza italiana
            nell'importazione e distribuzione all'ingrosso prende forma
            attraverso una selezionata gamma di estratti e polveri di piante e
            funghi, destinati all'uso alimentare. Forti di oltre un quarto di
            secolo di esperienza, offriamo ingredienti naturali selezionati per
            la loro qualità superiore. La nostra missione è fornire alle aziende
            di integratori alimentari materie prime sicure e tracciabili che
            esaltano il valore nutrizionale e il gusto dei prodotti. Con
            Athesis, vi garantiamo un servizio professionale e attento alle
            vostre esigenze.
          </p> */}
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
          <p>{detailsTags.quality.descriptionTag}</p>
        </div>
        <div className="h-quality-right">
          <img src={quality} alt=""></img>
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
              nomeBotanico={product.nomeBotanico}
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
          {/* <p>
            Ogni prodotto che consegniamo è accompagnato da un certificato di
            analisi completo. Questo documento viene redatto direttamente dal
            produttore, il quale effettua rigorosi controlli su ciascun lotto
            per garantire la conformità a tutte le specifiche richieste. I
            nostri prodotti possono essere categorizzati in due tipologie:
          </p> */}
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
          {/* <p>
            Nei certificati di analisi, sono riportati dettagliatamente i
            parametri organolettici, la granulometria, l'umidità, la carica
            batterica, le date di produzione e di scadenza, e altri parametri
            rilevanti. Inoltre, tutti i nostri prodotti sono certificati per
            essere privi di OGM, glutine, irradiazione e batteri patogeni. È
            importante sottolineare che tutti i principi attivi sono di origine
            naturale e non sono aggiunti artificialmente. Su richiesta, possiamo
            anche fornire ulteriori documenti come schede tecniche, schede di
            sicurezza e schede degli allergeni.
          </p> */}
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
