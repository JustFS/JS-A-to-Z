// Tableaux
// let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][2]);

// let array = ["Bordeaux", 24, true, [1,2], {nom: Denis}];

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "PHP"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 45,
    technos: ["HTML", "React", "Python"],
    admin: true,
  },
];

// se balader dans un objet
// Ajouter des éléments

//---------------------------
// Les structures de contrôle
//---------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("la valeur de W est de : " + w);
}

// Do while
let i = 0;

do {
  i++;
  // console.log(i);
} while (i < 5);

// For
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo}</li>`;
}

for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].admin);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//------------------
// Text Anim Project
//------------------

// Méthodes String
let string = "Javascript est un langage de programmation orienté objet";

// Types
// console.log(typeof String(23));
// console.log(typeof Number("42"));
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string.length);
// console.log(string[22]);
// console.log(string[string.length - 1]);

// console.log(string.indexOf("langage"));
// console.log(string.indexOf('test')); // Return -1

// let newString = string.slice(2);
// let newString = string.slice(5, 17);
// console.log(newString);

// console.log(string.split("i"));

// console.log(string.toLocaleLowerCase());
// console.log(string.toLocaleUpperCase());

// console.log(string.replace("Javascript", "PHP"));

//------------------------------------
// Numbers

let number = 42.1232;
let numberString = "42.12 est un chiffre";

// console.log(number.toFixed(1));
// console.log(parseInt(number));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);
// console.log(Math.round(4.4));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 4)); //Puissance
// console.log(Math.sqrt(16)); // Racine carré

// console.log(Math.floor(Math.random() * 100));

//------------------------------------
// Méthodes Array

let array1 = ["Javascript", "Php", "Python"];
let array2 = ["Ruby", "Solidity"];

// let newArray = array1.concat(array2);
// console.log(newArray);

// let newArray = [...array1, ...array2];
// console.log(newArray);

// console.log(array1.join("-"));

// console.log(array1.slice(1));
// console.log(array1.slice(1, 2));

// console.log(array1.indexOf("Python"));

// array2.forEach((techno) => console.log(techno));

// console.log(array1.every((techno) => techno === "Php"));
// console.log(array1.some((techno) => techno === "Php"));

// let x = array1.shift();
// console.log(x, array1);

// const restArray = array1.splice(1, 1, "C++");
// console.log(array1, restArray);

// console.log(array1.pop());

// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => b - a));

// document.body.innerHTML = array1
//   .map(
//     (techno) =>
//       `
//     <h1 id=${techno.toLocaleLowerCase()}>${techno}</h1>
//   `
//   )
//   .join("");

//-------------------------------------------
// Objects
// map, sort, filter (includes, match, contains)
// document.body.innerHTML = data
//   .filter((user) => user.admin === false)
//   .sort((a, b) => a.age - b.age)
//   .map(
//     (user) =>
//       `
//     <div class="user-card">
//       <h2>${user.pseudo}</h2>
//       <p>Age : ${user.age}</p>
//       <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//     </div>
//   `
//   )
//   .join("");

//------------------
// Générateur de mdp
//------------------

//----------------------------------------
// Date

let date = new Date();

// Timestamp
timestamp = Date.parse(date);

// IsoString
// console.log(date.toISOString());

const dateParser = (chaine) => {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};

// console.log(dateParser(date));
// console.log(dateParser(timestamp));

// Parler vidéo sur les dates

//-----------------------------------------
// Destructuring

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;
// console.log(destVar[0]);

let array3 = [70, 80, 90];
let [x, y, z] = array3;
// console.log(x);
// console.log(y);
// console.log(z);

let otherDate = new Date();
let isoDate = otherDate.toISOString();

const dateDestr = (dest) => {
  let newDate = dest.split("T")[0];
  [yy, mm, dd] = newDate.split("-");
  return [dd, mm, yy].join("/");
};

// console.log(dateDestr(isoDate));

//-----------------------------------------
// Dataset

// console.log(document.getElementById("javascript").dataset.lang);

const h3 = document.querySelectorAll("h3");

h3.forEach((techno) => {
  // console.log(techno.dataset.lang);
});

//-----------------------------------------
// REGEX

let mail = "from_scratch12@gmail.com";
// console.log(chaine.search("chain"));
// console.log(chaine.search(/chaine/));

// console.log(mail.replace(/from/, "scratch"));

// i enlève la case sensitive
// console.log(mail.match(/Scratch/i));
// console.log(mail.match(/[zu]/));
// console.log(mail.match(/[123]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Toutes les lettres
// console.log(mail.match(/[a-z]/));

// ^ n'est pas
// console.log(mail.match(/[^a-z_\d@.]/));

// \w tous les caractères || $ = fin de ligne
// console.log(mail.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

// Parler cheatsheet

let separator = 2984981651;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

// Projet Form Checker
