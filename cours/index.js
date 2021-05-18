// Définition

// XMLHttpRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.json", true);
req.open("get", "data.txt", true);
req.send();

// Fetch

// fetch("url", "options").then(
//   (response) => {
//     // response
//   }).catch((err) => console.log(err))
// );

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//---------------
// Projet Blagues
//---------------

// L'interface Headers vous permet de créer vos propres objets d'en-têtes via le constructeur Headers

const myHeaders = new Headers();

const init = {
  method: "GET", // POST, PUT, DELETE
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
fetch("data.json", init).then((res) => res.json());
// .then((data) => console.log(data));

//--------------------------
// npm i -g json-server
// json-server --w db.json

let init2 = {
  method: "POST", // POST, PUT, DELETE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", (e) => {
  // e.preventDefault();
  fetch("http://localhost:3000/posts", init2);
});

//-----------
// Asycnhrone
//-----------

setTimeout(() => {
  // console.log("Test !");
}, 2000);

// Promise
// fetch('monlien').then(() => ...)

// async/await
async function fetchData() {
  // await fetch('monlien')
  // await maFonction();
  // Execute ensuite...
}
const fetchData2 = async () => {
  // await fetch('monlien')
  // await maFonction();
  // Execute ensuite...
};

//---------
// User Api
//---------

//--------------------------------
// JSON
// JSON = format de données

// méthode .json() Elle retourne une promesse qui s'auto-résout en renvoyant le corps de la requête parsée au format JSON.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let settings = JSON.stringify(data);
    console.log(JSON.parse(settings));
  });

//---------
// Meal Api
//---------

//---------------------------------
// Web API

// Local storage

// Cookie + notif
