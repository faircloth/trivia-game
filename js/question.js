let Question = function(obj) {
  obj = obj || {};
  this.title = obj.title;
  this.question = obj.question;
  this.answer = obj.answer;
  this.otherAnswer1 = obj.otherAnswer1;
  this.otherAnswer2 = obj.otherAnswer2;
  this.otherAnswer3 = obj.otherAnswer3;
  this.otherAnswer4 = obj.otherAnswer4;
};

export default Question;