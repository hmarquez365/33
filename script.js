// Behind Every Plate — content, translation, map and timer interactions
const translations = {
en:{
skip:"Skip to content",navFarmers:"The farmers",navPartnership:"Working together",navRegions:"Wheat regions",navSustainability:"Sustainability",navStories:"Stories",languageLabel:"Choose language",timerNav:"Pasta timer",
heroEyebrow:"FROM THE FIELD TO YOUR TABLE",heroTitle:"Behind every plate,<br><em>there is a story.</em>",heroCopy:"Pasta begins long before it reaches the pot. It begins with the people who cultivate the wheat, care for the land and keep agricultural knowledge alive.",explore:"Explore the stories",startCooking:"Start your cooking timer",heroCaption:"A story that starts in the soil",
introLabel:"A DIFFERENT WAY TO WAIT",introTitle:"While the pasta cooks,<br>discover what makes it possible.",introCopy:"This is a short journey through the agricultural communities, knowledge and choices connected to durum wheat. Take a few minutes to look beyond the package.",introNote:"A moment to discover<br>the story behind your meal.",
farmEyebrow:"01 — THE PEOPLE",farmTitle:"Every harvest<br>has a human side.",farmLead:"Behind every field are decisions, skills and years of work. Meet three fictional farmers whose stories represent different perspectives within Italian agriculture.",fictionNotice:"Educational fiction: these profiles are invented characters, not real interviews or verified Barilla beneficiaries.",lucaShort:"A third-generation farmer balancing family tradition with the need to modernise.",giuliaShort:"A young agricultural entrepreneur experimenting with more precise field management.",salvatoreShort:"An experienced grower adapting cultivation decisions to increasingly variable seasons.",readProfile:"Read profile ↗",
partEyebrow:"02 — THE RELATIONSHIP",partTitle:"Good agriculture<br>needs good partners.",partLead:"A resilient supply chain is built over time. Clear expectations, knowledge-sharing and appropriate tools can help producers make decisions with a longer horizon.",statSince:"Barilla Sustainable Farming programme launched",statFarmers:"farmers involved across strategic supply chains in 2025",statVolume:"cereals and basil sourced through the programme in 2025",statScope:"Group-wide figures for cereals and basil across four supply chains — not durum-wheat-only figures. Source: Barilla 2025 Sustainability Report.",
support1Title:"Fairer, clearer relationships",support1Copy:"Transparent specifications and dialogue can make expectations clearer for both producers and buyers. The quality and sustainability requirements need to be understood along the chain.",support2Title:"Planning over time",support2Copy:"Cultivation contracts and defined agronomic requirements can support production planning. They do not remove weather, market or crop risks, but can make some decisions more predictable.",support3Title:"Tools and innovation",support3Copy:"Digital agronomic platforms, crop-variety research and field data can help farmers assess conditions and make more informed choices.",support4Title:"Training and expertise",support4Copy:"Technical exchange, research partnerships and practical guidance can strengthen professional skills and support the adoption of improved practices.",clarifyTitle:"What this does — and does not — mean",clarifyCopy:"These are mechanisms through which agricultural partnerships can create value. Barilla publicly describes cultivation contracts, agronomic specifications, digital support and collaboration with farmers. This page does not claim that every farmer receives direct financing, a guaranteed price or identical contract terms.",
regionEyebrow:"03 — THE LAND",regionTitle:"A country shaped<br>by its fields.",regionLead:"Select a highlighted region to explore the different agricultural contexts in which durum wheat is cultivated. Regional notes are general educational descriptions.",mapHint:"Choose a numbered point to explore a region",regionClimate:"CLIMATE & LAND",regionChallenge:"LOCAL CHALLENGE",fictionalLink:"FICTIONAL FARMER PROFILE",
susEyebrow:"04 — THE FUTURE",susTitle:"The soil remembers<br>every decision.",susLead:"Sustainable agriculture is not one technique. It is a set of choices adapted to local conditions, aimed at protecting productive land over the long term.",sus1Title:"Soil health & biodiversity",sus1Copy:"Crop rotation, organic matter and habitat diversity can support soil structure and living ecosystems.",sus2Title:"Water stewardship",sus2Copy:"Monitoring, efficient irrigation where used and attention to soil moisture help manage a limited resource.",sus3Title:"Regenerative practices",sus3Copy:"Cover crops, reduced tillage and diversified rotations are examples that may improve soil function when suited to local conditions.",sus4Title:"Climate resilience",sus4Copy:"Locally adapted varieties, weather information and agronomic research can help farms respond to changing conditions.",methodNote:"General agricultural practices are explained here for educational purposes. Barilla-specific actions are described only where referenced in the source section below.",
storyEyebrow:"05 — THE STORIES",storyTitle:"A harvest is never<br>just a harvest.",storyLead:"Agriculture is shaped by family knowledge, changing conditions and the choices people make for the next season.",quote1:"Tradition gives us a starting point. It cannot be the only plan for the future.",quote2:"Better information does not remove uncertainty, but it helps us make decisions earlier.",quote3:"The next generation needs a farm that can adapt, not simply repeat what came before.",fictionalQuote:"Fictional character",storyFiction:"All quotations and biographies on this page are fictional educational content created for this design project.",
closingEyebrow:"BACK TO YOUR TABLE",closingTitle:"Now you know a little more<br>about what’s behind it.",closingCopy:"The next time you cook pasta, remember the people and landscapes that make the ingredients possible.",openTimer:"Open cooking timer",footerTag:"A student design project exploring the agricultural story behind pasta.",disclaimer:"Independent academic project. Not an official Barilla website and not endorsed by Barilla. Farmer profiles and quotations are fictional.",sourcesTitle:"Sources & verification",verifyNote:"Company figures shown here are tied to the cited 2025 reporting period and scope. Re-check official publications before presenting the project publicly.",
timerEyebrow:"YOUR TIME, WELL SPENT",timerTitle:"Pasta cooking timer",timerInstruction:"Set the cooking time shown on your pasta pack.",timerReady:"READY WHEN YOU ARE",minutesLabel:"Cooking time · minutes",start:"Start",pause:"Pause",resume:"Resume",reset:"Reset",finished:"Your pasta is ready. Every plate has a story.",timerFootnote:"You can close this panel and keep exploring. The timer will continue running.",running:"COOKING IN PROGRESS",paused:"TIMER PAUSED",done:"TIME IS UP",
regionData:{
puglia:["04 / SOUTH","Puglia","A major agricultural region in southern Italy, with broad plains and a long history of cereal cultivation.","Mediterranean conditions; hot, dry summers and variable rainfall.","Managing water availability and heat stress during key crop stages.","Luca Moretti"],
basilicata:["03 / SOUTH","Basilicata","An inland southern region with varied elevations, landscapes and agricultural systems.","A mix of Mediterranean and inland conditions, shaped by altitude and exposure.","Soil erosion on sloping land and variable rainfall across seasons.","Luca Moretti"],
sicily:["05 / ISLAND","Sicily","The largest Mediterranean island has a long cereal-growing history and diverse local conditions.","Mediterranean climate with strong differences between coastal and inland areas.","Heat, drought risk and the timing of rainfall during crop development.","Salvatore Greco"],
campania:["02 / SOUTH","Campania","A diverse region where plains, hills and coastal areas create different farming environments.","Mediterranean conditions with local variation between coastal plains and inland hills.","Competing land uses and adapting crop choices to local soil and water conditions.","Salvatore Greco"],
marche:["01 / CENTRAL","Marche","A central-eastern region with rolling hills and a mix of arable farming landscapes.","Temperate-to-Mediterranean transition, with rainfall and temperatures varying by location.","Managing soil on slopes and responding to increasingly variable weather.","Giulia Rossi"]
},
profiles:{
luca:{name:"Luca Moretti",tag:"PUGLIA · FICTIONAL PROFILE",age:"48",years:"27",farm:"A family-run farm combining cereal cultivation with a small rotation of other crops.",background:"Luca grew up helping his parents during harvest. After working outside agriculture for several years, he returned to the family farm and began updating machinery and record-keeping.",challenge:"Balancing input costs, machinery investment and increasingly irregular rainfall.",programme:"In this illustrative scenario, Luca uses agronomic guidance and a structured supply relationship to plan crop decisions. This is not a claim about a real Barilla beneficiary.",ambition:"Keep the farm viable for the next generation while improving the way soil and water are managed."},
giulia:{name:"Giulia Rossi",tag:"MARCHE · FICTIONAL PROFILE",age:"31",years:"8",farm:"A medium-sized farm that uses field records and digital tools to compare crop performance.",background:"Giulia studied agricultural sciences before returning to her family's land. She is interested in using data to make field operations more precise.",challenge:"Accessing reliable information and financing improvements while managing a relatively small business.",programme:"In this illustrative scenario, Giulia takes part in technical exchanges and uses digital agronomic tools. The profile does not represent a verified programme participant.",ambition:"Build a business that is economically sound and attractive to younger people entering agriculture."},
salvatore:{name:"Salvatore Greco",tag:"SICILY · FICTIONAL PROFILE",age:"59",years:"39",farm:"A long-established farm growing cereals under dry Mediterranean conditions.",background:"Salvatore learned farming from his parents and has seen seasonal patterns change throughout his working life. He now shares decisions with his daughter, who is preparing to take a larger role.",challenge:"Heat and rainfall variability make it harder to choose sowing dates and manage water efficiently.",programme:"In this illustrative scenario, Salvatore considers locally adapted varieties and cultivation guidance when planning each season. This is not a real interview or beneficiary record.",ambition:"Pass on a farm with healthy soil, manageable costs and room for the next generation to innovate."}
}
},
es:{
skip:"Saltar al contenido",navFarmers:"Los agricultores",navPartnership:"Colaboración",navRegions:"Regiones de trigo",navSustainability:"Sostenibilidad",navStories:"Historias",languageLabel:"Elegir idioma",timerNav:"Temporizador",heroEyebrow:"DEL CAMPO A TU MESA",heroTitle:"Detrás de cada plato,<br><em>hay una historia.</em>",heroCopy:"La pasta empieza mucho antes de llegar a la olla. Empieza con las personas que cultivan el trigo, cuidan la tierra y mantienen vivo el conocimiento agrícola.",explore:"Descubre las historias",startCooking:"Iniciar temporizador",heroCaption:"Una historia que empieza en la tierra",
introLabel:"OTRA FORMA DE ESPERAR",introTitle:"Mientras se cuece la pasta,<br>descubre qué la hace posible.",introCopy:"Este es un breve recorrido por las comunidades agrícolas, los conocimientos y las decisiones vinculadas al trigo duro. Dedica unos minutos a mirar más allá del envase.",introNote:"Un momento para descubrir<br>la historia de tu comida.",
farmEyebrow:"01 — LAS PERSONAS",farmTitle:"Cada cosecha<br>tiene un lado humano.",farmLead:"Detrás de cada campo hay decisiones, conocimientos y años de trabajo. Conoce a tres agricultores ficticios cuyas historias representan distintas perspectivas de la agricultura italiana.",fictionNotice:"Ficción educativa: estos perfiles son personajes inventados, no entrevistas reales ni beneficiarios verificados de Barilla.",lucaShort:"Agricultor de tercera generación que equilibra la tradición familiar con la necesidad de modernizarse.",giuliaShort:"Joven empresaria agrícola que experimenta con una gestión más precisa del campo.",salvatoreShort:"Agricultor experimentado que adapta sus decisiones a temporadas cada vez más variables.",readProfile:"Leer perfil ↗",
partEyebrow:"02 — LA RELACIÓN",partTitle:"Una buena agricultura<br>necesita buenos socios.",partLead:"Una cadena de suministro resiliente se construye con el tiempo. Las expectativas claras, el intercambio de conocimientos y las herramientas adecuadas ayudan a planificar a largo plazo.",statSince:"Lanzamiento del programa Barilla Sustainable Farming",statFarmers:"agricultores implicados en cadenas estratégicas en 2025",statVolume:"toneladas de cereales y albahaca abastecidas mediante el programa en 2025",statScope:"Cifras globales de cereales y albahaca en cuatro cadenas: no corresponden únicamente al trigo duro. Fuente: Informe de Sostenibilidad Barilla 2025.",
support1Title:"Relaciones claras y equilibradas",support1Copy:"Las especificaciones transparentes y el diálogo ayudan a aclarar las expectativas de productores y compradores. Los requisitos de calidad y sostenibilidad deben entenderse a lo largo de la cadena.",support2Title:"Planificación a largo plazo",support2Copy:"Los contratos de cultivo y los requisitos agronómicos definidos pueden facilitar la planificación. No eliminan los riesgos meteorológicos, de mercado o de cosecha, pero pueden hacer algunas decisiones más previsibles.",support3Title:"Herramientas e innovación",support3Copy:"Las plataformas agronómicas digitales, la investigación de variedades y los datos de campo ayudan a evaluar las condiciones y tomar decisiones mejor informadas.",support4Title:"Formación y conocimiento",support4Copy:"El intercambio técnico, la colaboración con centros de investigación y la orientación práctica pueden reforzar las competencias y facilitar mejores prácticas.",clarifyTitle:"Qué significa — y qué no significa",clarifyCopy:"Estos son mecanismos mediante los que la colaboración agrícola puede generar valor. Barilla describe públicamente contratos de cultivo, especificaciones agronómicas, apoyo digital y colaboración con agricultores. Esta página no afirma que todos reciban financiación directa, un precio garantizado o condiciones contractuales idénticas.",
regionEyebrow:"03 — EL TERRITORIO",regionTitle:"Un país marcado<br>por sus campos.",regionLead:"Selecciona una región para explorar los distintos contextos agrícolas en los que se cultiva trigo duro. Las descripciones regionales son explicaciones educativas generales.",mapHint:"Selecciona un punto numerado para explorar una región",regionClimate:"CLIMA Y TERRITORIO",regionChallenge:"RETO LOCAL",fictionalLink:"PERFIL DE AGRICULTOR FICTICIO",
susEyebrow:"04 — EL FUTURO",susTitle:"El suelo recuerda<br>cada decisión.",susLead:"La agricultura sostenible no es una única técnica. Es un conjunto de decisiones adaptadas a las condiciones locales para proteger la tierra productiva a largo plazo.",sus1Title:"Salud del suelo y biodiversidad",sus1Copy:"La rotación de cultivos, la materia orgánica y la diversidad de hábitats pueden favorecer la estructura del suelo y los ecosistemas.",sus2Title:"Gestión del agua",sus2Copy:"La monitorización, el riego eficiente cuando se utiliza y la atención a la humedad del suelo ayudan a gestionar un recurso limitado.",sus3Title:"Prácticas regenerativas",sus3Copy:"Los cultivos de cobertura, el laboreo reducido y las rotaciones diversificadas pueden mejorar el funcionamiento del suelo cuando se adaptan al contexto local.",sus4Title:"Resiliencia climática",sus4Copy:"Las variedades adaptadas, la información meteorológica y la investigación agronómica pueden ayudar a responder a condiciones cambiantes.",methodNote:"Las prácticas agrícolas generales se explican con fines educativos. Las acciones específicas de Barilla solo se describen cuando están respaldadas por las fuentes indicadas.",
storyEyebrow:"05 — LAS HISTORIAS",storyTitle:"Una cosecha nunca<br>es solo una cosecha.",storyLead:"La agricultura está marcada por el conocimiento familiar, los cambios del entorno y las decisiones para la próxima campaña.",quote1:"La tradición nos da un punto de partida. No puede ser el único plan para el futuro.",quote2:"Tener mejor información no elimina la incertidumbre, pero nos ayuda a decidir antes.",quote3:"La siguiente generación necesita una explotación capaz de adaptarse, no solo de repetir el pasado.",fictionalQuote:"Personaje ficticio",storyFiction:"Todas las citas y biografías de esta página son contenido educativo ficticio creado para este proyecto de diseño.",
closingEyebrow:"DE VUELTA A LA MESA",closingTitle:"Ahora sabes un poco más<br>de lo que hay detrás.",closingCopy:"La próxima vez que cocines pasta, recuerda a las personas y los paisajes que hacen posibles sus ingredientes.",openTimer:"Abrir temporizador",footerTag:"Proyecto académico de diseño sobre la historia agrícola que hay detrás de la pasta.",disclaimer:"Proyecto académico independiente. No es una web oficial de Barilla ni cuenta con su respaldo. Los perfiles y testimonios son ficticios.",sourcesTitle:"Fuentes y verificación",verifyNote:"Las cifras empresariales mostradas corresponden al periodo y alcance del informe de 2025 citado. Verifica las publicaciones oficiales antes de presentar el proyecto públicamente.",
timerEyebrow:"APROVECHA EL TIEMPO",timerTitle:"Temporizador de cocción",timerInstruction:"Introduce el tiempo de cocción indicado en el paquete.",timerReady:"LISTO CUANDO QUIERAS",minutesLabel:"Tiempo de cocción · minutos",start:"Iniciar",pause:"Pausar",resume:"Continuar",reset:"Reiniciar",finished:"Tu pasta está lista. Detrás de cada plato hay una historia.",timerFootnote:"Puedes cerrar este panel y seguir explorando. El temporizador continuará funcionando.",running:"COCCIÓN EN CURSO",paused:"TEMPORIZADOR EN PAUSA",done:"TIEMPO TERMINADO",
regionData:{
puglia:["04 / SUR","Apulia","Una región agrícola destacada del sur de Italia, con amplias llanuras y una larga tradición cerealista.","Clima mediterráneo, veranos calurosos y secos y precipitaciones variables.","Gestionar la disponibilidad de agua y el estrés térmico en fases clave del cultivo.","Luca Moretti"],
basilicata:["03 / SUR","Basilicata","Región interior del sur con altitudes, paisajes y sistemas agrícolas variados.","Condiciones mediterráneas e interiores, influidas por la altitud y la exposición.","Erosión del suelo en pendientes y variabilidad de las precipitaciones.","Luca Moretti"],
sicily:["05 / ISLA","Sicilia","La mayor isla del Mediterráneo tiene una larga historia cerealista y condiciones locales diversas.","Clima mediterráneo, con diferencias entre las zonas costeras y el interior.","Calor, riesgo de sequía y calendario de lluvias durante el desarrollo del cultivo.","Salvatore Greco"],
campania:["02 / SUR","Campania","Región diversa donde llanuras, colinas y zonas costeras generan distintos entornos agrícolas.","Clima mediterráneo con variaciones entre llanuras costeras y zonas interiores.","Competencia por el uso del suelo y adaptación de cultivos al agua y al terreno.","Salvatore Greco"],
marche:["01 / CENTRO","Marcas","Región del centro-este con colinas onduladas y paisajes de agricultura extensiva.","Transición templada-mediterránea, con variaciones locales de lluvia y temperatura.","Gestión del suelo en pendientes y respuesta a una meteorología variable.","Giulia Rossi"]
},
profiles:{
luca:{name:"Luca Moretti",tag:"APULIA · PERFIL FICTICIO",age:"48",years:"27",farm:"Explotación familiar que combina el cultivo de cereales con una pequeña rotación de otros cultivos.",background:"Luca creció ayudando a sus padres durante la cosecha. Tras trabajar fuera del sector, regresó a la explotación familiar y empezó a actualizar la maquinaria y los registros.",challenge:"Equilibrar los costes de producción, la inversión en maquinaria y unas lluvias cada vez más irregulares.",programme:"En este escenario ilustrativo, Luca utiliza orientación agronómica y una relación de suministro estructurada para planificar el cultivo. No representa a un beneficiario real de Barilla.",ambition:"Mantener la viabilidad de la explotación para la siguiente generación y mejorar la gestión del suelo y del agua."},
giulia:{name:"Giulia Rossi",tag:"MARCAS · PERFIL FICTICIO",age:"31",years:"8",farm:"Explotación mediana que utiliza registros de campo y herramientas digitales para comparar resultados.",background:"Giulia estudió ciencias agrarias antes de volver a las tierras de su familia. Le interesa utilizar datos para ajustar las operaciones agrícolas.",challenge:"Acceder a información fiable y financiar mejoras mientras gestiona una empresa de tamaño reducido.",programme:"En este escenario ilustrativo, Giulia participa en intercambios técnicos y utiliza herramientas agronómicas digitales. No representa a una participante verificada.",ambition:"Construir un negocio viable y atractivo para jóvenes que quieran incorporarse a la agricultura."},
salvatore:{name:"Salvatore Greco",tag:"SICILIA · PERFIL FICTICIO",age:"59",years:"39",farm:"Explotación agrícola consolidada que cultiva cereales en condiciones mediterráneas secas.",background:"Salvatore aprendió el oficio de sus padres y ha visto cambiar los patrones estacionales. Ahora comparte decisiones con su hija, que se prepara para asumir más responsabilidades.",challenge:"El calor y la variabilidad de las lluvias dificultan elegir fechas de siembra y gestionar el agua.",programme:"En este escenario ilustrativo, Salvatore considera variedades adaptadas y recomendaciones de cultivo al planificar cada campaña. No es una entrevista ni un registro real.",ambition:"Transmitir una explotación con suelo sano, costes asumibles y espacio para innovar."}
}
it:{
skip:"Vai al contenuto",navFarmers:"Gli agricoltori",navPartnership:"Collaborazione",navRegions:"Regioni del grano",navSustainability:"Sostenibilità",navStories:"Storie",languageLabel:"Scegli la lingua",timerNav:"Timer pasta",heroEyebrow:"DAL CAMPO ALLA TUA TAVOLA",heroTitle:"Dietro ogni piatto,<br><em>c'è una storia.</em>",heroCopy:"La pasta nasce molto prima di arrivare in pentola. Nasce dalle persone che coltivano il grano, si prendono cura della terra e mantengono vivo il sapere agricolo.",explore:"Esplora le storie",startCooking:"Avvia il timer",heroCaption:"Una storia che nasce dalla terra",
introLabel:"UN MODO DIVERSO DI ASPETTARE",introTitle:"Mentre la pasta cuoce,<br>scopri cosa la rende possibile.",introCopy:"Un breve viaggio attraverso le comunità agricole, le conoscenze e le scelte legate al grano duro. Dedica qualche minuto a guardare oltre la confezione.",introNote:"Un momento per scoprire<br>la storia dietro il tuo pasto.",
farmEyebrow:"01 — LE PERSONE",farmTitle:"Ogni raccolto<br>ha un lato umano.",farmLead:"Dietro ogni campo ci sono decisioni, competenze e anni di lavoro. Incontra tre agricoltori immaginari, le cui storie rappresentano prospettive diverse dell'agricoltura italiana.",fictionNotice:"Finzione educativa: questi profili sono personaggi inventati, non interviste reali né beneficiari Barilla verificati.",lucaShort:"Agricoltore di terza generazione che unisce tradizione familiare e necessità di innovare.",giuliaShort:"Giovane imprenditrice agricola che sperimenta una gestione più precisa dei campi.",salvatoreShort:"Coltivatore esperto che adatta le proprie decisioni a stagioni sempre più variabili.",readProfile:"Leggi il profilo ↗",
partEyebrow:"02 — LA RELAZIONE",partTitle:"Una buona agricoltura<br>ha bisogno di buoni partner.",partLead:"Una filiera resiliente si costruisce nel tempo. Aspettative chiare, condivisione delle conoscenze e strumenti adeguati possono aiutare i produttori a pianificare a lungo termine.",statSince:"Avvio del programma Barilla Sustainable Farming",statFarmers:"agricoltori coinvolti nelle filiere strategiche nel 2025",statVolume:"tonnellate di cereali e basilico approvvigionate tramite il programma nel 2025",statScope:"Dati complessivi su cereali e basilico in quattro filiere: non riguardano esclusivamente il grano duro. Fonte: Rapporto di Sostenibilità Barilla 2025.",
support1Title:"Relazioni chiare ed equilibrate",support1Copy:"Specifiche trasparenti e dialogo possono chiarire le aspettative di produttori e acquirenti. I requisiti di qualità e sostenibilità devono essere compresi lungo la filiera.",support2Title:"Pianificare nel tempo",support2Copy:"Contratti di coltivazione e requisiti agronomici definiti possono sostenere la pianificazione. Non eliminano i rischi climatici, di mercato o di raccolto, ma possono rendere alcune decisioni più prevedibili.",support3Title:"Strumenti e innovazione",support3Copy:"Piattaforme agronomiche digitali, ricerca varietale e dati dal campo possono aiutare gli agricoltori a valutare le condizioni e prendere decisioni più consapevoli.",support4Title:"Formazione e competenze",support4Copy:"Scambio tecnico, collaborazioni con la ricerca e indicazioni pratiche possono rafforzare le competenze e sostenere l'adozione di pratiche migliori.",clarifyTitle:"Cosa significa — e cosa non significa",clarifyCopy:"Questi sono meccanismi attraverso cui le partnership agricole possono creare valore. Barilla descrive pubblicamente contratti di coltivazione, specifiche agronomiche, supporto digitale e collaborazione con gli agricoltori. Questa pagina non afferma che ogni agricoltore riceva finanziamenti diretti, un prezzo garantito o condizioni contrattuali identiche.",
regionEyebrow:"03 — IL TERRITORIO",regionTitle:"Un Paese modellato<br>dai suoi campi.",regionLead:"Seleziona una regione per esplorare i diversi contesti agricoli in cui viene coltivato il grano duro. Le descrizioni regionali sono informazioni educative generali.",mapHint:"Seleziona un punto numerato per esplorare una regione",regionClimate:"CLIMA E TERRITORIO",regionChallenge:"SFIDA LOCALE",fictionalLink:"PROFILO DI AGRICOLTORE FITTIZIO",
susEyebrow:"04 — IL FUTURO",susTitle:"Il suolo ricorda<br>ogni decisione.",susLead:"L'agricoltura sostenibile non è una singola tecnica. È un insieme di scelte adattate alle condizioni locali, con l'obiettivo di proteggere nel tempo i terreni produttivi.",sus1Title:"Salute del suolo e biodiversità",sus1Copy:"Rotazione delle colture, sostanza organica e diversità degli habitat possono sostenere la struttura del suolo e gli ecosistemi.",sus2Title:"Gestione dell'acqua",sus2Copy:"Monitoraggio, irrigazione efficiente dove utilizzata e attenzione all'umidità del suolo aiutano a gestire una risorsa limitata.",sus3Title:"Pratiche rigenerative",sus3Copy:"Colture di copertura, lavorazioni ridotte e rotazioni diversificate possono migliorare la funzionalità del suolo se adatte al contesto locale.",sus4Title:"Resilienza climatica",sus4Copy:"Varietà adattate localmente, informazioni meteorologiche e ricerca agronomica possono aiutare le aziende ad affrontare condizioni mutevoli.",methodNote:"Le pratiche agricole generali sono illustrate a scopo educativo. Le azioni specifiche di Barilla sono descritte solo quando supportate dalle fonti indicate.",
storyEyebrow:"05 — LE STORIE",storyTitle:"Un raccolto non è mai<br>solo un raccolto.",storyLead:"L'agricoltura è plasmata dalle conoscenze familiari, dai cambiamenti delle condizioni e dalle scelte per la stagione successiva.",quote1:"La tradizione è un punto di partenza. Non può essere l'unico piano per il futuro.",quote2:"Informazioni migliori non eliminano l'incertezza, ma ci aiutano a decidere prima.",quote3:"La prossima generazione ha bisogno di un'azienda agricola capace di adattarsi, non solo di ripetere il passato.",fictionalQuote:"Personaggio fittizio",storyFiction:"Tutte le citazioni e le biografie presenti in questa pagina sono contenuti educativi fittizi creati per questo progetto di design.",
closingEyebrow:"TORNIAMO A TAVOLA",closingTitle:"Ora sai qualcosa in più<br>su ciò che c'è dietro.",closingCopy:"La prossima volta che cucini la pasta, ricorda le persone e i paesaggi che rendono possibili i suoi ingredienti.",openTimer:"Apri il timer",footerTag:"Un progetto accademico di design che esplora la storia agricola dietro la pasta.",disclaimer:"Progetto accademico indipendente. Non è un sito ufficiale Barilla e non è approvato da Barilla. Profili e testimonianze sono fittizi.",sourcesTitle:"Fonti e verifica",verifyNote:"I dati aziendali mostrati si riferiscono al periodo e al perimetro del rapporto 2025 citato. Verificare le pubblicazioni ufficiali prima di presentare pubblicamente il progetto.",
timerEyebrow:"IL TUO TEMPO, BEN SPESO",timerTitle:"Timer di cottura della pasta",timerInstruction:"Imposta il tempo di cottura indicato sulla confezione.",timerReady:"PRONTO QUANDO VUOI",minutesLabel:"Tempo di cottura · minuti",start:"Avvia",pause:"Pausa",resume:"Riprendi",reset:"Azzera",finished:"La pasta è pronta. Dietro ogni piatto c'è una storia.",timerFootnote:"Puoi chiudere questo pannello e continuare a esplorare. Il timer continuerà a funzionare.",running:"COTTURA IN CORSO",paused:"TIMER IN PAUSA",done:"TEMPO SCADUTO",
regionData:{
puglia:["04 / SUD","Puglia","Una regione agricola importante dell'Italia meridionale, con ampie pianure e una lunga tradizione cerealicola.","Condizioni mediterranee, estati calde e secche e precipitazioni variabili.","Gestire la disponibilità idrica e lo stress termico nelle fasi chiave della coltura.","Luca Moretti"],
basilicata:["03 / SUD","Basilicata","Una regione interna del Sud con altitudini, paesaggi e sistemi agricoli differenti.","Condizioni mediterranee e interne, influenzate da altitudine ed esposizione.","Erosione del suolo sui pendii e precipitazioni variabili durante le stagioni.","Luca Moretti"],
sicily:["05 / ISOLA","Sicilia","La più grande isola del Mediterraneo ha una lunga storia cerealicola e condizioni locali diverse.","Clima mediterraneo, con forti differenze tra aree costiere e interne.","Calore, rischio di siccità e distribuzione delle piogge durante lo sviluppo della coltura.","Salvatore Greco"],
campania:["02 / SUD","Campania","Una regione diversificata in cui pianure, colline e coste creano ambienti agricoli differenti.","Condizioni mediterranee con variazioni tra pianure costiere e aree interne.","Concorrenza nell'uso del suolo e adattamento delle colture alle condizioni locali.","Salvatore Greco"],
marche:["01 / CENTRO","Marche","Regione dell'Italia centro-orientale con colline e paesaggi di agricoltura estensiva.","Transizione temperata-mediterranea, con variazioni locali di piogge e temperature.","Gestione del suolo sui pendii e risposta a condizioni meteorologiche variabili.","Giulia Rossi"]
},
profiles:{
luca:{name:"Luca Moretti",tag:"PUGLIA · PROFILO FITTIZIO",age:"48",years:"27",farm:"Azienda familiare che combina la coltivazione di cereali con una piccola rotazione di altre colture.",background:"Luca è cresciuto aiutando i genitori durante il raccolto. Dopo aver lavorato fuori dall'agricoltura, è tornato nell'azienda di famiglia e ha iniziato ad aggiornare macchinari e registrazioni.",challenge:"Equilibrare i costi di produzione, gli investimenti nei macchinari e precipitazioni sempre più irregolari.",programme:"In questo scenario illustrativo, Luca utilizza indicazioni agronomiche e una relazione di fornitura strutturata per pianificare le colture. Non rappresenta un beneficiario reale di Barilla.",ambition:"Mantenere l'azienda vitale per la prossima generazione e migliorare la gestione del suolo e dell'acqua."},
giulia:{name:"Giulia Rossi",tag:"MARCHE · PROFILO FITTIZIO",age:"31",years:"8",farm:"Azienda di medie dimensioni che utilizza registrazioni di campo e strumenti digitali per confrontare i risultati.",background:"Giulia ha studiato scienze agrarie prima di tornare sui terreni di famiglia. È interessata a usare i dati per rendere più precise le operazioni in campo.",challenge:"Accedere a informazioni affidabili e finanziare miglioramenti gestendo un'attività relativamente piccola.",programme:"In questo scenario illustrativo, Giulia partecipa a scambi tecnici e utilizza strumenti agronomici digitali. Non rappresenta una partecipante verificata.",ambition:"Costruire un'attività economicamente solida e attrattiva per i giovani che entrano in agricoltura."},
salvatore:{name:"Salvatore Greco",tag:"SICILIA · PROFILO FITTIZIO",age:"59",years:"39",farm:"Azienda agricola consolidata che coltiva cereali in condizioni mediterranee secche.",background:"Salvatore ha imparato il mestiere dai genitori e ha visto cambiare i modelli stagionali. Ora condivide le decisioni con la figlia, che si prepara ad assumere un ruolo più importante.",challenge:"Calore e variabilità delle piogge rendono più difficile scegliere le date di semina e gestire l'acqua.",programme:"In questo scenario illustrativo, Salvatore considera varietà adattate e indicazioni colturali nella pianificazione. Non è un'intervista né un beneficiario reale.",ambition:"Trasmettere un'azienda con suolo sano, costi sostenibili e spazio per innovare."}
}
}
};
},
let lang="en";
const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);

function applyLanguage(next){
  lang=translations[next]?next:"en";
  document.documentElement.lang=lang;

  $$("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    const value=translations[lang][key];
    if(value!==undefined)el.innerHTML=value;
  });

  $("#languageSelect").value=lang;

  if(selectedRegion)renderRegion(selectedRegion);
}

$("#languageSelect").addEventListener("change",e=>applyLanguage(e.target.value));

const regionKeys=["marche","campania","basilicata","puglia","sicily"];
let selectedRegion="puglia";

function renderRegion(key){
  const d=translations[lang].regionData[key];
  if(!d)return;

  $("#regionKicker").textContent=d[0];
  $("#regionName").textContent=d[1];
  $("#regionDescription").textContent=d[2];
  $("#regionClimate").textContent=d[3];
  $("#regionChallenge").textContent=d[4];
  $("#regionFarmer").textContent=d[5];

  $$(".map-point").forEach(p=>{
    p.classList.toggle("active",p.dataset.region===key);
  });
}

function chooseRegion(key){
  selectedRegion=key;
  renderRegion(key);
}

$$(".map-point").forEach(p=>{
  p.addEventListener("click",()=>chooseRegion(p.dataset.region));

  p.addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" "){
      e.preventDefault();
      chooseRegion(p.dataset.region);
    }
  });
});

// Interactive farmer profiles
const dialog=$("#profileDialog");

function openProfile(key){
  const p=translations[lang].profiles[key];
  if(!p)return;

  const images={
    luca:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    giulia:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    salvatore:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
  };

  const labels=lang==="es"
    ?["Edad","Años en agricultura","La explotación","Historia personal","Principal reto","Relación ilustrativa con programas","Ambición"]
    :lang==="it"
    ?["Età","Anni in agricoltura","L'azienda","Storia personale","Sfida principale","Relazione illustrativa con i programmi","Obiettivo"]
    :["Age","Years in agriculture","The farm","Personal background","Main challenge","Illustrative programme relationship","Ambition"];

  const vals=[
    p.age,p.years,p.farm,p.background,
    p.challenge,p.programme,p.ambition
  ];

  $("#profileContent").innerHTML=`
    <img src="${images[key]}" alt="">
    <div class="profile-body">
      <span class="profile-tag">${p.tag}</span>
      <h2>${p.name}</h2>
      ${vals.map((v,i)=>`
        <h3>${labels[i]}</h3>
        <p>${v}</p>
      `).join("")}
    </div>
  `;

  dialog.showModal();
}

$$(".profile-open").forEach(b=>{
  b.addEventListener("click",()=>openProfile(b.dataset.profile));
});

$("#profileClose").addEventListener("click",()=>dialog.close());

dialog.addEventListener("click",e=>{
  if(e.target===dialog)dialog.close();
});

// Cooking timer
const drawer=$("#timerDrawer");
const durationCircle=2*Math.PI*96;

let remaining=480;
let total=480;
let interval=null;
let running=false;
let finished=false;
let lastTick=0;

function formatTime(s){
  const m=Math.floor(s/60);
  const sec=s%60;

  return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function updateTimer(){
  $("#timerDisplay").textContent=formatTime(remaining);
  $("#miniTime").textContent=formatTime(remaining);

  const progress=total>0?remaining/total:1;

  $("#ringProgress").style.strokeDasharray=durationCircle;
  $("#ringProgress").style.strokeDashoffset=durationCircle*(1-progress);

  $("#startPause").textContent=running
    ?translations[lang].pause
    :(remaining<total&&!finished
      ?translations[lang].resume
      :translations[lang].start);

  $("#timerStatus").textContent=finished
    ?translations[lang].done
    :running
      ?translations[lang].running
      :remaining<total
        ?translations[lang].paused
        :translations[lang].timerReady;

  $("#timerFinished").hidden=!finished;
}

function stopClock(){
  if(interval){
    clearInterval(interval);
    interval=null;
  }

  running=false;
}

function tick(){
  const now=Date.now();
  const elapsed=Math.floor((now-lastTick)/1000);

  if(elapsed>0){
    remaining=Math.max(0,remaining-elapsed);
    lastTick=now;

    if(remaining===0){
      stopClock();
      finished=true;

      try{
        if("vibrate"in navigator){
          navigator.vibrate([180,80,180]);
        }
      }catch(e){}
    }

    updateTimer();
  }
}

function startClock(){
  if(finished||remaining<=0){
    setDuration();
  }

  if(!running){
    running=true;
    lastTick=Date.now();
    interval=setInterval(tick,250);
    updateTimer();
  }
}

function setDuration(){
  const mins=Math.min(
    99,
    Math.max(1,Number($("#minutesInput").value)||8)
  );

  $("#minutesInput").value=mins;

  total=mins*60;
  remaining=total;
  finished=false;

  stopClock();
  updateTimer();
}

// Start and pause
$("#startPause").addEventListener("click",()=>{
  if(running){
    tick();
    stopClock();
  }else{
    startClock();
  }

  updateTimer();
});

// Reset timer
$("#resetTimer").addEventListener("click",setDuration);

// Change cooking minutes
$("#minutesInput").addEventListener("change",()=>{
  if(!running)setDuration();
});

// Open and close timer panel
function openTimer(){
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  $("#timerClose").focus();
}

function closeTimer(){
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

["timerOpen","heroTimer","closingTimer"].forEach(id=>{
  $("#"+id).addEventListener("click",openTimer);
});

$("#timerClose").addEventListener("click",closeTimer);
$("#timerBackdrop").addEventListener("click",closeTimer);

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    closeTimer();

    if(dialog.open){
      dialog.close();
    }
  }
});

// Initial timer display
updateTimer();

// Responsive navigation
$("#menuToggle").addEventListener("click",()=>{
  const nav=$("#mainNav");
  const open=nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded",String(open));
});

$$(".main-nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded","false");
  });
});

// Automatic copyright year
$("#year").textContent=new Date().getFullYear();

// Scroll entrance animations
if(
  "IntersectionObserver"in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});

  $$(".reveal").forEach(el=>observer.observe(el));

}else{
  $$(".reveal").forEach(el=>el.classList.add("visible"));
}

// Start website in English
applyLanguage("en");
