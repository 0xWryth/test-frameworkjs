# Test de framework JS

Ce repo permet de tester pour un exemple simple (un compteur) les framework : 
- ReactJS
- VueJs

# Détails

Les différents projets sont configurés afin d'utiliser TypeScript. Il faut donc dissocier les aspérités liées à cette "surcouche", ou de synthaxe de Javascript afin de pouvoir au mieux comparer les langages.

# Vue

## Avant propos

La version de Vue utilisée dans ce projet est la version 3 - actuellement en preview - qui remplacera sous peu la version actuelle 2.

## Lancement

```
cd vue
npm install
npm run serve
```

# React

## Avant propos

React permet la création de composants sous la forme de "Classes" (héritées de ``React.Component``) ou de "Fonctions" (appelées ``Hooks``). Afin de démontrer au mieux les deux écritures possibles, les composants ont été écrits avec la notation sous forme de composants dans le dossier ``src/with-components`` et sous forme de fonctions dans le dossier ``src/with-hooks``. La notation revient au goût du programmeur et n'influe en rien sur le framework.
Afin de permettre de tester l'un où l'autre des méthodes d'écriture, il est possible de switcher entre les deux en modifiant la valeur ``booléenne`` de ``withHooks`` dans le fichier ``src/index.tsx``.

## Lancement 

```
cd reactjs
npm install
npm run start
```

# Svelte

## Avant propos

En 2020, là où les framework ayant déjà acquis une certaine popularité comme React ou Vue sont restées plus ou moins stables,d'autres se sont illustrés dans leur domaine :
- Angular prouve une année de plus une opinion catastrophique
- De jeunes framework comme Svelte arrivent à ce faire une bonne place dans le milieu

![](https://i.imgur.com/tRIqAyV.png)

Svelte a la particularité a contrario de React ou de Vue de ne pas se reposer sur de la Dom Virtuelle, ce qui augmenterait théoriquement les performances du framework par rapport à ces concurrents.

## Lancement 

```
cd svelte
npm install
npm run dev
```