---
theme: dracula
title: Aprenentatge supervisat
info: |
  Introducció als algorismes supervisats
class: text-center
transition: slide-left
routerMode: hash
layout: defecte
drawings:
  persist: false
---


# Aprenentatge supervisat

---
layout: defecte
---

## Tipus

* **Clasificació**: Binaria o multiclasse per predir categories discretes (benigne, maligne, spam, solvencia...)
* **Regresió**: Calcular un valor determinat contiu. (Edat, preus...)

Molts problemes tenen les dos possibilitats. Per exemple el preu d'una vivenda exacte o en uns rangs.


---
layout: defecte
---


## Algorismes

* **KNN (K-Nearest Neighbours)**
* **Regresió Lineal**
* **Regresió Logística**
* **Arbres de decisió**
* **Màquines de Vector Suport (SVM)**

---
layout: defecte
---


## KNN (K-Nearest Neighbours)

* És un algorisme de classificació que pot ser utilitzat per a regressió calculant la mitjan dels valors dels k veins pròxims. 
* No és paramètric, no asumeix la distribució de les dades.
* És **instance based**, no crea un model, memoritza les instàncies d'entrenament. Es diu que és **lazy** per això.

### Cóm funciona?

* Dels registres guardats troba els **k** registres més propers. 
* Per a classificació compta les classes dels veins propers i tria la majoritària. 
* Per a regressió calcula la distància **euclidiana** cap als veins. 
* Poden ser altres distàncies **Hamming**, **Manhattan**, **Minkowski**
* Un **k** menut és afectat pel soroll, un **k** gran és costós computacionalment. 

---
layout: defecte
---


## Regressió Lineal

* Utilitza una funció lineal com $y = b_0 + b_1x$ que dibuixa una línea en un gràfic xy.
* Es tracta de predir **Y** a partir de **X**. Si coneguem la funció és resoldre-la. 
* L'entrenament ajusta els valors de $b_0$ i $b_1$. 
* Es tracta de minimitzar la distància entre els **Yp** predits i els **Yi** observats. $\min_{y_p} \sum_i (y_i - y_p)^2$ (Error quadratic mig)
* És interessant mostrar una matriu de difusió per veure els resultats.

---
layout: defecte
---


## Regressió Lineal Múltiple

* En aquest cas és per a 2 o més variables, per tant ja no tenim una única **X**. La funció seria: $y = b_0 + b_1x_1 + b_2x_2 ... ... b_nx_n$ 
* Per a que funcione correctament:
    * **linealitat** Les relacions entre variables seran lineals.
    * **Homoscedasticitat** S'ha de mantenir una varianza constant
    * **Normalitat Multivariable** Els residus estan distribuits de forma normal
    * Falta de **Multicol·linealitat** entre les variables.
* Si hi ha variables categoriques es poden representar amb **dummy variables** amb n-1 columnes per a n possibles valors.
* Moltes variables poden donar lloc a un model poc precís. Es pot mitigar amb: **Forward Selection**, **Backward Elimination**, **Bidirecctional Comparision** o **Regularitzacions**

https://youtu.be/k964_uNn3l0?si=gXNAzcJQAtgiO1AJ

https://youtu.be/w2RJ1D6kz-o?si=HJTTnaKqvcQa-zj4

---
layout: defecte
---

## Regressió Logística

* En aquest cas es tracta de **Classificació**. El seu resultat és 0 o 1. 
* Mesura la relació entre la variable **label** que es vol predir i una o moltes variables independents. 
* Per fer una predicció transforma les probabilitats en un valor binari amb una funció anomenada **Sigmoide** i un classificador d'umbral.
* Una funció **sigmoide** té una forma de *S* que mai arriba a 0 o a 1, perfecta per a probabilitats.  

$\sigma(x) = \frac{1}{1 + e^{-x}}$

* En aquest cas és:

$\sigma(x) = \frac{1}{1 + e^{-(\beta_o+\beta_1x_1+\beta_2x_2+...+\beta_nx_)}}$

* Calcular els millors parametres **$\beta$** és l'objectiu de l'entrenament. 
* L'entrenament aconsegueix millorar els paràmetres amb un càlcul anomenat **Descens de Gradient**

---
layout: defecte
---


## Descens de gradient

* Suposen que ens inventem els $\beta$ originals. No funcionarà é i tindrà una error **J**
* Per calcular **J** serà la suma dels errors de cada registre amb els que s'entrena el model. Aquest es diu la funció de cost.

https://youtu.be/BHok3wJpmf0?si=gVLQj0PCBVD7aX1o
https://github.com/gonzalezgouveia/clases-youtube/blob/main/diabetes-logistic/diabetes.ipynb 

* Funció de perduda:
$L\left(f_{w,b}\left(\vec{x}^{(i)}\right),y^{(i)}\right)=-y^{(i)}\log\left(f_{w,b}\left(\vec{x}^{(i)}\right)\right)-\left(1-y^{(i)}\right)\log\left(1-f_{w,b}\left(\vec{x}^{(i)}\right)\right)$

* Funció de cost
$J\left(w,b\right)=\frac{1}{m}\sum_{i=1}^{m}\left[L\left(f_{w,b}\left(\vec{x}^{(i)}\right),y^{(i)}\right)\right]$

* Es tracta de trobar el punt més baix de la funció i es fa en la derivada. La tècnica es diu **Descens de gradient**


---
layout: defecte
---

## Arbres de decisió

* Al final és una estructura de if/else niuats.
* S'utilitza principalment per a classificació i funciona amb variables categòriques i continues. 
* La dificultat està en trobar els mínims if/else per a la màxima precisió. 
* L'algorisme ID3 Iterative Dicotomizer 3 detecta la variable que, seleccionada, redueix més l'entropia. 

---
layout: defecte
---

## Random Forest

* Junta molts arbres de decisió inicialitzats de forma distinta i aleatòria i trau la classe més votada. 


---
layout: defecte
---

## Màquines de Vector Suport (SVM)

* **Support Vector Machines** es un algorisme tant per a classificació com per a regressió, encara que es sol utilitzar per a classificació.
* Es pinta cada ítem en un gràfic n-dimensional. 
* Es busca l'hiperpla que diferència les dos classes millor.
* Es considera el millor hiperpla el que maximitza els marges respecte a les dos etiquetes. 
* Els parametres per a entrenar són **Kernel**, **Gamma**, **Regularization**, **Margin** 