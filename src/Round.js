/* eslint-disable no-extra-semi */
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck || []
    this.turns = 0
    this.incorrectGuesses = []
    this.correctGuesses = []
  };
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };
  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns])
    if (turn.evaluateGuess()) {
      this.correctGuesses.push(turn.card.id);
    } else {
      this.incorrectGuesses.push(turn.card.id);
    }
    const feedBack = turn.giveFeedBack();
    this.turns ++;
    return feedBack;
  }
  calculatePercentCorrect() {
    return (this.correctGuesses.length / this.deck.cards.length) * 100;
  };
  endRound() {
    if (this.deck.cards.length === this.turns) {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    };
  };
};

module.exports = Round;