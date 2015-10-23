import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';
import Hitter from './hitter.js';
import Pitcher from './pitcher.js';

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


// Questions
let q1 = new Question({
  title: 'Question 1',
  question: 'What is 1 + 1?',
  answer: 2
});

let q2 = new Question({
  title: 'Question 2',
  question: 'What is 1 + 2?',
  answer: 3
});

let hitter = new Hitter({
});

$('.outs').text(hitter.outsLeft);
$('.score').text(hitter.score);

// Starting point question
$('#card-front').text(q1.title);
$('#card-back').text(q1.question);

// Submitting an answer
$('#submitBtn').on('click', function () {
  var answer = $('#answerText').val();
  console.log(answer);
  console.log(q1.answer);
  if (answer == q1.answer) {
    $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
    $('.outs').text(hitter.outsLeft);
    hitter.homeRun();
    $('.score').text(hitter.score);
  } else {
    hitter.getOut();
    $('.outs').text(hitter.outsLeft);
    $('.score').text(hitter.score);
    $('#answer-result').text('OUT!').parent().addClass('red')
  };

  $('#nextQBtn').on('click', function () {
    $('#card-front').text(q2.title);
    $('#card-back').text(q2.question);
    $('#answer-result').text('Results?!?!').parent().removeClass('green');
  });

  $('#submitBtn').on('click', function () {
    var answer = $('#answerText').val();
    console.log(answer);
    console.log(q2.answer);
    if (answer == q2.answer) {
      $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
    } else {
      $('#answer-result').text('OUT!').parent().addClass('red')
    };
  });

});








console.log(q1.question);