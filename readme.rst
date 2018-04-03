formulaire dynamique et crossref
================================

Introduction
------------
Demontrateur pour un formulaire qui utilise du javascript pour mettre à jour un formulaire à partir de données sur crossref a partir d'un doi.

Le formulaire est servi par django en version 1.11 qui va permettre de faire une requete ajax locale (c'est à dire sur une vue django qui va ensuite relayer ce doi sur le site de crossref) car je n'ai pas reussi à utilise ajax pour aller directement sur le site de crossref a parti du javascrip. Problème lié à la protection contre les csrf.

La page servie est preload\_form.html qui utilise le javascript dans preload\_form.js pour une fois le doi rentrer faire la requete et mettre jour le formulaire.

Pour faire la requete sur le site de crossref j'utilise le module python habanero et pour plus d'info sur l'API de crossref voir le site https://github.con/CrossRef/rest-api-doc . Le code pour la récupération des données se trouve dans la fonction get_crossref de views.py. Je ne fais que prendre quelque champs.

Installation
------------

On récupère l'archive par::

    git clone https://github.com/lwbe/crossref.git

Ensuite on crée un environement virtuel et on installe les modules python (django habanero (qui permet de faire des requetes rest sur crossref en python )) par::

     python3.6 -m venv venv/crossref
     source venv/crossref/bin/activate
     pip install -r docs/requirements.txt 
     pip install --upgrade pip
     ./manage.py runserver


puis il faut aller sur::

     http://localhost:8000/start
  
et rentrer un DOI 
