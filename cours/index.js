// En JS, tout est un objet, les fonctions, les tableaux, les types nulls, les balises du DOM. On travaille depuis le début avec des objets

// Les bases
const obj = {
  // index : value
  pseudo: "From Scratch",
  ville: "Bordeaux",
};
obj.age = 24;
// console.log(objet);
// console.log(objet.ville);

//----------------
// Méthodes objets
//----------------

// Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

// Créer un tableau de chaque objet+valeur
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "76kg",
};

// Fusionner tableau
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empeche les modifications
const newObj = Object.freeze(obj);
newObj.pseudo = "Test";
newObj.adresse = "24 avenue du Code";
// console.log(obj);

// 3 FACONS DE CONSTRUIRE UN OBJET
// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
}
// This keyword, permet de stocker une valeur
// Créer nouvelle instance avec New
const user1 = new User("From Scratch", "Bordeaux");

// console.log(user1.pseudo);

//----------------
// PARENTHESE THIS
//----------------
// This fait référence à l'objet, il change selon qui l'appelle. Fait référence à l'instance de la classe

//-------------------------
// Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

// const user3 = User3("From", "Nice");
// console.log(user3);

// Class syntax (depuis ES6)
// https://everyday.codes/javascript/please-stop-using-classes-in-javascript/
class User2 {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
}
const user2 = new User2("FS", "Lyon");
// console.log(user2);

//-------------
// Les méthodes
//-------------

function User4(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.sayMyName = function () {
    console.log("Bonjour je suis " + pseudo);
  };
}
User4.prototype.sayGoodbye = function () {
  console.log("Adios");
};
// sayGoodbye est dans le prototype
Object.assign(User4.prototype, {
  method1() {},
  method2() {},
  method3() {},
});
const person = new User4("Patrice", "Nantes");
// console.log(person);
// person.sayMyName();

//---------------------
// Parenthèse Prototype

const array = ["one", "two", "three"];
// console.log(array);
const array2 = new Array("one", "two", "three");
//----------------------------------------------

class User5 {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.sayMyName = function () {
      console.log("Bonjour je suis " + pseudo);
    };
  }

  // Ecrire la méthode dans le prototype
  sayMyName2() {
    console.log("Bonjour je suis " + this.pseudo);
  }
}

const utilisateur = new User5("Denis", "Lille");
// console.log(utilisateur);
// utilisateur.sayMyName();

// sayMyName2 est dans le prototype (voir consolelog)
// utilisateur.sayMyName2();

// Methode dans l'objet VS dans le proto
// Dans le proto 30% plus rapide que dans l'objets (peu important avec techno moderne)

//-----------
// L'héritage
//-----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  // constructor(name, age) {
  //   super(name, age)
  // }
  // Super appelle la classe parente

  run() {
    console.log(this.name + " court");
  }
}

const rex = new Dog("Rex", 9);
// console.log(rex);
// rex.saySomething("Wouaf !");
// rex.run();
