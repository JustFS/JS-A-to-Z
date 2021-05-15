const form = document.querySelector("form");
const progressBar = document.getElementById("progress-bar");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
let pseudo, email, password;

const errorDisplay = (tag, message, error) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (error) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "pseudo",
      "Le pseudo doit faire entre 3 et 20 caractères",
      true
    );
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("Le pseudo ne doit pas contenir de caractères spéciaux", true);
  } else {
    errorDisplay("pseudo", "");
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide", true);
  } else {
    errorDisplay("email", "");
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = "";

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    ) ||
    value.length < 8
  ) {
    errorDisplay(
      "password",
      "minimum de 8 caractères, une majuscule et un caractère spécial",
      true
    );
    progressBar.classList.add("progressRed");
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "");
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    password = value;
  }
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots passes ne correspondent pas", true);
  } else {
    errorDisplay("confirm", "");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    pseudo,
    email,
    password,
  };
  console.log(data);
  inputs.forEach((input) => {
    input.value = "";
  });
  progressBar.style.visibility = "hidden";
  alert("Inscription validée !");
});

// const pseudoChecker = (value) => {
//   const pseudoContainer = document.querySelector(".pseudo-container");
//   const errorDisplay = document.querySelector(".pseudo-container > span");

//   console.log(errorDisplay);
//   if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
//   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent =
//       "Le pseudo ne doit pas contenir de caractères spéciaux";
//   } else {
//     pseudoContainer.classList.remove("error");
//     errorDisplay.textContent = "";
//   }
// };
