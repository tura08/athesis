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
          <p>
            Nella sezione sottostante, abbiamo il piacere di presentarvi le
            schede tecniche dettagliate delle nostre materie prime, che
            tipicamente manteniamo a magazzino per assicurare una pronta
            disponibilità e una rapida consegna. Queste schede sono state
            accuratamente preparate per offrirvi tutte le informazioni
            necessarie riguardo le specifiche, le proprietà e le applicazioni
            dei nostri prodotti, consentendovi di fare scelte informate in base
            alle vostre esigenze professionali. Se durante la vostra ricerca non
            doveste trovare esattamente ciò che vi serve, vi incoraggiamo
            vivamente a mettervi in contatto con noi. Il nostro team si
            adopererà al massimo per soddisfare le vostre esigenze documentali
            specifiche. La vostra soddisfazione e il successo dei vostri
            progetti sono la nostra priorità.
          </p>
          <div className="ts-product-card">
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
    </div>
  );
};

export default Sheets;
