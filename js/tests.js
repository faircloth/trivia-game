// ----- IMPORTS -----
import Hitter from './hitter.js';
import Pitcher from './pitcher.js';
import Question from './question.js';

// ----- TESTS -----


// ----- QUESTION -----
(function() {
  'use strict';

  describe('The Question', function() {

    beforeEach (function () {
      window.q = new Question();
    });

    describe('Ask a question', function() {
      
      it('q should be an instance of Question', function() {
        expect(q instanceof Question).to.equal(true);
      });

    });

  });

}());

// ----- END OF QUESTION -----


// ----- HITTER -----
(function() {
  'use strict';


  describe('The Hitter', function() {

    beforeEach (function () {
      window.h = new Hitter();
    });

    describe('Make a hitter', function() {
      
      it('h should be an instance of Hitter', function() {
        expect(h instanceof Hitter).to.equal(true);
      });

    });

    describe('Hitter starts with 3 outs', function() {
      
      it('Hitter starts with 3 outs', function() {
        expect(h.outsLeft).to.equal(3);
      });

    });

    describe('Hitter loses an out one at a time', function() {
      
      it('Hitter loses an out one at a time', function() {
        expect(h.outsLeft).to.equal(3);
        expect(h.getOut()).to.equal(2);
        expect(h.getOut()).to.equal(1);
        expect(h.getOut()).to.equal(0);
      });

    });

    describe('Hitter loses an out for missing a question', function() {
      
      it('wrong answer reduces outs', function() {
        expect(h.outsLeft).to.equal(3);
        expect(h.wrongAnswer()).to.equal(2);
      });

    });

    describe('Hitter starts over with 3 outs once down to 0', function() {
      
      it('Hitter starts over with 3 outs once down to 0', function() {
        expect(h.outsLeft).to.equal(3);
        expect(h.getOut()).to.equal(2);
        expect(h.getOut()).to.equal(1);
        expect(h.getOut()).to.equal(0);
        expect(h.getOut()).to.equal(3);
      });

    });

  });

}());

// ----- END OF HITTER -----




// ----- PITCHER -----
(function() {
  'use strict';

  describe('The Pitcher', function() {

    beforeEach (function () {
      window.p = new Pitcher();
    });

    describe('Make a pitcher', function() {
      
      it('p should be an instance of Hitter', function() {
        expect(p instanceof Pitcher).to.equal(true);
      });

    });

  });

}());

// ----- END OF PITCHER -----