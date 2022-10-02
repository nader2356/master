form1

Dans cette application on a la partie frontend qui  est  realiser par le React.js , par contre backend fait par nocoDb

//------------------------------------Pour  React.js
voici les commande quand doit realiser pour avoir le frontOffice
//creation new react app
npx create-react-app my-app
//aller vers le dossier de l application
cd my-app
//lancement de l application 
npm start


a propos de fontOffice on a utilisé le tailwind css pour personnalisé notre appliaction avec le style.
Pour configurer le tailwind dans notre application il ya des etapes qu ont doit suivre qui sont :


//Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
//initialisation de tailwind css
npx tailwindcss init -p

Configuration de template  a partir de  fichier tailwind.cinfig.css


//creation de fichier css 
mkdir index.css

//ajouter les directives dans le fichier

@tailwind base;
@tailwind components;
@tailwind utilities;

//------------------------------Pour NocoDb

on doit premierement installer le nocodb dans le localhost avec les commandes suivantes:

//creation application noccodb
npx create-nocodb-app
//installation de l application
npm install
//lancement de l application
npm start


apres avoir realiser les commandes suivantes une interface d authentification de nocodb  s apparaisement dans le navigateur
on passe maintenant a la realisation des tableau 




