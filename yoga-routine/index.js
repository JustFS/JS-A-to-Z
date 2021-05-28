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
    console.log(this.minutes);
    console.log(this.seconds);
    console.log(this.index);

    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    if (this.seconds == "00") {
      this.minutes--;
      this.seconds = 59;
    } else if (this.minutes === 0 && this.seconds == "00") {
      this.index++;
      this.ring();
    } else {
      this.seconds--;
    }

    if (this.index === exerciceArray.length) {
      clearInterval(this.interval);
    }

    return `<div>${this.minutes}:${this.seconds}</div>
    <img src="./img/${this.index}.png" />`;
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
    document.querySelector("main").innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  exercices: function () {
    mainDisplay = [];
    exerciceArray.map((exercice) => {
      mainDisplay.push(
        `<li>
          <input type="number" min="1" max="10" value="1"><span>min</span>
          <i>&#10005;</i>
          <img src="./img/${exercice.pic}.png" />
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
