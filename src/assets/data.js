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

export { carosello, productList, detailsTags };
