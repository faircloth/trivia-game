import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';

console.log('Hello, World');

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
  question: 'What is 1 + 1?',
  answer: 2
});


console.log(q1.question);