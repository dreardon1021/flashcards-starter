const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round')

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to show/return a deck', function() {
    const round = new Round();
    round.returnCurrentCard();
  })

})