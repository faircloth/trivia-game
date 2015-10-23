let Pitcher = function(obj) {
  obj = obj || {};
  this.pitches = 0;
  this.throwPitch = function (){
    return this.pitches = this.pitches + 1;
  }
  this.startOver = function (){
    return this.pitches = 0;
  }
};

export default Pitcher;