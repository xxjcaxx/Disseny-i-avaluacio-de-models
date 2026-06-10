---
theme: dracula
title: Tipus d'algorismes de machine learning
info: |
  Introducció als tipus d'algorismes de machine learning.
class: text-center
transition: slide-left
routerMode: hash
layout: defecte
drawings:
  persist: false
---

# Tipus d'algorismes de machine learning

---
layout: defecte
---

## Aprenentatge supervisat

El model és entrenat amb un conjunt de dades etiquetades.

L'objectiu és que el model aprenga a predir les etiquetes associades a les dades d'entrada.

<AlgorithmPlayground category="supervised" />

---
layout: defecte
---

## Aprenentatge no supervisat

El model és entrenat amb un conjunt de dades no etiquetades.

L'objectiu és que el model trobe patrons o estructures ocultes en les dades d'entrada.

<AlgorithmPlayground category="unsupervised" />

---   
layout: defecte
---

## Aprenentatge semi-supervisat

Conjunt de dades que conté tant dades etiquetades com no etiquetades.


![Aprenentatge semi-supervisat](./images/semisupervised.webp)

---   
layout: defecte
---

## Aprenentatge per reforç

El model aprèn a prendre decisions mitjançant la interacció amb un entorn.
L'objectiu és que el model aprenga a maximitzar una recompensa acumulada al llarg del temps.

<img src="./images/19-Reinforcement-Learning-RL.webp" alt="Aprenentatge per reforç" class="max-w-full max-h-[45vh] w-auto mx-auto object-contain" />

---
layout: defecte
---

## Conceptes

* **Paràmetre**: Variable que defineix un model quan ha aprés a partir de les dades d'entrenament.
* **Hiperparàmetre**: Variable que defineix el procés d'entrenament del model, però no forma part del model en si mateix.
* **Overfitting**: Quan un model s'ajusta massa bé als dades d'entrenament, però no generalitza bé a dades noves.
* **Underfitting**: Quan un model no s'ajusta prou bé als dades d'entrenament.
* **Aprenentatge basat en models**: Enfocament d'aprenentatge automàtic on es construeix un model matemàtic que representa les relacions entre les variables d'entrada i les variables de sortida.
* **Aprenentatge basat en instàncies**: Enfocament d'aprenentatge automàtic on es basen les prediccions en exemples específics del conjunt de dades d'entrenament, en lloc de construir un model generalitzat.
* **Aprenentatge profund**: Enfocament d'aprenentatge automàtic que utilitza xarxes neuronals artificials amb múltiples capes per aprendre representacions jeràrquiques de les dades.
* **Aprenentatge Superficial**: Enfocament d'aprenentatge automàtic que utilitza models simples i poc profunds per aprendre a partir de les dades.
* **Classificació**: Assignar una etiqueta a una instància d'acord amb les seves característiques.
* **Regressió**: Predir un valor numèric continu a partir de les característiques d'una instància.
* **Clustering**: Agrupar instàncies similars en grups o clústers, sense utilitzar etiquetes predefinides.


---
layout: defecte
---

# Procés complet del machine learning


---
layout: defecte
---

## Tractament de dades

* **One hot encoding**: Transformar variables categòriques en variables binàries.
* **Normalització**: Escalar les dades per a que tinguin un rang específic, com per exemple [0, 1].
* **Estandardització**:  Escalar les dades per a que tinguin una mitjana de 0 i una desviació estàndard de 1.
* **Imputació de dades**: Omplir les dades faltants amb valors estimats, com per exemple la mitjana o la mediana de la columna.
* **Selecció de característiques**: Seleccionar les característiques més rellevants per al model, com per exemple utilitzant tècniques de reducció de dimensionalitat o d'importància de característiques.
* **Bucketing**: Agrupar valors continus en intervals o categories, com per exemple agrupar edats en rangs d'edat.


---
layout: defecte
---

## Selecció i entrenament del model

### Preguntes a fer-se:
* **Explicabilitat**: El model ha de ser fàcil d'entendre i interpretar?
* **In memory**: El model ha de ser capaç de funcionar en memòria, o pot utilitzar recursos externs com ara disc o núvol?
* **Numero de característiques**: El model ha de ser capaç de manejar un gran nombre de característiques, o només un nombre limitat?
* **No linearitat**: El model ha de ser capaç de manejar relacions no lineals entre les característiques i la variable de sortida?
* **Velocitat d'entrenament**: El model ha de ser ràpid d'entrenar, o pot permetre un temps d'entrenament més llarg a canvi de millor rendiment?
* **Velocitat de predicció**: El model ha de ser ràpid de predir, o pot permetre un temps de predicció més llarg a canvi de millor rendiment?


---
layout: defecte
---

## Conjunt de dades d'entrenament, validació i test


<img src="./images/datasplit.png" alt="Conjunt de dades d'entrenament, validació i test" class="max-w-full max-h-[45vh] w-auto mx-auto object-contain" />


---
layout: defecte
---



<div class="grid grid-cols-2 gap-6 text-left items-start">

<div>

### Underfitting i overfitting
<img src="./images/overfitting_underfitting.png" alt="Underfitting i overfitting" class="max-w-full max-h-[30vh] w-auto mx-auto object-contain" />

### Regularització
- L1: Penalitza la suma dels valors absoluts dels paràmetres del model, promovent la sparsitat.
- L2: Penalitza la suma dels quadrats dels paràmetres del model, promovent la reducció de la magnitud dels paràmetres.
</div>

<div>

### Ajust de hiperparàmetres
- **Grid search**: Provar totes les combinacions possibles d'hiperparàmetres dins d'un rang especificat.
- **Cross-validation**: Dividir el conjunt de dades en k subconjunts, entrenar el model k vegades, cada vegada utilitzant un subconjunt diferent com a conjunt de validació i els altres k-1 subconjunts com a conjunt d'entrenament. El rendiment del model es calcula com la mitjana del rendiment obtingut en les k iteracions.

<img src="./images/cross-validation.png" alt="Cross" class="max-w-full max-h-[20vh] w-auto mx-auto object-contain" />
</div>

</div>

---
layout: defecte
---

## Predició i avaluació del model

### Mètriques d'avaluació
- **Exactitud (accuracy)**: Proporció de prediccions correctes sobre el total de prediccions.
- **Precisió (precision)**: Proporció de veritats positives sobre el total de prediccions positives.
- **Recall (recall)**: Proporció de veritats positives sobre el total de casos positius reals.
- **F1-score**: Mitjana harmònica de la precisió i el recall, que proporciona una única mètrica que equilibra ambdues.  
- **Matriz de confusión**: Taula que mostra les prediccions correctes i incorrectes del model, dividides en veritats positives, falsos positius, veritats negatives i falsos negatius.
- **ROC-AUC**: Mètrica que mesura la capacitat del model per distingir entre classes positives i negatives, on ROC és la corba de característiques operatives del receptor i AUC és l'àrea sota aquesta corba.
- **Error quadràtic mitjà (MSE)**: Mètrica que mesura la mitjana dels quadrats de les diferències entre les prediccions del model i els valors reals, utilitzada principalment en problemes de regressió.
- **R² (coeficient de determinació)**: Mètrica que mesura la proporció de la variància dels valors reals que és explicada per les prediccions del model, utilitzada principalment en problemes de regressió.
- **L2 loss**: Mètrica que mesura la suma dels quadrats de les diferències entre les prediccions del model i els valors reals, utilitzada principalment en problemes de regressió.


---
layout: defecte
---

# Conceptes matemàtics per al machine learning


---   
layout: defecte
---

Una variable aleatòria és una funció que associa un valor numèric a cada resultat possible d'un experiment aleatori.

<div class="grid grid-cols-2 gap-6 text-left">

<div>

### Variables aleatòries discretes

```bash
cat /dev/random | tr -dc "0-9" | head -c 4
```

```python
import random
random.randint(0, 9999)
```

![Variable aleatòria discreta](./images/dice20.jpeg) 



</div>

<div>

### Variables aleatòries contínues

```python
import random
random.uniform(0, 1)
```

<img src="./images/discrete_continuous.png" alt="Variable aleatòria contínua" class="w-full max-h-30 object-contain" />

<div class="text-[0.70rem] leading-tight mt-1">

**Funcions de probabilitat:**

- Funció de probabilitat (variables discretes): $P(X = x) = p(x)$; per exemple, $P(\text{cara}) = 0.5$.
- Funció de densitat de probabilitat (variables contínues): $f_X(x)$, amb $P(X = x) = 0$ per a qualsevol valor concret $x$.

$$
P(a \le X \le b) = \int_a^b f_X(x)\,dx
$$

</div>
</div>

</div>

---
layout: defecte
---

## Valor esperat (promedio)

### Variables continues

$$E[X] = \int_{-\infty}^{\infty} x f_X(x)\,dx$$ 

La formula del valor esperat per a variables contínues és una integral que calcula el promig ponderat dels valors possibles de la variable, on els pesos són les probabilitats associades a cada valor.

### Variables discretes

$$E[X] = \sum_{x} x P(X = x)$$

La formula del valor esperat per a variables discretes és una suma que calcula el promig ponderat dels valors possibles de la variable, on els pesos són les probabilitats associades a cada valor.

https://es.wikipedia.org/wiki/Esperanza_(matem%C3%A1tica)


---
layout: defecte
---

## Desviació estàndard (desviació típica)

https://es.wikipedia.org/wiki/Desviaci%C3%B3n_t%C3%ADpica

## Varianza

https://es.wikipedia.org/wiki/Varianza