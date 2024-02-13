import partenioImage from "../assets/products-img/partenio.png";
import moringaImage from "../assets/products-img/moringa.png";
import boswelliaImage from "../assets/products-img/boswellia.png";

import caros1 from "../assets/img-home/Carosello1.png";
import caros2 from "../assets/img-home/Carosello2.png";
import caros3 from "../assets/img-home/Carosello3.png";
import caros4 from "../assets/img-home/Carosello4.png";
import caros5 from "../assets/img-home/Carosello5.png";
import caros6 from "../assets/img-home/Carosello6.png";
import caros7 from "../assets/img-home/Carosello7.png";
import caros8 from "../assets/img-home/Carosello8.png";
import caros9 from "../assets/img-home/Carosello9.png";
import caros10 from "../assets/img-home/Carosello10.png";

import priceTag from "../assets/img-home/prezzi.svg";
import shipmentTag from "../assets/img-home/spedizioni.svg";
import packageTag from "../assets/img-home/confezioni.svg";
import sampleTag from "../assets/img-home/campioni.svg";

const carosello = {
  first: [
    {
      id: 1,
      image: caros1,
    },
    {
      id: 2,
      image: caros2,
    },
    {
      id: 3,
      image: caros3,
    },
    {
      id: 4,
      image: caros4,
    },
    {
      id: 5,
      image: caros5,
    },
  ],
  second: [
    {
      id: 1,
      image: caros6,
    },
    {
      id: 2,
      image: caros7,
    },
    {
      id: 3,
      image: caros8,
    },
    {
      id: 4,
      image: caros9,
    },
    {
      id: 5,
      image: caros10,
    },
  ],
};

const productList = [
  {
    id: 1,
    name: "Fungo Reishi ES 30%",
    description:
      'Il fungo Reishi, o Ganoderma lucidum, è un fungo medicinale di origine cinese utilizzato da secoli in Cina, Giappone e Corea come elisir di salute e longevità, tanto da meritarsi la fama di "fungo dell\'immortalità".',
    price: 92,
    imageUrl: partenioImage,
  },
  {
    id: 2,
    name: "Fungo Hericium ES 30%",
    description:
      "Il fungo Hericium, o \"Lion's Mane\", è noto per potenziali benefici per la salute. Può sostenere la salute cerebrale, migliorare il sistema immunitario e ridurre l'infiammazione.",
    price: 103,
    imageUrl: moringaImage,
  },
  {
    id: 3,
    name: "Zenzero ES 5%",
    description:
      "Lo zenzero è una radice con proprietà antinfiammatorie, digestive e antiossidanti. Può alleviare il dolore, migliorare la digestione, sostenere il sistema immunitario e promuovere la salute cardiaca e cerebrale.",
    price: 47,
    imageUrl: boswelliaImage,
  },
];

const detailsTags = {
  quality: {
    header: "Qualità",
    descriptionTag:
      "ATHESIS importa da aziende produttrici, per la massima parte Cinesi che da molti anni lavorano con sapienza sia le erbe autoctone, sia quelle che coltivano in loco, sia quelle importate da tutto il mondo. La loro competenza si è tramandata di padre in figlio da molte generazioni e la tradizione si è oggigiorno fusa con la tecnologia. La secolare conoscenza delle piante e del loro processo di crescita e maturazione permette che il raccolto venga eseguito nel momento migliore, proprio quando i principi attivi sono al massimo della concentrazione e sono in perfetto bilanciamento per ottenere le migliori sinergie d’azione. La capacità, d’altro lato, di usufruire delle più moderne tecnologie permette nel contempo di ottenere estratti ad altissima concentrazione di principi attivi, con bassissima carica batterica e con le migliori caratteristiche organolettiche. L’utilizzo delle risorse tecnologiche permette ancora che tutti i lotti di produzione vengano controllati ed analizzati per avere una standardizzazione ottimale e una omogeneizzazione dei vari lotti di produzione, garantendo prodotti con caratteristiche costanti nei diversi lotti e nel tempo.",
  },
  first: [
    {
      id: 1,
      header: "Prezzi",
      descriptionTag:
        "Due sono i fattori principali che ci consentono di proporre prezzi molto competitivi. Il primo è dovuto al fatto che importiamo direttamente dai produttori, il secondo che siamo una piccola azienda a conduzione familiare. Acquistare dai produttori rivendendo gli estratti direttamente ai laboratori che li utilizzano, significa poter fornire la merce in un unico passaggio con evidente diminuzione dei costi. Essere una piccola azienda familiare significa avere bassi costi fissi e non avere costi di personale. Un ulteriore abbassamento dei costi lo abbiamo ottenuto utilizzando l’informatizzazione e tenendo basso il valore del magazzino. Tutto ciò porta inevitabilmente a poter offrire ottimi prezzi.",
      imageTag: priceTag,
    },
    {
      id: 2,
      header: "Spedizioni",
      descriptionTag:
        "Le nostre spedizioni avvengono tramite Corriere Espresso, che garantisce la consegna entro il giorno successivo, solitamente entro la mattinata, a meno che il cliente non fornisca istruzioni specifiche diverse. Per le spedizioni verso le Isole e la Calabria, i tempi potrebbero essere leggermente più lunghi, generalmente di 2 giorni. Una volta ricevuto l'ordine, ci impegniamo a prepararlo e spedirlo entro un periodo di 24-48 ore. In seguito, monitoriamo costantemente lo stato della spedizione attraverso sistemi telematici, consentendoci di intervenire prontamente in caso di problemi e di informare immediatamente il cliente in tal caso.",
      imageTag: shipmentTag,
    },
  ],
  second: [
    {
      id: 3,
      header: "Confezioni",
      descriptionTag:
        "I nostri prodotti sono accuratamente confezionati in sacchetti di alluminio politenato termosaldati, all'interno dei quali è presente un ulteriore sacchetto in PE altamente resistente, anch'esso termosaldato. Questa metodologia di confezionamento assicura un isolamento perfetto dei nostri prodotti dall'ambiente esterno, garantendo così la massima durata nel tempo e la conservazione delle loro qualità. Le nostre confezioni standard variano da 1 kg a 5 kg, e possono persino arrivare fino a 25 kg, per adattarsi alle diverse esigenze dei nostri clienti. Inoltre, alcuni dei nostri prodotti più pregiati sono disponibili anche in confezioni più piccole, da 100 o 500 grammi, per offrire una maggiore flessibilità di scelta ai nostri clienti.",
      imageTag: packageTag,
    },
    {
      id: 4,
      header: "Campioni",
      descriptionTag:
        "Su richiesta del cliente, offriamo la possibilità di ricevere campioni dei prodotti di loro interesse. Questi campioni sono contenuti in bustine di circa 10 grammi di estratto, generalmente sufficienti per eseguire le analisi di laboratorio più comuni e per valutare le proprietà organolettiche dei prodotti. Le bustine sono realizzate con doppio strato di materiale PE e sono sigillate con saldatura a caldo, garantendo così che l'umidità non possa essere assorbita. Per i campioni di prodotti particolarmente igroscopici, utilizziamo bustine di alluminio politenato termosaldato per garantire una protezione ottimale dall'ambiente esterno e preservare la qualità del campione.",
      imageTag: sampleTag,
    },
  ],
};
const productsST = [
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
export { carosello, productList, detailsTags, productsST };
