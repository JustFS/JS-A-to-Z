// SELECTEURS
// Dans la console document.querySelector('body')
// Dans la console document.querySelector('body > h1')
// document.querySelector('p').style.background='green'
// document.querySelector('img').style.height='200px'

// CLICK :
// const body = document.body;
const questionContainer = document.querySelector(".click-event");

// questionContainer.style.border = "1px solid teal";
questionContainer.addEventListener("click", () => {
  // console.log("click !");
  // questionContainer.style.background = "salmon";
  // questionContainer.style.borderRadius = "50px";
  questionContainer.classList.toggle("question-clicked");
});

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// Injection de class Priorités CSS

//--------------------------------------------
// MOUSEMOVE
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

mousemove.addEventListener("mousedown", (e) => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "3px double teal";
});

mousemove.addEventListener("mouseup", (e) => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(3,3,3, 0.7";
});

// mouseleave aussi quand la souris s'arrete
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//--------------------------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  ring(e.key);
});

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

//--------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------

const inputName = document.querySelector(".change > input");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

// change avant
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
      `;
  } else {
    alert("Veuillez cocher les CGV");
  }
});

//--------------------------------------------

window.addEventListener("load", () => {
  console.log("document chargé !");
});

//--------------------------------------------

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//--------------------------------------------
// Calculatrice
//--------------------------------------------

// addEventListener Vs onclick
// 3ème argument stop propagation
// document.body.addEventListener(
//   "click",
//   ring("Enter"),
//   false // useCapture
// );

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
// document.addEventListener('focus', function (event) {
// 	console.log('something came into focus: ' + event.target);
// });

// Montrer onclick dans l'HTML
// onclick overwrite mais compatible très vieux navigateur
// document.body.onclick = function () {
//   console.log("Onclick Alert 1 !");
// };

// document.body.onclick = function (e) {
//   alert("Onclick Alert 2 !");
// };

// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test");
//   e.stopPropagation();
// });

// removeEventListener

//--------------------------------------------

// const after = document.querySelector(".mousemove::after");

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});

//--------------------------------------------

// Browser Object Model (BOM)
// Objet window contient innerWidth, innerHeight
// window.open("http://google.com", "Cours JS", "height=600,width=800");
// window.close() dans la console pour test

// Evenements adossés à l'objet Window : Alert, confirm, prompt

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Bravo vous avez gagné, entrez votre nom");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "160px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML +=
    "<div class='box'><h2>Nouvelle Boite !</h2></div> ";
}, 2000);

document.body.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName !== "BODY") {
      e.target.remove();
      clearInterval(interval);
    }
  },
  false
);

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");
// location.assign('http://lequipe.fr);

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// navigator
// identifie le navigateur web
// navigator.userAgent

// montrer la location dans le navigateur
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(window.history);
// window.history.back();
// history.go(-1)
