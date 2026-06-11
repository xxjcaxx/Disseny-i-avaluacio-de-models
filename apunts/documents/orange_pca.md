## PCA

Anem a utilitzar el `Dataset` de `Zoo` amb característiques booleanes dels animals. 

El tipus d'animal és el `target` i el nom és `meta`, ja que no aporta res a la classificació. 

Si li connectem `PCA` ens deixarà convertir les 16 dimensions yes/no en moltes menys. La questió és detectar quantes donen una informació significativa. 

![pca](./imgs_orange/pca.png)

Si reduïm a 2 components, que expliquen el 47% de la varianza, significa que s'està fent una compressió amb perduda d'informació. Per a fer prediccions és un mal resultat, però per a dibuixar un `Scatter Plot` i detectar agrupaments pot ser suficient. 

Eixe 47% en 2 variables és perquè no estan correlacionades. La falta de correlació és bona per a predicció, però no permet fer correctament `PCA`.

Si ho connectem a un `Scatter Plot` veurem unes regions clarament definides i alguns animals d'altres tipus en mig. Si veiem els mesclat tenen cert sentit:

![pca scatter](./imgs_orange/pcascatter.png)

* La serp marina està entre els peixos ja que posa ous, no té pels ni pates i viu a l'aigua. 
* Reptils i anfibis estan totalment mesclats.
* Insectes i aus estan pròxims. 

Després veiem que hi ha animals "molt" del seu tipus i estan a la seua regió i molt lluny d'altres:

* La cabra és molt mamífera
* La tollina és molt peix.
* El pollastre és molt au. 

El clúster no ha funcionat del tot bé, però li trobem el sentit.



### Explicació del PCA

https://towardsdatascience.com/pca-clearly-explained-how-when-why-to-use-it-and-feature-importance-a-guide-in-python-7c274582c37e/ 

Si les variables tenen una correlació, el PCA transforma les dades en menys variables no correlacionades. 

S'utilitza per reduir les variables abans de fer un model si hi ha multi-colinealitat i fer el model més lleuger. També pot ser utilitzar per llevar soroll i comprimir dades. O en aquest cas, per representar una classificació en 2 dimensions.

https://www.youtube.com/watch?v=1i4pAQHrSQY&list=PLmNPvQr9Tf-b_SuBdoRsuNhTmaHJ0eKab&index=13

Amb aquesta sequüència podem veure quines variables afecten més al PCA. Primer utilitzem `Continuize` per transformar a numèric (en realitat PCA ja ho fa implicitament). Després passem les dades a `PCA` per treue 2 variables que expliquen el 54%. A continuació es transposen i es treu l'absolut dels components per veure els que tenen més pés. Es veu que `milk` és decisiu seguit de `eggs` i `hair`. Té sentit perquè separa el mamífers dels que posen ous i després els que tenen pels dels que no. Són característiques més definitòries que, per exemple, si és un depredador (que estan en tots els tipus).


![explicacio pca](./imgs_orange/explicaciopca.png)



