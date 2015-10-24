import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';
import Hitter from './hitter.js';
import Pitcher from './pitcher.js';


// ---- FLIP ----
$('.card').flip({
  trigger: 'hover',
  axis: 'y',
});
// ---- FLIP ----


// ---- QUESTIONS ----
let q1 = new Question({
  title: 'Question 1',
  question: 'How many innings are in a MLB game?',
  answer: 9
});

let q2 = new Question({
  title: 'Question 2',
  question: 'What is 1 + 2?',
  answer: 3
});

let q3 = new Question({
  title: 'Question 3',
  question: 'What is 5 + 5?',
  answer: 10
});

// ---- QUESTIONS ----



// ---- GAME CONSTRUCTORS ----
let hitter = new Hitter({
});

let pitcher = new Pitcher ({
});
// ---- GAME CONSTRUCTORS ----


// ---- KEEPING SCORE ----

let questionNumber = 1;
let countQuestions = function () {
  return questionNumber + 1;
}



console.log('Questions asked so far = ' + questionNumber );
console.log('The player has hit submit ' + pitcher.pitches + ' times.');



// ---- KEEPING SCORE ----



// ---- START OVER ----

$('#startOverBtn').on('click', function (){
  pitcher.startOver();
  hitter.newSetOfOuts();
  hitter.newScore();
  console.log(pitcher.pitches);
  if (pitcher.pitches === 0){
    $('.outs').text(3);
    $('.score').text(0);
    $('#card-front').text(q1.title);
    $('#card-back').text(q1.question);
    $('#answer-result').text('Results?!?!').parent().removeClass('green'); 
    $('#answer-result').text('Results?!?!').parent().removeClass('red'); 
    $('#endOfGame').addClass('hiddenEOG');
    $('.arrowimg').addClass('hidden');
  } else {
    alert('Pitches have been thrown');
  };
});

// ---- START OVER ----




// ---- STATUS ----

if (pitcher.pitches === 0){
  $('.outs').text(hitter.outsLeft);
  $('.score').text(hitter.score);
  $('#card-front').text(q1.title);
  $('#card-back').text(q1.question);
} else {
  alert('Pitches have been thrown');
};

// ---- STATUS ----


// ---- CLICK EVENTS ----  

$('#submitBtn').on('click', function () {
  
  pitcher.throwPitch();
  console.log(pitcher.pitches);
  $('.arrowimg').removeClass('hidden');

  if ( $('.outs').text() == 0  || pitcher.pitches == 10 ) {
    $('#endOfGame').addClass('endOfGame');
  };

  if ( pitcher.pitches > questionNumber) {
    alert('Go to next question');
  }

});


$('#nextQBtn').on('click', function () {

  $('.arrowimg').addClass('hidden');
  
  countQuestions();

  if ( $('.outs').text() == 0 || pitcher.pitches == 10 ) {
    $('#endOfGame').addClass('endOfGame');
  };

});


// ---- CLICK EVENTS ----



// ---- GAME CONCLUSION ----

let maxNumOfPitches = 10;
var outsOnBoard = $('.outs').text();

// ---- GAME CONCLUSION ----



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



// ---- CALL FOR ANOTHER ----

$('#nextQBtn').on('click', function () {
  if (pitcher.pitches === 2) {
    $('#card-front').text(q3.title);
    $('#card-back').text(q3.question);
    $('#answer-result').text('Results?!?!').parent().removeClass('green'); 
    $('#answer-result').text('Results?!?!').parent().removeClass('red'); 
  }
});
  
// ---- CALL FOR ANOTHER ---- 


// ---- THE THIRD PITCH ----

$('#submitBtn').on('click', function () {

  var answer = $('#answerText').val();

  if (pitcher.pitches === 3) {

    if (answer == q3.answer) {
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




