class Round {
  constructor(deck) {
    this.deck = deck || []
  };
  returnCurrentCard() {
    return this.deck
  };
};


module.exports = Round;