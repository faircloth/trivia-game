let Question = function(obj) {
  obj = obj || {};
  this.title = obj.title;
  this.question = obj.question;
  this.answer = obj.answer;
};

export default Question;