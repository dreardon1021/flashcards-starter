const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take a guess', function() {
    const turn = new Turn('Guess this thing');
    expect(turn.guess).to.equal('Guess this thing');
  });

  it('should be able to take a question card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.guess).to.equal('sea otter');
    expect(turn.card).to.equal(card);
  });

  it('should be able to return a guess', function() {
    const turn = new Turn('sea otter');

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('sea otter')
  });

  it('should be able to return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a user guess if correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to evaluate a user guess if wrong', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback when correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    turn.giveFeedBack();
    expect(turn.giveFeedBack()).to.equal('Correct!');
  })

  it('should be able to give feedback when incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.giveFeedBack();
    expect(turn.giveFeedBack()).to.equal('Incorrect!')
  });
});