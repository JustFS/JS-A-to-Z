// LES CANVAS
//-----------

// SI aucune taille => 300x150
// Context de rendu

// function draw() {

//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext("2d");

//   ctx.fillStyle = 'rgb(200, 0, 0)';
//   ctx.fillRect(10, 10, 50, 50);

//   ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//   ctx.fillRect(30, 30, 50, 50);

//   ctx.fillStyle = 'rgba(0, 100, 200, 0.5)';
//   ctx.fillRect(100, 25, 100, 100);
//   ctx.clearRect(100, 25, 60, 60);
//   ctx.strokeRect(125, 75, 50, 50);

//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// }

// window.addEventListener('load', draw)

//------------
// Drag & drop
//------------

//-------------
// Notification
//-------------

//-------------
// Le try/catch
//-------------

// montrer schéma

// try {
//   // Test ce block
//   mafonction();
// } catch (err) {
//   // console.log(err.name + " : " + err.message);
// }

// function isValidJSON(txt) {
//   try {
//     JSON.parse(txt);
//     return true;
//   } catch {
//     return false;
//   }
// }

// // console.log(isValidJSON());

// // Finally try/Catch/Finally
// try {
//   // Test ce block
//   mafonction();
// } catch (err) {
//   // console.log(err.name + " : " + err.message);
// } finally {
//   // Code à executer quoi qu'il arrive
// }

// // Throw
// function isNumber(num) {
//   if (isNaN(num)) {
//     throw "Not a number !";
//   }
// }
// try {
//   isNumber("Z");
// } catch (err) {
//   // console.log(err);
// }

//------------------
// PLUS GROS PROJETS
//------------------

//------------
// Strict mode
//------------

// Les langages informatiques sont des langages qui évoluent vite et de nouvelles fonctionnalités sont régulièrement ajoutées tandis que d’autres parties du langage, plus anciennes, peuvent être modifiées ou déclarées obsolètes.
// Pendant longtemps, les créateurs du JavaScript n’ont fait qu’ajouter de nouvelles fonctionnalités sans jamais toucher les anciennes. L’avantage principal de cela a été que les développeurs pouvaient utiliser l’ensemble du langage sans se soucier de problème de comptabilité.

// Cependant, la contrepartie était qu’on avait un langage moins flexible et avec d’anciennes fonctionnalités qui ne faisaient plus beaucoup de sens dans un contexte actuel. Ainsi, à la fin des années 2000, certaines fonctionnalités du langage ont commencé à être modifiées, notamment en termes de la gestion des erreurs.

// Afin que les sites possédant d’anciens codes JavaScript (des codes JavaScript implémentant les fonctionnalités modifiées avant modification) restent fonctionnels, la plupart des modifications apportées au langage ont été désactivées par défaut. Pour activer ces modifications et utiliser ces nouvelles fonctionnalités du JavaScript, nous allons devoir utiliser la directive use strict.

// Lève + d'erreur que le JS classique
// Exemple déclarer une variable sans let
// permet une meilleure implémantation du code

"use strict";

// voiture = 2;
// console.log(voiture);

//----------------------------
// Les modules (import/export)
//----------------------------

// Les modules sont interprétées en strict mode de base

//----------
// LES TESTS
//----------

//-------------
// ESCMA SCRIPT
//-------------

// ECMAScript est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International dans le cadre de la spécification ECMA-262. Il s'agit donc d'un standard, dont les spécifications sont mises en œuvre dans différents langages de script, comme JavaScript ou ActionScript.

// Syntaxe et sémantique du langage

// Yahoo, Microsoft, Google se réunissaient
// Regex en 1999 (ECMASCRIPT 3)
// EcmaScript 2009 Strict Mode
// EcmaScript 2015 ajout des classes, import (modules), fonction flêchées, promesses
// EcmaScript 2016 async await (tué les xmlhttprequest)
// EcmaScript 2018 spread operator
// EcmaScript 2019 sort() enfin stable

// montrer W3school methode, date de ecma
// Compatibilité vieux navigateur
