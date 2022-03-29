# GROUPOMANIA-PROJET 7-LAMINE-KONATE
-----
## Compétence évaluées


* Authentifier un utilisateur et maintenir sa session
* Personnaliser le contenu envoyé à un client web
* Gérer un stockage de données à l'aide de SQL
* Implémenter un stockage de données sécurisé en utilisant SQL

## logiciel utilisé
NodeJs - VueJs - MySQL - Bootstrap 

## Installation 

Il vous faut dans votre ordinateur :

* GIT :(https://git-scm.com/downloads)
* Node.js : (https://nodejs.org/en/)
* MYSQL : (https://dev.mysql.com/downloads/installer/)

il vous faudra cloner le dossier :

https://github.com/LKONATE-c/GROUPOMANIA-P7-LAMINE-KONATE.git

## MYSQL

Dans le fichier groupomania/backend/.env ,mettre le mot de passe d'accès à votre base de donnée et votre nom d'utilisateur si besoin (root par défaut)

`DB_USER=root`

`DB_PASS=`

Ouvrir MySql command Line client puis effectuer ces deux lignes de commandes :

CREATE DATABASE groupomania;
USE groupomania;
Importer le fichier groupomania-data.sql (qui ce trouve a la racine du projet) :

source (chemin vers le fichier groupomania.sql);
Attention a indiquer le chemin avec des "/" et non des "\ ".

## BACK END
Ouvrir un terminal dans le dossier backend puis effectuer les lignes de commandes suivantes :

`npm install`

`node server`

## FRONT END 
Ouvrir un autre terminal dans le dossier frontend puis effectuer les lignes de commandes suivantes :

`npm install`

`npm run serve`

Ouvrir le navigateur a l'adresse: ( http://localhost:8080/)

## Fonctionnalités :

Le site permet de

* Partager des posts (avec ou sans photos)
* Commenter les posts
* Déconnecter et supprimer son compte 

Il y a un compte admin pour la modération (suppression des users, des posts, des commentaires) 

Les codes de l'admin:

kob@mail.com 

mdp:1234

