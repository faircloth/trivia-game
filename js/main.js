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
  trigger: 'hover',
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



console.log(q1.question);