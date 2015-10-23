import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';
import Hitter from './hitter.js';
import Pitcher from './pitcher.js';


// ---- FLIP ----
$('.card').flip({
  trigger: 'click',
  axis: 'y',
});
// ---- FLIP ----


// ---- QUESTIONS ----
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

console.log(q2.answer);
// ---- QUESTIONS ----



// ---- GAME CONSTRUCTORS ----
let hitter = new Hitter({
});


let pitcher = new Pitcher ({
});
// ---- GAME CONSTRUCTORS ----

// ---- NEW GAME ----
$('#startOverBtn').on('click', function (){
  pitcher.startOver();
  console.log(pitcher.pitches);
});

// ---- MAY BE A BETTER WAY ----
// window.onload = pitcher.startOver();
// ---- MAY BE A BETTER WAY ----

// ---- NEW GAME ----



// ---- STATUS ----
console.log(pitcher.pitches);
if (pitcher.pitches === 0){
  $('.outs').text(hitter.outsLeft);
  $('.score').text(hitter.score);
  $('#card-front').text(q1.title);
  $('#card-back').text(q1.question);
} else {
  alert('Pitches have been thrown');
};

// ---- STATUS ----



$('#submitBtn').on('click', function () {
  
  pitcher.throwPitch();
  console.log(pitcher.pitches);

});


// ---- THE GAME ----


// ---- THE FIRST PITCH ----

$('#submitBtn').on('click', function () {
  
  var answer = $('#answerText').val();

  if (pitcher.pitches === 1) {

    if (answer == q1.answer) {
      hitter.homeRun();
      $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
      $('.score').text(hitter.score);
    }
    else {
      hitter.getOut();
      $('.outs').text(hitter.outsLeft);
      $('.score').text(hitter.score);
      $('#answer-result').text('OUT!').parent().addClass('red')
    };  

  }

});

// ---- THE FIRST PITCH ----





// ---- CALL FOR ANOTHER ----

$('#nextQBtn').on('click', function () {
  if (pitcher.pitches === 1) {
    $('#card-front').text(q2.title);
    $('#card-back').text(q2.question);
    $('#answer-result').text('Results?!?!').parent().removeClass('green'); 
    $('#answer-result').text('Results?!?!').parent().removeClass('red'); 
  }
  else {
    alert('something went wrong');
  };
});
  
// ---- CALL FOR ANOTHER ---- 




// ---- THE SECOND PITCH ----

$('#submitBtn').on('click', function () {

  var answer = $('#answerText').val();

  if (pitcher.pitches === 2) {

    if (answer == q2.answer) {
      hitter.homeRun();
      $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
      $('.score').text(hitter.score);
    }
    else {
      hitter.getOut();
      $('.outs').text(hitter.outsLeft);
      $('.score').text(hitter.score);
      $('#answer-result').text('OUT!').parent().addClass('red')
    };  

  }

});



// ---- THE SECOND PITCH ----




