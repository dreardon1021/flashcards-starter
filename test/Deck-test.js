const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round')
const Deck = require('../src/Deck')


  describe('Round', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be empty if no cards exist', function() {
    const deck = new Deck()
    expect(deck.cards).to.deep.equal([]);
  });

  it('should be able to take cards as a parameter', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(1, 'What is Dan\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'capybara');
    const deck = new Deck([card1, card2])
    expect(deck.cards).to.deep.equal([card1, card2])
  });

  it('should be able to return the amount of cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(1, 'What is Dan\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'capybara');
    const deck = new Deck([card1, card2]);
    deck.countCards()
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
});
