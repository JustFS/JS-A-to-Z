const main = document.querySelector("main");
const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];
let exerciceArray = [];

// Get stored exercices array
(() => {
  if (localStorage.exercices) {
    exerciceArray = JSON.parse(localStorage.exercices)
  } else {
    exerciceArray = basicArray;
  }
})();

class Exercice {
  constructor() {
    this.index = 0;
    this.minutes = exerciceArray[this.index].min;
    this.seconds = 0;
  }

  updateCountdown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    // if (this.index === exerciceArray.length - 1) {
    //   return page.finish();
    // }

    setTimeout(() => {
      if (this.minutes === 0 && this.seconds == "00") {
        this.index++;
        this.ring();
        this.minutes = exerciceArray[this.index].min;
        this.seconds = 0;
        this.updateCountdown();
      } else if (this.seconds === "00") {
        this.minutes--;
        this.seconds = 59;
        this.updateCountdown();
      } else {
        this.seconds--;
        this.updateCountdown();
      }
    }, 10);

    main.innerHTML = `
      <div class="exercice-container">
        <p>${this.minutes}:${this.seconds}</p>
        <img src="./img/${exerciceArray[this.index].pic}.png" />
        <div>${this.index + 1}/${exerciceArray.length}</div>
      </div>`;
  }

  ring() {
    const audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
  }
}

const utils = {

  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },

  handleEventMinutes: function () {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exercice) => {
          if (exercice.pic == e.target.id) {
            exercice.min = parseInt(e.target.value);
            this.store();
            console.log(exerciceArray);
          }
        });
      });
    });
  },

  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) =>
      arrow.addEventListener("click", (e) => {

        let position = 0;
        exerciceArray.map((exercice) => {

          if (exercice.pic == e.target.dataset.pic && position !== 0) {
            console.log(exerciceArray);
            [exerciceArray[position], exerciceArray[position - 1]] = [
              exerciceArray[position - 1],
              exerciceArray[position]
            ];
            this.store();
          } else {
            position++;
          }
          page.lobby();
        });

      })
    );
  },

  store: function () {
    localStorage.exercices = JSON.stringify(exerciceArray);
  },

  deleteItem: function (e) {
    let newArr = [];
    exerciceArray.map((exo) => {
      if (exo.pic != e.target.id) {
        newArr.push(exo)
      }
    })
    exerciceArray = newArr;
    this.store();
    page.lobby();
  },

  reboot: function () {
    exerciceArray = basicArray;
    page.lobby();
    this.store();
  }
};

const page = {
  lobby: function () {
    mainDisplay = [];
    exerciceArray.map((exercice) => {
      mainDisplay.push(
        `<li>
          <input type="number" id=${exercice.pic} min="1" max="10" value=${exercice.min}><span>min</span>
          <button class='deleteBtn' id=${exercice.pic}>x</button>
          <button class="arrow" data-pic=${exercice.pic}>&#10140;</button>
          <img src="./img/${exercice.pic}.png" />
        </li>`
      );
    });
    utils.pageContent(
      "Paramétrage <button id='reboot'>Réinitialiser</button>",
      `<ul>${mainDisplay.join("")}</ul>`,
      "<button id='start'>Commencer</button>"
    );
    utils.handleEventArrow();
    utils.handleEventMinutes();
    reboot.addEventListener('click', () => utils.reboot());
    start.addEventListener("click", () => this.routine());
    document.querySelectorAll('.deleteBtn').forEach((btn) => {
      btn.addEventListener('click', (e) => utils.deleteItem(e))
    })
  },

  routine: function () {
    const exercice = new Exercice();

    utils.pageContent(
      "Yoga Routine",
      exercice.updateCountdown(),
      null
    );
  },

  finish: function () {
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot'>Réinitialiser routine</button>"
    );
    start.addEventListener("click", () => this.routine());
    reboot.addEventListener("click", () => {
      utils.reboot();
      this.lobby()
    });
  },
}

page.lobby();
