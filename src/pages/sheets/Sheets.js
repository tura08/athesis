import React from "react";
import "./Sheets.css";

const productsData = [
  {
    name: "Angelica (Angelica sinensis) ES 1% Ligustilide",
    pdfLink: "/pdfTS/ST_Angelica_ES_1.pdf",
  },
  {
    name: "Astragalo (Astragalus membranaceus) ES 70% Polisaccaridi",
    pdfLink: "/pdfTS/ST_Astragalo_ES_70.pdf",
  },
  {
    name: "Cardo Mariano (Silybum marianum) ES 80% Silimarina",
    pdfLink: "/pdfTS/ST_CardoMariano_ES_80.pdf",
  },
  {
    name: "Cimicifuga (Cimicifuga racemosa) ES 2,5 Glucosidi triterpenici",
    pdfLink: "/pdfTS/ST_Cimicifuga_ES_2,5.pdf",
  },
  {
    name: "Equiseto (Equisetum arvense) ES 7% Silice",
    pdfLink: "/pdfTS/ST_Equiseto_ES_7.pdf",
  },
  {
    name: "Funghi Agaricus (Agaricus blazei) ES 40% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiAgaricus_ES_40.pdf",
  },
  {
    name: "Funghi Agaricus (Agaricus blazei) Polvere",
    pdfLink: "/pdfTS/ST_FunghiAgaricus_polvere.pdf",
  },
  // Continuation of the productsData array
  {
    name: "Funghi Auricularia (Auricularia auricola-judae) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiAuricularia_ES_30.pdf",
  },
  {
    name: "Funghi Auricularia (Auricularia auricola-judae) Polvere",
    pdfLink: "/pdfTS/ST_FunghiAuricularia_polvere.pdf",
  },
  {
    name: "Funghi Chaga (Inonotus obliquus) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiChaga_ES_30.pdf",
  },
  {
    name: "Funghi Chaga (Inonotus obliquus) Polvere",
    pdfLink: "/pdfTS/ST_FunghiChaga_polvere.pdf",
  },
  {
    name: "Funghi Coprinus (Coprinus comatus) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiCoprinus_ES_30.pdf",
  },
  {
    name: "Funghi Coprinus (Coprinus comatus) Polvere",
    pdfLink: "/pdfTS/ST_FunghiCoprinus_polvere.pdf",
  },
  {
    name: "Funghi Cordyceps (Cordyceps sinensis) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiCordyceps_ES_30.pdf",
  },
  {
    name: "Funghi Cordyceps (Cordyceps sinensis) Polvere",
    pdfLink: "/pdfTS/ST_FunghiCordyceps_polvere.pdf",
  },
  {
    name: "Funghi Hericium (Hericium erinaceus) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiHericium_ES_30.pdf",
  },
  {
    name: "Funghi Hericium (Hericium erinaceus) Polvere",
    pdfLink: "/pdfTS/ST_FunghiHericium_polvere.pdf",
  },
  {
    name: "Funghi Maitake (Grifola frondosa) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiMaitake_ES_30.pdf",
  },
  // Continuation of the productsData array
  {
    name: "Funghi Maitake (Grifola frondosa) Polvere",
    pdfLink: "/pdfTS/ST_FunghiMaitake_polvere.pdf",
  },
  {
    name: "Funghi Pleurotus (Pleurotus ostreatus) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiPleurotus_ES_30.pdf",
  },
  {
    name: "Funghi Pleurotus (Pleurotus ostreatus) Polvere",
    pdfLink: "/pdfTS/ST_FunghiPleurotus_polvere.pdf",
  },
  {
    name: "Funghi Polyporus (Grifola umbellata) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiPolyporus_ES_30.pdf",
  },
  {
    name: "Funghi Polyporus (Grifola umbellata) Polvere",
    pdfLink: "/pdfTS/ST_FunghiPolyporus_polvere.pdf",
  },
  {
    name: "Funghi Reishi (Ganoderma lucidum) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiReishi_ES_30.pdf",
  },
  {
    name: "Funghi Reishi (Ganoderma lucidum) Polvere",
    pdfLink: "/pdfTS/ST_FunghiReishi_polvere.pdf",
  },
  {
    name: "Funghi Shiitake (Lentinula edodes) ES 30% Polisaccaridi",
    pdfLink: "/pdfTS/ST_FunghiShiitake_ES_30.pdf",
  },
  {
    name: "Funghi Shiitake (Lentinula edodes) Polvere",
    pdfLink: "/pdfTS/ST_FunghiShiitake_polvere.pdf",
  },
  {
    name: "Giuggiolo (Ziziphus jujuba) ES 2% Jujubosidi",
    pdfLink: "/pdfTS/ST_Giuggiolo_ES_2.pdf",
  },
  {
    name: "Magnolia (Magnolia officinalis) ES 2% Onokiol",
    pdfLink: "/pdfTS/ST_Magnolia_ES_2.pdf",
  },
  {
    name: "Moringa (Moringa oleifera) ES 10% Polifenoli",
    pdfLink: "/pdfTS/ST_Moringa_ES_10.pdf",
  },
  {
    name: "Partenio (Tanacetum parthenium) ES 0,8% Parthenolide",
    pdfLink: "/pdfTS/ST_Partenio_ES_0,8.pdf",
  },
  {
    name: "Pino Marittimo (Pinus pinaster) ES 95% Pycnogenol",
    pdfLink: "/pdfTS/ST_PinoCorteccia_ES_95.pdf",
  },
  {
    name: "Poligono (Polygonum cuspidatum) ES 20% Resveratrolo",
    pdfLink: "/pdfTS/ST_Poligono_ES_20.pdf",
  },
  {
    name: "Salice Bianco (Salix alba) ES 15% Salicina",
    pdfLink: "/pdfTS/ST_SaliceBianco_ES_15.pdf",
  },
  {
    name: "Salvia (Salvia miltiorrhiza) ES 1% Tanshinone",
    pdfLink: "/pdfTS/ST_Salvia_ES_1.pdf",
  },
  {
    name: "Saw Palmetto (Serenoa repens) ES 45% Fatty Acids",
    pdfLink: "/pdfTS/ST_SawPalmetto_ES_45.pdf",
  },
  {
    name: "Schisandra (Schisandra chinensis) ES 2% Schisandrin",
    pdfLink: "/pdfTS/ST_Schisandra_ES_2.pdf",
  },
  {
    name: "Tè Verde (Camellia sinensis) ES 80% Polyphenols",
    pdfLink: "/pdfTS/ST_Te_Verde_ES_80.pdf",
  },
  {
    name: "Tè Verde Decaffeinato (Camellia sinensis) ES 98% Polyphenols",
    pdfLink: "/pdfTS/ST_TeVerde_ES_98Deca.pdf",
  },
  {
    name: "Tè Verde (Camellia thea) decaffeinato ES 65% EGCG",
    pdfLink: "/pdfTS/ST_TeVerde_ES_65EGCG.pdf",
  },
  {
    name: "Uva rossa (Vitis vinifera) ES 95% Proantocianidine",
    pdfLink: "/pdfTS/ST_Uvarossa_ES_95.pdf",
  },
  {
    name: "Zenzero (Zingiber officinalis) ES 5% Gingerolo",
    pdfLink: "/pdfTS/ST_Zenzero_ES_5.pdf",
  },
];

// Reusable component for product card
const ProductsCard = ({ name, pdfLink }) => {
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
          {productsData.map((product, index) => (
            <ProductsCard
              key={index}
              name={product.name}
              pdfLink={product.pdfLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sheets;
