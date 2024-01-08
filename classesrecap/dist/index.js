// "use strict";
// console.log("ITS WORKING!");

class Player {
  static description = " Player In Our Game";
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }
  UpdateScore(newScore) {
    this.#score = newScore;
  }

  // method:
  taunt() {
    console.log("BOOYAH!");
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("SECRET");
  }
}

const player1 = new Player("Kobie", "Kennie");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);

// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.score);
// player1.score = 336382;
// console.log(player1.score);
// const player2 = new Player("khloe", "Kylie");
// player2.taunt();
// console.log(player1.getScore());
// console.log(player1.updateScore(28));
// console.log(player1.getScore());
// console.log(player1.fullName);

// player1.score;
// player1.score = 834884;
// player1.fullName;

// console.log(player1.fullName);
// player1.fullName = "Jeevoi Penalosa";
// console.log(player1);

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore world!"]);
