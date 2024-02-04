import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Import of icons
import shipmentIcon from "../../assets/img-products/spedizioni.svg";
import mailIcon from "../../assets/img-products/mail.svg";

// Updated product data with imported images

const Products = () => {
  return (
    <div className="p">
      <div className="p-bg">
        <div className="p-top-left">
          <h1>Funghi Medicinali</h1>
          <p>
            La nostra lunga collaborazione con importanti e qualificati
            produttori cinesi di funghi in polvere ed estratti secchi ci ha
            permesso di compilare una lista completa di prodotti sempre più
            interessanti. Attualmente, vi offriamo una vasta gamma di funghi
            disponibili per la consegna immediata o su ordinazione, come
            indicato nella seguente tabella. Per ulteriori informazioni o
            richieste, vi invitiamo a contattarci via email o telefonicamente.
          </p>
        </div>
        <div className="p-top-right"></div>
      </div>
      <div className="p-details">
        <div className="p-details-left">
          <h1>Pronta consegna</h1>
          <p>
            Alcuni dei nostri prodotti sono generalmente disponibili per la
            consegna rapida, entro 24-48 ore. Non imponiamo alcun requisito di
            ordine minimo o di importo minimo per la fatturazione. La confezione
            minima è di 1 kg, confezionata in sacchetti di alluminio politenato
            termosaldati. Per ulteriori dettagli o domande, non esitate a
            contattarci tramite email o telefono.
          </p>
          <div className="p-details-button">
            <Link to="/products">Scarica lista</Link>
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
            La maggior parte dei nostri prodotti può essere importata su
            richiesta del cliente. Tuttavia, a causa dei costi fissi associati
            all'esportazione/importazione, richiediamo un ordine minimo di 5 kg
            per ciascun prodotto. I tempi di approvvigionamento possono
            risultare più lunghi, in genere variando dai 30 ai 40 giorni dalla
            data dell'ordine. Offriamo una vasta gamma di prodotti disponibili
            per l'ordine, comprendendo centinaia di opzioni. Attendiamo con
            interesse le vostre richieste e siamo a vostra disposizione per
            ulteriori informazioni.
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
