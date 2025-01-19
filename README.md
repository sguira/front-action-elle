<!-- # AppFrontActionelle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->


## 1. TITRE DU PROJET 
Front End Action " Elle

## 2. Descrciption
Ce projet est un front end d'une application web qui permet aux utilisateurs (Amazones) de faire des simulations pour des dévis d'assurance et de faire des souscriptions à des produit d'assurances pour des clients

## 3. Technologies utilisées
Le projet a été réalisé avec la technologie Angular, nous avons utiliser cette technologie pour la sécurité qu'elle offre également pour sa modularité et sa bonne structuration

### Prérequis
- Node.js (v22.13.0) Ou une version plus récente
- Angular Cli (16.2.16)

### Installation
Installer node js dépuis votre navigateur puis utiliser le gestionnaire de package npm pour installer Angular 
- RUN `npm install @angular/cli`

- Clônez le projet dépuis le répo git <br>
- RUN `git clone https://github.com/sguira/front-action-elle.git`
- RUN `cd front-action-elle`

## 4. Dépendance
- RUN `npm install` Pour installer toutes les dépendances nécessaires pour assurer le bon fonctionnement de l'application
- RUN `ng serve` Pour lancer l'application
- RUN `ng build` Pour construire l'application
- RUN `ng test` Pour lancer les tests unitaires
- RUN `ng e2e` Pour lancer les tests end-to-end

## 5. Structuration
- Le projet est structuré en plusieurs modules 
- Le module principal est le module `app` qui contient tous les composants de l'application 
- `app/service` Contient les service http, ce module contient les élements nécessaires pour envoyer des réquêtes vers l'application back-end disponible dans le répo <a href="https://github.com/sguira/Backend-ActionElle.git" >Application Backend</a>
- `app/interface` Contient les modèles de données utilisés par l'application
- `app/component` Contient les interfaces graphiques de l'application 
- `assets` Contient les médias statiques comme Image utilisé dans le projet <br>

Cette application est composée de deux partie pour partie pour l'administrateur et une autre partie pour les amazones
Lors de la connexion vous êtes rédiriger vers l'application selon votre rôle.


## REMARQUE
Pour assurer le bon fonctionnement du projet il est nécessaire de changer le lien du serveur de traitement des données lorsqu'il est déployer sur un serveur distant car nous l'avons utiliser en localhost dans le cadre de notre test
`src/environnement/environnement.ts` changer la valeur de la variable <u>apiUrl</u>


# EXECUTION DE L'APPLICATION
Pour executer l'application il faut au préalable lancer le server rest 
- Veuillez clôner cette application et le backend dans un répertoire parent commun 
- Copier le télécharger le fichier docker-compose dans la racine des deux répertoire 
- RUN `docker-compose up --build` Pour lancer les deux application

- Accéder à l'application en `localhost:4200`


