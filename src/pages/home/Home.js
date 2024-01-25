import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import athesis from "../../assets/athesis.svg";

// Product card with best sellers.
import ProductCard from "../../components/product-card/ProductCard";
import partenioImage from "../../assets/products-img/partenio.png";
import moringaImage from "../../assets/products-img/moringa.png";
import boswelliaImage from "../../assets/products-img/boswellia.png";

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
];

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

      <div className="h-block1">
        <div className="h-block1-left">
          <h1 className="h-title">Qualità</h1>
        </div>
        <div className="h-block1-right">
          <p>
            ATHESIS importa da aziende produttrici, per la massima parte Cinesi,
            che da molti anni lavorano con sapienza sia le erbe autoctone, sia
            quelle che coltivano in loco, sia quelle importate da tutto il
            mondo. La loro competenza si è tramandata di padre in figlio da
            molte generazioni e la tradizione si è oggigiorno fusa con la
            tecnologia. La secolare conoscenza delle piante e del loro processo
            di crescita e maturazione permette che il raccolto venga eseguito
            nel momento migliore, proprio quando i principi attivi sono al
            massimo della concentrazione e sono in perfetto bilanciamento per
            ottenere le migliori sinergie d’azione. La capacità, d’altro lato,
            di usufruire delle più moderne tecnologie permette nel contempo di
            ottenere estratti ad altissima concentrazione di principi attivi,
            con bassissima carica batterica e con le migliori caratteristiche
            organolettiche. L’utilizzo delle risorse tecnologiche permette
            ancora che tutti i lotti di produzione vengano controllati ed
            analizzati per avere una standardizzazione ottimale e una
            omogeneizzazione dei vari lotti di produzione, garantendo prodotti
            con caratteristiche costanti nei diversi lotti e nel tempo.
          </p>
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
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="h-block2">
        <div className="h-block2-left1">
          <h1 className="h-title">Prezzi</h1>
          <p>
            Due sono i fattori principali che ci consentono di proporre prezzi
            molto competitivi. Il primo è dovuto al fatto che importiamo
            direttamente dai produttori, il secondo che siamo una piccola
            azienda a conduzione familiare. Acquistare dai produttori rivendendo
            gli estratti direttamente ai laboratori che li utilizzano, significa
            poter fornire la merce in un unico passaggio con evidente
            diminuzione dei costi. Essere una piccola azienda familiare
            significa avere bassi costi fissi e non avere costi di personale. Un
            ulteriore abbassamento dei costi lo abbiamo ottenuto utilizzando
            l’informatizzazione e tenendo basso il valore del magazzino. Tutto
            ciò porta inevitabilmente a poter offrire ottimi prezzi.
          </p>
        </div>
        {/* Placeholder div for the image associated with "Prezzi" */}
        <div className="h-block2-right1">
          <img src={partenioImage} alt="Partenio" className="h-block2-image" />
        </div>
        {/* <div className="h-block2-left2">
          <img src={moringaImage} alt="Moringa" className="h-block2-image" />
        </div>
        <div className="h-block2-right2">
          <h1 className="h-title">Spedizioni</h1>
          <p>
            Le spedizioni avvengono (salvo specifiche istruzioni da parte del
            cliente) tramite Corriere Espresso, il quale assicura la consegna
            entro il giorno successivo, normalmente entro la mattinata. Solo per
            le Isole e la Calabria i tempi sono leggermente più lunghi (2
            giorni). Appena ricevuto l”ordine, esso viene preparato e spedito
            entro 24-48 ore. Successivamente sarà nostra cura tenere sotto
            controllo lo stato della spedizione per via telematica, in modo da
            poter prontamente intervenire in caso di problemi, dandone immediata
            comunicazione al cliente.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
