let Hitter = function(obj) {
  obj = obj || {};
  this.outsLeft = 3;
  this.score = 0;
  this.getOut = function() {
    return this.outsLeft = this.outsLeft - 1;
  }
  this.homeRun = function() {
    return this.score = this.score + 1;
  }
};

export default Hitter;