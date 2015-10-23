import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';

console.log('Hello, World');

// Keep in case I want to send the number of clicks somewhere
// $('#card').on('click', function(){
//   console.log('clicked!');
// });

$('.card').flip({
  trigger: 'click',
  axis: 'x'
});

// Question Objects

console.log(Question);

let q1 = new Question({
  title: 'Question 1',
  question: 'What is 1 + 1?',
  answer: 2
});

$('#card-front').text(q1.title);
$('#card-back').text(q1.question);

$('#submitBtn').on('click', function () {
  var answer = $('#answerText').val();
  console.log(answer);
  console.log(q1.answer);
  if (answer == q1.answer) {
    $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
  } else {
    $('#answer-result').text('OUT!').parent().addClass('red')
  };
});





console.log(q1.question);