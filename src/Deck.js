/* eslint-disable no-extra-semi */

class Deck {
  constructor(cards) {
    this.cards = cards || [];
  };
  countCards() {
    return this.cards.length;
  }
};

module.exports = Deck;