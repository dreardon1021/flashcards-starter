/* eslint-disable no-extra-semi */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = []
  };
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };
  printQuestion(round) {
    util.main(round);
    round.endRound();
  };
  start() {
    for (var i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    let deck = new Deck(this.cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  };

};

module.exports = Game;