const main = document.querySelector("main");

let exerciceArray = [
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

class Routine {
  constructor() {
    this.index = 0;
    this.minutes = exerciceArray[this.index].min;
    this.seconds = 0;
  }

  updateCountdown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    if (this.index === exerciceArray.length - 1) {
      return display.endExercice();
    }

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
        <img src="./img/${this.index}.png" />
        <div>${this.index + 1}/${exerciceArray.length}</div>
      </div>`;
  }

  ring() {
    const audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
  }
}

const display = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").textContent = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  exercices: function () {
    mainDisplay = [];
    exerciceArray.map((exercice) => {
      mainDisplay.push(
        `<li>
          <input type="number" id=${exercice.pic} min="1" max="10" value=${exercice.min}><span>min</span>
          <i>&#10005;</i>
          <img src="./img/${exercice.pic}.png" />
          <button class="arrowLeft" data-pic=${exercice.pic}>&#10140;</button>
          <button class="arrowRight" data-pic=${exercice.pic}>&#10140;</button>
        </li>`
      );
    });
    return mainDisplay.join("");
  },
  lobby: function () {
    this.pageContent(
      "Paramétrage",
      this.exercices(),
      "<button id='start'>Commencer</button>"
    );
    start.addEventListener("click", () => this.startExercice());
  },
  startExercice: function () {
    const routine = new Routine();

    this.pageContent(
      "Yoga Routine",
      routine.updateCountdown(),
      "<button id='end'>Arrêter l'exercice</button>"
    );
    end.addEventListener("click", () => {
      this.endExercice();
      routine.stopInterval();
    });
  },
  endExercice: function () {
    this.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='lobby'>Nouvelle routine</button>"
    );
    start.addEventListener("click", () => this.startExercice());
    lobby.addEventListener("click", () => this.lobby());
  },
};

display.lobby();

// Handle minutes change
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", (e) => {
    exerciceArray.map((exercice) => {
      if (exercice.pic == e.target.id) {
        exercice.min = parseInt(e.target.value);
        // console.log(exerciceArray);
      }
    });
  });
});

document.querySelectorAll(".arrowLeft").forEach((arrow) =>
  arrow.addEventListener("click", (e) => {
    let position = 0;
    exerciceArray.map((exercice) => {
      if (exercice.pic == e.target.dataset.pic && position !== 0) {
        [exerciceArray[position], exerciceArray[position - 1]] = [
          exerciceArray[position - 1],
          exerciceArray[position],
        ];

        console.log(exerciceArray);
        // display.lobby();
      } else {
        position++;
      }
    });
  })
);
