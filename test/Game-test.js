const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  it('should be able to keep track of current round create a card and create a deck', function() {
    const game = new Game();
    game.start();

    expect(game.currentRound.turns).to.equal(0)
    expect(game.cards[0].correctAnswer).to.equal('object')
    expect(game.cards.length).to.equal(30)
  });
});