let Hitter = function(obj) {
  obj = obj || {};
  this.outsLeft = 3;
  this.getOut = function() {
    return this.outsLeft = this.outsLeft - 1;
  }
};

export default Hitter;