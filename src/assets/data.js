import reishi from "../assets/img-home/reishi.jpg";
import hericium from "../assets/img-home/hericium.jpeg";
import ginger from "../assets/img-home/zenzero.jpg";

import priceTag from "../assets/img-home/prezzi.svg";
import shipmentTag from "../assets/img-home/spedizioni.svg";
import packageTag from "../assets/img-home/confezioni.svg";
import sampleTag from "../assets/img-home/campioni.svg";

const productList = [
  {
    id: 1,
    name: "Fungo Reishi ES 30%",
    description:
      'Il fungo Reishi, o Ganoderma lucidum, è un fungo medicinale di origine cinese utilizzato da secoli in Cina, Giappone e Corea come elisir di salute e longevità, tanto da meritarsi la fama di "fungo dell\'immortalità".',
    price: 92,
    imageUrl: reishi,
    nomeBotanico: "Ganoderma lucidum",
  },
  {
    id: 2,
    name: "Fungo Hericium ES 30%",
    description:
      "Il fungo Hericium, o \"Lion's Mane\", è noto per potenziali benefici per la salute. Può sostenere la salute cerebrale, migliorare il sistema immunitario e ridurre l'infiammazione.",
    price: 103,
    imageUrl: hericium,
    nomeBotanico: "Hericium erinaceus",
  },
  {
    id: 3,
    name: "Zenzero ES 5%",
    description:
      "Lo zenzero è una radice con proprietà antinfiammatorie, digestive e antiossidanti. Può alleviare il dolore, migliorare la digestione, sostenere il sistema immunitario e promuovere la salute cardiaca e cerebrale.",
    price: 47,
    imageUrl: ginger,
    nomeBotanico: "Zingiber officinale",
  },
];

const detailsTags = {
  quality: {
    header: "Qualità",
    descriptionTag:
      "Athesis è al centro di una rete di fornitori globali, soprattutto in Cina, noti per la loro eccellenza nella coltivazione e trasformazione di erbe. Queste collaborazioni garantiscono accesso a materie prime di alta qualità, combinando tradizione e innovazione tecnologica per la massima efficacia degli ingredienti. Selezioniamo estratti con alti principi attivi, bassa carica batterica e ottime qualità organolettiche, mantenendo standard elevati di controllo qualità per garantire la consistenza del prodotto, in linea con le rigorose norme del settore alimentare e nutraceutico.",
    // "Athesis si posiziona al centro di una rete globale di fornitori accuratamente selezionati, principalmente in Cina, riconosciuti per la loro profonda competenza nella coltivazione e trasformazione di erbe autoctone e/o importate. Queste collaborazioni ci permettono di accedere a materie prime di eccellenza, dove tradizione millenaria e tecnologie all'avanguardia si fondono per garantire la raccolta degli ingredienti nel momento in cui i principi attivi sono al massimo della loro potenza. La nostra selezione si basa su standard rigorosi: optiamo per estratti con elevata concentrazione di principi attivi, minimi livelli di carica batterica e superiori caratteristiche organolettiche. Il nostro impegno si estende al controllo qualità, assicurando la standardizzazione e l'uniformità del prodotto nel tempo, lotto dopo lotto, nel rispetto degli elevati standard richiesti dal settore alimentare e nutraceutico.",
  },
  first: [
    {
      id: 1,
      header: "Prezzi",
      descriptionTag:
        // "La nostra strategia per garantire prezzi competitivi si fonda sull'importazione diretta e sulla nostra efficienza come azienda familiare di piccole dimensioni. La nostra diretta collaborazione con i produttori ci permette di semplificare la catena di approvvigionamento, riducendo i passaggi intermedi e, di conseguenza, i costi associati. La gestione snella e l'adozione di efficienti soluzioni informatiche ci permettono di mantenere bassi i costi operativi e di magazzino, consentendoci di offrire prodotti di alta qualità a prezzi vantaggiosi, senza sacrificare l'eccellenza del servizio.",
        "La nostra strategia per garantire prezzi competitivi si fonda sull'importazione diretta e sulla nostra efficienza come azienda familiare di piccole dimensioni. Collaborando direttamente con i produttori, ottimizziamo la catena di approvvigionamento e riduciamo i costi. La gestione snella e l'uso di tecnologie avanzate ci permettono di mantenere bassi i costi operativi e di magazzino, consentendoci di offrire prodotti di alta qualità a prezzi vantaggiosi, senza sacrificare l'efficienza del servizio.",
      // "Due sono i fattori principali che ci consentono di proporre prezzi molto competitivi. Il primo è dovuto al fatto che importiamo direttamente dai produttori, il secondo che siamo una piccola azienda a conduzione familiare. Acquistare dai produttori rivendendo gli estratti direttamente ai laboratori che li utilizzano, significa poter fornire la merce in un unico passaggio con evidente diminuzione dei costi. Essere una piccola azienda familiare significa avere bassi costi fissi e non avere costi di personale. Un ulteriore abbassamento dei costi lo abbiamo ottenuto utilizzando l’informatizzazione e tenendo basso il valore del magazzino. Tutto ciò porta inevitabilmente a poter offrire ottimi prezzi.",
      imageTag: priceTag,
    },
    {
      id: 2,
      header: "Spedizioni",
      descriptionTag:
        "Le nostre consegne sono affidate a servizi di Corriere Espresso, per assicurare che i vostri ordini arrivino rapidamente, tipicamente entro la mattina del giorno successivo, salvo diversamente specificato da voi. Per destinazioni più remote, come le Isole e la Calabria, prevediamo un tempo di consegna leggermente più lungo, di circa 2 giorni. Dal momento in cui riceviamo il vostro ordine, ci impegniamo a gestirlo e spedirlo entro 24-48 ore. Seguiamo attentamente il viaggio del vostro pacco con sistemi di tracciamento avanzati, permettendoci di agire prontamente in caso di intoppi e di tenervi sempre aggiornati sulla situazione della vostra spedizione.",
      // "Le nostre spedizioni avvengono tramite Corriere Espresso, che garantisce la consegna entro il giorno successivo, solitamente entro la mattinata, a meno che il cliente non fornisca istruzioni specifiche diverse. Per le spedizioni verso le Isole e la Calabria, i tempi potrebbero essere leggermente più lunghi, generalmente di 2 giorni. Una volta ricevuto l'ordine, ci impegniamo a prepararlo e spedirlo entro un periodo di 24-48 ore. In seguito, monitoriamo costantemente lo stato della spedizione attraverso sistemi telematici, consentendoci di intervenire prontamente in caso di problemi e di informare immediatamente il cliente in tal caso.",
      imageTag: shipmentTag,
    },
  ],
  second: [
    {
      id: 3,
      header: "Confezioni",
      descriptionTag:
        //"I nostri prodotti sono accuratamente confezionati in sacchetti di alluminio politenato termosaldati, all'interno dei quali è presente un ulteriore sacchetto in PE altamente resistente, anch'esso termosaldato. Questa metodologia di confezionamento assicura un isolamento perfetto dei nostri prodotti dall'ambiente esterno, garantendo così la massima durata nel tempo e la conservazione delle loro qualità. Le nostre confezioni standard variano da 1 kg a 5 kg, e possono persino arrivare fino a 25 kg, per adattarsi alle diverse esigenze dei nostri clienti. Inoltre, alcuni dei nostri prodotti più pregiati sono disponibili anche in confezioni più piccole, da 100 o 500 grammi, per offrire una maggiore flessibilità di scelta ai nostri clienti.",
        "Prestiamo grande attenzione al confezionamento dei nostri prodotti, adottando un sistema di doppia protezione per preservarne l'integrità. Inizialmente, ogni prodotto è sigillato in un sacchetto di alluminio politenato, che offre una barriera contro umidità, luce e contaminazioni. All'interno di questo, si aggiunge un secondo sacchetto in polietilene ad alta resistenza, garantendo così una doppia sicurezza. Questa metodologia assicura la conservazione delle proprietà originali, mantenendo freschezza e qualità nel tempo. Offriamo confezioni standard da 1 a 5 kg e, per ordini di maggiore entità, formati fino a 25 kg.",
      imageTag: packageTag,
    },
    {
      id: 4,
      header: "Campioni",
      descriptionTag:
        "Per soddisfare le esigenze di valutazione dei clienti, offriamo un servizio di campionamento personalizzato. I campioni, in bustine da 10-20 grammi, permettono di effettuare test di laboratorio e valutare le qualità organolettiche dei nostri estratti. Ogni campione è sigillato in doppio strato di polietilene per prevenire l'umidità, garantendo la conservazione delle proprietà. Questo servizio dimostra il nostro impegno a offrire soluzioni che rispondano alle esigenze specifiche dei clienti, assicurando loro la massima fiducia nella scelta dei nostri prodotti.",
      //"Su richiesta del cliente, offriamo la possibilità di ricevere campioni dei prodotti di loro interesse. Questi campioni sono contenuti in bustine di circa 10 grammi di estratto, generalmente sufficienti per eseguire le analisi di laboratorio più comuni e per valutare le proprietà organolettiche dei prodotti. Le bustine sono realizzate con doppio strato di materiale PE e sono sigillate con saldatura a caldo, garantendo così che l'umidità non possa essere assorbita. Per i campioni di prodotti particolarmente igroscopici, utilizziamo bustine di alluminio politenato termosaldato per garantire una protezione ottimale dall'ambiente esterno e preservare la qualità del campione.",
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
export { productList, detailsTags, productsST };
