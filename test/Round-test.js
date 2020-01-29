const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to show/return a deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(1, 'What is Dan\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'capybara');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start at 0 turns', function() {
    const round = new Round()
    expect(round.turns).to.equal(0);
  });

  it ('should add 1 to the turn count on turn take', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it ('should start with 0 incorrectGuesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to evaluateGuess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    expect(round.takeTurn('sea otter')).to.equal('Correct!')
  });

  it('should move correct guess to correctGuesses array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    round.takeTurn('sea otter')
    expect(round.correctGuesses).to.deep.equal([1])
  });

  it('should move incorrect guess to incorrectGuesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    round.takeTurn('pug')
    expect(round.incorrectGuesses).to.deep.equal([1])
  });

  it ('should return Correct! when the guess is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    expect(round.takeTurn('sea otter')).to.equal('Correct!')
  });

  it ('should return Incorrect! when the guess is incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1])
    const round = new Round(deck);
    expect(round.takeTurn('pug')).to.equal('Incorrect!')
  });

  it('should go to the next card in the deck on turn', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      ["mutator method", "accessor method", "iteration method"], "iteration method")
    const deck = new Deck([card1, card2])
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.takeTurn('sea otter')).to.equal('Correct!')
    expect(round.returnCurrentCard()).to.equal(card2)
  })
});