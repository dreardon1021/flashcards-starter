const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be able to keep track of current round', function() {
    const game = new Game();
    game.start();
  });
});