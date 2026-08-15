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

Bàsicament els no supervisats tracten el `clustering`. Veurem els algorismes principals i algunes tècniques per a la reducció de dimensionalitat que poden ser útils també per als supervisats

{doc}`Aprenentatge no supervisat <clustering.ipynb>`

Al finalitzar aquesta UD es faran exercicis complets on s'utilitzaran indistintament qualsevol algorisme treballat anteriorment per aconseguir el millor resultat possible. 

## UD4 Aprenentatge per reforç

## UD5 Xarxes neuronals