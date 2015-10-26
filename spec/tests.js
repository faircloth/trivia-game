(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Hitter = function Hitter(obj) {
  obj = obj || {};
  this.outsLeft = 3;
  this.newSetOfOuts = function () {
    return this.outsLeft = 3;
  };
  this.newScore = function () {
    return this.score = 0;
  };
  this.score = 0;
  this.getOut = function () {
    return this.outsLeft = this.outsLeft - 1;
  };
  this.homeRun = function () {
    return this.score = this.score + 1;
  };
};

exports["default"] = Hitter;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Pitcher = function Pitcher(obj) {
  obj = obj || {};
  this.pitches = 0;
  this.throwPitch = function () {
    return this.pitches = this.pitches + 1;
  };
  this.startOver = function () {
    return this.pitches = 0;
  };
};

exports["default"] = Pitcher;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Question = function Question(obj) {
  obj = obj || {};
  this.title = obj.title;
  this.question = obj.question;
  this.answer = obj.answer;
  this.otherAnswer1 = obj.otherAnswer1;
  this.otherAnswer2 = obj.otherAnswer2;
  this.otherAnswer3 = obj.otherAnswer3;
  this.otherAnswer4 = obj.otherAnswer4;
  this.otherAnswer5 = obj.otherAnswer5;
  this.otherAnswer6 = obj.otherAnswer6;
};

exports["default"] = Question;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
// ----- IMPORTS -----
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _hitterJs = require('./hitter.js');

var _hitterJs2 = _interopRequireDefault(_hitterJs);

var _pitcherJs = require('./pitcher.js');

var _pitcherJs2 = _interopRequireDefault(_pitcherJs);

var _questionJs = require('./question.js');

var _questionJs2 = _interopRequireDefault(_questionJs);

// ----- TESTS -----

// ----- QUESTION -----
(function () {
  'use strict';

  describe('The Question', function () {

    beforeEach(function () {
      window.q = new _questionJs2['default']();
    });

    describe('Ask a question', function () {

      it('q should be an instance of Question', function () {
        expect(q instanceof _questionJs2['default']).to.equal(true);
      });
    });
  });
})();

// ----- END OF QUESTION -----

// ----- HITTER -----
(function () {
  'use strict';

  describe('The Hitter', function () {

    beforeEach(function () {
      window.h = new _hitterJs2['default']();
    });

    describe('Make a hitter', function () {

      it('h should be an instance of Hitter', function () {
        expect(h instanceof _hitterJs2['default']).to.equal(true);
      });
    });

    describe('Hitter starts with 3 outs', function () {

      it('Hitter starts with 3 outs', function () {
        expect(h.outsLeft).to.equal(3);
      });
    });

    describe('Hitter loses an out one at a time', function () {

      it('Hitter loses an out one at a time', function () {
        expect(h.outsLeft).to.equal(3);
        expect(h.getOut()).to.equal(2);
        expect(h.getOut()).to.equal(1);
        expect(h.getOut()).to.equal(0);
      });
    });

    describe('Hitter loses an out for missing a question', function () {

      it('wrong answer reduces outs', function () {
        expect(h.outsLeft).to.equal(3);
        expect(h.getOut()).to.equal(2);
      });
    });

    describe('Hitter starts over with 3 outs once down to 0', function () {

      it('Hitter starts over with 3 outs once down to 0', function () {
        expect(h.outsLeft).to.equal(3);
        expect(h.getOut()).to.equal(2);
        expect(h.getOut()).to.equal(1);
        expect(h.getOut()).to.equal(0);
      });
    });
  });
})();

// ----- END OF HITTER -----

// ----- PITCHER -----
(function () {
  'use strict';

  describe('The Pitcher', function () {

    beforeEach(function () {
      window.p = new _pitcherJs2['default']();
    });

    describe('Make a pitcher', function () {

      it('p should be an instance of Hitter', function () {
        expect(p instanceof _pitcherJs2['default']).to.equal(true);
      });
    });
  });
})();

// ----- END OF PITCHER -----

},{"./hitter.js":1,"./pitcher.js":2,"./question.js":3}]},{},[4])


//# sourceMappingURL=tests.js.map
