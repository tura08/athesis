import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Import of icons
import shipmentIcon from "../../assets/img-products/spedizioni.svg";
import mailIcon from "../../assets/img-products/mail.svg";

// Updated product data with imported images

const Products = () => {
  useEffect(() => {
    // Scrolls to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p">
      <div className="p-bg">
        <div className="p-top-left">
          {/* <h1>Funghi Medicinali</h1>
          <p>
            La nostra lunga collaborazione con importanti e qualificati
            produttori cinesi di funghi in polvere ed estratti secchi ci ha
            permesso di compilare una lista completa di prodotti sempre più
            interessanti. Attualmente, vi offriamo una vasta gamma di funghi
            disponibili per la consegna immediata o su ordinazione, come
            indicato nella seguente tabella. Per ulteriori informazioni o
            richieste, vi invitiamo a contattarci via email o telefonicamente.
          </p> */}
          {/* <p>
            La nostra collaborazione con rinomati produttori cinesi di polveri
            ed estratti di funghi ha arricchito notevolmente la nostra offerta.
            Questa partnership ci ha permesso di garantire prodotti di alta
            qualità e di ampliare continuamente la nostra gamma con novità di
            interesse per il mercato. Offriamo una vasta selezione di funghi in
            polvere ed estratti per ogni esigenza, dai più comuni ai più
            ricercati, in pronta consegna o su ordinazione. Consultate la nostra
            dettagliata tabella per esplorare la nostra offerta. Per ulteriori
            informazioni o richieste specifiche, il nostro team è a vostra
            disposizione via email o telefono, pronto ad assistervi nella scelta
            del prodotto più adatto.
          </p> */}
        </div>
        <div className="p-top-right"></div>
      </div>
      <div className="p-listing">
        <h1 className="p-title"></h1>
        <div className="p-listing-details">
          <span className="p-listing-details-item">
            <h2>Oltre 1000 Soluzioni Naturali per il Tuo Benessere</h2>
            <p>
              Nel nostro impegno costante verso l'eccellenza, ci focalizziamo
              sulla qualità senza compromessi, offrendo una vasta gamma di oltre
              1000 prodotti accuratamente selezionati. Il nostro assortimento
              spazia dalle piante medicinali ai funghi ricchi di proprietà
              benefiche, passando per le alghe nutrienti e gli enzimi essenziali
              per il benessere.
            </p>
          </span>
          <span className="p-listing-details-item">
            <h2>Qualità e Natura: Il Cuore della Nostra Selezione</h2>
            <p>
              Ogni prodotto nel nostro catalogo è frutto di una rigorosa
              selezione, garantendo che solo il meglio della natura arrivi fino
              a voi. Siamo orgogliosi di fornire soluzioni naturali di alta
              qualità, supportando la vostra salute e il vostro benessere con
              prodotti derivati da fonti sostenibili e responsabili.
            </p>
          </span>
        </div>
      </div>
      <div className="p-details">
        <div className="p-details-left">
          <h1>Pronta consegna</h1>
          {/* <p>
            Alcuni dei nostri prodotti sono generalmente disponibili per la
            consegna rapida, entro 24-48 ore. Non imponiamo alcun requisito di
            ordine minimo o di importo minimo per la fatturazione. La confezione
            minima è di 1 kg, confezionata in sacchetti di alluminio politenato
            termosaldati. Per ulteriori dettagli o domande, non esitate a
            contattarci tramite email o telefono.
          </p> */}
          <p>
            Grazie alla nostra efficiente gestione delle scorte e alle
            consolidate relazioni con i fornitori, siamo in grado di offrire una
            selezione dei nostri prodotti per consegne rapide, garantendo
            spedizioni entro 24-48 ore dalla conferma dell'ordine. Comprendiamo
            l'importanza della flessibilità per i nostri clienti, per cui non
            applichiamo limiti minimi di ordine né richiediamo un importo minimo
            per la fatturazione, consentendo così ordini su misura in base alle
            vostre specifiche esigenze. Per qualsiasi informazione aggiuntiva o
            per discutere specifiche necessità di fornitura, il nostro team è
            sempre disponibile. Vi invitiamo a contattarci direttamente via
            email o telefono, dove un esperto sarà pronto ad assistervi per
            garantire la migliore esperienza possibile e rispondere con
            soluzioni personalizzate.
          </p>
          <div className="p-details-button">
            <a href="/pronta-consegna2024.pdf" download>
              Scarica lista
            </a>
          </div>
        </div>
        <div className="p-details-right">
          <img src={shipmentIcon} alt=""></img>
        </div>
      </div>
      <div className="p-details">
        <div className="p-details-left">
          <h1>Prodotti disponibili su ordinazione</h1>
          <p>
            La nostra capacità di soddisfare le richieste su misura si estende
            all'importazione di prodotti specifici per incontrare le esigenze
            particolari dei nostri clienti. Tuttavia, è importante notare che,
            data la complessità e i costi fissi legati ai processi di
            esportazione e importazione, stabiliamo un quantitativo minimo di 5
            kg per ogni prodotto richiesto su ordinazione. I tempi di consegna
            per tali ordini speciali possono variare, estendendosi generalmente
            dai 30 ai 40 giorni dalla conferma dell'ordine, a causa dei dettagli
            logistici e delle procedure doganali. Il nostro catalogo comprende
            un'ampia varietà di prodotti, offrendo centinaia di alternative per
            soddisfare le più diverse necessità. Il nostro team è pronto ad
            assistervi con competenza e dedizione, garantendo un servizio
            attento e personalizzato. Non esitate a contattarci per qualsiasi
            domanda o per iniziare a pianificare il vostro prossimo ordine.
          </p>
          <div className="p-details-button">
            <Link to="/contact">Contattaci</Link>
          </div>
        </div>
        <div className="p-details-right">
          <img src={mailIcon} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Products;
