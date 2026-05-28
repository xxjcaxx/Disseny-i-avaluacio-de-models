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


---   
layout: defecte
---

## Aprenentatge per reforç

El model aprèn a prendre decisions mitjançant la interacció amb un entorn.
L'objectiu és que el model aprenga a maximitzar una recompensa acumulada al llarg del temps.

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

## Mètriques

### Variables continues

***Valor Esperat (promedio):***
$$E[X] = \int_{-\infty}^{\infty} x f_X(x)\,dx$$ 

La formula del valor esperat per a variables contínues és una integral que calcula el promig ponderat dels valors possibles de la variable, on els pesos són les probabilitats associades a cada valor.

### Variables discretes

***Valor Esperat (promedio):***
$$E[X] = \sum_{x} x P(X = x)$$

La formula del valor esperat per a variables discretes és una suma que calcula el promig ponderat dels valors possibles de la variable, on els pesos són les probabilitats associades a cada valor.