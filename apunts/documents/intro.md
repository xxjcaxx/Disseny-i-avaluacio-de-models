# Introducció

En aquest mòdul dissenyarem models d'Aprenentatge automàtic (Machine Learning).

El cicle de vida de les dades es pot resumir com:

* **Recollida de dades:** Obtenció de dades de diverses fonts, com ara bases de dades, API, *web scraping* o enquestes.
* **Neteja de dades:** Preparació de les dades per a l'anàlisi mitjançant la gestió de valors absents, l'eliminació de duplicats i la correcció d'incoherències.
* **Exploració de dades:** Anàlisi de les dades per a comprendre'n l'estructura, la distribució i les relacions entre variables.
* **Modelatge de dades:** Aplicació de models estadístics o d'aprenentatge automàtic a les dades per a descobrir patrons i fer prediccions. Per a l'analítica descriptiva i diagnòstica, això pot implicar resumir dades i identificar correlacions. Per a l'analítica predictiva, implica la construcció de models per a pronosticar resultats futurs. Per a l'analítica prescriptiva, inclou tècniques d'optimització per a recomanar accions.
* **Visualització de dades:** Creació de representacions visuals de les dades per a comunicar les conclusions de manera efectiva.
* **Presa de decisions:** Ús dels coneixements obtinguts a partir de l'anàlisi per a informar les decisions i estratègies empresarials.

Encara que farem un poc de tot, aquest mòdul es centra en l'exploració i el modelatge. Suposarem que les hem aconseguit i netejat en la majoria dels casos i que algún aprofitarà els models per a prendre decisions.

Tant l'exploració com el modelatge utilitzen unes matemàtiques molt més avançades del que anem a veure en aquest curs. Utilitzarem llibreries i programes que aporten una capa d'abstracció que simplifica la tasca. No obstant, el significat d'alguns conceptes és important per saber el significat dels resultats. 

## Breu resum del que és l'aprenentatge automàtic

Per a adquirir coneixements duem a terme un procés que denominem aprenentatge. Partim d'un conjunt de dades (o informació) i l'objectiu és entrenar un model (és a dir, dur a terme un aprenentatge) perquè puga realitzar alguna d'aquestes funcions:

* **Predicció:** Per exemple, a partir de dades sobre habitatges (localització, grandària, preu, etc.), crear un model que prediga el preu a una regió, o reconéixer dígits escrits a mà a partir d'imatges.
* **Detecció de patrons complexos:** Com identificar la localització d'un possible càncer de pulmó en radiografies toràciques.
* **Agrupació de dades similars:** Per exemple, agrupar usuaris d'una plataforma de *streaming* segons el seu comportament per a fer recomanacions personalitzades.
* **Reducció de dimensionalitat:** Simplificar dades (com textos) convertint-les en vectors perquè els elements similars es troben a prop entre si.
* **Generació de dades sintètiques:** Crear contingut nou, com completar textos o generar imatges a partir d'una descripció (text a imatge).
* **Optimització d'accions en entorns:** Entrenar agents, com un braç robòtic, perquè aprenguen a realitzar tasques físiques complexes (com donar menjar).

Aquestes funcions s'assoleixen mitjançant diverses tècniques d'aprenentatge automàtic:

* **Aprenentatge supervisat:** Prediu valors (regressió) o categories (classificació) a partir de dades etiquetades prèviament. És l'aplicació més comuna.
* **Aprenentatge no supervisat:** Detecta patrons o estructures ocultes en dades no etiquetades. Inclou el *clustering* (agrupació) i la reducció de dimensionalitat.
* **Aprenentatge per reforç:** Optimitza la presa de decisions mitjançant la interacció contínua d'un agent amb el seu entorn, aprenent de les conseqüències de les seues accions al llarg del temps.

## Resolució de problemes

En el mon real ens trobem constantment amb problemes que han de ser resolts. Molts d'ells es poden solucionar amb un `model matemàtic`. En eixe cas, el model és una representació del problema en termes matemàtics per poder ser resolt amb tècniques matemàtiques. D'això tracten les `matemàtiques aplicades`. Després de resoldre i interpretar el resultat, es torna al mon real. 

La informàtica ha resolt problemes del mon real des de l'inici. Un cas clàsic és el `problema de viatjant`. Aquest problema consisteix a trobar la ruta més curta per visitar un conjunt de ciutats i tornar al punt d'origen. Es pot resoldre fàcilment am poques ciutats, però a mesura que el nombre de ciutats augmenta, el nombre de rutes possibles creix exponencialment, fent que la resolució sigui molt difícil. Aquest és un exemple de problema NP-complet, on no es coneix cap algorisme eficient per resoldre'l en tots els casos. De forma clàssica es resolt amb heurístiques fent grafos. Els grafos són un model de la realitat on les vores tenen la distància entre ciutats. En aquest cas, les vores no són dirigides, totes les ciutats tenen al menys una connexió i té cicles. Al ser un problema clàssic no és difícil trobar un exemple o llibreria que el soluciona.

Un altre problema clàssic és l'escacs. No és possible recorrer tot l'arbre de decisions per trobar la millor jugada. Per tant, necessitem un enfoc `minimax` en el que minimitzes l'avantatge de l'oponent i maximitzes el teu. Aquest necessita una funció de cost que puga mesurar qui i per quant està guanyant. Aquesta funció ja és un problema que es pot solucionar amb machine learning o heurísticament i després s'utilitza per recorrer la major quantitat d'estats possible. Per evitar explorar branques que no afecten a la decisió final s'utilitzen tècniques como la poda `alfa-beta` o `montecarlo tree search`. 

Si parlem de IA, el model és el resultat d'un procés d'aprenentatge a partir de dades. El procés es fà amb un algorisme d'aprenentatge automàtic. Les màquines aprenen identificant patrons que no són trivials o evidents. 

