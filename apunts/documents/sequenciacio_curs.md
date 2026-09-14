# Seqüenciació del curs

## UD1 Llibreries, Notebooks, datasets, Python

Aquesta unitat la considerem transversal al mòdul i al curs sencer. Començarem amb una instal·lació bàsica per a funcionar amb aquest mòdul i al llarg del curs anirem introduint el que necessitem.

Partirem per tant de:

* Anaconda:
  * Crear un entorn per al mòdul
  * Instal·lar a l'entorn les llibreries inicials: Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn...
  * Instal·lar a l'entorn Orange, JupyterLab
  * Provar que els notebooks dels apunts funcionen a l'entorn creat. 

## UD2 Algorismes Supervisats

Suposant que al mòdul de IA ja s'ha explicat de forma teòrica els tipus de IA i de problemes a solucionar, comencem explicant en profunditat aquests tipus d'algorismes des del punt de vista del ML. Obviarem les xarxes neuronals de moment per la complexitat tècnica.

{doc}`Introducció a Orange <orange_1.md>`

A la secció d'Algorismes supervisats anirem veient un per un començant per la regressió i continuant amb la classificació.

{doc}`Regressió <regressió.ipynb>`

{doc}`Classificació <classificació.ipynb>`

No obstant, després de veure els algorismes més importants, cal optimitzar la manera d'entrenar. Tornarem a fer alguns amb tècniques que ens permeten millorar els resultats i avaluar correctament si el resultat és acceptable:

{doc}`Optimització d'algorismes supervisats <optimització_supervisats.ipynb>`

## UD3 Algorismes no Supervisats

Bàsicament els no supervisats tracten el `clustering`, detecció d'anomalies i reducció de dimensionalitat. Veurem els algorismes principals i algunes tècniques per a la reducció de dimensionalitat que poden ser útils també per als supervisats

{doc}`Aprenentatge no supervisat <clustering.ipynb>`

Al finalitzar aquesta UD es faran exercicis complets on s'utilitzaran indistintament qualsevol algorisme treballat anteriorment per aconseguir el millor resultat possible.

## UD4 Xarxes neuronals

Aquesta unitat suposarà un canvi tècnic important. Començarem a fer ús de les targetes gràfiques i de llibreries noves com `Pytorch`. Apareixeran nous conceptes com els tensors o la `backpropagation`.

Farem una introducció amb xarxes mínimes que resolen problemes pareguts als del machine learning com perceptrons o xarxes denses i anirem evolucionant a arquitectures més complexes com els CNN o seqüències.

Amés, la manera d'enfocar un problema es torna més complexa amb èpoques, learning rates, monitorització de l'entrenament amb `TensorBoard`...

Veurem els principis bàsics del `NLP` a partir dels seus fonaments.

## UD5 Aprenentatge per reforç

Aquesta unitat està al final perquè l'aprenentatge per reforç pot ser aplicat a machine learning tradicional com a xarxes neuronals. També suposa la creació de simuladors i el desplegament mínim de models.