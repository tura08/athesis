import React from "react";

import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="a">
      <div className="a-bg"></div>
      <div className="a-wrapper">
        <h1>Benvenuti in Athesis</h1>
        {/* <p>
          Athesis è un'azienda specializzata nell'importazione diretta di
          estratti secchi e polveri di piante, nonché estratti secchi e polveri
          di funghi, per il mercato italiano ed europeo. Ci impegniamo a fornire
          prodotti di massima qualità a prezzi altamente competitivi. Dato che
          ci concentriamo esclusivamente sulla fornitura di materie prime,
          operiamo esclusivamente in vendita all'ingrosso rivolta a aziende del
          settore, non fornendo servizi a privati. Tutti i prodotti che offriamo
          sono accompagnati da un certificato di analisi completo che ne attesta
          la qualità. Garantiamo la consegna rapida in tutta Italia entro 24-48
          ore. Vi invitiamo a esaminare la nostra lista di prodotti generalmente
          disponibili per la consegna immediata, così come la lista dei prodotti
          provenienti dalla Cina. Inoltre, siamo a disposizione per effettuare
          ricerche specifiche su prodotti non presenti nelle nostre liste e per
          inviare campionature e schede tecniche su richiesta del cliente. Siamo
          pronti a ricevere le vostre richieste per potervi assistere al meglio
          delle nostre capacità.
        </p> */}
        <p>
          Athesis è leader in Italia e Europa nell'importazione diretta di
          estratti secchi e polveri di piante e funghi per il settore
          all'ingrosso, offrendo qualità elevata e prezzi competitivi.
          Specializzati nel B2B, non effettuiamo vendite al dettaglio per
          mantenere un servizio di alto livello per le imprese. Ogni prodotto è
          selezionato con cura e accompagnato da certificati di analisi,
          garantendo consegne rapide in Italia entro 24-48 ore. Vi invitiamo a
          consultare le nostre liste di prodotti prontamente disponibili per
          consegne immediate, nonché la nostra selezione di articoli di
          importazione dalla Cina, accuratamente curata per rispondere a un
          ampio spettro di necessità. Per prodotti specifici non elencati o per
          richieste particolari, il nostro team è pronto a condurre ricerche
          mirate, fornire campioni e schede tecniche per supportarvi al meglio
          nella selezione dei materiali più adatti alle vostre esigenze. Non
          esitate a contattarci per qualsiasi richiesta o per approfondire come
          possiamo assistervi nel vostro business.
        </p>
        <div className="a-button">
          <Link to="/contact">Contattaci</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
