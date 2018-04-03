formulaire dynamique et crossref
================================

Introduction
------------
Demontrateur pour un formulaire qui utilise du javascript pour mettre à jour un formulaire à partir de données sur crossref a partir d'un doi.

Le formulaire est servi par django en version 1.11 qui va permettre de faire une requete ajax locale (c'est à dire sur une vue django qui va ensuite relayer ce doi sur le site de crossref) car je n'ai pas reussi à utilise ajax pour aller directement sur le site de crossref a parti du javascrip. Problème lié à la protection contre les csrf.

La page servie est preload\_form.html qui utilise le javascript dans preload\_form.js pour une fois le doi rentrer faire la requete et mettre jour le formulaire.



Installation
------------


git clone https://github.com/lwbe/crossref.git

python3.6 -m venv venv/crossref
source venv/crossref/bin/activate
pip install -r docs/requirements.txt 
pip install --upgrade pip
./manage.py runserver


puis il faut aller sur http://localhost:8000/start et rentrer un doi 
